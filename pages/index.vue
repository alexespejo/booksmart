<script setup>
import { usePasscode } from "~/composables/states";

const password = usePasscode();
const passwordQuery = ref("");
const displayErrorMessage = ref(false);
const guestDemo = useGuestDemo();
watch(passwordQuery, async (x) => {
 if (x.length >= 5) {
  passwordQuery.value = passwordQuery.value.substring(0, 5);
 }
 if (passwordQuery.value == password.value) {
  guestDemo.value = false;
  displayErrorMessage.value = false;
 } else {
  displayErrorMessage.value = true;
 }
});
</script>

<template>
 <NuxtLayout name="landing-page">
  <div class="h-1/2 w-80 flex flex-col space-y-4 items-center">
   <h1 class="text-5xl">BookSmart</h1>
   <label class="form-control w-full max-w-xs">
    <div class="label">
     <span class="label-text">Enter 5-count PIN</span>
    </div>
    <input
     type="password"
     placeholder="PIN"
     class="input input-lg input-bordered w-full max-w-xs"
     v-model="passwordQuery"
    />
   </label>
   <div
    class="tooltip ml-auto tooltip-bottom"
    :data-tip="
     passwordQuery.length !== 5 ? 'please complete the pin' : '📚📚📚'
    "
   >
    <NuxtLink
     class="btn btn-primary max-w-fit"
     to="/viewBooks/default"
     v-if="password == passwordQuery"
    >
     Start
    </NuxtLink>

    <NuxtLink
     v-else
     to="/viewBooks/default"
     class="btn btn-info max-w-fit self-center"
     >Guest View</NuxtLink
    >
   </div>
  </div>
 </NuxtLayout>
</template>
