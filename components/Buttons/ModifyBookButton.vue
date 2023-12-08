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
 <ul class="menu bg-base-200 rounded-box ml-auto">
  <li class="tooltip tooltip-left" data-tip="Remove Book">
   <a>
    <label :for="`my_modal_${props.index}`">
     <Icon name="mdi:trash" size="24px" />
    </label>
   </a>
  </li>
  <li class="tooltip tooltip-left" data-tip="Edit Book">
   <a>
    <Icon name="mdi:pencil" size="24px" />
   </a>
  </li>
  <!-- The button to open modal -->

  <!-- Put this part before </body> tag -->
  <input type="checkbox" :id="`my_modal_${props.index}`" class="modal-toggle" />
  <div class="modal" role="dialog">
   <div class="modal-box">
    <h3 class="font-bold text-lg">Woah!</h3>
    <p class="py-4">
     Are you sure you want to remove
     <span class="font-bold font-lg italic text-accent">{{ props.title }}</span
     >? This change cannot be undone
    </p>
    <div class="modal-action">
     <button class="btn btn-error mr-auto">Yes Delete</button>
     <label :for="`my_modal_${props.index}`" class="btn">Cancel!</label>
    </div>
   </div>
  </div>
 </ul>
</template>
