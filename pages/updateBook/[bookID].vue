<script setup>
const route = useRoute();

const existingAuthorToggle = ref(true);
const { pending, data: book } = await useFetch(
 `/api/getBook?bookID=${route.params.bookID}`
);
const { data: authors } = await useLazyFetch(`/api/getAuthors`);
const formInput = reactive({
 title: "",
 condition: "0",
 pubDate: "1000",
 edition: "1",
 publisher: "",
 sold: "",
 srp: "",
 cost: "",
 author: "",
 description: "",
});

// function conditionColorChanger() {
//  try {
//   switch (formInput.book.condition) {
//    case 1:
//     return "range-error";
//    case 2:
//     return "range-warning";
//    case 3:
//     return "range-info";
//    case 4:
//     return "range-success";
//    case 5:
//     return "range-accent";
//    default:
//     return "n/a";
//   }
//  } catch (e) {
//   console.log("error");
//  }
// }
// function getStatusMessage() {
//  try {
//   switch (formInput.book.condition) {
//    case 1:
//     return "Poor";
//    case 2:
//     return "Fair";
//    case 3:
//     return "Good";
//    case 4:
//     return "Excellent";
//    case 5:
//     return "Superb";
//    default:
//     return "n/a";
//   }
//  } catch (e) {
//   console.log("error");
//  }
// }
// const { data: author } = await useLazyFetch(
//  `/api/getAuthor?authorID=${book.author}`
// );

async function updateBookInformation() {
 await $fetch(`/api/putBook`, {
  method: "put",
  body: {
   bookID: route.params.bookID,
   title: formInput.title !== "" ? formInput.title : book.book.title,
   //  condition: formInput.condition ? parseInt(formInput.condition) / 25 : 0,
   //  pubDate: formInput.pubDate,
   //  edition: formInput.edition,
   //  publisher: formInput.publisher || "n/a",
   //  sold: false,
   //  srp: formInput.srp,
   //  cost: formInput.cost !== "" ? formInput.cost : book.book.cost,
   author: formInput.author !== "" ? formInput.author : book.book.author,
   description:
    formInput.description !== ""
     ? formInput.description
     : book.book.description,
  },
 });
}
</script>

<template>
 <NuxtLayout name="canvas">
  <div class="">
   <h1 class="text-4xl p-3">Update Book</h1>
   <form
    action=""
    class="flex flex-wrap w-full flex-col space-y-6 p-5 h-full justify-center items-center"
   >
    {{ formInput }}
    <label class="form-control w-full max-w-xs">
     <div class="label">
      <span class="label-text text-xl">Book Title</span>
     </div>
     <input
      type="text"
      class="input input-bordered w-full max-w-xs"
      v-model="formInput.title"
      :placeholder="book.book.title"
     />
    </label>

    <label class="form-control w-full max-w-xs">
     <div class="label">
      <span class="label-text text-xl">Set Price</span>
     </div>
     <div class="">
      <div class="label">
       <span class="label-text">Enter Price</span>
      </div>
      <input
       type="number"
       class="input input-bordered w-full max-w-xs join-item"
       v-model="formInput.cost"
       :placeholder="book.book.cost"
       min="0"
      />
     </div>
    </label>

    <label class="form-control w-full max-w-xs">
     <div class="label">
      <span class="label-text text-xl">Select or add a new author</span>
     </div>
     <div class="form-control mb-2">
      <label class="label cursor-pointer">
       <span class="label-text">Select An Existing Author</span>
       <input type="checkbox" class="toggle" v-model="existingAuthorToggle" />
      </label>
     </div>
     <select
      v-if="existingAuthorToggle"
      v-model="formInput.author"
      class="select select-bordered"
     >
      <option
       v-for="(author, index) in authors.authors"
       :key="index"
       :value="author.ID"
       :selected="author.ID == book.book.author"
      >
       {{ author.FirstName }} {{ author.LastName ? author.LastName : "" }}
      </option>
     </select>
     <div v-else class="join join-vertical">
      <input
       type="text"
       placeholder="Register Author's First"
       class="input input-bordered join-item"
      />
      <input
       type="text"
       placeholder="Register Author's Last Name"
       class="input input-bordered join-item"
      />
     </div>
    </label>
    <label class="form-control w-full max-w-xs">
     <div class="label">
      <span class="label-text text-xl">Description</span>
     </div>
     <textarea
      class="textarea textarea-bordered h-48"
      :placeholder="book.book.description"
      v-model="formInput.description"
     ></textarea>
    </label>
    <button
     @click.prevent="updateBookInformation"
     class="btn btn-accent btn-md max-w-fit ml-auto"
    >
     Update Book
    </button>
   </form>
  </div>
 </NuxtLayout>
</template>
