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
 <div class="dropdown dropdown-left">
  <div tabindex="0" role="button" class="btn m-1">
   <ButtonsThreeDotButton />
  </div>
  <form action="" class="flex flex-col">
   <ul
    tabindex="0"
    class="dropdown-content z-[50] menu p-2 shadow bg-base-100 rounded-box w-52"
   >
    <button @click="() => alert('hello')" class="btn btn-sm hover:btn-info">
     Edit
    </button>
    <button @click="deleteBook" class="btn hover:btn-error btn-sm">
     Delete
    </button>
   </ul>
  </form>
 </div>
</template>
