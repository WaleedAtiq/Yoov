<template>
  <div>
    <div class="no-mobile">
      <v-row class="sols-box-wrap">
        <v-col
          v-for="(solItems, i) in visibleSolutionItems"
          :key="i"
          lg="4"
          md="6"
          sm="6"
          class="col-xs-12"
        >
          <div class="sols-box">
            <div class="icon-holder">
              <img :src="getImgUrl(solItems.title)" alt="" />
            </div>
            <span>{{ $t("homeSolutions." + solItems.title) }}</span>
          </div>
        </v-col>
        <v-col sm="12" md="12" class="col-xs-12">
          <span
            class="show-more-btn"
            @click="SolutionItemsVisible += step"
            v-if="SolutionItemsVisible < SolutionItems.length"
            >{{ $t("nav.show more") }}</span
          >
        </v-col>
      </v-row>
    </div>

    <div class="no-desktop no-tablet">
      <div class="category-title">HR Management</div>
      <VueSlickCarousel
        arrows="false"
        dots="false"
        v-bind="solutionSlider"
        class="mobile-sols"
      >
        <div v-for="(solItems, i) in categoryOne" :key="i" class="main-loop">
          <div
            v-for="(solItem, index) in solItems"
            :key="index"
            class="sub-loop"
          >
            <div class="sols-box mobile">
              <div class="icon-holder">
                <img :src="getImgUrl(solItem.title)" alt="" />
              </div>
              <span>{{ $t("homeSolutions." + solItem.title) }}</span>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
      <div class="category-title">Other products &amp; services</div>
      <VueSlickCarousel
        arrows="false"
        dots="false"
        v-bind="solutionSlider"
        class="mobile-sols"
      >
        <div v-for="(solItems, i) in categoryTwo" :key="i" class="main-loop">
          <div
            v-for="(solItem, index) in solItems"
            :key="index"
            class="sub-loop"
          >
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
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: "24px",
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