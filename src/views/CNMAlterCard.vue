<template>
  <li :id="nameSpoiler" :class="spoilBook">
    <h2 v-if="arcana === 'Major'">{{ name }}</h2>
    <h3 v-else-if="arcana === 'Minor'">{{ name }}</h3>
    <h4 v-else>{{ name }}</h4>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    arcana: String,
    spoilBook: String,
  },
  computed: {
    nameSpoiler() {
      const nameLower = this.name.toLowerCase();
      const nameArray = nameLower.split(" ");
      const nameId = nameArray.join("-");
      return nameId;
    },
  },
};
</script>
