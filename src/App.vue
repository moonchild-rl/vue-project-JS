<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const check1 = ref(false)
const check2 = ref(false)
const check3 = ref(false)
const check4 = ref(false)

async function resetChecks() {
  check1.value = false
  check2.value = false
  check3.value = false
  check4.value = false
}

//Get the current month & year
const months = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember'
]
const date = new Date()
const month = months[date.getMonth()]
const year = date.getFullYear()
</script>

<template>
  <body>
    <header>
      <a href="https://identeco.de/en/">
        <img
          alt="Identeco logo"
          class="logo"
          src="@/assets/logo-identeco-white.svg"
          width="175"
          height="25"
        />
      </a>

      <nav class="topnav">
        <a href="https://identeco.de/de/contact/" class="split"><v-btn>Kontakt</v-btn></a>
        <a href="https://identeco.de/de/products/" class="split"><v-btn>Ressourcen</v-btn></a>
      </nav>
    </header>
    <br />
    <v-container class="inner-body">
      <h1 class="caption-header">Account Leak Report {{ month }} {{ year }}</h1>
      <h2 class="caption-header">Für Ihre Domain example.net</h2>
      <img alt="Threat Banner" class="banner" src="@/assets/cyberlower.jpg" />
      <img alt="Identeco logo" src="@/assets/logo-identeco-white.svg" width="200" height="28.5" />
      <br />
      <v-container>
        <v-row align="center" justify="space-evenly">
          <v-col cols="12" md="4">
            <v-card title="Übersicht" subtitle="optional">
              <v-card-text>
                Übersicht der Veränderungen und kurze Beschreibung der Quellen
              </v-card-text>
              <v-card-actions>
                <RouterLink to="/" @click="check1 = true"
                  ><v-btn color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
                    >Overview</v-btn
                  ></RouterLink
                >
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card title="E-Mail-Adresse und Passwort im Klartext" subtitle="optional">
              <v-card-text>Klartext kurze Beschreibung </v-card-text>
              <v-card-actions>
                <RouterLink to="/clear" @click="check2 = true"
                  ><v-btn color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
                    >Passwords in Clear</v-btn
                  ></RouterLink
                >
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card title="Hash-Werte von  Passwörtern" subtitle="optional">
              <v-card-text> E-Mail-Adresse und Hash-Wert eines Passworts kombiniert </v-card-text>
              <v-card-actions>
                <RouterLink to="/hashed" @click="check3 = true"
                  ><v-btn color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
                    >Hash combinations</v-btn
                  ></RouterLink
                >
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card title="Ausschließlich E-Mail-Adresse" subtitle="optional">
              <v-card-text> Ausschließlich E-Mail-Adresse kurze Beschreibung </v-card-text>
              <v-card-actions>
                <RouterLink to="/onlymails" @click="check4 = true"
                  ><v-btn color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
                    >Emails only & Duplicates</v-btn
                  ></RouterLink
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <main><RouterView /></main>
      <br />
      <v-container>
        <v-alert
          v-if="check1 && check2 && check3 && check4"
          text="Sie haben alle Checks durchgeführt"
          title="Congratulations!"
          type="success"
          icon="$success"
          close-label="Close Alert"
          variant="tonal"
          border="start"
          closable
        ></v-alert>
        <v-alert
          v-if="!check1 && !check2 && !check3 && !check4"
          text="Bitte führen Sie alle Checks oben durch um Schwachstellen für Ihr Unternehmen zu verhindern"
          title="Ihr Unternehmen ist möglicherweise kompromittiert!"
          type="error"
          icon="$error"
        ></v-alert>
        <v-alert
          v-if="((check1 !== check2) !== check3) !== check4"
          text="Wenn nicht alle Checks durchgeführt werden besteht möglicherweise ein Angriffsvektor auf Ihr Unternehmen"
          title="Bitte führen Sie alle Checks durch"
          type="warning"
          icon="$warning"
        ></v-alert>
      </v-container>
      <br />
      <v-container>
        <v-card>
          <v-card-title v-if="check1 && check2 && check3 && check4">
            Empfohlene Maßnahme
          </v-card-title>
          <v-card-title v-else> Please complete all Checks! </v-card-title>
          <v-card-subtitle v-if="check1 && check2 && check3 && check4">
            Wenn eine E-Mail-Adresse und ein Passwort Teil eines Datenlecks sind, können diese in
            der Regel direkt für den Zugang zu Unternehmensdiensten verwendet
            werden.</v-card-subtitle
          >
          <v-card-subtitle v-else>
            Pass the Check by taking a look at all the different Threats!
          </v-card-subtitle>
          <v-card-text v-if="check1 && check2 && check3 && check4">
            Wir empfehlen <u>dringend</u>, die betroffenen Mitarbeiterinnen und Mitarbeiter zu
            informieren und die Passwörter zu ändern. Um betroffene Mitarbeitende zu ermitteln,
            buchen Sie noch heute unser Identity Guard - Leak Monitoring Abonnement und
            identifizieren Sie datenschutzkonform die betroffenen E-Mail-Adressen.
            <v-spacer></v-spacer> Schauen Sie sich alle Produkte rund um Identity Guard
            an!</v-card-text
          >
          <v-card-text v-else></v-card-text>
          <v-card-actions>
            <a href="https://identeco.de/en/products/"
              ><v-btn color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
                >Call to action</v-btn
              ></a
            >
          </v-card-actions>
        </v-card>
      </v-container>
      <br />
      <!-- Progress-Cirlce if all checks are completed -->
      <v-container class="progress-circle">
        <v-progress-circular
          v-if="check1 && check2 && check3 && check4"
          color="green"
          :model-value="
            ((Number(check1) + Number(check2) + Number(check3) + Number(check4)) * 100) / 4
          "
          :size="100"
          :width="15"
        >
          <template v-slot:default>
            {{ ((Number(check1) + Number(check2) + Number(check3) + Number(check4)) * 100) / 4 }} %
          </template></v-progress-circular
        >
        <!-- Progress-Cirlce if 3 checks are completed -->
        <v-progress-circular
          v-if="
            (check1 || check2 || check3 || check4) &&
            Number(check1) + Number(check2) + Number(check3) + Number(check4) == 3
          "
          color="amber-lighten-1"
          :model-value="
            ((Number(check1) + Number(check2) + Number(check3) + Number(check4)) * 100) / 4
          "
          :size="100"
          :width="15"
        >
          <template v-slot:default>
            {{ ((Number(check1) + Number(check2) + Number(check3) + Number(check4)) * 100) / 4 }} %
          </template></v-progress-circular
        >
        <!-- Progress-Cirlce if 2 checks are completed -->
        <v-progress-circular
          v-if="Number(check1) + Number(check2) + Number(check3) + Number(check4) == 2"
          color="amber"
          :model-value="
            ((Number(check1) + Number(check2) + Number(check3) + Number(check4)) * 100) / 4
          "
          :size="100"
          :width="15"
        >
          <template v-slot:default>
            {{ ((Number(check1) + Number(check2) + Number(check3) + Number(check4)) * 100) / 4 }} %
          </template></v-progress-circular
        >
        <!-- Progress-Cirlce if 1 check is completed -->
        <v-progress-circular
          v-if="Number(check1) + Number(check2) + Number(check3) + Number(check4) == 1"
          color="orange"
          :model-value="
            ((Number(check1) + Number(check2) + Number(check3) + Number(check4)) * 100) / 4
          "
          :size="100"
          :width="15"
        >
          <template v-slot:default>
            {{ ((Number(check1) + Number(check2) + Number(check3) + Number(check4)) * 100) / 4 }} %
          </template></v-progress-circular
        >
        <!-- Progress-Cirlce if no check is completed -->
        <v-progress-circular
          v-if="Number(check1) + Number(check2) + Number(check3) + Number(check4) == 0"
          color="blue-darken-3"
          :model-value="
            ((Number(check1) + Number(check2) + Number(check3) + Number(check4)) * 100) / 4
          "
          :size="100"
          :width="15"
        >
          <template v-slot:default>
            {{ ((Number(check1) + Number(check2) + Number(check3) + Number(check4)) * 100) / 4 }} %
          </template></v-progress-circular
        >
        <h3>Check-Fortschritt</h3>
      </v-container>
      <br />
      <v-container class="rst-container">
        <v-btn @click="resetChecks()" color="indigo-darken-3" variant="outlined" class="rstbtn"
          >Reset all Checks</v-btn
        ></v-container
      >
      <v-container><p>hier könnte ihr footer stehen</p></v-container>
    </v-container>
  </body>
</template>

<style scoped>
body {
  max-width: 87.5rem;
  margin: 0 auto;
  background: #e5ecf1;
}

header {
  line-height: 1;
  max-height: 12vh;
  background-color: rgb(5, 66, 106);
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.topnav .split {
  float: right;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.banner {
  display: block;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -5rem;
}

.caption-header {
  text-align: left;
  position: relative;
  z-index: 1;
}

h1,
h2,
h3 {
  text-align: center;
}

.progress-circle {
  text-align: center;
}
.rst-container {
  display: flex;
  margin-left: 80%;
}
.rstbtn {
  background-color: rgb(245, 179, 51);
}

@media only screen and (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 2rem;
  }

  nav {
    width: 90%;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .inner-body {
    max-width: 64.5rem;
    font-size: 1.1em;
    line-height: 1.5;
  }
}
@media only screen and (max-width: 600px) {
  body {
    max-width: 100%;
  }

  nav {
    display: none;
  }
}
</style>
