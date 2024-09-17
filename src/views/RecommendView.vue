<template>
  <v-container class="about">
    <article>
      <v-container class="header-row">
    <RouterLink to="/sources">
      <v-btn class="rtrnbtn" icon="mdi-arrow-left" size="x-large" elevation="0"></v-btn>
    </RouterLink>
    <h1>Recommended Action</h1>
    </v-container>
    <p style="font-weight: bold">
      If an email address and password are part of a data leak, they can usually be used
directly to access company services. We <span style="text-decoration: underline">strongly</span> recommend to 
inform affected employees and change the passwords.
    </p>
    <br/>
    <p style="font-weight: bold">
      To identify affected employees, book our Identity Guard - Leak Monitoring subscrip-
tion today and identify affected email addresses in a privacy-compliant manner.
    </p>
    <br/>
    <p>
      We will be happy to provide you with an individual offer to protect yourself and your
company in the best possible way. Contact us directly or visit our website below.
    </p>
  </article>
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
.about {
  max-width: 64.5rem;
  font-size: 1.1em;
  line-height: 1.5;
  color: #5b6770;
  font-family: 'Fira Sans', Arial, Helvetica, sans-serif;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
}
img.resize {
  width: 75px;
  height: 75px;
  float: left;
  margin: 1rem 1rem;
}
h1 {
  text-align: center;
  color: #00426be0;
  font-size: 35px;
}
h2 {
  text-align: center;
  color: #00426be0;
  font-size: 30px;
}
.header-row{
  display: flex;
  align-items: center; /* Vertically center the button and text */
}
p {
  text-align: left;
}
article {
    padding-left: 12rem;
    padding-right: 12rem;
  }
</style>
