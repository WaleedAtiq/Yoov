<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
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
