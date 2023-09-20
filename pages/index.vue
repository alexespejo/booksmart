<script setup>
// Server Side
const { data: serverData } = useFetch("/api/animal");
</script>

<template>
 <div>
  <h2>Server</h2>
  <pre>{{ serverData }}</pre>
 </div>
</template>
