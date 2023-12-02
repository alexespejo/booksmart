<template>
 <div class="flex w-full">
  <SideBarDrawer />
  <div
   class="w-full h-screen flex items-center justify-center p-10 overflow-hidden"
  >
   <div
    class="h-5/6 w-full overflow-y-auto relative rounded-xl border-2 border-neutral bg-base-200"
   >
    <slot />
   </div>
  </div>
 </div>
</template>
