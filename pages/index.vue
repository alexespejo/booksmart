<script setup>
// Server Side
const flexCenter = reactive({
 display: "flex",
 justifyContent: "center",
});

function contactForm() {
 $fetch("/api/submit", { method: "post", body: { test: "hello" } });
}
</script>

<template>
 <div class=""></div>
</template>
