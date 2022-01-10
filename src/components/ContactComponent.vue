<template>
  <div class="contact-component">
    <v-container>
      <v-row>
        <v-col cols="24" class="text-center ma-10 pa-10 position-relative mobile-padding">
          <img
            src="../assets/images/element1.png"
            class="position-absolute left-element"
            alt=""
          />
          <h1>One platform, endless possibilities</h1>
          <p>Simplify workflows, optimize operations, empower employees</p>
          <v-btn class="text-transform-none" color="secondarysix" dark>
            Contact our team
          </v-btn>
          <img
            src="../assets/images/element2.png"
            class="position-absolute right-element"
            alt=""
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script></script>

<style scoped>
.contact-component {
  color: #294460;
}
.contact-component h1 {
  font-weight: 600;
}
.left {
  position: absolute;
  left: 0;
  top: 0;
}

.right {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
