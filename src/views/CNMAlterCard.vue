<template>
  <li :id="nameToId">
    <h2 v-if="arcana === 'Major'">{{ name }}</h2>
    <h3 v-else>{{ name }}</h3>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    arcana: String,
  },
  computed: {
    nameToId() {
      const nameLower = this.name.toLowerCase();
      const nameArray = nameLower.split(" ");
      const nameId = nameArray.join("-");
      return nameId;
    },
  },
};
</script>
