<script setup>
async function updateBooks() {
 await $fetch("/api/addBookToAuthor", {
  method: "post",
  body: {
   authorID: "107",
   bookID: "DICKENSON8596",
  },
 });
}
</script>
<template>
 <NuxtLayout>
  <main class="flex items-end justify-end">
   <button class="btn" @click="updateBooks">click</button>
  </main>
 </NuxtLayout>
</template>
