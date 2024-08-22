<template>
  <v-container class="about">
    <RouterLink to="/overview"
      ><v-btn color="black" variant="" class="rtrnbtn" icon
        ><img src="../assets/Left_arrow.svg" width="50%" height="50%" /></v-btn
    ></RouterLink>
    <v-container>
      <h1>Further explanation of Results</h1>
    </v-container>
    <v-container>
      <h2>
        Email adresses and passwords in clear
        <span style="color: red; font-weight: bold">(Risk: High)</span>
      </h2>
    </v-container>

    <p>
      <img src="@/assets/lock-open-duotone_red.svg" alt="red-lock" class="resize" />
      <b>
        {{
          (
            data.data.email_cleartext_password_combinations.current / data.data.total.current
          ).toFixed(2)
        }}
        % ({{ data.data.email_cleartext_password_combinations.current }} of these
        {{ data.data.email_cleartext_password_combinations.new }}) new hits</b
      ><br />
      der verschiedenen Einträge enthalten die E-Mail-Adresse und ein Passwort im Klartext.
    </p>
    <p>
      <b>Mögliche Auswirkungen:</b> Angreifer können unerkannt in Ihre Unternehmensinfrastruk- tur
      eindringen. Entsprechend der Nutzerrechte können Dateien kopiert, modifiziert oder gelöscht
      werden. Darüber hinaus kann ein unberechtigter Zugriff auf E-Mail-Konten und Dienste anderer
      Anbieter möglich sein.
    </p>
  </v-container>
  <v-container>
    <RouterLink to="/hashed" @click="scrollToTop"
      ><v-btn block color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
        >Continue to Hashed Combinations</v-btn
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
