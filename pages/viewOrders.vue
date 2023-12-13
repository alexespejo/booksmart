<script setup>
const { pending, data: orders } = await useLazyFetch("/api/getOrders");
</script>
<template>
 <NuxtLayout>
  <DataLoading v-if="pending" />
  <main v-else class="flex items-end justify-end">
   {{ orders.orders }}
  </main>
 </NuxtLayout>
</template>
