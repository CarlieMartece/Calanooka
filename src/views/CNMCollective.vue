<template>
  <main>
    <div id="cnmc">
      <h1>The Carlie Nooka Martece Collective</h1>
      <p>(AKA When Autism Masking Got Out Of Hand)</p>
      <ul>
        <li v-for="alter in alters" :key="alter.id" :id="alter.name">
          <h2 v-if="alter.arcana==='Major'">{{ alter.name }}</h2>
          <h3 v-else>{{ alter.name }}</h3>
        </li>
      </ul>
    </div>
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
