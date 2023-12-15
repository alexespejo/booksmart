<script setup>
const { pending, data: customers } = await useLazyFetch("/api/getCustomers");
const shoppingCart = useCart();
const orderTotal = useCartTotal();
const enterExistingCustomer = ref(false);
</script>

<template>
 <div>
  <DataLoading v-if="pending" />
  <div v-else>
   <label class="form-control w-full max-w-xs">
    <div class="form-control join-item">
     <label class="label cursor-pointer">
      <span class="label-text">Enter an Existing Customer?</span>
      <input type="checkbox" class="toggle" v-model="enterExistingCustomer" />
     </label>
    </div>
    <div v-if="!enterExistingCustomer" class="form-control"></div>
    <select
     v-else
     class="select select-bordered join-item"
     v-model="selectedCustomerID"
    >
     <option disabled selected>Pick one</option>
     <option
      v-for="(customer, index) in customers.customers"
      :key="index"
      :value="customer.ID"
     >
      {{ customer.FirstName }} {{ customer.LastName }} {{ customer.ID }}
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
  </div>
 </div>
</template>
