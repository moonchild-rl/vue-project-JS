<template>
  <v-container class="about">
    <RouterLink to="/"
      ><v-btn color="black" variant="" class="rtrnbtn" icon
        ><img src="../assets/Left_arrow.svg" width="50%" height="50%" /></v-btn
    ></RouterLink>
    <v-container>
      <h1>Accounts at risk for domain {{ data.domain }}</h1></v-container
    >
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
    <!--<div id="diagram"></div>-->
  </v-container>
  <v-container>
    <RouterLink to="/clear" @click="scrollToTop"
      ><v-btn block color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
        >Continue to Passwords in Clear</v-btn
      ></RouterLink
    >
  </v-container>
</template>

<script>
//import Plotly from 'plotly.js-dist'
//const Plotly = require('plotly.js-basic-dist')
//var Plotly = require('plotly.js/dist/plotly.js')

import jsonData from '../assets/jsonData.json'
export default {
  data() {
    return {
      data: jsonData
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }
}
/*
var trace1 = {
  x: ['giraffes', 'orangutans', 'monkeys'],
  y: [20, 14, 23],
  name: 'SF Zoo',
  type: 'bar'
}
var trace2 = {
  x: ['giraffes', 'orangutans', 'monkeys'],
  y: [12, 18, 29],
  name: 'LA Zoo',
  type: 'bar'
}

var datagram = [trace1, trace2]

var layout = { barmode: 'stack' }


Plotly.newPlot('diagram', datagram, layout)
*/
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
}
img {
  float: left;
  width: 50px;
  height: 50px;
  margin: 1rem 1rem;
}
h1 {
  text-align: center;
}
h2 {
  text-align: center;
}
p {
  text-align: left;
}
</style>
