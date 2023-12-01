<script setup>
const props = defineProps(["bookID", "class"]);
</script>

<template>
 <button :class="props.class">Add to Cart</button>
</template>
