<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const check1 = ref(false)
const check2 = ref(false)
const check3 = ref(false)
const check4 = ref(false)
const check5 = ref(false)

function setCheck(index) {
  switch (index) {
    case 1:
      check1.value = true
      break
    case 2:
      check2.value = true
      break
    case 3:
      check3.value = true
      break
    case 4:
      check4.value = true
      break
    case 5:
      check5.value = true
      break
    default:
      break
  }
}

//Get the current date & year
const date = new Date()
const year = date.getFullYear()

//Links for Footer
const links = [
  ['Home', 'https://identeco.de/en/'],
  ['Products', 'https://identeco.de/en/products/'],
  ['About Us', 'https://identeco.de/en/about/'],
  ['Blog', 'https://identeco.de/en/blog/'],
  ['Press', 'https://identeco.de/en/press/'],
  ['Contact', 'https://identeco.de/en/contact/'],
  ['Privacy Policy', 'https://identeco.de/en/privacy_policy/'],
  ['Imprint', 'https://identeco.de/en/imprint/']
]
</script>
<script>
//import jsonData to use on first page
import jsonData from './assets/jsonData.json'
export default {
  data: () => {
    return {
      data: jsonData
    }
  },
  //Compute month and year from the Json for the banner
  computed: {
    // Extract the month and year from changes_since
    banner_month() {
      const date = new Date(this.data.changes_since)
      // Get month name, adjust as Date.getMonth() is zero-indexed (0 = January)
      return date.toLocaleString('default', { month: 'long' })
    },
    banner_year() {
      const date = new Date(this.data.changes_since)
      return date.getFullYear()
    },
    checkSum() {
      const sum =
        Number(this.check1) +
        Number(this.check2) +
        Number(this.check3) +
        Number(this.check4) +
        Number(this.check5)
      return sum
    }
  },
  methods: {
    // Scroll back to the top of the page
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <body class="outerbody">
    <div class="innerdiv">
      <!-- Header -->
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
      <!-- Banner -->
      <div class="banner">
        <img alt="Threat Banner" class="bannerimage" src="@/assets/cyberlower.jpg" />
        <img
          alt="Identeco logo"
          class="bannerlogo"
          src="@/assets/logo-identeco-white.svg"
          width="200"
          height="28.5"
        />
        <div class="caption-div">
          <h1 class="caption-text" style="font-size: 50px">
            Account Leak Report {{ banner_month }} {{ banner_year }}
          </h1>
          <h2 class="caption-text" style="font-size: 30px">For Your Domain "{{ data.domain }}"</h2>
        </div>
      </div>
      <div
        style="
          display: grid;
          grid-template-columns: [start] 1.5fr [content-start] 6fr [content-end] 1.5fr [end];
        "
      >
        <div class="drawer">
          <v-list-item title="Leak Report" subtitle="Content"></v-list-item>
          <v-divider></v-divider>
          <v-list-item
            to="/overview"
            link
            title="Overview"
            @click="scrollToTop(), (check1 = true)"
          ></v-list-item>
          <v-list-item
            to="/clear"
            link
            title="Clear Passwords"
            @click="scrollToTop(), (check2 = true)"
          ></v-list-item>
          <v-list-item
            to="/hashed"
            link
            title="Hashes"
            @click="scrollToTop(), (check3 = true)"
          ></v-list-item>
          <v-list-item
            to="/email"
            link
            title="Emails"
            @click="scrollToTop(), (check4 = true)"
          ></v-list-item>
          <v-list-item
            to="/sources"
            link
            title="Sources"
            @click="scrollToTop(), (check5 = true)"
          ></v-list-item>
          <v-list-item to="/recommendation" link title="Recommendation"></v-list-item>
        </div>
        <!-- Text-body -->
        <v-container class="text-body" style="grid-column: content-start/content-end">
          <main><RouterView @set-check="setCheck" /></main>

          <v-container>
            <v-row align="center" justify="space-evenly">
              <v-col cols="12" md="4">
                <v-card title="Overview">
                  <v-card-text> See the new data available </v-card-text>
                  <v-card-actions>
                    <RouterLink to="/overview" @click="scrollToTop(), (check1 = true)"
                      ><v-btn color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
                        >Overview</v-btn
                      ></RouterLink
                    >
                  </v-card-actions>
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card title="Clear Passwords">
                  <v-card-text>Passwords that were found in plain text</v-card-text>
                  <v-card-actions>
                    <RouterLink to="/clear" @click="scrollToTop(), (check2 = true)"
                      ><v-btn color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
                        >Clear passwords</v-btn
                      ></RouterLink
                    >
                  </v-card-actions>
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card title="Hashes">
                  <v-card-text> Hashes found with an email </v-card-text>
                  <v-card-actions>
                    <RouterLink to="/hashed" @click="scrollToTop(), (check3 = true)"
                      ><v-btn color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
                        >Hashes of a password</v-btn
                      ></RouterLink
                    >
                  </v-card-actions>
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card title="Email only">
                  <v-card-text> Only an email was found </v-card-text>
                  <v-card-actions>
                    <RouterLink to="/email" @click="scrollToTop(), (check4 = true)"
                      ><v-btn color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
                        >Only email</v-btn
                      ></RouterLink
                    >
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card title="Sources">
                  <v-card-text> Sources of the Database </v-card-text>
                  <v-card-actions>
                    <RouterLink to="/sources" @click="scrollToTop(), (check5 = true)"
                      ><v-btn color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
                        >Sources</v-btn
                      ></RouterLink
                    >
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card title="Recommended Action">
                  <v-card-text> Recommendations for actions to take </v-card-text>
                  <v-card-actions>
                    <RouterLink to="/recommendation" @click="scrollToTop()"
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
              text="You read the entire report"
              title="Success"
              type="success"
              icon="$success"
              close-label="Close Alert"
              variant="tonal"
              border="start"
              closable
            ></v-alert>
            <v-alert
              v-if="
                Number(check1) +
                  Number(check2) +
                  Number(check3) +
                  Number(check4) +
                  Number(check5) ==
                0
              "
              text="Your company might be in danger, please read the entire report"
              title="Danger"
              type="error"
              icon="$error"
              closable
            ></v-alert>
            <v-alert
              v-if="
                Number(check1) + Number(check2) + Number(check3) + Number(check4) + Number(check5) >
                  0 &&
                Number(check1) + Number(check2) + Number(check3) + Number(check4) + Number(check5) <
                  5
              "
              text="Please read the entire report"
              title="Warning"
              type="warning"
              icon="$warning"
              closable
            ></v-alert>
          </v-container>
          <br />
          <v-container>
            <v-card>
              <v-card-title> Take action now and secure your company's data! </v-card-title>
              <v-card-subtitle></v-card-subtitle>
              <v-card-text> <v-spacer></v-spacer> </v-card-text>
              <v-card-actions>
                <a href="https://identeco.de/en/products/"
                  ><v-btn color="indigo-darken-3" variant="tonal" size="x-large" rounded="lg"
                    >Book Identity Guard now!</v-btn
                  ></a
                >
              </v-card-actions>
            </v-card>
          </v-container>
          <br />
          <v-container class="progress-circle">
            <!-- Progress-Cirlce if ALL checks are completed -->
            <v-progress-circular
              v-if="
                Number(check1) +
                  Number(check2) +
                  Number(check3) +
                  Number(check4) +
                  Number(check5) ==
                5
              "
              color="green"
              :model-value="(checkSum * 100) / 5"
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
            <!-- Progress-Cirlce if NO checks are completed -->
            <v-progress-circular
              v-else-if="
                Number(check1) +
                  Number(check2) +
                  Number(check3) +
                  Number(check4) +
                  Number(check5) ==
                0
              "
              color="red"
              :model-value="(checkSum * 100) / 5"
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
            <!-- Progress-Cirlce if NOT all but SOME checks are completed -->
            <v-progress-circular
              v-else
              color="amber"
              :model-value="(checkSum * 100) / 5"
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

            <h3>Check-Progress</h3>
          </v-container>
          <br />
        </v-container>
      </div>
      <!-- Footer -->
      <v-footer class="bg-grey-darken-1">
        <v-row justify="center" no-gutters>
          <a v-for="(link, index) in links" :key="index" :href="link[1]"
            ><v-btn class="mx-2" color="white" rounded="xl" variant="text">{{ link[0] }}</v-btn></a
          >
          <v-col class="text-center mt-4" cols="12"> {{ year }} — <strong>Identeco</strong> </v-col>
        </v-row>
      </v-footer>
    </div>
  </body>
</template>

<style scoped>
body .outerbody {
  background: #c2c6c9;
}
.innerdiv {
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

.caption-div {
  position: absolute;
  bottom: 4.5rem;
  left: 13.5rem;
}

.caption-text {
  text-align: left;
  margin-left: 1rem;
  color: #ffffffdc;
}

.drawer {
  position: sticky;
  float: left;
  top: 2em;
  margin: 2em;
  margin-top: 3em;
  grid-column: start/content-start;
  align-self: start;
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
