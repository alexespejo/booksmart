<template>
 <div class="flex w-full">
  <SideBarDrawer />
  <div class="w-full flex items-center justify-center p-10">
   <div class="bg-base-200 w-full h-full rounded-xl p-5 overflow-y-auto">
    <slot />
   </div>
  </div>
 </div>
</template>
