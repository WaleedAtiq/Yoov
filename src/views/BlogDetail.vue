<template>
  <main>
    <section class="blog-single mt-5">
      <v-container>
        <v-row class="position-relative">
          <v-col lg="11" md="11">
            <h1 class="text-h3 font-weight-bold mb-10">Heading</h1>
            <h5 class="text-h5 mb-3 font-weight-bold">Sub Heading</h5>
            <p class="grey--text">
              Physiological respiration involves the mechanisms that ensure that
              the composition of the functional residual capacity is kept
              constant, and equilibrates with the gases dissolved in the
              pulmonary capillary blood, and thus throughout the body.
            </p>
            <p class="grey--text">
              Thus, in precise usage, the words breathing and ventilation are
              hyponyms, not synonyms, of respiration; but this prescription is
              not consistently followed, even by most health care providers,
              because the term respiratory rate (RR) is a well-established term
              in health care, even though it would need to be consistently
              replaced with ventilation rate if the precise usage were to be
              followed.
            </p>
            <div class="blog-img my-10"></div>
            <h5 class="text-h5 mb-3 font-weight-bold">Sub Heading</h5>
            <p class="grey--text">
              For athletes, high altitude produces two contradictory effects on
              performance. For explosive events (sprints up to 400 metres, long
              jump, triple jump) the reduction in atmospheric pressure means
              there is less resistance from the atmosphere and the athlete's
              performance will generally be better at high altitude.
            </p>
            <div class="blog-img my-10"></div>
            <h5 class="text-h5 mb-3 font-weight-bold">Sub Heading</h5>
            <p class="grey--text">
              Physical space is often conceived in three linear dimensions,
              although modern physicists usually consider it, with time, to be
              part of a boundless four-dimensional continuum known as spacetime.
              The concept of space is considered to be of fundamental importance
              to an understanding of the physical universe. However,
              disagreement continues between philosophers over whether it is
              itself an entity, a relationship between entities, or part of a
              conceptual framework.
            </p>
            <div class="border-bottom mt-10 mb-4"></div>
            <div class="learn-more mt-10 pa-8">
              <v-row>
                <v-col lg="5">
                  <v-img
                    cover
                    lazy-src="../assets/images/selfservice_en.png"
                    src="../assets/images/selfservice_en.png"
                  ></v-img>
                </v-col>
                <v-col lg="7">
                  <h5 class="text-h5 font-weight-medium">
                    Cloud-based HR management and process approval system
                  </h5>
                  <p>Let YOOV WORK simplify daily HR works for you.</p>
                  <v-btn color="secondarysix" dark> Learn More </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <!-- <v-col lg="2" md="1" sm="2" class="text-end">
            <div class="share-icons">
              <ul class="pa-0">
                <li class="mb-2">
                  <a href="#"><v-icon> mdi-whatsapp </v-icon></a>
                </li>
                <li class="mb-2">
                  <a href="#"><v-icon> mdi-facebook </v-icon></a>
                </li>
                <li class="mb-2">
                  <a href="#"><v-icon> mdi-twitter </v-icon></a>
                </li>
                <li class="mb-2">
                  <a href="#"><v-icon> mdi-linkedin </v-icon></a>
                </li>
                <li class="mb-2">
                  <a href="#"><v-icon> mdi-message-processing</v-icon></a>
                </li>
              </ul>
            </div>
          </v-col> -->
        </v-row>
      </v-container>
    </section>
  </main>
</template>
<style scoped>
.blog-img {
  width: 100%;
  height: 427.5px;
  background: #c9cdd4;
  border-radius: 8px;
}
.border-bottom {
  border-bottom: 1px solid #e5e6eb;
}
.learn-more {
  background: #f7f8fa;
  border-radius: 8px;
}
.share-icons {
  position: sticky;
  top: 0;
  right: 0;
  height: 30vh;
}
.share-icons ul {
  list-style: none;
}

.share-icons a {
  width: 48px;
  height: 48px;
  background: #ffffff;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  display: inline-block;
  line-height: 48px;
  text-align: center;
}

.share-icons a i {
  color: #000;
}
</style>
