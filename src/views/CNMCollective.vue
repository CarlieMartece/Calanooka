<template>
  <main>
    <header>
      <h1>The Carlie Nooka Martece Collective</h1>
      <p>(AKA When Autism Masking Got Out Of Hand)</p>
    </header>
    <ul id="cnmc">
      <li v-for="alter in alters" :key="alter.id" :id="alter.nameId">
        <h2 v-if="alter.arcana === 'Major'">{{ alter.name }}</h2>
        <h3 v-else>{{ alter.name }}</h3>
      </li>
    </ul>
  </main>
</template>

<script>
import sourceData from "../data/theCNMC.json";

export default {
  data() {
    return {
      alters: sourceData.alters,
    };
  },
};
console.log(sourceData.alters);
</script>
