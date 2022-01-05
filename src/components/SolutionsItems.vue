 <template>
  <div>
    <div class="hidden-sm-and-down">
      <v-row class="sols-box-wrap">
        <v-col
          v-for="(solItems, i) in visibleSolutionItems"
          :key="i"
          lg="4"
          md="6"
          sm="12"
        >
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
    </div>
    <div class="hidden-sm-and-up">
      <div class="category-title">HR Management</div>
      <v-row class="sols-box-wrap">
        <v-col
          v-for="(solItems, i) in categoryOne"
          :key="i"
          lg="4"
          md="6"
          sm="12"
        >
          <div class="sols-box">
            <div class="icon-holder">
              <img :src="getImgUrl(solItems.title)" alt="" />
            </div>
            <span>{{ $t("homeSolutions." + solItems.title) }}</span>
          </div>
        </v-col>
      </v-row>
      <div class="category-title">Other products &amp; services</div>
      <v-row class="sols-box-wrap">
        <v-col
          v-for="(solItems, i) in categoryTwo"
          :key="i"
          lg="4"
          md="6"
          sm="12"
        >
          <div class="sols-box">
            <div class="icon-holder">
              <img :src="getImgUrl(solItems.title)" alt="" />
            </div>
            <span>{{ $t("homeSolutions." + solItems.title) }}</span>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
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
        cat: 1,
        title: "Workflow approval",
      },
      {
        cat: 1,
        title: "Attendance management",
      },
      {
        cat: 1,
        title: "Scheduling management",
      },
      {
        cat: 1,
        title: "Salary calculation",
      },
      {
        cat: 1,
        title: "Leave management",
      },
      {
        cat: 1,
        title: "Employee management",
      },
      {
        cat: 2,
        title: "No-code development",
      },
      {
        cat: 2,
        title: "Catering POS system",
      },
      {
        cat: 2,
        title: "Business email",
      },
      {
        cat: 2,
        title: "Corporate domain",
      },
      {
        cat: 2,
        title: "Invoice factoring",
      },
      {
        cat: 2,
        title: "Business insurance",
      },
    ],
    SolutionItemsVisible: 9,
    step: 3,
  }),
  computed: {
    visibleSolutionItems() {
      return this.SolutionItems.slice(0, this.SolutionItemsVisible);
    },
    categoryOne() {
      return this.SolutionItems.filter((prod) => prod.cat == 1);
    },
    categoryTwo() {
      return this.SolutionItems.filter((prod) => prod.cat == 2);
    },
  },
};
</script>