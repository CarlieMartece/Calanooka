<template>
  <li>
    <div class="alter">
      <div :id="nameToId">
        <div class="cover">?</div>
        <div class="alterName">
          <h2 v-if="arcana === 'Major'">{{ name }}</h2>
          <h3 v-else-if="arcana === 'Minor'">{{ name }}</h3>
          <h4 v-else>{{ name }}</h4>
        </div>
      </div>
    </div>
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
