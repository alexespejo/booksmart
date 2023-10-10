<script setup>
// Server Side
const flexCenter = reactive({
 display: "flex",
 justifyContent: "center",
});

function contactForm() {
 $fetch("/api/submit", { method: "post", body: { test: "hello" } });
}
// const { data: serverData } = useFetch("/api/animal");
</script>

<template>
 <div :style="flexCenter">
  <h1 class="heading-icon">
   <span class="icon-1-half">Book</span>
   <span class="icon-2-half bg-blue">Smart</span>
  </h1>

  <button @click="contactForm">Click</button>
 </div>
</template>
