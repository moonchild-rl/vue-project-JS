<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const check1 = ref(false)
const check2 = ref(false)
const check3 = ref(false)
const check4 = ref(false)
const check5 = ref(false)

async function resetChecks() {
  check1.value = false
  check2.value = false
  check3.value = false
  check4.value = false
  check5.value = false
}

//Get the current month & year
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const date = new Date()
const month = months[date.getMonth()]
const year = date.getFullYear()

//Links for Footer
const links = [
        ['Home', 'https://identeco.de/en/'],
        ['Products', 'https://identeco.de/en/products/'],
        ['About Us', 'https://identeco.de/en/about/']
        /*
        ['Blog', 'https://identeco.de/en/blog/']
        ['Press', 'https://identeco.de/en/press/']
        ['Contact', 'https://identeco.de/en/contact/']
        ['Privacy Policy', 'https://identeco.de/en/privacy_policy/']
        ['Imprint', 'https://identeco.de/en/imprint/']
        */
      ]
</script>
<script> 
  export default {
    data: () => ({
      /*
      links: [
        ['Home', 'https://identeco.de/en/'],
        ['Products', 'https://identeco.de/en/products/'],
        ['About Us', 'https://identeco.de/en/about/']
        ['Blog', 'https://identeco.de/en/blog/']
        ['Blog', 'https://identeco.de/en/blog/']
        ['Press', 'https://identeco.de/en/press/']
        ['Contact', 'https://identeco.de/en/contact/']
        ['Privacy Policy', 'https://identeco.de/en/privacy_policy/']
        ['Imprint', 'https://identeco.de/en/imprint/']
      ],
      */
    }),
  }
</script>

<template>
  <body class="outerbody">
    <div class="innerdiv">
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
          <a href="https://identeco.de/en/contact/" class="split"><v-btn>Contact</v-btn></a>
          <a href="https://identeco.de/en/products/" class="split"><v-btn>Ressources</v-btn></a>
        </nav>
      </header>
      <div class="banner">
          <img alt="Threat Banner" class="bannerimage" src="@/assets/cyberlower.jpg" />
          <img
            alt="Identeco logo"
            class="bannerlogo"
            src="@/assets/logo-identeco-white.svg"
            width="200"
            height="28.5"
          />
    </div>
      <v-container class="text-body">
        <div class="banner">
          <img alt="Threat Banner" class="bannerimage" src="@/assets/cyberlower.jpg" />
          <img
            alt="Identeco logo"
            class="bannerlogo"
            src="@/assets/logo-identeco-white.svg"
            width="200"
            height="28.5"
          />
          <div class="caption-header">
            <h1 class="bannerheader">Account Leak Report {{ month }} {{ year }}</h1>
            <h2 class="bannerheader" style="font-size: 30px">FOR YOUR DOMAIN example.net</h2>
          </div>
        </div>
        <br />

        <main><RouterView /></main>

        <v-container>
          <v-row align="center" justify="space-evenly">
            <v-col cols="12" md="4">
              <v-card title="Übersicht" subtitle="optional">
                <v-card-text>
                  Übersicht der Veränderungen und kurze Beschreibung der Quellen
                </v-card-text>
                <v-card-actions>
                  <RouterLink to="/overview" @click="check1 = true"
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
                  <RouterLink to="/email" @click="check4 = true"
                    ><v-btn color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
                      >Emails only & Duplicates</v-btn
                    ></RouterLink
                  >
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card title="Sources" subtitle="optional">
                <v-card-text> Checkkarte </v-card-text>
                <v-card-actions>
                  <RouterLink to="/sources" @click="check5 = true"
                    ><v-btn color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
                      >Recommendation</v-btn
                    ></RouterLink
                  >
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card title="Letzte Karte nach Check5" subtitle="optional">
                <v-card-text> Checkkarte </v-card-text>
                <v-card-actions>
                  <RouterLink to="/recommendation"
                    ><v-btn color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
                      >Recommendation</v-btn
                    ></RouterLink
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <br />
        <v-container>
          <v-alert
            v-if="check1 && check2 && check3 && check4 && check5"
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
            v-if="!check1 && !check2 && !check3 && !check4 && !check5"
            text="Bitte führen Sie alle Checks oben durch um Schwachstellen für Ihr Unternehmen zu verhindern"
            title="Ihr Unternehmen ist möglicherweise kompromittiert!"
            type="error"
            icon="$error"
          ></v-alert>
          <v-alert
            v-if="(((check1 !== check2) !== check3) !== check4) !== check5"
            text="Wenn nicht alle Checks durchgeführt werden besteht möglicherweise ein Angriffsvektor auf Ihr Unternehmen"
            title="Bitte führen Sie alle Checks durch"
            type="warning"
            icon="$warning"
          ></v-alert>
        </v-container>
        <br />
        <v-container>
          <v-card>
            <v-card-title v-if="check1 && check2 && check3 && check4 && check5">
              Empfohlene Maßnahme
            </v-card-title>
            <v-card-title v-else> Please complete all Checks! </v-card-title>
            <v-card-subtitle v-if="check1 && check2 && check3 && check4 && check5">
              Wenn eine E-Mail-Adresse und ein Passwort Teil eines Datenlecks sind, können diese in
              der Regel direkt für den Zugang zu Unternehmensdiensten verwendet
              werden.</v-card-subtitle
            >
            <v-card-subtitle v-else>
              Pass the Check by taking a look at all the different Threats!
            </v-card-subtitle>
            <v-card-text v-if="check1 && check2 && check3 && check4 && check5">
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
            v-if="check1 && check2 && check3 && check4 && check5"
            color="green"
            :model-value="
              ((Number(check1) +
                Number(check2) +
                Number(check3) +
                Number(check4) +
                Number(check5)) *
                100) /
              5
            "
            :size="100"
            :width="15"
          >
            <template v-slot:default>
              {{
                ((Number(check1) +
                  Number(check2) +
                  Number(check3) +
                  Number(check4) +
                  Number(check5)) *
                  100) /
                5
              }}
              %
            </template></v-progress-circular
          >
          <!-- OLD CIRCLES 
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
              {{ ((Number(check1) + Number(check2) + Number(check3) + Number(check4)) * 100) / 4 }}
              %
            </template></v-progress-circular
          >
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
              {{ ((Number(check1) + Number(check2) + Number(check3) + Number(check4)) * 100) / 4 }}
              %
            </template></v-progress-circular
          >
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
              {{ ((Number(check1) + Number(check2) + Number(check3) + Number(check4)) * 100) / 4 }}
              %
            </template></v-progress-circular
          >
          -->
          <!-- Progress-Cirlce if no check is completed -->
          <v-progress-circular
            v-if="
              Number(check1) + Number(check2) + Number(check3) + Number(check4) + Number(check5) ==
              0
            "
            color="blue-darken-3"
            :model-value="
              ((Number(check1) +
                Number(check2) +
                Number(check3) +
                Number(check4) +
                Number(check5)) *
                100) /
              5
            "
            :size="100"
            :width="15"
          >
            <template v-slot:default>
              {{
                ((Number(check1) +
                  Number(check2) +
                  Number(check3) +
                  Number(check4) +
                  Number(check5)) *
                  100) /
                5
              }}
              %
            </template></v-progress-circular
          >
          <!-- Progress-Cirlce if some checks are completed -->
          <v-progress-circular
            v-if="
              Number(check1) + Number(check2) + Number(check3) + Number(check4) + Number(check5) >
                0 &&
              Number(check1) + Number(check2) + Number(check3) + Number(check4) + Number(check5) <=
                5
            "
            color="amber"
            :model-value="
              ((Number(check1) +
                Number(check2) +
                Number(check3) +
                Number(check4) +
                Number(check5)) *
                100) /
              5
            "
            :size="100"
            :width="15"
          >
            <template v-slot:default>
              {{
                ((Number(check1) +
                  Number(check2) +
                  Number(check3) +
                  Number(check4) +
                  Number(check5)) *
                  100) /
                5
              }}
              %
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
      </v-container>
      <!-- Footer -->
      <v-footer class="bg-grey-darken-1">
    <v-row justify="center" no-gutters>
      <a v-for="(link, index) in links" :key="index" :href="link[1]"><v-btn class="mx-2"
        color="white"
        rounded="xl"
        variant="text">{{link[0]}}</v-btn></a>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Identeco</strong>
      </v-col>
    </v-row>
  </v-footer>
    </div>
  </body>
</template>

<style scoped>
body .outerbody {
  background: #c2c6c9;
}
body .innerdiv {
  max-width: 87.5rem;
  margin: 0 auto;
  background: #fff;
}

/* Fira Sans Regular */
@font-face {
  font-family: 'Fira Sans';
  src: url('fonts/FiraSans/FiraSans-Regular.ttf');
  src: url('fonts/FiraSans/FiraSans-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

/* Fira Sans Italic */
@font-face {
  font-family: 'Fira Sans';
  src: url('fonts/FiraSans/FiraSans-Italic.ttf');
  src: url('fonts/FiraSans/FiraSans-Italic.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
}

/* Fira Sans Bold */
@font-face {
  font-family: 'Fira Sans';
  src: url('fonts/FiraSans/FiraSans-Bold.ttf');
  src: url('fonts/FiraSans/FiraSans-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}
/* Fira Sans BoldItalic */
@font-face {
  font-family: 'Fira Sans';
  src: url('fonts/FiraSans/FiraSans-BoldItalic.ttf');
  src: url('fonts/FiraSans/FiraSans-BoldItalic.ttf') format('truetype');
  font-weight: 700;
  font-style: italic;
}

/* Fira Sans Thin */
@font-face {
  font-family: 'Fira Sans';
  src: url('fonts/FiraSans/FiraSans-Thin.ttf');
  src: url('fonts/FiraSans/FiraSans-Thin.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
}

/* Fira Sans ThinItalic */
@font-face {
  font-family: 'Fira Sans';
  src: url('fonts/FiraSans/FiraSans-ThinItalic.ttf');
  src: url('fonts/FiraSans/FiraSans-ThinItalic.ttf') format('truetype');
  font-weight: 100;
  font-style: italic;
}

/* Fira Sans Light */
@font-face {
  font-family: 'Fira Sans';
  src: url('fonts/FiraSans/FiraSans-Light.ttf');
  src: url('fonts/FiraSans/FiraSans-Light.ttf') format('truetype');
  font-weight: 200;
  font-style: normal;
}

/* Fira Sans LightItalic */
@font-face {
  font-family: 'Fira Sans';
  src: url('fonts/FiraSans/FiraSans-LightItalic.ttf');
  src: url('fonts/FiraSans/FiraSans-LightItalic.ttf') format('truetype');
  font-weight: 200;
  font-style: italic;
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
  position: relative;
}

.bannerimage {
  display: block;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.bannerlogo {
  position: absolute;
  bottom: 12rem;
  right: 4rem;
  width: 210px;
  height: 30px;
}

.caption-header {
  position: absolute;
  text-align: left;
  bottom: 3rem;
  font-size: 25px;
}

.bannerheader {
  text-align: left;
  margin-left: 20px;
  color: #fff;
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
  .text-body {
    max-width: 64.5rem;
    font-size: 1.1em;
    line-height: 1.5;
    color: #5b6770;
    font-family: 'Fira Sans', Arial, Helvetica, sans-serif;
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
