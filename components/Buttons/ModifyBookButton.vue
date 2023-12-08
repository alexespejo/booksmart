<script setup>
const props = defineProps(["bookID", "title", "index"]);

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
  <!-- The button to open modal -->
  <label :for="`my_modal_${props.index}`" class="btn btn-sm">
   <ButtonsThreeDotButton />
  </label>

  <!-- Put this part before </body> tag -->
  <input type="checkbox" :id="`my_modal_${props.index}`" class="modal-toggle" />
  <div class="modal z-[100]" role="dialog">
   <div class="modal-box">
    <h3 class="font-bold text-lg">
     Edit <span class="italic font-light">{{ props.title }}</span>
    </h3>
    <p class="py-4">
     <button class="btn btn-info">Update Book</button>
     <button @click="deleteBook" class="btn btn-error">Delete Book</button>
    </p>
    <div class="modal-action">
     <label :for="`my_modal_${props.index}`" class="btn">Close!</label>
    </div>
   </div>
  </div>
 </div>
</template>
