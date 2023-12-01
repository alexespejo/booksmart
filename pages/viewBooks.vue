<script setup>
function getStatusColor(statusNum) {
 switch (statusNum) {
  case 1:
   return "text-red-300";
  case 2:
   return "text-orange-300";
  case 3:
   return "text-yellow-300";
  case 4:
   return "text-blue-300";
  case 5:
   return "text-green-300";
 }
}
function getStatusMessage(statusNum) {
 switch (statusNum) {
  case 1:
   return "Poor";
  case 2:
   return "Fair";
  case 3:
   return "Good";
  case 4:
   return "Eggcellent";
  case 5:
   return "Superb";
  default:
   return "n/a";
 }
}
function addNumberSuffix(number) {
 if (typeof number !== "number" || isNaN(number)) {
  // Check if the input is a valid number
  return "Invalid input";
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

const { pending, data: books } = await useFetch("/api/getBooks", {
 lazy: true,
});
</script>

<template>
 <main class="overflow-y-auto h-full">
  <div class="flex justify-center items-center" v-if="pending">
   <h1 class="text-4xl">Loading...</h1>
  </div>
  <ul class="" v-else>
   <li
    v-for="(book, index) in books.books"
    :key="index"
    class="flex justify-between border-b-2 p-5 h-32"
   >
    <div class="flex flex-col">
     <div class="">
      <h1 class="text-2xl w-fit">
       {{ book.content.title }}
       <span
        v-if="book.content.edition != 'N/A'"
        class="italic text-sm font-thin"
        >{{ addNumberSuffix(book.content.edition) }} Edition</span
       >
      </h1>
      <h1 class="text-base font-normal">${{ book.content.cost }}</h1>
     </div>
     <div class="">
      <AuthorTab :authorID="book.content.author" />
     </div>
    </div>

    <div class="w-1/5 flex flex-col text-base font-light italic">
     <h1>
      Condition:
      <span :class="getStatusColor(book.content.condition)">{{
       getStatusMessage(book.content.condition)
      }}</span>
     </h1>
     <h1>
      <span v-if="book.content.sold"> In stock </span>
      <span v-else> Sold </span>
     </h1>
     <AddToCartBtn
      :bookID="book.key"
      class="btn btn-md btn-neutral mt-auto border-2 border-base-200"
     />
    </div>
   </li>
  </ul>
 </main>
</template>
