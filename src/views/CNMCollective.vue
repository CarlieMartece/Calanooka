<template>
  <main>
    <header>
      <h1>The Carlie Nooka Martece Collective</h1>
      <p>(AKA When Autism Masking Got Out Of Hand)</p>
    </header>
    <CNMBook :spoilBook="5" />
  </main>
</template>

<script>
import CNMBook from "./CNMBook.vue";

export default {
  components: {
    CNMBook,
  },
};
</script>
