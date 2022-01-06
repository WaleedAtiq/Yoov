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
    <!-- <div class="hidden-sm-and-up">
      <div class="category-title">HR Management</div>
      <v-row class="sols-box-wrap">
        <v-col v-for="(solItems, i) in categoryOne" :key="i" sm="12">
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
        <v-col v-for="(solItems, i) in categoryTwo" :key="i" sm="12">
          <div class="sols-box">
            <div class="icon-holder">
              <img :src="getImgUrl(solItems.title)" alt="" />
            </div>
            <span>{{ $t("homeSolutions." + solItems.title) }}</span>
          </div>
        </v-col>
      </v-row>
    </div> -->
    <!-- <div class="hidden-sm-and-up">
      <div class="category-title">HR Management</div>
      <v-row class="sols-box-wrap">
        
      </v-row>
      <div class="category-title">Other products</div>
    </div> -->
    <div class="category-title hidden-sm-and-up">HR Management</div>
    <VueSlickCarousel
      arrows="false"
      dots="false"
      v-bind="solutionSlider"
      class="hidden-sm-and-up"
    >
      <div v-for="(solItems, i) in categoryOne" :key="i">
        <div v-for="(solItem, index) in solItems" :key="index">
          <div class="sols-box mobile">
            <div class="icon-holder">
              <img :src="getImgUrl(solItem.title)" alt="" />
            </div>
            <span>{{ $t("homeSolutions." + solItem.title) }}</span>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
    <div class="category-title hidden-sm-and-up">
      Other products &amp; services
    </div>
    <VueSlickCarousel
      arrows="false"
      dots="false"
      v-bind="solutionSlider"
      class="hidden-sm-and-up"
    >
      <div v-for="(solItems, i) in categoryTwo" :key="i">
        <div v-for="(solItem, index) in solItems" :key="index">
          <div class="sols-box mobile">
            <div class="icon-holder">
              <img :src="getImgUrl(solItem.title)" alt="" />
            </div>
            <span>{{ $t("homeSolutions." + solItem.title) }}</span>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
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
    solutionSlider: {
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // variableWidth: true,
    },
  }),
  computed: {
    visibleSolutionItems() {
      return this.SolutionItems.slice(0, this.SolutionItemsVisible);
    },
    categoryOne() {
      const reducedItems = this.SolutionItems.filter((prod) => prod.cat == 1)
        .reduce((accumulator, current, index) => {
          if (index % 2) {
            accumulator[index - 1].push(current);
          } else {
            accumulator[index] = [];
            accumulator[index].push(current);
          }
          return accumulator;
        }, [])
        .filter((item) => item);
      return reducedItems;
    },
    categoryTwo() {
      const reducedItems = this.SolutionItems.filter((prod) => prod.cat == 2)
        .reduce((accumulator, current, index) => {
          if (index % 2) {
            accumulator[index - 1].push(current);
          } else {
            accumulator[index] = [];
            accumulator[index].push(current);
          }
          return accumulator;
        }, [])
        .filter((item) => item);
      return reducedItems;
    },
  },
};
</script>
