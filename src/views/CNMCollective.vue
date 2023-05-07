<template>
  <main>
    <header>
      <h1>The Carlie Nooka Martece Collective</h1>
      <p>(AKA When Autism Masking Got Out Of Hand)</p>
    </header>
    <CNMBookMob v-if="windowWidth < 650" :spoilBook="5" />
  </main>
</template>

<script>
import CNMBookMob from "./CNMBookMob.vue";

export default {
  name: "CNMC",
  components: {
    CNMBookMob,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>
