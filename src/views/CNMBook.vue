<template>
  <h2>Book {{ bookNumToStr }}</h2>
  <ul id="cnmc">
    <AlterCard
      v-for="alter in alters"
      :key="alter.id"
      :name="alter.name"
      :arcana="alter.arcana"
      :class="bookLower"
    />
  </ul>
</template>

<script>
import sourceData from "../data/theCNMC.json";
import CNMAlterCard from "./CNMAlterCard.vue";

export default {
  props: {
    spoilBook: Number,
  },
  data() {
    return {
      alters: sourceData.alters,
    };
  },
  components: {
    AlterCard: CNMAlterCard,
  },
  computed: {
    bookNumToStr() {
      const bookNum = this.spoilBook.toString();
      const convertObj = {
        5: "Five",
        4: "Four",
        3: "Three",
        1: "One",
      };
      return convertObj[bookNum];
    },
    bookLower() {
      const bookCapitalised = this.bookNumToStr;
      return bookCapitalised.toLowerCase();
    },
  },
};
console.log(sourceData.alters);
</script>
