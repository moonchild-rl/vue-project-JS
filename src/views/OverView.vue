<template>
  <v-container class="about">
    <h1>Dies ist eine Übersicht der Veränderungen und Quellen</h1>
    <img alt="Threat Banner" class="banner" src="@/assets/cyberlower.jpg" />
    <p>
      Im Vergleich zum Vormonat haben wir eine Veränderung bei den Einträgen in unserer Datenbank
      festgestellt. Wir möchten Sie daher auf die aktuellen Zahlen bzgl. Ihrer Domain aufmerksam
      machen. Im letzten Monat wurden 295.037 geleakte Credentials registriert. Dieser Wert liegt
      nun bei 331.364. Das entspricht einer Zunahme von 12 % im Vergleich zum Vormonat.
    </p>
    <div v-for="(item, key) in data.address" :key="key">
      <p>
        <b>{{ key }}</b>
      </p>
      <p>{{ item }}</p>
    </div>
    <div v-for="(item, key) in data.data.total" :key="key">
      <p>
        <b>{{ key }}</b>
      </p>
      <p>{{ item }}</p>
    </div>
    <div v-for="(item, key) in data.data.sources" :key="key">
      <p>
        <b>{{ key }}</b>
      </p>
      <p>{{ item }}</p>
    </div>
    <p>
      Kriminelle erbeuten auf unterschiedlichen Wegen umfangreiche Mengen an validen Zugangsdaten.
      Beispielsweise werden dazu Sicherheitslücken in IT-Systemen von On-linediensten und
      Unternehmen ausgenutzt, um die Benutzerdatenbanken zu kopieren. Auch werden Schadsoftware oder
      Phishing-Methoden eingesetzt, um die Zugangsdaten direkt beim Benutzer zu entwenden. Das führt
      dazu, dass im Internet viele Sammlungen sogenannter Datenleaks verfügbar sind. Diese enthalten
      häufig Zugangsdaten, wie Benutzername und Passwort. Kriminelle handeln mit solchen Logindaten,
      sodass diese Daten eine hohe Verbreitung haben. Kriminelle nutzen diese Daten, um im Namen der
      Mitarbeiter Ihres Unternehmens zu agieren und auf Ihre internen Ressourcen und die Ressourcen
      Ihrer Geschäftspartner zuzugreifen, diese zu manipulieren oder zu löschen. Insbesondere
      externe Plattformen (Ausschreibungsportale, Einkaufsportale, usw.) sind hiervon betroffen. Die
      Problematik wird verstärkt, da viele Personen bei mehreren Onlinediensten die gleichen
      Zugangsdaten verwenden. Mit entwendeten Zugangsdaten eines einzelnen Dienstes sind somit alle
      damit abgesicherten Benutzerkonten gefährdet. Dieser Lagebericht gibt Ihnen Auskunft über den
      Umfang betroffener Benutzerkonten Ihrer Domain. Dazu sammelt Identeco kontinuierlich diese
      gefährlichen Zugangsdaten aus allen Bereichen des Internets, arbeitet diese DSGVO-konform auf
      und stellt Ihnen anschließend den Schutz vor unbefugtem Zugriff als Dienstleistung zur
      Verfügung.
    </p>
    <img alt="ad-footer" class="ad-banner" src="@/assets/Gefahr_Grafik.svg" />
    <p>
      Insgesamt befinden sich 3.011.712 Einträge, davon 197.866 neue Einträge, in unserer Datenbank
      gestohlener Identitätsdaten, deren E-Mail-Adresse zu Ihrer Domain examp- le.com zugehörig ist.
      Da Sammlungen von Zugangsdaten häufig auch mehrfach und un- ter verschiedenen Sammlungsnamen
      veröffentlicht werden, ist es möglich, dass iden- tische Zugangsdaten mehrfach in unserer
      Datenbank vorhanden sind (Duplikate). Alle Datenbankeinträge beziehen sich auf insgesamt
      256.167 verschiedene E-Mail-Adressen Ihrer Domain.
    </p>
    <h2>Datenquellen für diesen Lagebericht</h2>
    <p>
      Die IT-Sicherheitsexperten der Identeco sammeln kontinuierlich gestohlene Identitätsdaten aus
      geeigneten Quellen im Internet. Insgesamt entstammen die vorliegenden Daten für die Domain
      example.com 61 öffentlich im Internet verfügbaren Datensammlungen. Die Einträge bzgl. Ihrer
      Domain verteilen sich auf 26.595 Dateien. Dies bedeutet, dass im Durchschnitt 49372 Einträge
      bzgl. Ihrer Domain in jeder dieser Sammlungen enthalten sind.
    </p>
    <div id="diagram"></div>
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


Plotly.newPlot('diagram', datagram, layout);
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
h1 {
  text-align: center;
}
h2 {
  text-align: center;
}
.banner {
  display: block;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.ad-banner {
  display: block;
  width: 135%;
  height: 135%;
  margin-left: -10.5rem;
  margin-right: auto;
  margin-top: -12rem;
  margin-bottom: -12rem;
}

p {
  text-align: center;
}
label {
  font-weight: bold;
}
</style>
