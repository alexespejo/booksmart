<script setup>
import { get } from "firebase/database";

// Server Side
const flexCenter = reactive({
 display: "flex",
 justifyContent: "center",
});

// function contactForm() {
//  $fetch("/api/submit", { method: "post", body: { test: "hello" } });
// }
const test = ref("foo");

// const {
//  status,
//  pending,
//  refresh,
//  data: books,
// } = await useFetch("/api/getBooks", {
//  lazy: true,
//  watch: [test],
//  params: {
//   a: test.value,
//  },
// });

const fun = async () => {
 const test = await $fetch("/api/getBooks", {
  body: {
   a: "foo",
  },
 });
};
</script>

<template>
 <div class="">
  <!-- {{ fun() }} -->
  <button @click="fun()" class="btn">Click</button>
 </div>
</template>
