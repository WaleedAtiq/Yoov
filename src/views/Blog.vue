<template>
  <main class="blog">
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
          <v-col
            v-for="(item, i) in historyList"
            :key="i"
            lg="4"
            md="6"
            sm="12"
            class="col-xs-12"
          >
            <!-- <router-link v-bind:to="item.link"> -->
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
        <v-pagination
          class="pagination mt-6"
          v-model="page"
          :length="pages"
          @input="updatePage"
        ></v-pagination>
      </v-container>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      pageSize: 6,
      list: [
        {
          link: "/blogdetail",
          blogImg: "",
          title: "Blog title 1",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
        {
          link: "/blogdetail",
          blogImg: "",
          title: "Blog title 2",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
        {
          link: "/blogdetail",
          blogImg: "",
          title: "Blog title 3",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
        {
          link: "/blogdetail",
          blogImg: "",
          title: "Blog title 4",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
        {
          link: "/blogdetail",
          blogImg: "",
          title: "Blog title 5",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
        {
          link: "/blogdetail",
          blogImg: "",
          title: "Blog title 6",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
        {
          link: "/blogdetail",
          blogImg: "",
          title: "Blog title 7",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
        {
          link: "/blogdetail",
          blogImg: "",
          title: "Blog title 8",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
        {
          link: "/blogdetail",
          blogImg: "",
          title: "Blog title 9",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
        {
          link: "/blogdetail",
          blogImg: "",
          title: "Blog title 10",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
        {
          link: "/blogdetail",
          blogImg: "",
          title: "Blog title 11",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
        {
          link: "/blogdetail",
          blogImg: "",
          title: "Blog title 12",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
        {
          link: "/blogdetail",
          blogImg: "",
          title: "Blog title 13",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nesciunt ducimus ea cum, sint ab officiis illo.",
        },
      ],
      listCount: 0,
      historyList: [],
    };
  },
  created() {
    let _this = this;
    _this.initPage();
    _this.updatePage(_this.page);
  },
  methods: {
    initPage: function () {
      let _this = this;
      _this.listCount = _this.list.length;
      if (_this.listCount < _this.pageSize) {
        _this.historyList = _this.list;
      } else {
        _this.historyList = _this.list.slice(0, _this.pageSize);
      }
    },
    updatePage: function (pageIndex) {
      let _this = this;
      let _start = (pageIndex - 1) * _this.pageSize;
      let _end = pageIndex * _this.pageSize;
      _this.historyList = _this.list.slice(_start, _end);
      _this.page = pageIndex;
    },
  },
  computed: {
    pages() {
      let _this = this;
      if (_this.pageSize == null || _this.listCount == null) return 0;
      return Math.ceil(_this.listCount / _this.pageSize);
    },
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
