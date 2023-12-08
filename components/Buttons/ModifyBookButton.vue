<script setup>
const props = defineProps(["bookID"]);

async function deleteBook() {
 await $fetch(`/api/deleteDocument`, {
  method: "delete",
  body: {
   empID: props.bookID,
   docType: "books",
  },
 });
}
</script>

<template>
 <div class="dropdown dropdown-left">
  <div tabindex="0" role="button" class="btn m-1">
   <ButtonsThreeDotButton />
  </div>
  <ul
   tabindex="0"
   class="dropdown-content z-[50] menu p-2 shadow bg-base-100 rounded-box w-52"
  >
   <button @click="deleteBook" class="btn btn-sm btn-error">Delete</button>
   <button @click="deleteBook" class="btn btn-sm">Edit</button>
  </ul>
 </div>
</template>
