<script setup>
const { pending, data: data } = await useFetch("/api/getEmployees", {
 lazy: true,
});


</script>

<template>
 <main>
  <ul>
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
      <p>
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
        <td>{{ employee.Address1 }} {{ employee.City }}, {{ employee.State }}, {{ employee.Zip }}</td>
        <td>{{ employee.Address2 }}</td>
        <td>{{ employee.Phone }}</td>
        <td>{{ employee.DOB }}</td>
        </tr>
        <!-- row 2 -->
        </tbody>
        </table>
        </div>
      </p>
     </div>
    </div>
   </li>
  </ul>
 </main>
</template>
