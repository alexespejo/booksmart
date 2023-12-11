<script setup>
const cartItemCount = useCartCounter();
</script>
<template>
 <div class="flex w-full">
  <SideBarDrawer />
  <div
   class="w-full h-screen flex items-center justify-center overflow-hidden relative"
  >
   <div
    class="h-full w-full overflow-y-auto relative rborder-2 border-neutral bg-base-200"
   >
    <slot />
   </div>
  </div>
 </div>
</template>
