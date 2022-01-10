<template>
  <div>
    <v-footer class="custom-footer" color="secondary">
      <v-container>
        <v-row>
          <v-col cols="12" class="d-flex pa-2">
            <v-spacer></v-spacer>
            <v-btn v-for="icon in icons" :key="icon" class="mx-0" dark icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="text-start footer-widget">
          <v-col lg="3" sm="6" class="footer-widget-col">
            <h5>Contact us</h5>
            <ul>
              <li>
                <a href="callto:5169 9300">5169 9300</a>
              </li>
              <li class="custom-icon">
                <v-icon> mdi-whatsapp </v-icon>
              </li>
            </ul>
            <h5>Enquiry</h5>
            <ul>
              <li>
                <a href="mailto:cs@yoov.com">cs@yoov.com</a>
              </li>
            </ul>
            <h5>Careers</h5>
            <ul>
              <li>
                <a href="mailto:5169 9300">hr@yoov.com</a>
              </li>
            </ul>
          </v-col>
          <v-col lg="3" sm="6" class="footer-widget-col">
            <h5>Company</h5>
            <ul>
              <li>
                <router-link
                  class="text-decoration-none"
                  :to="`/${$i18n.locale}/about`"
                >
                  {{ $t("nav.about") }}
                </router-link>
              </li>
              <li>
                <a href="/">Join us</a>
              </li>
            </ul>
            <h5>Resources</h5>
            <ul>
              <li>
                <router-link
                  class="text-decoration-none"
                  :to="`/${$i18n.locale}/blog`"
                >
                  {{ $t("nav.blog") }}
                </router-link>
              </li>
              <li><a href="/">Customer stories</a></li>
              <li><a href="/">Help center</a></li>
            </ul>
          </v-col>
          <v-col lg="3" sm="6" class="footer-widget-col">
            <h5>Products &amp; services</h5>
            <ul>
              <li><a href="/">YOOV+</a></li>
              <li><a href="/">YOOV WORK</a></li>
              <li><a href="/">YOOV EAT</a></li>
              <li><a href="/">YOOV Domain</a></li>
              <li><a href="/">YOOV Email</a></li>
              <li><a href="/">YOOV Capital</a></li>
              <li><a href="/">YOOV Insurance</a></li>
            </ul>
          </v-col>
          <v-col lg="3" sm="6" class="footer-widget-col">
            <h5>Other services</h5>
            <ul>
              <li><a href="/">TalkFood</a></li>
              <li><a href="/">BYOBmall</a></li>
            </ul>
          </v-col>
        </v-row>
        <div class="footer-bottom">
          <v-row
            class="py-2 white--text text-center justify-space-between align-center"
          >
            <v-col
              class="d-flex justify-space-between align-center footer-copyright d-md-flex d-sm-block"
            >
              <span>
                ©{{ new Date().getFullYear() }} — YOOV Internet Technology (HK)
                Limited</span
              >
              <div class="footer-links-no-pad">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      text
                      v-bind="attrs"
                      v-on="on"
                      class="my-2 no-pad-sm"
                      color="white"
                      rounded
                    >
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
                <v-btn class="my-2 no-pad-sm" color="white" text rounded>
                  <router-link :to="`/${$i18n.locale}/privacypolicy`">
                    {{ $t("nav.privacy policy") }}
                  </router-link>
                </v-btn>
                <v-btn class="my-2 no-pad-sm" color="white" text rounded>
                  <router-link :to="`/${$i18n.locale}/privacypolicy`">
                    {{ $t("nav.terms conditions") }}
                  </router-link>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-footer>
  </div>
</template>
<script>
export default {
  components: {},
  data: () => ({
    icons: ["mdi-facebook", "mdi-linkedin", "mdi-instagram"],
    links: [
      {
        title: "Privacy Policy",
        link: "/privacypolicy",
      },
      {
        title: "Terms & Condition",
        link: "",
      },
    ],
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
.footer-bottom {
  border-top: 1px solid #436280;
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
}
.custom-footer {
  padding: 40px 0 0;
  color: #ffffff;
}
.custom-footer ul li {
  margin: 10px 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
}

.custom-footer ul li:last-child {
  margin-bottom: 25px;
}
.custom-footer h5 {
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}
/* .custom-footer {
  font-family: "Prompt", sans-serif;
} */
.custom-footer ul {
  list-style: none;
  padding: 0;
}
a {
  text-decoration: none;
}
.custom-icon {
  width: 40px;
  height: 40px;
  background: #5ec2d0;
  border-radius: 99px;
  line-height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-links-no-pad .no-pad-sm {
  padding-left: 12px;
  padding-right: 12px;
  min-width: 40px;
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
  text-transform: inherit;
}

@media (max-width: 480px) {
  .footer-widget {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .custom-footer h5 {
    font-size: 12px;
  }
}
</style>
