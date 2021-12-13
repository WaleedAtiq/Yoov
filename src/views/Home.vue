<template>
  <div>
    <h1>This is an homepage</h1>
    <div class="solution pa-12">
      <v-container>
        <v-row>
          <v-col cols="24" class="text-center position-relative">
            <v-img
              lazy-src="../assets/images/element22.png"
              max-height="90"
              max-width="90"
              src="../assets/images/element22.png"
              class="left"
              alt=""
            ></v-img>
            <h1 class="white--text">To grow fast, it may not cost you much</h1>
            <v-btn class="text-transform-none" color="secondary" dark>
              Get our free solution
            </v-btn>
            <v-img
              lazy-src="../assets/images/element11.png"
              max-height="100"
              max-width="100"
              src="../assets/images/element11.png"
              class="right"
              alt=""
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="tabs">
      <v-container>
        <v-row>
          <v-col cols="24">
            <h1 class="text-center">
              We help different industries to gain advantages
            </h1>
            <v-tabs v-model="tab" class="pa-6" centered>
              <v-tab href="#tab-1"> Catering </v-tab>

              <v-tab href="#tab-2"> Retail </v-tab>

              <v-tab href="#tab-3"> Construction </v-tab>
              <v-tab href="#tab-4"> Education </v-tab>
              <v-tab href="#tab-5"> Logistics </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item value="tab-1">
                <HomeComponent
                  v-bind:imagePath="home1"
                  swap="true"
                  heading="Create your custom solution"
                  detail="One-stop Catering POS system
YOOV EAT Cloud Restaurant Management System combine features of self-ordering, takeaway ordering and intelligent combo set etc. To digitize and automate procedures with a one-stop solution, improving revenue and table turnover rate, smooth the ordering process and stay hygiene!"
                />
              </v-tab-item>
              <v-tab-item value="tab-2"
                ><HomeComponent
                  v-bind:imagePath="home1"
                  swap="true"
                  heading="Create your custom solution"
                  detail="One-stop Catering POS system
YOOV EAT Cloud Restaurant Management System combine features of self-ordering, takeaway ordering and intelligent combo set etc. To digitize and automate procedures with a one-stop solution, improving revenue and table turnover rate, smooth the ordering process and stay hygiene!"
                />
              </v-tab-item>
              <v-tab-item value="tab-3"
                ><HomeComponent
                  v-bind:imagePath="home1"
                  swap="true"
                  heading="Create your custom solution"
                  detail="One-stop Catering POS system
YOOV EAT Cloud Restaurant Management System combine features of self-ordering, takeaway ordering and intelligent combo set etc. To digitize and automate procedures with a one-stop solution, improving revenue and table turnover rate, smooth the ordering process and stay hygiene!"
                />
              </v-tab-item>
              <v-tab-item value="tab-4"
                ><HomeComponent
                  v-bind:imagePath="home1"
                  swap="true"
                  heading="Create your custom solution"
                  detail="One-stop Catering POS system
YOOV EAT Cloud Restaurant Management System combine features of self-ordering, takeaway ordering and intelligent combo set etc. To digitize and automate procedures with a one-stop solution, improving revenue and table turnover rate, smooth the ordering process and stay hygiene!"
                />
              </v-tab-item>
              <v-tab-item value="tab-5"
                ><HomeComponent
                  v-bind:imagePath="home1"
                  swap="true"
                  heading="Create your custom solution"
                  detail="One-stop Catering POS system
YOOV EAT Cloud Restaurant Management System combine features of self-ordering, takeaway ordering and intelligent combo set etc. To digitize and automate procedures with a one-stop solution, improving revenue and table turnover rate, smooth the ordering process and stay hygiene!"
                />
              </v-tab-item>
            </v-tabs-items>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <HomeComponent
      v-bind:imagePath="home2"
      heading="Achieve corporate centralized management"
      detail="With YOOV's one shared platform, all data are well-stored and accessible to each user. To leverage a centralized business model to achieve cross-functional collaboration and create a seamless cooperative office."
    />
    <HomeComponent
      v-bind:imagePath="home4"
      swap="true"
      heading="Create your custom solution"
      detail="Highly flexible to build the optimal system framework. No technical barriers nor coding is needed. Feel free to develop your solution with YOOV's building block system."
    />
    <HomeComponent
      v-bind:imagePath="home3"
      heading="Manage with digital business model"
      detail="Automate daily workflow with all-around digitization, from internal to external operations. Visualize data for a better understanding of your business and improve operational efficiency."
    />
    <div class="partners pa-16">
      <v-container>
        <v-row>
          <v-col cols="24" class="text-center position-relative">
            <h1 class="text-center">
              Trusted by 6000+ corporate clients from different industries
            </h1></v-col
          >
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import HomeComponent from "../components/HomeComponent.vue";
import home1 from "../assets/images/home1.png";
import home2 from "../assets/images/home2.png";
import home3 from "../assets/images/home3.png";
import home4 from "../assets/images/home4.png";
export default {
  components: { HomeComponent },
  data: function () {
    return {
      home1: home1,
      home2: home2,
      home3: home3,
      home4: home4,
      tab: null,
    };
  },
};
</script>

<style scoped>
.partners {
  background: #f7f8fa;
}
.solution {
  background: #5ec2d0;
}
.v-tab.v-tab--active {
  background: #ffffff;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 99px;
}
</style>
