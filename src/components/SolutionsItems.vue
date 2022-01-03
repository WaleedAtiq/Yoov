<template>
  <v-row class="sols-box-wrap">
    <v-col v-for="(solItems, i) in visibleSolutionItems" :key="i" lg="4" md="6">
      <div class="sols-box">
        <div class="icon-holder">
          <img :src="getImgUrl(solItems.title)" alt="" />
        </div>
        <span>{{ $t("homeSolutions." + solItems.title) }}</span>
      </div>
    </v-col>
    <span
      class="show-more-btn"
      @click="SolutionItemsVisible += step"
      v-if="SolutionItemsVisible < SolutionItems.length"
      >{{ $t("nav.show more") }}</span
    >
  </v-row>
</template>
<script>
export default {
  data: () => ({
    getImgUrl(pet) {
      var images = require.context("../assets/icons", false, /\.svg$/);
      try {
        return images("./" + pet.replace(/ /g, "-") + ".svg");
      } catch {
        return images("./no-icon.svg");
      }
    },
    SolutionItems: [
      {
        title: "Workflow approval",
      },
      {
        title: "No-code development",
      },
      {
        title: "Attendance management",
      },
      {
        title: "Scheduling management",
      },
      {
        title: "Salary calculation",
      },
      {
        title: "Leave management",
      },
      {
        title: "Catering POS system",
      },
      {
        title: "Business email",
      },
      {
        title: "Corporate domain",
      },
      {
        title: "Employee management",
      },
      {
        title: "Invoice factoring",
      },
      {
        title: "User center",
      },
    ],
    SolutionItemsVisible: 9,
    step: 3,
  }),
  computed: {
    visibleSolutionItems() {
      return this.SolutionItems.slice(0, this.SolutionItemsVisible);
    },
  },
};
</script>