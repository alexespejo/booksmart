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
    <Icon name="mdi:trash" size="24px" />
   </a>
  </li>
  <li class="tooltip tooltip-left" data-tip="Edit Book">
   <a>
    <Icon name="mdi:pencil" size="24px" />
   </a>
  </li>
 </ul>
</template>
