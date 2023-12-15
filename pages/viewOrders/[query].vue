<script setup>
const route = useRoute();
const { pending, data: orders } = await useLazyFetch("/api/getOrders");
</script>
<template>
 <NuxtLayout>
  <div
   class="sticky top-0 border-b-2 px-5 py-4 bg-base-100 z-50 flex items-center"
  >
   <div class="join">
    <div class="dropdown join-item">
     <div tabindex="0" role="button" class="btn m-1 btn-secondary">Filter</div>
     <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
     >
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
     </ul>
    </div>
   </div>
   <button class="btn btn-accent ml-auto" onclick="my_modal_3.showModal()">
    Create a new Order
   </button>
   <dialog id="my_modal_3" class="modal">
    <div class="modal-box h-5/6">
     <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
       ✕
      </button>
     </form>
     <h3 class="font-bold text-xl border-b-2">Create an Order</h3>
     <FormsCreateOrderForm />
    </div>
   </dialog>
  </div>
  <DataLoading v-if="pending" />
  <div v-else class="overflow-x-auto">
   <table class="table table-sm">
    <!-- head -->
    <thead>
     <tr>
      <th></th>
      <th>Name</th>
      <th>Order Date</th>
      <th>Shipped Date</th>
      <th>Payment Type</th>
      <th>Total</th>
      <th>Sales Person</th>
      <th></th>
     </tr>
    </thead>
    <tbody>
     <tr class="" v-for="(order, index) in orders.orders" :key="index">
      <th>{{ index + 1 }}</th>

      <td>{{ order.customer }}</td>
      <td>{{ order.orderDate }}</td>
      <td>{{ order.deliveryDate }}</td>
      <td>{{ order.payment }}</td>
      <td>{{ order.amount }}</td>
      <td>{{ order.salesperson }}</td>
      <td><span class="underline font-normal">Details</span></td>
     </tr>
    </tbody>
   </table>
  </div>
 </NuxtLayout>
</template>
