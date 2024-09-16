<template>
  <v-container class="about">
    <v-container class="header-row">
    <RouterLink to="/">
      <v-btn class="rtrnbtn" icon="mdi-arrow-left" size="x-large" elevation="0"></v-btn>
    </RouterLink>
    <h1>Accounts at risk for domain {{ data.domain }}</h1>
    </v-container>
    <v-container>
      <p>
        Insgesamt befinden sich {{ data.data.total.current }} Einträge, davon
        {{ data.data.total.new }} neue Einträge, in unserer Datenbank gestohlener Identitätsdaten,
        deren E-Mail-Adresse zu Ihrer Domain {{ data.domain }} zugehörig ist. Da Sammlungen von
        Zugangsdaten häufig auch mehrfach und unter verschiedenen Sammlungsnamen veröffentlicht
        werden, ist es möglich, dass identische Zugangsdaten mehrfach in unserer Datenbank vorhanden
        sind (Duplikate). Alle Datenbankeinträge beziehen sich auf insgesamt
        {{ data.data.email.current }} verschiedene E-Mail-Adressen Ihrer Domain.
      </p></v-container
    >
    <v-container>
      <p>
        Unique combinations of email adress and password or hash:
        {{ data.data.total.current - data.data.duplicates.current }}
      </p>
    </v-container>
    <v-container>
      <p>Duplicates: {{ data.data.duplicates.current }}</p></v-container
    >
  </v-container>
  <PlotlyChart :data="chartData" :layout="chartLayout" />
  <PlotlyChart :data="chartDataTest" :layout="chartLayoutTest" />
  <PlotlyChart :data=processedChartData :layout="chartLayoutTest" />

  <v-container>
    <RouterLink to="/clear" @click="scrollToTop"
      ><v-btn block color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
        >Continue to Passwords in Clear</v-btn
      ></RouterLink
    >
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
  data() {
    return {
      data: jsonData,
      chartData: [
        {
          x: [1, 2, 3, 4, 5],
          y: [10, 15, 13, 17, 22],
          type: 'scatter'
        }
      ],
      chartLayout: {
        title: 'Sample Chart'
      },
      chartDataTest: [
        {
          x: ['giraffes', 'orangutans', 'monkeys'],
          y: [10, 15, 20],
          type: 'bar'
        }
      ],
      chartLayoutTest: {
        title: 'Testing JSON Data Chart'
      }
    }
  },
  computed: {
    processedChartData() {
      return [
        {
          x: Object.keys(this.data.data.total),//[this.data.address.company], // X-axis: Extracting "label" from nested JSON
          y: Object.values(this.data.data.total),//this.data.data.total.new), // Y-axis: Extracting "value" from nested JSON
          type: 'bar'
        }
      ];
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
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
h1 h2 {
  text-align: center;
}
p {
  text-align: left;
}
article {
    padding-left: 12rem;
    padding-right: 12rem;
  }
</style>
