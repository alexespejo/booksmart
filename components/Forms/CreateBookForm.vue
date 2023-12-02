<script setup>
const conditionRangeInput = ref("0");
function conditionColorChanger() {
 switch (conditionRangeInput.value) {
  case "25":
   return "range-error";
  case "50":
   return "range-warning";
  case "75":
   return "range-info";
  case "100":
   return "range-success";
  case "125":
   return "range-accent";
  default:
   return "n/a";
 }
}
function getStatusMessage() {
 switch (conditionRangeInput.value) {
  case "25":
   return "Poor";
  case "50":
   return "Fair";
  case "75":
   return "Good";
  case "100":
   return "Eggcellent";
  case "125":
   return "Superb";
  default:
   return "n/a";
 }
}

const { pending, data: authors } = await useLazyFetch(`/api/getAuthors`);
const existingAuthorToggle = ref(false);
</script>

<template>
 <form action="" class="flex flex-col space-y-6 p-2">
  <label class="form-control w-full max-w-xs">
   <div class="label">
    <span class="label-text text-xl">Book Title</span>
   </div>
   <input
    type="text"
    placeholder="Type here"
    class="input input-bordered w-full max-w-xs"
   />
  </label>

  <label class="form-control w-full max-w-xs">
   <div class="label">
    <span class="label-text text-xl">Condition: {{ getStatusMessage() }}</span>
   </div>
   <input
    type="range"
    min="0"
    max="125"
    :class="`range ` + conditionColorChanger()"
    step="25"
    v-model="conditionRangeInput"
   />
   <div class="w-full flex justify-between text-xs px-2">
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
   </div>
  </label>
  <label class="form-control w-full max-w-xs">
   <div class="label">
    <span class="label-text text-xl">Select or add a new author</span>
   </div>
   <div class="form-control mb-2">
    <label class="label cursor-pointer">
     <span class="label-text">Select An Existing Author</span>
     <input type="checkbox" class="toggle" v-model="existingAuthorToggle" />
    </label>
   </div>
   <select v-if="existingAuthorToggle" class="select select-bordered">
    <option selected>Authors</option>
    <option v-for="(author, index) in authors.authors" :key="index">
     {{ author.FirstName }} {{ author.LastName }}
    </option>
   </select>
   <input
    v-else
    type="text"
    placeholder="Register a new author"
    class="input input-bordered w-full max-w-xs"
   />
  </label>

  <label class="form-control">
   <div class="label">
    <span class="label-text text-xl">Description</span>
   </div>
   <textarea
    class="textarea textarea-bordered h-48"
    placeholder="Type Here"
   ></textarea>
  </label>
 </form>
</template>
