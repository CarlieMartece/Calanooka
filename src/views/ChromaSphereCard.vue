<template>
  <li class="sphere" :id="nameToId">
    <h2>{{ name }}</h2>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
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
