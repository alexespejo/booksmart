<script setup>
const route = useRoute();
const { pending, data: orders } = await useLazyFetch("/api/getOrders");
</script>
<template>
 <NuxtLayout>
  <div
   class="sticky top-0 border-b-2 px-5 py-4 bg-base-100 z-50 flex items-center justify-between"
  >
   <h1 class="text-3xl">Orders</h1>
   <div class="join">
    <!-- <div class="dropdown join-item join-horizontal">
     <div tabindex="0" role="button" class="join-item btn btn-outline">
      Filter
     </div>
     <ul
      tabindex="0"
      class="dropdown-content border-2 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
     >
      <li><NuxtLink to="/viewOrders?query=onlyShipped">Shipped</NuxtLink></li>
      <li><NuxtLink to="/viewOrders?query=pickedUp">Picked Up</NuxtLink></li>
     </ul>
    </div> -->
    <button class="join-item btn btn-accent" onclick="my_modal_3.showModal()">
     Create a new Order
    </button>
   </div>

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
