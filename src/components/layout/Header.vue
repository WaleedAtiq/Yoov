<template>
  <v-card>
    <v-app-bar class="custom-header" height="88">
      <v-container>
        <v-row class="no-tablet no-mobile">
          <v-col class="text-end pa-0">
            <v-btn text>
              <router-link
                class="text-decoration-none fs-12"
                :to="`/${$i18n.locale}`"
              >
                {{ $t("nav.login") }}
              </router-link>
            </v-btn>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn text v-bind="attrs" v-on="on">
                  {{ $i18n.locale.toUpperCase() }}
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click.prevent="setLocale('en')">
                  <v-list-item-title>{{ $t("nav.en") }}</v-list-item-title>
                </v-list-item>
                <v-list-item @click.prevent="setLocale('tc')">
                  <v-list-item-title>{{ $t("nav.tc") }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
        <v-row class="mobile-flex">
          <v-col lg="8" class="d-flex align-center">
            <v-toolbar-title class="me-10">
              <router-link
                class="text-decoration-none d-flex"
                :to="`/${$i18n.locale}`"
              >
                <svg
                  width="93"
                  height="26"
                  viewBox="0 0 93 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7626 1.50488L10.1985 16.2018V24.5473H4.38876V16.2018L0 1.50488H5.73777C6.63711 6.00269 7.14373 9.02758 7.25765 10.5796C7.60539 8.12568 8.18696 5.10078 9.00236 1.50488H14.7626Z"
                    fill="white"
                  />
                  <path
                    d="M39.5483 14.9679C39.5483 17.2841 39.4913 18.924 39.3774 19.8874C39.2641 20.8425 38.8949 21.7515 38.3072 22.5228C37.6778 23.3357 36.8337 23.9658 35.8655 24.3456C34.7335 24.7928 33.5204 25.011 32.2996 24.9869C31.1133 25.0053 29.9345 24.7995 28.8282 24.3808C27.8481 24.0108 26.992 23.3829 26.355 22.5667C25.7462 21.8029 25.3608 20.8921 25.2398 19.9313C25.0895 18.2753 25.0295 16.6126 25.06 14.9503V10.9972C25.0314 9.35703 25.0884 7.71655 25.2308 6.08209C25.3417 5.12637 25.711 4.21672 26.301 3.44666C26.9259 2.63178 27.765 1.99733 28.7292 1.61064C29.863 1.1646 31.0776 0.947926 32.2996 0.973743C33.4842 0.954308 34.6614 1.15864 35.7666 1.5755C36.7477 1.94577 37.6051 2.57353 38.2442 3.38956C38.8499 4.15516 39.235 5.06508 39.3594 6.02499C39.5073 7.6797 39.5673 9.34078 39.5393 11.0016L39.5483 14.9679ZM33.2889 7.39981C33.3326 6.70945 33.2704 6.01659 33.1045 5.34417C33.0425 5.20031 32.9346 5.07984 32.7969 5.0007C32.6592 4.92156 32.4989 4.88798 32.3401 4.90493C32.1935 4.89794 32.0474 4.92778 31.916 4.99161C31.7845 5.05543 31.672 5.15111 31.5891 5.2695C31.4138 5.51109 31.3283 6.22704 31.3283 7.40859V18.1655C31.2824 18.995 31.3397 19.8269 31.4992 20.6429C31.5578 20.7976 31.6685 20.9284 31.8131 21.0137C31.9576 21.0991 32.1276 21.134 32.2951 21.1128C32.4751 21.129 32.6552 21.0835 32.8045 20.9842C32.9538 20.8848 33.0631 20.7377 33.1135 20.5682C33.2747 19.7198 33.335 18.8561 33.2934 17.9943V7.40859L33.2889 7.39981Z"
                    fill="white"
                  />
                  <path
                    d="M66.1732 14.968C66.2008 16.6096 66.1422 18.2516 65.9978 19.8874C65.8885 20.8435 65.5189 21.7535 64.9276 22.5229C64.3052 23.3401 63.4653 23.9751 62.4994 24.3589C61.3674 24.8061 60.1543 25.0242 58.9335 25.0002C57.7472 25.0186 56.5684 24.8127 55.4621 24.394C54.4807 24.0242 53.6232 23.3963 52.9844 22.58C52.3774 21.8151 51.9922 20.9048 51.8692 19.9445C51.7212 18.2884 51.6612 16.6258 51.6894 14.9636V11.0104C51.6894 8.69418 51.7463 7.05581 51.8602 6.09534C51.9747 5.13977 52.3454 4.23065 52.9349 3.45991C53.5598 2.64503 54.3989 2.01059 55.3631 1.6239C56.4952 1.17738 57.7085 0.960681 58.929 0.987004C60.1151 0.967223 61.2938 1.17155 62.4005 1.58876C63.3809 1.96022 64.238 2.58776 64.8781 3.40282C65.4838 4.16842 65.8689 5.07834 65.9933 6.03825C66.1412 7.69296 66.2013 9.35404 66.1732 11.0148V14.968ZM59.9138 7.39988C59.9575 6.70953 59.8954 6.01667 59.7294 5.34425C59.668 5.19995 59.5603 5.07907 59.4224 4.99984C59.2845 4.9206 59.1239 4.88733 58.965 4.90501C58.8184 4.89802 58.6723 4.92786 58.5409 4.99169C58.4094 5.05551 58.2969 5.15119 58.2141 5.26958C58.0387 5.51116 57.9532 6.22712 57.9532 7.40867V18.1656C57.9098 18.9951 57.9671 19.8267 58.1241 20.6429C58.1828 20.7977 58.2934 20.9284 58.438 21.0138C58.5826 21.0992 58.7525 21.1341 58.92 21.1129C59.1001 21.13 59.2806 21.0848 59.4302 20.9853C59.5797 20.8858 59.6888 20.7382 59.7384 20.5683C59.8996 19.7199 59.96 18.8562 59.9183 17.9943V7.40867L59.9138 7.39988Z"
                    fill="white"
                  />
                  <path
                    d="M92.2675 1.50488L89.0838 24.5386H79.5823L75.985 1.50488H82.5816C83.3491 7.85335 83.8976 13.2223 84.2274 17.6118C84.5512 13.1696 84.8944 9.22816 85.2571 5.78746L85.7068 1.50488H92.2675Z"
                    fill="white"
                  />
                </svg>
              </router-link>
            </v-toolbar-title>
            <div class="no-tablet no-mobile">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text v-bind="attrs" v-on="on">
                    {{ $t("nav.products") }}
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <v-btn text>
                <router-link
                  class="text-decoration-none"
                  :to="`/${$i18n.locale}`"
                >
                  {{ $t("nav.customer-stories") }}
                </router-link>
              </v-btn>
              <v-btn text>
                <router-link
                  class="text-decoration-none"
                  :to="`/${$i18n.locale}/blog`"
                >
                  {{ $t("nav.blog") }}
                </router-link>
              </v-btn>
              <v-btn text>
                <router-link
                  class="text-decoration-none"
                  :to="`/${$i18n.locale}/about`"
                >
                  {{ $t("nav.about") }}
                </router-link>
              </v-btn>
            </div>
          </v-col>
          <v-col lg="4" md="4" class="text-end">
            <v-btn text class="no-tablet no-mobile">
              <router-link
                class="text-decoration-none"
                :to="`/${$i18n.locale}`"
              >
                {{ $t("nav.contact") }}
              </router-link>
            </v-btn>
            <v-btn text class="no-mobile">
              <router-link
                class="text-decoration-none"
                :to="`/${$i18n.locale}`"
              >
                {{ $t("nav.login") }}
              </router-link>
            </v-btn>
            <v-btn class="black--text no-mobile">{{ $t("nav.signup") }}</v-btn>
            <v-app-bar-nav-icon class="hidden-lg-and-up" @click="drawer = true">
            </v-app-bar-nav-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" height="100vh" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item class="resp-link">
            <router-link :to="`/${$i18n.locale}`">
              {{ $t("nav.products") }}
            </router-link>
          </v-list-item>
          <v-list-item class="resp-link">
            <router-link :to="`/${$i18n.locale}`">
              {{ $t("nav.customer-stories") }}
            </router-link>
          </v-list-item>
          <v-list-item class="resp-link">
            <router-link :to="`/${$i18n.locale}/blog`">
              {{ $t("nav.blog") }}
            </router-link>
          </v-list-item>
          <v-list-item class="resp-link">
            <router-link :to="`/${$i18n.locale}/about`">
              {{ $t("nav.about") }}
            </router-link>
          </v-list-item>
          <v-list-item class="resp-link">
            <router-link :to="`/${$i18n.locale}`">
              {{ $t("nav.contact") }}
            </router-link>
          </v-list-item>
          <v-list-item class="resp-link">
            <router-link :to="`/${$i18n.locale}`">
              {{ $t("nav.login") }}
            </router-link>
          </v-list-item>
          <v-list-item class="resp-link">
            <router-link :to="`/${$i18n.locale}`">
              {{ $t("nav.signup") }}
            </router-link>
          </v-list-item>
          <v-list-item>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn text v-bind="attrs" v-on="on">
                  {{ $i18n.locale.toUpperCase() }}
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click.prevent="setLocale('en')">
                  <v-list-item-title>EN</v-list-item-title>
                </v-list-item>
                <v-list-item @click.prevent="setLocale('tc')">
                  <v-list-item-title>TC</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      { title: "Click Me 1" },
      { title: "Click Me 2" },
      { title: "Click Me 3" },
      { title: "Click Me 4" },
    ],
    // langs: ["en", "tc"],
    drawer: false,
    group: null,
  }),
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
    },
  },
};
</script>

<style scoped>
.custom-header .v-btn,
.custom-header a {
  color: #fff;
}
.custom-header {
  position: absolute;
  width: 100%;
  background-color: transparent !important;
  box-shadow: none !important;
}
.custom-header button {
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  text-transform: inherit;
}
.custom-header select {
  color: #ffffff;
  text-transform: uppercase;
  display: block;
  width: 100%;
  text-align: center;
}
.custom-header select option {
  color: #333333;
}
.v-navigation-drawer {
  z-index: 9;
}
@media screen and (max-width: 1024px) {
  .v-navigation-drawer {
    width: 50vw !important;
  }
}
@media screen and (max-width: 480px) {
  .v-navigation-drawer {
    width: 75vw !important;
  }
}
</style>
