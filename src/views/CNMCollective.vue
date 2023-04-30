<template>
  <main>
    <header>
      <h1>The Carlie Nooka Martece Collective</h1>
      <p>(AKA When Autism Masking Got Out Of Hand)</p>
    </header>
    <ul id="cnmc">
      <AlterCard
        v-for="alter in alters"
        :key="alter.id"
        :name="alter.name"
        :arcana="alter.arcana"
        :spoilBook="alter.spoilBook"
      />
    </ul>
  </main>
</template>

<script>
import sourceData from "../data/theCNMC.json";
import CNMAlterCard from "./CNMAlterCard.vue";

export default {
  data() {
    return {
      alters: sourceData.alters,
    };
  },
  components: {
    AlterCard: CNMAlterCard,
  },
};
console.log(sourceData.alters);
</script>
