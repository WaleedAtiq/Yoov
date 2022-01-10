<template>
  <div>
    <div class="hero-banner white--text text-center">
      <div class="container">
        <v-row>
          <v-col class="pa-0 col-xs-12">
            <h1 class="main-heading">{{ $t("home.hero-title") }}</h1>
            <h2 class="">
              {{ $t("home.hero-subtitle-1") }}
            </h2>
            <div class="main-btns">
              <v-btn color="secondary">{{ $t("home.hero-cta-1") }}</v-btn>
              <v-btn class="transparent-btn">{{ $t("home.hero-cta-2") }}</v-btn>
            </div>
            <div class="position-relative main-img">
              <v-carousel
                cycle
                interval="4000"
                show-arrows-on-hover
                hide-delimiters
                class="custom"
                height="480"
              >
                <v-carousel-item>
                  <img :src="require('../assets/images/hero-crm-' + $i18n.locale + '.png')" />
                </v-carousel-item>
                <v-carousel-item>]
                  <img :src="require('../assets/images/hero-inventory-' + $i18n.locale + '.png')" />
                </v-carousel-item>
              </v-carousel>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <!-- End - Hero Section -->

    <div class="all-solutions">
      <div class="container">
        <v-row>
          <v-col>
            <h1 class="text-center">
              {{ $t("homeSolutions.solution-head") }}
            </h1>
          </v-col>
        </v-row>
        <SolutionItemsList />
      </div>
    </div>
    <!-- End - All Solutions -->

    <div class="try-yoov">
      <div class="container">
        <h1>Try YOOV for free</h1>
        <p>Exploring ultimate work style with your demo account</p>
        <v-btn color="secondary">Get started now</v-btn>
      </div>
    </div>
    <!-- End - Try Yoov -->

    <div class="solution-tabs">
      <div class="container">
        <v-row>
          <v-col class="">
            <h1>Industry application solutions</h1>
            <p>Comprehensive solutions for different industries and needs</p>
          </v-col>
        </v-row>
        <v-tabs
          v-model="tab"
          background-color="transparent"
          color="basil"
          grow
          class="tabs-wrap"
          centered
        >
          <v-tab href="#tab-1">Catering</v-tab>
          <v-tab href="#tab-2">Retail</v-tab>
          <v-tab href="#tab-3">Construction</v-tab>
          <v-tab href="#tab-4">Education</v-tab>
          <v-tab href="#tab-5">Logistics</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <Swap
              v-bind:imagePath="
                require('../assets/images/home-img-sub-catering.png')
              "
              swap="true"
              heading="Catering"
              subhead="One-stop Catering POS system"
              detail="YOOV EAT Cloud Restaurant Management System combine features of self-ordering, takeaway ordering and intelligent combo set etc. To digitize and automate procedures with a one-stop solution, improving revenue and table turnover rate, smooth the ordering process and stay hygiene!"
            />
          </v-tab-item>
          <v-tab-item value="tab-2">
            <Swap
              v-bind:imagePath="
                require('../assets/images/home-img-sub-retail.png')
              "
              swap="true"
              heading="Retail"
              subhead="One-stop Catering POS system"
              detail="YOOV EAT Cloud Restaurant Management System combine features of self-ordering, takeaway ordering and intelligent combo set etc. To digitize and automate procedures with a one-stop solution, improving revenue and table turnover rate, smooth the ordering process and stay hygiene!"
            />
          </v-tab-item>
          <v-tab-item value="tab-3">
            <Swap
              v-bind:imagePath="
                require('../assets/images/home-img-sub-construction.png')
              "
              swap="true"
              heading="Construction"
              subhead="One-stop Catering POS system"
              detail="YOOV EAT Cloud Restaurant Management System combine features of self-ordering, takeaway ordering and intelligent combo set etc. To digitize and automate procedures with a one-stop solution, improving revenue and table turnover rate, smooth the ordering process and stay hygiene!"
            />
          </v-tab-item>
          <v-tab-item value="tab-4">
            <Swap
              v-bind:imagePath="
                require('../assets/images/home-img-sub-education.png')
              "
              swap="true"
              heading="Education"
              subhead="One-stop Catering POS system"
              detail="YOOV EAT Cloud Restaurant Management System combine features of self-ordering, takeaway ordering and intelligent combo set etc. To digitize and automate procedures with a one-stop solution, improving revenue and table turnover rate, smooth the ordering process and stay hygiene!"
            />
          </v-tab-item>
          <v-tab-item value="tab-5">
            <Swap
              v-bind:imagePath="
                require('../assets/images/home-img-sub-logistics.png')
              "
              swap="true"
              heading="Logistics"
              subhead="One-stop Catering POS system"
              detail="YOOV EAT Cloud Restaurant Management System combine features of self-ordering, takeaway ordering and intelligent combo set etc. To digitize and automate procedures with a one-stop solution, improving revenue and table turnover rate, smooth the ordering process and stay hygiene!"
            />
          </v-tab-item>
        </v-tabs-items>
      </div>
    </div>
    <!-- End - Try Yoov -->

    <div class="testimonials">
      <v-row>
        <v-col>
          <h1>Best stories from our clients</h1>
        </v-col>
      </v-row>
      <div class="container">
        <v-row>
          <v-col md="12" class="margin-left-auto">
            <VueSlickCarousel arrows="true" dots="true" v-bind="settings">
              <div class="story-slider">
                <img src="../assets/images/story1.png" class="mb-4" alt="" />
                <p>
                  Our monthly payroll computation is complicated and a waste of
                  time. YOOV is beyond our expectations! It minimizes the
                  administrative workload, reduces time-wasting and human
                  resources utilization!
                </p>
                <span>Chief superintendent of HR department</span>
                <h5>Ms.Yung</h5>
              </div>
              <div class="story-slider">
                <img src="../assets/images/story2.png" class="mb-4" alt="" />
                <p>
                  YOOV EAT's QR Code self-ordering feature works perfectly in
                  minimizing human mistakes, speeds up our ordering process,
                  reduces labour and time costs!
                </p>
                <span>Restaurant owner</span>
                <h5>Ms.Ng</h5>
              </div>
              <div class="story-slider">
                <img src="../assets/images/story2.png" class="mb-4" alt="" />
                <p>
                  Over 1,000 employee profiles are stored automatically in
                  YOOV's centralized management system, so data accuracy is
                  guaranteed. Also, it is useful for us to record all the
                  essential dates or deadlines.
                </p>
                <span>IWS Group Holdings Limited</span>
                <h5>HR manager</h5>
              </div>
            </VueSlickCarousel>
          </v-col>
        </v-row>
      </div>
      <span class="view-more">View more client stories</span>
    </div>
    <!-- End - Testimonials -->

    <div class="sub-comp">
      <div class="container">
        <Swap
          class="usp-1"
          v-bind:imagePath="require('../assets/images/home-img-sub-usp-1.png')"
          v-bind:iconPath="require('../assets/images/Icon-02.png')"
          v-bind:iconPathTwo="require('../assets/images/Icon-01.png')"
          swapIcons="true"
          heading="Achieve corporate centralized management"
          detail="With YOOV's one shared platform, all data are well-stored and accessible to each user. To leverage a centralized business model to achieve cross-functional collaboration and create a seamless cooperative office."
        />
        <Swap
          class="usp-2"
          v-bind:imagePath="require('../assets/images/home-img-sub-usp-2.png')"
          v-bind:iconPath="require('../assets/images/Icon-04.png')"
          v-bind:iconPathTwo="require('../assets/images/Icon-03.png')"
          swap="true"
          swapIcons="true"
          heading="Create your custom solution"
          detail="Highly flexible to build the optimal system framework. No technical barriers nor coding is needed. Feel free to develop your solution with YOOV's building block system."
        />
        <Swap
          class="usp-3"
          v-bind:imagePath="require('../assets/images/home-img-sub-usp-3.png')"
          v-bind:iconPath="require('../assets/images/Icon-05.png')"
          v-bind:iconPathTwo="require('../assets/images/Icon-06.png')"
          swapIcons="true"
          heading="Manage with digital business model"
          detail="Automate daily workflow with all-around digitization, from internal to external operations. Visualize data for a better understanding of your business and improve operational efficiency."
        />
      </div>
    </div>
    <!-- End Sub Comp -->

    <div class="clients">
      <div class="container">
        <v-row>
          <v-col>
            <h1>Trusted by 6000+ corporate clients</h1>
            <p>Professional, reliable, efficient</p>
          </v-col>
        </v-row>
        <v-row class="client-img">
          <v-col>
            <v-img
              class="clients-desktop"
              src="../assets/images/clients.png"
              alt=""
            />
            <v-img
              class="clients-mobile"
              src="../assets/images/clients-mobile.png"
              alt=""
            />
          </v-col>
        </v-row>
        <div class="awards">
          <img src="../assets/images/award-01.png" alt="" />
          <img src="../assets/images/award-02.png" alt="" />
          <img src="../assets/images/award-03.png" alt="" />
        </div>
      </div>
    </div>
    <!-- End Clients -->

    <div class="try-yoov contact-sales">
      <div class="container">
        <h1>One platform, endless possibilities</h1>
        <p>Simplify workflows, optimize operations, empower employees</p>
        <v-btn color="primary">Contact sales</v-btn>
      </div>
    </div>
    <!-- End - Try Yoov -->
  </div>
</template>

<script>
import Swap from "../components/Swap.vue";
import SolutionItemsList from "../components/SolutionsItems.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
    Swap,
    VueSlickCarousel,
    SolutionItemsList,
  },
  data: function () {
    return {
      tab: null,
      settings: {
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              centerPadding: "0px",
            },
          },
        ],
      },
    };
  },
};
</script>