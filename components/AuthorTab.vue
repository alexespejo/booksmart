<script setup>
const props = defineProps(["authorID"]);
// const { pending, data: authors } = await useLazyFetch("/api/getAuthors");
</script>

<template>
 <h1 class="italic font-light text-sm">By: {{ props.authorID }}</h1>
</template>
