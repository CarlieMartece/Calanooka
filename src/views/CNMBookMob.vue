<template>
  <h2>Book {{ bookNumToStr }}</h2>
  <div id="cnmcMob">
    <ul id="cnmcMobLinesAH">
      <li v-for="line in linesXhered" :key="line.key" class="line-across-hereditary">
        <div :id="line.id"></div>
      </li>
    </ul>
    <ul id="cnmcMobCards">
      <AlterCard
        v-for="alter in alters"
        :key="alter.id"
        :name="alter.name"
        :arcana="alter.arcana"
        :class="bookLower"
      />
    </ul>
  </div>
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
      linesXhered: [
        { key: 1, id: "lah01" },
        { key: 2, id: "lah02" },
        { key: 3, id: "lah03" },
        { key: 4, id: "lah04" },
        { key: 5, id: "lah05" },
        { key: 6, id: "lah06" },
        { key: 7, id: "lah07" },
        { key: 8, id: "lah08" },
      ],
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
</script>
