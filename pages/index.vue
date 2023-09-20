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
  <h1>BookSmart</h1>
 </div>
</template>
