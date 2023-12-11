<script setup>
const cartItemCount = useCartCounter();
</script>
<template>
 <div class="flex w-full">
  {{ demo }}
  <SideBarDrawer />
  <div
   class="w-full h-screen flex items-center justify-center p-11 overflow-hidden relative"
  >
   <div
    tabindex="0"
    role="button"
    class="btn btn-base-100 btn-circle absolute top-1 right-1"
   >
    <div class="indicator">
     <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
     >
      <path
       stroke-linecap="round"
       stroke-linejoin="round"
       stroke-width="2"
       d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
     </svg>
     <span class="badge badge-sm indicator-item">{{ cartItemCount }}</span>
    </div>
   </div>
   <div
    class="h-full w-full overflow-y-auto relative rounded-xl border-2 border-neutral bg-base-200"
   >
    <slot />
   </div>
  </div>
 </div>
</template>
