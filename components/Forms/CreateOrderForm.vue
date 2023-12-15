<script setup>
const { pending: customerLoad, data: customers } = await useLazyFetch(
 "/api/getCustomers"
);
const { pending: employeeLoading, data: employees } = await useLazyFetch(
 "/api/getEmployees"
);
const shoppingCart = useCart();
const orderTotal = useCartTotal();
const enterExistingCustomer = ref(false);

const orderInfo = reactive({
 selectedCustomerID: "Select a Customer",
});

async function processOrder() {
 await $fetch("/api/createOrder", {
  method: "post",
  body: {
   cost: orderTotal.value.toString(),
   books: shoppingCart.value,
  },
 });
}
</script>

<template>
 <div>
  <DataLoading v-if="customerLoad" />
  <div v-else class="flex flex-col space-y-5">
   <label class="form-control w-full max-w-lg space-y-2">
    <div class="form-control join-item">
     <label class="label cursor-pointer">
      <span class="label-text">Enter an Existing Customer?</span>
      <input type="checkbox" class="toggle" v-model="enterExistingCustomer" />
     </label>
    </div>
    <h1 class="text-xl border-b-2">Enter Shipping Info</h1>
    <div v-if="!enterExistingCustomer" class="w-full">
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
       <span class="label-text text-base">State</span>
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
       <span class="label-text text-base">Phone Number</span>
      </div>
      <div class="join">
       <input class="join-item btn w-1/4" type="text" placeholder="DD" />
       <input class="join-item btn w-1/4" type="text" placeholder="MM" />
       <input class="join-item btn w-1/4" type="text" placeholder="YR" />
      </div>
     </label>
    </div>
    <select
     v-else
     class="select select-bordered join-item"
     v-model="orderInfo.selectedCustomerID"
    >
     <option disabled>Select A Customer</option>
     <option
      v-for="(customer, index) in customers.customers"
      :key="index"
      :value="customer.ID"
     >
      {{ customer.FirstName }} {{ customer.LastName }} {{ customer.ID }}
     </option>
    </select>
    <div class="" v-if="employeeLoading"></div>
    <select v-else class="select select-bordered join-item">
     <option disabled selected>Employee</option>
     <option
      v-for="(employee, index) in employees.employees"
      :key="index"
      :value="employee.ID"
     >
      {{ employee.FirstName }} {{ employee.LastName }}
     </option>
    </select>
   </label>
   <div class="border-b-2 order-base-100 flex justify-between">
    <h1 class="text-2xl">Books</h1>
    <h1 class="text-2xl">Total: ${{ orderTotal }}</h1>
   </div>
   <div
    class="flex items-center space-x-3 pt-1"
    v-for="(book, index) in shoppingCart"
    :key="index"
   >
    <span>{{ index + 1 }}</span> <BookTab :bookID="book" />
   </div>
   <button @click="processOrder" class="btn btn-accent max-w-fit">
    Process Order
   </button>
  </div>
 </div>
</template>
