<script setup>
// Server Side
const flexCenter = reactive({
 display: "flex",
 justifyContent: "center",
});
// const { data: serverData } = useFetch("/api/animal");
</script>

<template>
 <div :style="flexCenter">
  hello
  <h1 class="heading-icon">
   <span class="icon-1-half">Book</span>
   <span class="icon-2-half">Smart</span>
  </h1>
 </div>
</template>
