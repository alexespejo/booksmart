<script setup>
async function createBook() {
 const data = await $fetch("/api/createBook", {
  method: "post",
  body: {
   inTitle: "alex",
  },
 });
}
</script>
<template>
 <main class="">
  <button @click="createBook">Click</button>
 </main>
</template>
