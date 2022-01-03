<template>
  <v-row class="sols-box-wrap">
    <v-col
      v-for="(solItems, i) in SolutionItems && (product, i) in toBeShown"
      :key="i"
      lg="4"
      md="6"
    >
      <div class="sols-box">
        <div class="icon-holder">
          <img :src="getImgUrl(solItems.title)" alt="" />
        </div>
        <!-- <v-span v-if="$i18n.locale === 'en'">{{ solItems.title }}</v-span> -->
        <!-- <v-span v-else>{{ solItems.titleTC }}</v-span> -->
        <span>{{ $t("homeSolutions." + solItems.title) }}</span>
      </div>
    </v-col>
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
    el: "#app",
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
    currentPage: 1,
  }),
  computed: {
    toBeShown() {
      return this.products.slice(0, this.currentPage * 4);
    },
    totalPages() {
      return Math.ceil(this.products.length / 4);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      this.currentPage = this.currentPage - 1 || 1;
    },
  },
};
</script>