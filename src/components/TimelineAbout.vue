<template>
  <v-timeline>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
      </template>
      <span class="headline font-weight-bold clients-mobile">2021</span>
      <div class="event" v-for="(vhead, ii) in year.vheading" :key="ii">
        <h2
          class="headline year font-weight-light mb-4"
          v-text="vhead.vhead"
        ></h2>
        <div v-text="vhead.details" class="details"></div>
        <div class="details more" v-text="vhead.subDetails"></div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
export default {
  data: () => ({
    years: [
      {
        color: "cyan",
        year: "2021",
        vheading: [
          {
            vhead: "Jun 2021",
            details:
              "Launch YOOV DOMAIN, YOOV EMAIL and YOOV DIY Website Builder",
          },
          {
            vhead: "May 2021",
            details: "Total Client Count Reaches 5000",
          },
        ],
      },
      {
        color: "cyan",
        year: "2020",
        vheading: [
          {
            vhead: "Apr 2020",
            details: "Total Client Count Reaches 3000",
          },
        ],
      },
      {
        color: "cyan",
        year: "2019",
        vheading: [
          {
            vhead: "Jun 2019",
            details:
              "Launch YOOV DOMAIN, YOOV EMAIL and YOOV DIY Website Builder",
          },
          {
            vhead: "Apr 2019",
            details: "Title Sponsor of TVB’s ‘Innovation GPS’ TV program",
          },
        ],
      },
      {
        color: "cyan",
        year: "2018",
        vheading: [
          {
            vhead: "Feb 2018",
            details: "Angel Round Funding Obtained",
            subDetails:
              "(Investment by Mirae Asset, a Subsidiary of Korea Development Bank, and Agriculture Fund of China, a Subsidiary of Chinese Academy of Agricultural Sciences)",
          },
        ],
      },
      {
        color: "cyan",
        year: "2017",
        vheading: [
          {
            vhead: "Apr 2017",
            details: "Seed Round Funding Obtained",
          },
          {
            vhead: "Feb 2017",
            details: "YOOV EAT Launched",
          },
        ],
      },
      {
        color: "cyan",
        year: "2016",
        vheading: [
          {
            vhead: "Dec  2016",
            details: "YOOV WORK Launched",
          },
          {
            vhead: "May 2016",
            details: "YOOV Established",
          },
        ],
      },
    ],
  }),
};
</script>