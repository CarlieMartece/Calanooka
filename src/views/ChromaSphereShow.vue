<template>
  <main>
    <div id="chroma-sphere">
      <h2>{{ sphereId }}</h2>
    </div>
  </main>
</template>

<script>
import sourceData from "../data/chromaSphereSystem.json";

export default {
  name: "ChromaSphereShow",
  computed: {
    sphereId() {
      return parseInt(this.$route.params.id);
    },
    sphere() {
      console.log(this.sphereId);
      return sourceData.chroma.find((sphere) => sphere.id === this.sphereId);
    },
  },
};
</script>
