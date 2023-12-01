<script setup>
const props = defineProps(["label"]);
</script>

<template>
 <div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-xl font-medium">
   {{ props.label }}
  </div>
  <div class="collapse-content">
   <p><slot /></p>
  </div>
 </div>
</template>
