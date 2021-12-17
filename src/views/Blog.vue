<template>
  <main>
    <section class="banner overflow-hidden d-flex align-center text-center">
      <v-container>
        <v-row>
          <v-col class="position-relative">
            <img src="../assets/images/element31.png" class="left" alt="" />
            <h1 class="white--text text-h2 font-weight-medium">Blog</h1>
            <img src="../assets/images/element32.png" class="right" alt="" />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="blog-listings pa-16">
      <v-container>
        <v-row>
          <v-col v-for="item in blogs" :key="item" lg="4">
            <router-link v-bind:to="item.link">
              <div class="blog-card">
                <div class="blog-img">{{ item.blogImg }}</div>
                <div class="blog-detail pa-6">
                  <h3 class="black--text">{{ item.title }}</h3>
                  <p class="mb-0 grey--text">
                    {{ item.detail }}
                  </p>
                </div>
              </div>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          link: "/blogdetail",
          blogImg: "",
          title: "Blog title",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
        {
          link: "",
          blogImg: "",
          title: "Blog title",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
        {
          link: "",
          blogImg: "",
          title: "Blog title",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
        {
          link: "",
          blogImg: "",
          title: "Blog title",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
        {
          link: "",
          blogImg: "",
          title: "Blog title",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
        {
          link: "",
          blogImg: "",
          title: "Blog title",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.banner {
  background: #294460;
  height: 30vh;
}
.right {
  position: absolute;
  right: 0;
  top: 0;
}

.left {
  position: absolute;
  left: 0;
  bottom: 0;
}
.blog-card {
  background: #ffffff;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  overflow: hidden;
}

.blog-card:hover {
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.blog-img {
  width: 100%;
  height: 193.5px;
  background: #c9cdd4;
}
</style>
