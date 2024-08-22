<template>
  <v-container class="about">
    <RouterLink to="/clear"
      ><v-btn color="black" variant="" class="rtrnbtn" icon
        ><img src="../assets/Left_arrow.svg" width="50%" height="50%" /></v-btn
    ></RouterLink>
    <v-container>
      <h2>
        Email adresse and hash value of a password
        <span style="color: yellow; font-weight: bold">(Risk: Medium)</span>
      </h2>
      <v-container>
        <p>
          <img src="@/assets/unlock-duotone.svg" alt="open-lock" class="resize" />
          <b>
            {{
              (
                data.data.email_hashed_password_combinations.current / data.data.total.current
              ).toFixed(2)
            }}
            % ({{ data.data.email_hashed_password_combinations.current }} of these
            {{ data.data.email_hashed_password_combinations.new }} new hits)</b
          ><br />
          der verschiedenen Einträge enthalten die E-Mail-Adresse und den Hash-Wert eines Passworts.
        </p></v-container
      >
      <p>
        <b>Mögliche Auswirkungen:</b> Angreifer können aktiv den Hash-Wert angreifen und unter
        Umständen unerkannt in Ihre Unternehmensinfrastruktur eindringen. Entsprechend der
        Nutzerrechte können Dateien kopiert, modifiziert oder gelöscht werden. Darüber hinaus kann
        ein unberechtigter Zugriff auf E-Mail-Konten und Dienste anderer Anbieter möglich sein.
      </p>
    </v-container>
  </v-container>
  <v-container>
    <RouterLink to="/email" @click="scrollToTop"
      ><v-btn block color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
        >Continue to Emails only</v-btn
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
.vli {
  text-align: center;
}
</style>
