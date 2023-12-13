<script setup>
const { pending, data: customers } = await useLazyFetch("/api/getCustomers");
</script>

<template>
 <NuxtLayout>
  <div
   class="sticky top-0 border-b-2 px-5 py-4 bg-base-100 z-50 flex items-center"
  >
   <button class="btn btn-accent ml-auto" onclick="my_modal_3.showModal()">
    Add New Customer
   </button>
   <dialog id="my_modal_3" class="modal">
    <div class="modal-box h-5/6">
     <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
       ✕
      </button>
     </form>
     <h3 class="font-bold text-xl border-b-2">Add a New Customer</h3>
     <!-- <FormsCreateEmployeeForm /> -->
    </div>
   </dialog>
  </div>
  <DataLoading v-if="pending" />
  <ul v-else>
   <li v-for="(customer, index) in customers.customers" :key="index">
    <div class="collapse collapse-arrow bg-base-200 rounded-none border-b-2">
     <input type="radio" name="my-accordion-2" />
     <div class="collapse-title text-xl font-medium">
      <div class="">
       <h1 class="text-3xl">
        {{ customer.FirstName }} {{ customer.LastName }}
       </h1>
       <h2 class="italic text-base">{{ customer.Position }}</h2>
      </div>
     </div>
     <div class="collapse-content flex">
      <div class="overflow-x-auto overflow-y-hidden">
       <table class="table">
        <!-- head -->
        <thead>
         <tr>
          <th>Address</th>
          <th>Address 2</th>
          <th>Phone</th>
         </tr>
        </thead>
        <tbody>
         <!-- row 1 -->
         <tr>
          <td>
           {{ customer.Address1 }} {{ customer.City }}, {{ customer.State }},
           {{ customer.Zip }}
          </td>
          <td>{{ customer.Address2 }}</td>
          <td>{{ customer.Phone }}</td>
         </tr>
         <!-- row 2 -->
        </tbody>
       </table>
      </div>
      <div class="ml-auto">
       <!-- <ButtonsDeleteEmployeeButton :empID="employee.ID" /> -->
      </div>
     </div>
    </div>
   </li>
  </ul>
 </NuxtLayout>
</template>
