<script setup>
const lName = ref("101");

async function doSomething() {
 const { pending, data: last } = await useFetch(
  `/api/getLastName?authorID=${lName.value}`
 );
}
function doAnotherThing() {
 alert(doSomething());
}
</script>
<template>
 <NuxtLayout>
  <main class="flex items-end justify-end">
   <button class="btn" @click="doAnotherThing">click</button>
  </main>
 </NuxtLayout>
</template>
