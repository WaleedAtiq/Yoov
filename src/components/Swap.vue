<template>
  <div class="home-component">
    <v-row class="align-center" v-if="swap && !swapIcons">
      <v-col lg="5" md="12" sm="12" class="txt-order-1 col-xs-12">
        <div class="position-relative">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 0C24 13.2548 13.2548 24 0 24V0L24 0Z" fill="#5EC2D0" />
          </svg>
          <h2 class="text-left">{{ heading }}</h2>
        </div>
        <p class="subhead text-left">
          {{ subhead }}
        </p>
        <p class="text-left">
          {{ detail }}
        </p>
      </v-col>
      <v-col lg="7" md="12" sm="12" class="img-order-2 img-holder col-xs-12">
        <img v-bind:src="imagePath" />
      </v-col>
    </v-row>

    <v-row class="align-center reverse-swap-respo" v-if="!swap && !swapIcons">
      <v-col lg="7" md="12" sm="12" class="img-order-2 img-holder col-xs-12">
        <img v-bind:src="imagePath" />
      </v-col>
      <v-col lg="5" md="12" class="txt-order-1">
        <div class="position-relative sub-heading">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 0C24 13.2548 13.2548 24 0 24V0L24 0Z" fill="#5EC2D0" />
          </svg>
          <h2 class="text-left">{{ heading }}</h2>
        </div>
        <p class="subhead text-left">
          {{ subhead }}
        </p>
        <p class="text-left">
          {{ detail }}
        </p>
      </v-col>
    </v-row>

    <v-row class="align-center" v-if="swap && swapIcons">
      <v-col lg="5" md="12" sm="12" class="txt-order-1 p-right col-xs-12">
        <div class="position-relative">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 0C24 13.2548 13.2548 24 0 24V0L24 0Z" fill="#5EC2D0" />
          </svg>
          <h2 class="text-left">{{ heading }}</h2>
        </div>
        <p class="text-left">
          {{ detail }}
        </p>
      </v-col>
      <v-col lg="7" md="12" class="img-order-2 img-holder">
        <img class="float-icon left top" v-bind:src="iconPath" />
        <img class="float-icon left bottom" v-bind:src="iconPathTwo" />
        <img class="main-img" v-bind:src="imagePath" />
      </v-col>
    </v-row>

    <v-row class="align-center reverse-swap-respo" v-if="swapIcons && !swap">
      <v-col lg="7" md="12" sm="12" class="img-order-2 img-holder col-xs-12">
        <img class="float-icon right top" v-bind:src="iconPath" />
        <img class="float-icon right bottom" v-bind:src="iconPathTwo" />
        <img class="main-img" v-bind:src="imagePath" />
      </v-col>
      <v-col lg="5" md="12" class="txt-order-1 p-left">
        <div class="position-relative sub-heading">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 0C24 13.2548 13.2548 24 0 24V0L24 0Z" fill="#5EC2D0" />
          </svg>
          <h2 class="text-left">{{ heading }}</h2>
        </div>
        <p class="text-left">
          {{ detail }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    imagePath: String,
    iconPath: String,
    iconPathTwo: String,
    swap: String,
    swapIcons: String,
    heading: String,
    subhead: String,
    detail: String,
  },
};
</script>