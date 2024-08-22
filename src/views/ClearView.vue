<template>
  <v-container class="about">
    <RouterLink to="/"
      ><v-btn color="black" variant="" class="rtrnbtn" icon
        ><img src="../assets/Left_arrow.svg" width="50%" height="50%" /></v-btn
    ></RouterLink>
    <h1>E-Mail-Adresse und Passwort im Klartext</h1>
    <div v-for="(item, key) in data.data.email_cleartext_password_combinations" :key="key">
      <p>
        <b>{{ key }}</b>
      </p>
      <p>{{ item }}</p>
    </div>
    <p v-for="(item, key) in data.data.email_cleartext_password_combinations" :key="key">
      <b>{{ key }}</b>
      <br />
      {{ item }}
    </p>
    <p>
      <b>Mögliche Auswirkungen:</b><br />
      Angreifer können unerkannt in Ihre Unternehmensinfrastruktur eindringen. Entsprechend der
      Nutzerrechte können Dateien kopiert, modifiziert oder gelöscht werden. Darüber hinaus kann ein
      unberechtigter Zugriff auf E-Mail-Konten und Dienste anderer Anbieter möglich sein.
    </p>
  </v-container>
</template>

<script>
import jsonData from '../assets/jsonData.json'
export default {
  data() {
    return {
      data: jsonData
    }
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: grid;
    flex-direction: column;
    align-items: center;
  }
}
h1 {
  text-align: center;
}
p {
  text-align: left;
}
</style>
