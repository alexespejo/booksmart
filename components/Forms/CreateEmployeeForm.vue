<script setup>
function getCurrentDate() {
 const today = new Date();
 const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
 const day = today.getDate().toString().padStart(2, "0");
 const year = today.getFullYear().toString();

 return `${month}/${day}/${year}`;
}
const employeeInfo = reactive({
 Address1: "",
 Address2: "",
 City: "",
 DOB_DD: "",
 DOB_MM: "",
 DOB_YR: "",
 FirstName: "",
 HireDate: "",
 LastName: "",
 Phone: "",
 Position: "",
 State: "",
 Zip: "",
});

async function createEmployee() {
 const newEmployee = await $fetch("/api/createEmployees", {
  method: "post",
  body: {
   Address1: employeeInfo.Address1,
   Address2: employeeInfo.Address2,
   City: employeeInfo.City,
   DOB: `${employeeInfo.DOB_DD}/${employeeInfo.DOB_MM}/${employeeInfo.DOB_YR}`,
   FirstName: employeeInfo.FirstName,
   HireDate: getCurrentDate(),
   LastName: employeeInfo.LastName,
   Phone: employeeInfo.Phone,
   Position: employeeInfo.Position,
   State: employeeInfo.State,
   Zip: employeeInfo.Zip,
  },
 });
}
</script>
<template>
 <form @submit="createEmployee" class="flex flex-col space-y-2 p-2">
  <label class="form-control w-full max-w-xs">
   <div class="label">
    <span class="label-text text-base">First Name</span>
   </div>
   <input
    type="text"
    placeholder="Type here"
    class="input input-sm input-bordered w-full max-w-xs"
    v-model="employeeInfo.FirstName"
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
    v-model="employeeInfo.LastName"
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
    v-model="employeeInfo.Address1"
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
    v-model="employeeInfo.Address2"
   />
  </label>
  <label class="form-control w-full max-w-xs">
   <div class="label">
    <span class="label-text text-base">State</span>
   </div>
   <input
    type="text"
    placeholder="Type here"
    class="input input-sm input-bordered w-full max-w-xs"
    v-model="employeeInfo.State"
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
    v-model="employeeInfo.Zip"
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
    v-model="employeeInfo.Phone"
   />
  </label>
  <label class="form-control w-full max-w-xs">
   <div class="label">
    <span class="label-text text-base">Phone Number</span>
   </div>
   <div class="join">
    <input
     class="join-item btn w-1/4"
     type="text"
     placeholder="DD"
     v-model="employeeInfo.DOB_DD"
    />
    <input
     class="join-item btn w-1/4"
     type="text"
     placeholder="MM"
     v-model="employeeInfo.DOB_MM"
    />
    <input
     class="join-item btn w-1/4"
     type="text"
     placeholder="YR"
     v-model="employeeInfo.DOB_YR"
    />
   </div>
  </label>

  <label class="form-control w-full max-w-xs">
   <div class="label">
    <span class="label-text">Position</span>
   </div>
   <select
    required
    v-model="employeeInfo.Position"
    class="select select-bordered"
   >
    <option disabled selected>Pick one</option>
    <option value="Full Time Clerk">Full Time Clerk</option>
   </select>
  </label>

  <button class="mt-5 btn btn-accent max-w-fit">Create</button>
 </form>
</template>
