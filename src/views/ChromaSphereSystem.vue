<template>
  <div class="chroma">
    <h1>Chroma</h1>
    <ul>
      <SphereCard
        v-for="sphere in spheres"
        :key="sphere.id"
        :name="sphere.name"
      />
    </ul>
  </div>
</template>

<script>
import sourceData from "../data/chromaSphereSystem.json";
import ChromaSphereCard from "./ChromaSphereCard.vue";

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
