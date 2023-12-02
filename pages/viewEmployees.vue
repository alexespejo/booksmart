<script setup>
const { pending, data: data } = await useFetch("/api/getEmployees", {
 lazy: true,
});
const demo = useGuestDemo();
</script>

<template>
 <NuxtLayout>
  <main class="">
   <div class="sticky top-0 border-b-2 px-5 py-4 bg-base-100 flex items-center">
    <button
     :disabled="demo"
     class="btn btn-accent ml-auto"
     onclick="my_modal_3.showModal()"
    >
     Add New Employee
    </button>
    <dialog id="my_modal_3" class="modal">
     <div class="modal-box h-5/6">
      <form method="dialog">
       <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
       </button>
      </form>
      <h3 class="font-bold text-xl border-b-2">Add a New Employee</h3>
      <FormsCreateEmployeeForm />
     </div>
    </dialog>
   </div>
   <div class="flex justify-center items-center h-full w-full" v-if="pending">
    <span class="loading loading-bars loading-xs"></span>
    <span class="loading loading-bars loading-sm"></span>
    <span class="loading loading-bars loading-md"></span>
    <span class="loading loading-bars loading-lg"></span>
   </div>
   <ul v-else>
    <li v-for="(employee, index) in data.employees" :key="index">
     <div class="collapse collapse-arrow bg-base-200 rounded-none border-b-2">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">
       <div class="">
        <h1 class="text-3xl">
         {{ employee.FirstName }} {{ employee.LastName }}
        </h1>
        <h2 class="italic text-base">{{ employee.Position }}</h2>
       </div>
      </div>
      <div class="collapse-content">
       <div class="overflow-x-auto">
        <table class="table">
         <!-- head -->
         <thead>
          <tr>
           <th>Hire Date</th>
           <th>Address</th>
           <th>Address 2</th>
           <th>Phone</th>
           <th>Birthday</th>
          </tr>
         </thead>
         <tbody>
          <!-- row 1 -->
          <tr>
           <th>{{ employee.HireDate }}</th>
           <td>
            {{ employee.Address1 }} {{ employee.City }}, {{ employee.State }},
            {{ employee.Zip }}
           </td>
           <td>{{ employee.Address2 }}</td>
           <td>{{ employee.Phone }}</td>
           <td>{{ employee.DOB }}</td>
          </tr>
          <!-- row 2 -->
         </tbody>
        </table>
       </div>
      </div>
     </div>
    </li>
   </ul>
  </main>
 </NuxtLayout>
</template>
