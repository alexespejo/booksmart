<script setup>
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
const props = defineProps(["bookID"]);
const { pending, data: book } = await useFetch(
 `/api/getBook?bookID=${props.bookID}`,
 {
  lazy: true,
 }
);
</script>

<template>
 <div class="">
  <div class="" v-if="!pending && book.book">
   <div class="flex flex-col">
    <div class="">
     <h1 class="text-xl w-fit">
      {{ book.book.title }}
      <span
       v-if="book.book.edition != 'N/A' && addNumberSuffix(book.book.edition)"
       class="italic text-sm font-thin"
       >{{ addNumberSuffix(book.book.edition) }} Edition</span
      >
     </h1>
     <h1 class="text-base font-normal">${{ book.book.cost }}</h1>
    </div>
   </div>
  </div>
 </div>
</template>
