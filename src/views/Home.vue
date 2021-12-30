<template>
  <div>
    <div class="hero-banner white--text text-center">
      <div class="container">
        <v-row>
          <v-col sm="12" class="pa-0">
            <h1 class="main-heading">{{ $t("home.hero-title") }}</h1>
            <h2 class="">
              {{ $t("home.hero-subtitle-1") }}
            </h2>
            <div class="main-btns">
              <v-btn color="secondary">{{ $t("home.hero-cta-1") }}</v-btn>
              <v-btn class="transparent-btn">{{ $t("home.hero-cta-2") }}</v-btn>
            </div>
            <div class="position-relative main-img">
              <v-img src="../assets/images/dashboard.png"></v-img>
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
            <h1 class="text-center">All-in-one digital solutions</h1>
          </v-col>
        </v-row>
        <v-row class="sols-box-wrap">
          <v-col lg="4" md="6">
            <div class="sols-box">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34 3H6V37H34V3ZM8 35V5H32V35H8ZM29 8H11V10H29V8ZM11 13H29V15H11V13ZM18 18H11V20H18V18Z"
                  fill="#294460"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 20H26V27H30V30H18V27H22V20ZM29 31H19V33H29V31Z"
                  fill="#5EC2D0"
                />
              </svg>
              <span>Workflow approval</span>
            </div>
          </v-col>
          <v-col lg="4" md="6">
            <div class="sols-box">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 30C9 26.6863 11.6863 24 15 24H25C28.3137 24 31 26.6863 31 30V36H9V30Z"
                  fill="#5EC2D0"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 30C8 26.134 11.134 23 15 23H25C28.866 23 32 26.134 32 30V36H30V30C30 27.2386 27.7614 25 25 25H15C12.2386 25 10 27.2386 10 30V36H8V30Z"
                  fill="#294460"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 6C16.6863 6 14 8.68629 14 12C14 15.3137 16.6863 18 20 18C23.3137 18 26 15.3137 26 12C26 8.68629 23.3137 6 20 6ZM12 12C12 7.58172 15.5817 4 20 4C24.4183 4 28 7.58172 28 12C28 16.4183 24.4183 20 20 20C15.5817 20 12 16.4183 12 12Z"
                  fill="#294460"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.7682 27.6402L20.0672 34.4815L16.2928 30.7072L17.7071 29.2929L19.9328 31.5186L24.2317 26.3599L25.7682 27.6402Z"
                  fill="white"
                />
              </svg>

              <span>Attendance management</span>
            </div>
          </v-col>
          <v-col lg="4" md="6">
            <div class="sols-box">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="28" y="4" width="8" height="8" fill="#5EC2D0" />
                <rect x="4" y="26" width="10" height="10" fill="#5EC2D0" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.5858 7.00006L19.293 4.70718L20.7072 3.29297L25.4143 8.00008L20.7072 12.7072L19.293 11.293L21.5859 9.00006H10V23.0001H8V7.00006H21.5858ZM20.4142 30.0001L22.707 27.7072L21.2928 26.293L16.5857 31.0001L21.2928 35.7072L22.707 34.293L20.4141 32.0001H33V15.0001H31V30.0001H20.4142Z"
                  fill="#294460"
                />
              </svg>

              <span>Scheduling management</span>
            </div>
          </v-col>
          <v-col lg="4" md="6">
            <div class="sols-box">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M31 8H9V15H31V8ZM11 13V10H29V13H11Z" fill="#294460" />
                <path d="M9 17H15V23H9V17ZM11 19V21H13V19H11Z" fill="#294460" />
                <path
                  d="M23 17H17V23H23V17ZM19 21V19H21V21H19Z"
                  fill="#294460"
                />
                <path d="M9 25H15V31H9V25ZM11 27V29H13V27H11Z" fill="#294460" />
                <path
                  d="M23 25H17V31H23V25ZM19 29V27H21V29H19Z"
                  fill="#294460"
                />
                <path d="M35 4H5V35H35V4ZM7 33V6H33V33H7Z" fill="#294460" />
                <path d="M31 17H25V31H31V17Z" fill="#5EC2D0" />
              </svg>
              <span>Salary calculation</span>
            </div>
          </v-col>
          <v-col lg="4" md="6">
            <div class="sols-box">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 9H34V15H6V9Z" fill="#5EC2D0" />
                <path
                  d="M10 4H12V8H28V4H30V8H35V33H5V8H10V4ZM33 14V10H7V14H33ZM33 16H7V31H33V16Z"
                  fill="#294460"
                />
                <path d="M30 20H22V28H30V20Z" fill="#5EC2D0" />
              </svg>

              <span>Leave management</span>
            </div>
          </v-col>
          <v-col lg="4" md="6">
            <div class="sols-box">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="6" y="6" width="14" height="14" fill="#5EC2D0" />
                <path
                  d="M23 13H35V35H13V23H23V13ZM25 25V33H33V25H25ZM23 33V25H15V33H23ZM33 15H25V23H33V15Z"
                  fill="#294460"
                />
              </svg>

              <span>No-code development</span>
            </div>
          </v-col>
          <v-col lg="4" md="6">
            <div class="sols-box">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 25H29V27H11V25Z" fill="#294460" />
                <path d="M18 30H11V32H18V30Z" fill="#294460" />
                <path d="M6 3H34V37H6V3ZM8 5V35H32V5H8Z" fill="#294460" />
                <path
                  d="M18 16C20.2091 16 22 14.2091 22 12C22 9.79086 20.2091 8 18 8C15.7909 8 14 9.79086 14 12C14 14.2091 15.7909 16 18 16Z"
                  fill="#5EC2D0"
                />
                <path
                  d="M15 18C12.7909 18 11 19.7909 11 22V23H25V22C25 19.7909 23.2091 18 21 18H15Z"
                  fill="#5EC2D0"
                />
              </svg>
              <span>CRM</span>
            </div>
          </v-col>
          <v-col lg="4" md="6">
            <div class="sols-box">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="16" y="6" width="8" height="12" fill="#5EC2D0" />
                <path d="M22 23H10V25H22V23Z" fill="#294460" />
                <path d="M10 28H18V30H10V28Z" fill="#294460" />
                <path d="M22 28H20V30H22V28Z" fill="#294460" />
                <path d="M35 4H5V35H35V4ZM7 33V6H33V33H7Z" fill="#294460" />
              </svg>
              <span>Inventory management</span>
            </div>
          </v-col>
          <v-col lg="4" md="6">
            <div class="sols-box">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="25" y="11" width="6" height="14" fill="#5EC2D0" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M36 6H4V30H36V6ZM6 28V8H34V28H6ZM35 32H5V34H35V32ZM9 11H15V17H9V11ZM11 13V15H13V13H11ZM15 19H9V25H15V19ZM11 23V21H13V23H11ZM17 11H23V17H17V11ZM19 13V15H21V13H19ZM23 19H17V25H23V19ZM19 23V21H21V23H19Z"
                  fill="#294460"
                />
              </svg>

              <span>Catering POS system</span>
            </div>
          </v-col>
        </v-row>
        <span class="show-more-btn">Show More</span>
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
          <v-tab href="#tab-1"> Catering </v-tab>
          <v-tab href="#tab-2"> Retail </v-tab>
          <v-tab href="#tab-3"> Construction </v-tab>
          <v-tab href="#tab-4"> Education </v-tab>
          <v-tab href="#tab-5"> Logistics </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <Swap
              v-bind:imagePath="home_catering"
              swap="true"
              heading="Catering"
              subhead="One-stop Catering POS system"
              detail="YOOV EAT Cloud Restaurant Management System combine features of self-ordering, takeaway ordering and intelligent combo set etc. To digitize and automate procedures with a one-stop solution, improving revenue and table turnover rate, smooth the ordering process and stay hygiene!"
            />
          </v-tab-item>
          <v-tab-item value="tab-2">
            <Swap
              v-bind:imagePath="home_retail"
              swap="true"
              heading="Retail"
              subhead="One-stop Catering POS system"
              detail="YOOV EAT Cloud Restaurant Management System combine features of self-ordering, takeaway ordering and intelligent combo set etc. To digitize and automate procedures with a one-stop solution, improving revenue and table turnover rate, smooth the ordering process and stay hygiene!"
            />
          </v-tab-item>
          <v-tab-item value="tab-3">
            <Swap
              v-bind:imagePath="home_construction"
              swap="true"
              heading="Construction"
              subhead="One-stop Catering POS system"
              detail="YOOV EAT Cloud Restaurant Management System combine features of self-ordering, takeaway ordering and intelligent combo set etc. To digitize and automate procedures with a one-stop solution, improving revenue and table turnover rate, smooth the ordering process and stay hygiene!"
            />
          </v-tab-item>
          <v-tab-item value="tab-4">
            <Swap
              v-bind:imagePath="home_education"
              swap="true"
              heading="Education"
              subhead="One-stop Catering POS system"
              detail="YOOV EAT Cloud Restaurant Management System combine features of self-ordering, takeaway ordering and intelligent combo set etc. To digitize and automate procedures with a one-stop solution, improving revenue and table turnover rate, smooth the ordering process and stay hygiene!"
            />
          </v-tab-item>
          <v-tab-item value="tab-5">
            <Swap
              v-bind:imagePath="home_logistics"
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
      <v-row>
        <v-col md="10" push-md="2" class="margin-left-auto">
          <VueSlickCarousel arrows="true" dots="true" v-bind="settings">
            <div class="story-slider">
              <img src="../assets/images/story1.png" class="mb-4" alt="" />
              <p>
                Our monthly payroll computation is complicated and a waste of
                time. YOOV WORK is beyond our expectations! It can minimize the
                administrative workload, reduce time-wasting and human resources
                utilization!
              </p>
              <span>Chief Superintendent of HR Department</span>
              <h5>Ms.Yung</h5>
            </div>
            <div class="story-slider">
              <img src="../assets/images/story2.png" class="mb-4" alt="" />
              <p>
                It has been great to work with YOOV EAT! It minimizes human
                mistakes, speeds up our ordering process, reduces labour and
                time costs!
              </p>
              <span>Restaurant owner</span>
              <h5>Ms.Ng</h5>
            </div>
            <div class="story-slider">
              <img src="../assets/images/story2.png" class="mb-4" alt="" />
              <p>
                It has been great to work with YOOV EAT! It minimizes human
                mistakes, speeds up our ordering process, reduces labour and
                time costs!
              </p>
              <span>Restaurant owner</span>
              <h5>Ms.Ng</h5>
            </div>
          </VueSlickCarousel>
        </v-col>
      </v-row>
      <span class="view-more">View more client stories</span>
    </div>
    <!-- End - Testimonials -->

    <div class="sub-comp">
      <div class="container">
        <Swap
          class="usp-1"
          v-bind:imagePath="home_usp_1"
          v-bind:iconPath="home_usp_icon_1"
          v-bind:iconPathTwo="home_usp_icon_2"
          swapIcons="true"
          heading="Achieve corporate centralized management"
          detail="With YOOV's one shared platform, all data are well-stored and accessible to each user. To leverage a centralized business model to achieve cross-functional collaboration and create a seamless cooperative office."
        />
        <Swap
          class="usp-2"
          v-bind:imagePath="home_usp_2"
          v-bind:iconPath="home_usp_icon_3"
          v-bind:iconPathTwo="home_usp_icon_4"
          swap="true"
          swapIcons="true"
          heading="Create your custom solution"
          detail="Highly flexible to build the optimal system framework. No technical barriers nor coding is needed. Feel free to develop your solution with YOOV's building block system."
        />
        <Swap
          class="usp-3"
          v-bind:imagePath="home_usp_3"
          v-bind:iconPath="home_usp_icon_6"
          v-bind:iconPathTwo="home_usp_icon_5"
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
import home_catering from "../assets/images/home-img-sub-catering.png";
import home_retail from "../assets/images/home-img-sub-retail.png";
import home_construction from "../assets/images/home-img-sub-construction.png";
import home_education from "../assets/images/home-img-sub-education.png";
import home_logistics from "../assets/images/home-img-sub-logistics.png";
import home_usp_1 from "../assets/images/home-img-sub-usp-1.png";
import home_usp_2 from "../assets/images/home-img-sub-usp-2.png";
import home_usp_3 from "../assets/images/home-img-sub-usp-3.png";

import home_usp_icon_1 from "../assets/images/Icon-01.png";
import home_usp_icon_2 from "../assets/images/Icon-02.png";
import home_usp_icon_3 from "../assets/images/Icon-03.png";
import home_usp_icon_4 from "../assets/images/Icon-04.png";
import home_usp_icon_5 from "../assets/images/Icon-05.png";
import home_usp_icon_6 from "../assets/images/Icon-06.png";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { Swap, VueSlickCarousel },
  data: function () {
    return {
      home_catering: home_catering,
      home_retail: home_retail,
      home_construction: home_construction,
      home_education: home_education,
      home_logistics: home_logistics,
      home_usp_1: home_usp_1,
      home_usp_2: home_usp_2,
      home_usp_3: home_usp_3,
      home_usp_icon_1,
      home_usp_icon_2,
      home_usp_icon_3,
      home_usp_icon_4,
      home_usp_icon_5,
      home_usp_icon_6,
      tab: null,
      settings: {
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        slidesToShow: 2,
        speed: 800,
        autoplay: false,
        autoplaySpeed: 2500,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1920,
            settings: {
              slidesToShow: 2,
              centerPadding: "20px",
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              centerPadding: "20px",
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ],
      },
    };
  },
};
</script>
