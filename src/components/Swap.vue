<template>
  <div class="home-component pt-16">
    <v-container v-if="swap">
      <v-row class="align-center">
        <v-col lg="5">
          <div class="position-relative sub-heading">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 0C24 13.2548 13.2548 24 0 24V0L24 0Z"
                fill="#5EC2D0"
              />
            </svg>

            <h2>{{ heading }}</h2>
          </div>
          <p>
            {{ detail }}
          </p>
        </v-col>
        <v-col lg="7">
          <v-img
            max-height="100%"
            max-width="100%"
            v-bind:src="imagePath"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row class="align-center">
        <v-col lg="7">
          <v-img
            v-bind:lazy-src="imagePath"
            max-height="100%"
            max-width="100%"
            v-bind:src="imagePath"
          ></v-img>
        </v-col>
        <v-col lg="5">
          <div class="position-relative sub-heading">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 0C24 13.2548 13.2548 24 0 24V0L24 0Z"
                fill="#5EC2D0"
              />
            </svg>
            <h2>{{ heading }}</h2>
          </div>
          <p>
            {{ detail }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    imagePath: String,
    swap: String,
    heading: String,
    detail: String,
  },
};
</script>

<style scoped>
.sub-heading svg {
  position: absolute;
  top: 0;
  left: 0;
}

.sub-heading h2 {
  position: relative;
}
</style>
