<script setup>
const props = defineProps(["empID"]);

async function deleteBook() {
 await $fetch(`/api/deleteDocument`, {
  method: "delete",
  body: {
   empID: props.empID,
   docType: "employees",
  },
 });
 navigateTo("/viewEmployees");
}
</script>

<template>
 <ul class="menu bg-base-200 rounded-box ml-auto">
  <li class="tooltip tooltip-left" data-tip="Remove Employee">
   <button>
    <Icon name="mdi:trash" size="24px" />
   </button>
  </li>
  <li class="tooltip tooltip-left" data-tip="Edit Employee">
   <a>
    <Icon name="mdi:pencil" size="24px" />
   </a>
  </li>
 </ul>
</template>
