<template>
  <v-container class="about">
    <RouterLink to="/hashed"
      ><v-btn color="black" variant="" class="rtrnbtn" icon
        ><img src="../assets/Left_arrow.svg" width="50%" height="50%" /></v-btn
    ></RouterLink>
    <v-container>
      <h2>
        Email adresse only
        <span style="font-weight: bold">(Risk: Low/Medium)</span>
      </h2></v-container
    >
    <v-container>
      <p>
        <img src="@/assets/at.svg" alt="at-sign" class="resize" />
        <b>
          {{ data.data.email.current }}
          of these {{ data.data.email.new }} new distinct email adresses</b
        ><br />
        konnten wir in unserer Datenbank finden.
      </p></v-container
    >
    <p>
      <b>Mögliche Auswirkungen:</b> Mit validen E-Mail-Adressen steigt das SPAM-Aufkommen und
      Angreifer sind bei der Zustellung von Schadsoftware erfolgreicher. Auch steigt das Risiko für
      gezielte Social-Engineering-Angriffe in dem vermeintlich korrekte Absender oder Mitempfänger
      in E-Mails von Angreifer verwendet werden. Eine besondere Art von Social-Engineering-Angriffen
      ist z.B. CEO-Fraud. Dabei wird im Namen der Geschäfts- führer oder einer anderen berechtigten
      Person die Überweisung hoher Geldbeträge angewiesen.
    </p>
  </v-container>
  <v-container>
    <RouterLink to="/sources" @click="scrollToTop"
      ><v-btn block color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
        >Continue to Data Sources</v-btn
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
img {
  float: left;
  width: 50px;
  height: 50px;
  margin: 1rem 1rem;
}
h1 {
  text-align: center;
}
p {
  text-align: left;
}
</style>
