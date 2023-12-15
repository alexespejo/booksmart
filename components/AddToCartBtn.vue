<script setup>
import { useCartTotal } from "~/composables/states";

const props = defineProps(["bookID", "class", "bookTitle", "bookCost"]);
const totalCount = useCartTotal();
const cartCount = useCartCounter();
const shoppingCart = useCart();
function addToCart() {
 if (!shoppingCart.value.includes(props.bookID)) {
  shoppingCart.value.push(props.bookID);
  totalCount.value += parseInt(props.bookCost);
  ++cartCount.value;
 }
}
const demo = useGuestDemo();
</script>

<template>
 <div>
  <!-- <button :class="props.class" onclick="my_modal_2.showModal()">
   Add to Cart
  </button> -->
  <!-- You can open the modal using ID.showModal() method -->
  <label :for="props.bookID" :class="props.class"
   >Add to Cart <Icon name="mdi:cart"
  /></label>

  <!-- Put this part before </body> tag -->
  <input
   :disabled="demo"
   type="checkbox"
   :id="props.bookID"
   class="modal-toggle"
  />
  <div class="modal" role="dialog">
   <div class="modal-box">
    <h3 class="font-bold text-lg">
     Would you like to add
     <span class="italic font-bold">{{ props.bookTitle }}</span> to your cart?
    </h3>

    <div class="modal-action">
     <label
      :for="props.bookID"
      class="btn btn-accent mr-auto"
      @click="addToCart"
      >Yes!</label
     >
     <label :for="props.bookID" class="btn btn-error">Cancel</label>
    </div>
   </div>
  </div>
 </div>
</template>
