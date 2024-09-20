<template>
  <v-container class="about">
    <article>
    <v-container class="header-row">
    <RouterLink to="/">
      <v-btn class="rtrnbtn" icon="mdi-arrow-left" size="x-large" elevation="0"></v-btn>
    </RouterLink>
    <h1>Accounts at risk for domain {{ data.domain }}</h1>
    </v-container>
    <v-container>
      <v-row
      class="d-flex justify-center align-center"
      height="100vh"
    >
    <PlotlyChart :data=processedPieChartData :layout="chartLayoutPie" />
    </v-row>
    </v-container>
    <v-container>
      <p>
        In total there are {{ data.data.total.current }} records of identity data that have an e-mail address of your
domain {{ data.domain }} in our leak database. Because leak data collections are distributed
in overlapping sets with different identifiers, there may be multiple records for a single
set of identity information. All identified entries for your domain have {{ data.data.total.current - data.data.duplicates.current }} unique
e-mail addresses.
      </p>
  </v-container>
  <v-container>
      <v-row
      class="d-flex justify-center align-center"
      height="100vh"
    >
    <PlotlyChart :data=processedPieChartData2 :layout="chartLayoutPie2" />
    </v-row>
    </v-container>
    <v-container>
    <RouterLink to="/clear" @click="scrollToTop(); this.$emit('setCheck', 2)"
      ><v-btn block color="indigo-darken-3" variant="tonal" size="x-large" rounded="lg"
        >Continue to Further Explanations</v-btn
      ></RouterLink
    >
  </v-container>
</article>
</v-container>
</template>

<script>
import PlotlyChart from '@/components/PlotlyChart.vue'
import jsonData from '../assets/jsonData.json'
export default {
  name: 'OverView',
  components: {
    PlotlyChart
  },
  emits: ['setCheck'],
  data() {
    return {
      data: jsonData,
      chartLayoutPie: {
          height: 400,
          width: 400,
          margin: {"t": 100, "b": 0, "l": 0, "r": 0},
          showlegend: false,
          title: "Records of your domain in our database"
      },
      chartLayoutPie2: {
          height: 400,
          width: 400,
          margin: {"t": 100, "b": 0, "l": 0, "r": 0},
          showlegend: false,
          title: "Makeup of records in our database"
      }
    }
  },
  computed: {
    /*
    processedChartData() {
      return [
        {
          x: Object.keys(this.data.data.total),//[this.data.address.company], // X-axis: Extracting "label" from nested JSON
          y: Object.values(this.data.data.total),//this.data.data.total.new), // Y-axis: Extracting "value" from nested JSON
          type: 'bar'
        }
      ];
    },
    */
    processedPieChartData2() {
      return [
        {
          values: [this.data.data.email_password_hash_combinations.current, this.data.data.email.current, this.data.data.duplicates.current],
          labels: ["Unique combinations", "Unique email adresses", "Duplicates"],
          type: 'pie',
          textinfo: "label+percent",
          textposition: "outside",
          automargin: true
        }
      ];
    },
    processedPieChartData() {
      return [
        {
          values: [(this.data.data.total.current-this.data.data.total.new), this.data.data.total.new],
          labels: ["Old entries", "New entries"],
          type: 'pie',
          textinfo: "label+percent",
          textposition: "outside",
          automargin: true
        }
      ];
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.about {
  max-width: 64.5rem;
  font-size: 1.1em;
  line-height: 1.5;
  color: #5b6770;
  font-family: 'Fira Sans', Arial, Helvetica, sans-serif;
}
h1{
  text-align: left;
  color: #00426be0;
  font-size: 35px;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
}
.header-row{
  display: flex;
  align-items: center; /* Vertically center the button and text */
}
img {
  float: left;
  width: 100px;
  height: 100px;
  margin: 1rem 1rem;
}
p {
  text-align: left;
}
article {
    padding-left: 12rem;
    padding-right: 12rem;
  }
</style>
