<script setup>
const props = defineProps(["bookID", "class", "bookTitle"]);
const cartCount = useCartCounter();
function addToCart() {
 ++cartCount.value;
}
const demo = useGuestDemo();
</script>

<template>
 <div>
  <!-- <button :class="props.class" onclick="my_modal_2.showModal()">
   Add to Cart
  </button> -->
  <!-- You can open the modal using ID.showModal() method -->
  <label :for="props.bookID" :class="props.class">Add to Cart</label>

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
