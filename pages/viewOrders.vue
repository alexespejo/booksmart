<script setup>
async function createAuthor() {
 const author = await $fetch("/api/createAuthor", {
  method: "post",
  body: {
   authorID: "420",
   description: "",
   firstName: "",
   lastName: "",
   yearBorn: "",
   yearDied: "",
  },
 });
}
</script>
<template>
 <main class="">
  <button @click="createAuthor">Click</button>
 </main>
</template>
