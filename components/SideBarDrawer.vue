<template>
 <div class="drawer drawer-open w-fit bg-base-200">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-side min-fullrelative">
   <label
    for="my-drawer-2"
    aria-label="close sidebar"
    class="text-2xl flex items-center justify-center py-4 border-b-2 border-base-300"
    >BookSmart</label
   >
   <ul class="menu p-4 text-base-content w-72">
    <!-- Sidebar content here -->
    <li><a>Sidebar Item 1</a></li>
    <li><a>Sidebar Item 2</a></li>
   </ul>
   <div
    class="p-2 absolute bottom-0 left-0 right-0 m-auto border-t-2 border-base-300"
   >
    <button class="button w-full btn">Logout</button>
   </div>
  </div>
 </div>
</template>
