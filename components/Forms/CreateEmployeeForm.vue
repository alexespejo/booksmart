<template>
 <form @submit.prevent="" class="flex flex-col space-y-2 p-2">
  <label class="form-control w-full max-w-xs">
   <div class="label">
    <span class="label-text text-base">First Name</span>
   </div>
   <input
    type="text"
    placeholder="Type here"
    class="input input-sm input-bordered w-full max-w-xs"
   />
  </label>
  <label class="form-control w-full max-w-xs">
   <div class="label">
    <span class="label-text text-base">Last Name</span>
   </div>
   <input
    type="text"
    placeholder="Type here"
    class="input input-sm input-bordered w-full max-w-xs"
   />
  </label>
  <label class="form-control w-full max-w-xs">
   <div class="label">
    <span class="label-text text-base">Address 1</span>
   </div>
   <input
    type="text"
    placeholder="Type here"
    class="input input-sm input-bordered w-full max-w-xs"
   />
  </label>
  <label class="form-control w-full max-w-xs">
   <div class="label">
    <span class="label-text text-base">Address 2</span>
   </div>
   <input
    type="text"
    placeholder="Type here"
    class="input input-sm input-bordered w-full max-w-xs"
   />
  </label>
  <label class="form-control w-full max-w-xs">
   <div class="label">
    <span class="label-text text-base">Zip Code</span>
   </div>
   <input
    type="text"
    placeholder="Type here"
    class="input input-sm input-bordered w-full max-w-xs"
   />
  </label>
  <label class="form-control w-full max-w-xs">
   <div class="label">
    <span class="label-text text-base">Phone Number</span>
   </div>
   <input
    type="text"
    placeholder="(---) --- ---"
    class="input input-sm input-bordered w-full max-w-xs"
   />
  </label>
  <label class="form-control w-full max-w-xs">
   <div class="label">
    <span class="label-text">Position</span>
   </div>
   <select class="select select-bordered">
    <option disabled selected>Pick one</option>
   </select>
  </label>

  <input
   type="submit"
   @submit.prevent=""
   class="btn btn-primary max-w-fit ml-auto"
  />
 </form>
</template>
