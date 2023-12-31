<script setup>
import { useCartCounter, useSearchBarInput } from "~/composables/states";

function getStatusColor(statusNum) {
 if (statusNum % 25 == 0) {
  statusNum /= 25;
 }
 switch (statusNum) {
  case 1:
   return "text-error";
  case 2:
   return "text-warning";
  case 3:
   return "text-info";
  case 4:
   return "text-success";
  case 5:
   return "text-accent";
 }
}
function getStatusMessage(statusNum) {
 if (statusNum % 25 == 0) {
  statusNum /= 25;
 }
 switch (statusNum) {
  case 1:
   return "Poor";
  case 2:
   return "Fair";
  case 3:
   return "Good";
  case 4:
   return "Excellent";
  case 5:
   return "Superb";
  default:
   return "n/a";
 }
}
function addNumberSuffix(number) {
 if (typeof number !== "number" || isNaN(number)) {
  // Check if the input is a valid number
  return false;
 }

 if (number % 100 >= 11 && number % 100 <= 13) {
  // Special case for 11th, 12th, and 13th
  return number + "th";
 }

 switch (number % 10) {
  case 1:
   return number + "st";
  case 2:
   return number + "nd";
  case 3:
   return number + "rd";
  default:
   return number + "th";
 }
}

const route = useRoute();
const {
 pending,
 refresh,
 data: books,
} = await useFetch(`/api/getBooks?req=${route.params.req}`, {
 lazy: true,
});

const searchBookQuery = useSearchBarInput("");
const dataDisplayCache = ref(books);

const computedList = computed(() => {
 const data = dataDisplayCache.value.books;
 const filteredList = data.filter((item) =>
  item.content.title.toLowerCase().includes(searchBookQuery.value.toLowerCase())
 );
 console.log(filteredList);
 return filteredList;
});

const demo = useGuestDemo();
</script>

<template>
 <NuxtLayout>
  <main>
   <div
    class="sticky top-0 border-b-2 px-5 py-4 bg-base-100 flex items-center z-50"
   >
    <div class="join">
     <div>
      <div>
       <input
        class="input input-bordered join-item"
        v-model="searchBookQuery"
        placeholder="Search By Title"
       />
      </div>
     </div>
     <select class="select select-bordered join-item" disabled>
      <option selected>By Title</option>
      <option>By Author</option>
      <option>Action</option>
     </select>
    </div>

    <div v-if="!demo" class="dropdown dropdown-end">
     <div tabindex="0" role="button" class="btn m-1 btn-outline">
      Filters <Icon name="mdi:sort" />
     </div>
     <ul
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border-2"
     >
      <li>
       <NuxtLink :disabled="demo" to="/viewBooks/default">Show All</NuxtLink>
      </li>
      <li>
       <NuxtLink :disabled="demo" to="/viewBooks/showStock"
        >Show Only Available</NuxtLink
       >
      </li>
      <li>
       <NuxtLink :disabled="demo" to="/viewBooks/showSold"
        >Show Only Unavailable</NuxtLink
       >
      </li>
      <li>
       <NuxtLink :disabled="demo" to="/viewBooks/ascCondition">
        Sort by Condition</NuxtLink
       >
      </li>
     </ul>
    </div>
    <button class="btn btn-accent ml-auto" onclick="createBook.showModal()">
     Add New Book
    </button>
    <dialog id="createBook" class="modal">
     <div class="modal-box h-full overflow-hidden">
      <form method="dialog">
       <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
       </button>
      </form>
      <h3 class="font-bold text-xl border-b-2 mb-2">Add a New Book</h3>
      <div class="h-full overflow-y-auto">
       <FormsCreateBookForm />
      </div>
     </div>
    </dialog>
   </div>
   <div v-if="pending">
    <DataLoading />
   </div>
   <ul class="" v-else>
    <div class="p-5 text-3xl" v-if="computedList.length === 0">No Results</div>
    <li
     v-for="(book, index) in computedList"
     :key="index"
     class="flex border-b-2 p-5 h-min max-h-min"
    >
     <div class="flex flex-col">
      <div class="">
       <h1 class="text-2xl w-fit">
        {{ book.content.title }}
        <span
         v-if="
          book.content.edition != 'N/A' && addNumberSuffix(book.content.edition)
         "
         class="italic text-sm font-thin"
         >{{ addNumberSuffix(book.content.edition) }} Edition</span
        >
       </h1>
       <div class="flex items-center space-x-2">
        <h1 class="text-xl font-normal">${{ book.content.cost }}</h1>
        <h1 class="text-base font-normal italic">
         SRP: ${{ book.content.srp }}
        </h1>
       </div>
      </div>
      <div class="">
       <AuthorTab :authorID="book.content.author" />
      </div>
     </div>

     <div class="w-64 flex items-center text-base ml-auto max-w-lg">
      <div class="flex flex-col space-y-1">
       <h1 class="font-light italic">
        Condition:
        <span class="font-bold not-italic">{{
         getStatusMessage(book.content.condition)
        }}</span>
       </h1>
       <h1 class="font-light italic">
        <span v-if="!book.content.sold"> In stock </span>
        <span v-else> Sold </span>
       </h1>
       <AddToCartBtn
        v-if="!book.content.sold"
        :bookID="book.key"
        :bookTitle="book.content.title"
        :bookCost="book.content.cost"
        class="btn btn-md btn-neutral mt-auto border-2 border-base-200 max-w-fit"
       />
      </div>
      <ButtonsModifyBookButton
       :bookID="book.key"
       :title="book.content.title"
       :index="index"
      />
     </div>
    </li>
   </ul>
  </main>
 </NuxtLayout>
</template>
