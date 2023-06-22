<template>
  <h2>Book {{ bookNumToStr }}</h2>
  <div id="cnmcMob">
    <ul id="cnmcMobCards">
      <AlterCard
        v-for="alter in alters"
        :key="alter.id"
        :name="alter.name"
        :arcana="alter.arcana"
        :class="bookLower"
      />
    </ul>
    <ul id="cnmcMobLinesAH">
      <li
        v-for="index in 8"
        :key="index"
        :class="`line-across-hereditary ${bookLower}`"
      >
        <div :id="`lahMob${index}`"></div>
      </li>
    </ul>
    <ul id="cnmcMobLinesDH">
      <li
        v-for="index in 27"
        :key="index"
        :class="`line-down-hereditary ${bookLower}`"
      >
        <div :id="`ldhMob${index}`"></div>
      </li>
    </ul>
    <ul id="cnmcMobLinesAT">
      <li
        v-for="index in 12"
        :key="index"
        :class="`line-across-twin ${bookLower}`"
      >
        <div :id="`latMob${index}`"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import sourceData from "../data/theCNMC.json";
import CNMAlterCard from "../components/CNMAlterCard.vue";

export default {
  name: "CNMBookMob",
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
</script>
