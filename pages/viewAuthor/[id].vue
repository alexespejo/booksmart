<script setup>
const route = useRoute();

const { pending, data: author } = await useFetch(
 `/api/getAuthor?authorID=${route.params.id}`,
 {
  lazy: true,
 }
);
</script>

<template>
 <NuxtLayout>
  <div class="" v-if="pending">Loading...</div>
  <div class="p-5" v-else>
   <h1 class="text-4xl">
    {{ author.author.FirstName }} {{ author.author.LastName }}
   </h1>
   <h2 class="font-light italic self-center text-2xl">
    {{ author.author.YearBorn }} - {{ author.author.YearDied }}
   </h2>
   <div class="divider"></div>
   <h2 class="text-2xl border-b-2 mt-auto">Available Books</h2>
   <div class="" v-if="book !== 'no good'">
    <ul>
     <li v-for="(book, i) in author.author.books" :key="i" class="py-2">
      <BookTab :bookID="book" />
     </li>
    </ul>
   </div>
  </div>
 </NuxtLayout>
</template>
