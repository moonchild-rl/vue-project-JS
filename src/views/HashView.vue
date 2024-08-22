<template>
  <v-container class="about">
    <RouterLink to="/"
      ><v-btn color="black" variant="" class="rtrnbtn" icon
        ><img src="../assets/Left_arrow.svg" width="50%" height="50%" /></v-btn
    ></RouterLink>
    <v-container>
      <v-list lines="three">
        <v-list-item
          v-for="(item, key) in data.data.email_hashed_password_combinations"
          :key="key"
          :title="key"
          :subtitle="item"
          class="vli"
        ></v-list-item>
      </v-list>
    </v-container>
    <h1>E-Mail-Adresse und Hash-Wert eines Passworts</h1>
    <div v-for="(item, key) in data.data.email_hashed_password_combinations" :key="key">
      <p>
        <b>{{ key }}</b>
      </p>
      <p>{{ item }}</p>
    </div>
    <p>
      Ein <b>Hash-Wert</b> ist das Ergebnis einer sogenannten Hash-Funktion. Hash-Werte sind also
      kryptografisch-verschleierte Werte der Klartext-Passwörter. Sie können in der Regel nicht ohne
      Weiteres direkt zur Anmeldung bei einem Dienst verwendet werden.
    </p>
    <p>
      <b>Mögliche Auswirkungen:</b><br />
      Angreifer können aktiv den Hash-Wert angreifen und unter Umständen unerkannt in Ihre
      Unternehmensinfrastruktur eindringen. Entsprechend der Nutzerrechte können Dateien kopiert,
      modifiziert oder gelöscht werden. Darüber hinaus kann ein unberechtigter Zugriff auf
      E-Mail-Konten und Dienste anderer Anbieter möglich sein.
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
    display: flex;
    flex-direction: column;
  }
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
