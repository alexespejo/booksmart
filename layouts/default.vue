<template>
 <div class="flex w-full">
  <SideBarDrawer />
  <div
   class="w-full h-screen flex items-center justify-center p-10 overflow-hidden"
  >
   <div class="bg-base-200 w-full h-full overflow-auto rounded-xl">
    <slot />
   </div>
  </div>
 </div>
</template>
