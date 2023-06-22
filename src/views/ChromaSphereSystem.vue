<template>
  <main>
    <div id="chroma-system">
      <h1>Chroma</h1>
      <ul id="spheres">
        <SphereCard
          v-for="sphere in spheres"
          :key="sphere.id"
          :name="sphere.name"
          class="sphere"
        />
      </ul>
    </div>
  </main>
</template>

<script>
import sourceData from "../data/chromaSphereSystem.json";
import ChromaSphereCard from "../components/ChromaSphereCard.vue";

export default {
  name: "ChromaSphereSystem",
  data() {
    return {
      spheres: sourceData.chroma,
    };
  },
  components: {
    SphereCard: ChromaSphereCard,
  },
};
</script>
