<script setup>
const formInput = reactive({
 inTitle: "",
 inCondition: "0",
 inPubDate: "1000",
 inEdition: "1",
 inPublisher: "",
 inSold: "",
 inSrp: "",
 inCost: "",
 inAuthor: "",
});
function conditionColorChanger() {
 switch (formInput.inCondition) {
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
 switch (formInput.inCondition) {
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

function generateUniqueId(name) {
 // Convert the name to uppercase
 const uppercaseName = name.toUpperCase();

 // Generate a random 4-digit number
 const randomNumbers = Math.floor(1000 + Math.random() * 9000);

 // Combine the uppercase name with the random numbers
 const uniqueId = uppercaseName + randomNumbers;

 return uniqueId;
}

function generateRandomThreeDigitNumber() {
 return Math.floor(Math.random() * 900) + 100;
}

const { pending, data: authors } = await useLazyFetch(`/api/getAuthors`);

const authorFname = ref("");
const authorLname = ref("");
async function createBook() {
 let bookID = generateUniqueId(authorLname.value);
 let authorID = "";
 if (!existingAuthorToggle.value) {
  authorID = generateRandomThreeDigitNumber();
  const newAuthor = await $fetch("/api/createAuthor", {
   method: "post",
   body: {
    authorID: authorID.toString(),
    firstName: authorFname.value,
    lastName: authorLname.value,
    books: [bookID],
   },
  });
 }
 const data = await $fetch("/api/createBook", {
  method: "post",
  body: {
   book_id: bookID,
   inTitle: formInput.inTitle,
   inCondition: formInput.inCondition,
   inPubDate: formInput.inPubDate,
   inEdition: formInput.inEdition,
   inPublisher: formInput.inPublisher,
   inSrp: formInput.inSrp,
   inCost: formInput.inCost,
   inAuthor: existingAuthorToggle.value ? formInput.inAuthor : authorID,
  },
 });
}
const existingAuthorToggle = ref(false);
</script>

<template>
 <form action="" class="flex flex-col space-y-6 p-2 pb-5 w-full">
  {{ existingAuthorToggle }}
  <label class="form-control w-full max-w-xs">
   <div class="label">
    <span class="label-text text-xl">Book Title</span>
   </div>
   <input
    type="text"
    placeholder="Type here"
    class="input input-bordered w-full max-w-xs"
    v-model="formInput.inTitle"
   />
  </label>
  <label class="form-control w-full max-w-xs">
   <div class="label">
    <span class="label-text">Year Published</span>
   </div>
   <input
    type="number"
    placeholder="Enter Year"
    class="input input-sm input-bordered w-full max-w-xs"
    min="1000"
    v-model="formInput.inPubDate"
   />
   <div class="label">
    <span class="label-text">Book edition</span>
   </div>
   <input
    type="number"
    placeholder="Enter Number"
    class="input input-sm input-bordered w-full max-w-xs"
    min="1"
    v-model="formInput.inEdition"
   />
  </label>
  <label class="form-control w-full max-w-xs">
   <div class="label">
    <span class="label-text text-xl">Set Price</span>
   </div>
   <div class="join">
    <div class="">
     <div class="label">
      <span class="label-text">Enter Price</span>
     </div>
     <input
      type="number"
      placeholder="Enter Price "
      class="input input-bordered w-full max-w-xs join-item"
      min="0"
      v-model="formInput.inCost"
     />
    </div>
    <div class="">
     <div class="label">
      <span class="label-text">Enter SRP</span>
     </div>
     <input
      type="number"
      placeholder="Enter SRP "
      class="input input-bordered w-full max-w-xs join-item"
      min="0"
      v-model="formInput.inSrp"
     />
    </div>
   </div>
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
    v-model="formInput.inCondition"
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
  <label class="form-control w-full max-w-x">
   <div class="label">
    <span class="label-text text-xl">Select or add a new author</span>
   </div>
   <div class="form-control mb-2">
    <label class="label cursor-pointer">
     <span class="label-text">Select An Existing Author</span>
     <input type="checkbox" class="toggle" v-model="existingAuthorToggle" />
    </label>
   </div>
   <select
    v-if="existingAuthorToggle"
    class="select select-bordered"
    v-model="formInput.inAuthor"
   >
    <option selected>Authors</option>
    <option
     v-for="(author, index) in authors.authors"
     :key="index"
     :value="author.ID"
    >
     {{ author.FirstName }} {{ author.LastName ? author.LastName : "" }}
    </option>
   </select>
   <div v-else class="join w-full">
    <input
     type="text"
     placeholder="Register a new author"
     class="input input-bordered w-1/2 join-item"
     v-model="authorFname"
    />
    <input
     type="text"
     placeholder="Register a new author"
     class="input input-bordered w-1/2 join-item"
     v-model="authorLname"
    />
   </div>
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
  <button @click="createBook" class="btn btn-accent btn-md max-w-fit ml-auto">
   Create Book
  </button>
 </form>
</template>
