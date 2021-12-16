<template>
  <v-app>
    <Header />
    <router-view />
    <Footer />
  </v-app>
</template>
<script>
import Header from "./Header.vue";
import Footer from "../layout/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  mounted() {},
};
</script>

<style></style>
