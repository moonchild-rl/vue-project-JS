<template>
  <v-container class="about">
    <h1>Übersicht der Accountbedrohungen für {{ data.changes_since }}</h1>
    <br />
    <p>Sehr geehrte Damen und Herren,</p>
    <br />
    <p>
      wir danken Ihnen für Ihr Vertrauen in unser Unternehmen. Im Folgenden erhalten Sie den
      Lagebericht für {{ data.changes_since }}.
    </p>
    <br />
    <p v-if="data.data.total.new > 0">
      Im Vergleich zum Vormonat haben wir eine Veränderung bei den Einträgen in unserer Datenbank
      festgestellt. Wir möchten Sie daher auf die aktuellen Zahlen bzgl. Ihrer Domain aufmerksam
      machen.
    </p>
    <br />
    <p>
      Im letzten Monat wurden {{ data.data.total.current - data.data.total.new }} geleakte
      Credentials registriert. Dieser Wert liegt nun bei {{ data.data.total.current }}. Das
      entspricht einer Zunahme von {{ data.data.total.increase_percent }} % im Vergleich zum
      Vormonat.
    </p>
    <br />
    <p v-if="data.data.total.new > 0">
      HANDLUNGSEMPFEHLUNG: Aufgrund der vorhandenen Risiken empfehlen wir Ihnen, die betroffenen
      E-Mail-Adressen und Accounts zu überprüfen. Bitte informieren Sie die betroffenen Mitarbeiter
      und lassen Sie betroffene Passwörter ändern, um die Sicherheit Ihrer Unternehmensdienste
      weiterhin zu gewährleisten.
    </p>
    <br />
    <p>
      Als unser Kunde können Sie das Leak Monitoring Result Tool nutzen, um betroffene Mitarbeitende
      datenschutzkonform zu identifizieren, zu informieren und entsprechende Schutzmaßnahmen
      einzuleiten. Sollten Sie noch weitere Fragen haben, stehen wir Ihnen jederzeit gerne zur
      Verfügung.
    </p>
    <br />
    <p>Mit freundlichen Grüßen</p>
    <img alt="ad-footer" class="ad-banner" src="@/assets/Gefahr_Grafik.svg" />
    <p>
      Kriminelle erbeuten auf unterschiedlichen Wegen umfangreiche Mengen an validen Zugangsdaten.
      Beispielsweise werden dazu Sicherheitslücken in IT-Systemen von Onlinediensten und Unternehmen
      ausgenutzt, um die Benutzerdatenbanken zu kopieren.
    </p>
    <p>
      Auch werden Schadsoftware oder Phishing-Methoden eingesetzt, um die Zugangsdaten direkt beim
      Benutzer zu entwenden. Das führt dazu, dass im Internet viele Sammlungen sogenannter
      Datenleaks verfügbar sind. Diese enthalten häufig Zugangsdaten, wie Benutzername und Passwort.
      Kriminelle handeln mit solchen Logindaten, sodass diese Daten eine hohe Verbreitung haben.
    </p>
    <p>
      Kriminelle nutzen diese Daten, um im Namen der Mitarbeiter Ihres Unternehmens zu agieren und
      auf Ihre internen Ressourcen und die Ressourcen Ihrer Geschäftspartner zuzugreifen, diese zu
      manipulieren oder zu löschen. Insbesondere externe Plattformen (Ausschreibungsportale,
      Einkaufsportale, usw.) sind hiervon betroffen.
    </p>
    <p>
      Die Problematik wird verstärkt, da viele Personen bei mehreren Onlinediensten die gleichen
      Zugangsdaten verwenden. Mit entwendeten Zugangsdaten eines einzelnen Dienstes sind somit alle
      damit abgesicherten Benutzerkonten gefährdet.
    </p>
    <p>
      Dieser Lagebericht gibt Ihnen Auskunft über den Umfang betroffener Benutzerkonten Ihrer
      Domain. Dazu sammelt Identeco kontinuierlich diese gefährlichen Zugangsdaten aus allen
      Bereichen des Internets, arbeitet diese DSGVO-konform auf und stellt Ihnen anschließend den
      Schutz vor unbefugtem Zugriff als Dienstleistung zur Verfügung.
    </p> </v-container
  ><v-container>
    <RouterLink to="/overview" @click="scrollToTop"
      ><v-btn block color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
        >Continue to Overview</v-btn
      ></RouterLink
    >
  </v-container>
</template>

<script>
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
  text-align: left;
}
p {
  text-align: left;
  margin: 0.5rem;
}
img {
  margin-top: -14rem;
  margin-bottom: -13rem;
  margin-left: -11rem;
  margin-right: -11rem;
}
</style>
