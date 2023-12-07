<script setup>
const formInput = reactive({
 inTitle: "",
 inCondition: "",
 inPubDate: "",
 inEdition: "",
 inPublisher: "",
 inSold: "",
 inSrp: "",
 inCost: "",
 inAuthor: "",
});

async function createBook() {
 const data = await $fetch("/api/createBook", {
  method: "post",
  body: {
   inTitle: formInput.inTitle,
   inCondition: formInput.inCondition,
   inPubDate: formInput.inPubDate,
   inEdition: formInput.inEdition,
   inPublisher: formInput.inPublisher,
   inSold: formInput.inSold,
   inSrp: formInput.inSrp,
   inCost: formInput.inCost,
   inAuthor: formInput.inAuthor,
  },
 });
}
</script>
<template>
 <main class="">
  <button @click="createBook">Click</button>
 </main>
</template>
