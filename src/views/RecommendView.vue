<template>
  <v-container class="about">
    <div class="header-row">
      <RouterLink to="/sources" @click="this.$emit('setCheck', 5)">
        <v-btn class="rtrnbtn" icon="mdi-arrow-left" size="x-large" elevation="0"></v-btn>
      </RouterLink>
      <h1>Recommended Action</h1>
    </div>
    <article>
      <p style="font-weight: bold">
        If an email address and password are part of a data leak, they can usually be used directly
        to access company services. We
        <span style="text-decoration: underline">strongly</span> recommend to inform affected
        employees and change the passwords.
      </p>
      <br />
      <p style="font-weight: bold">
        To identify affected employees, book our Identity Guard - Leak Monitoring subscription today
        and identify affected email addresses in a privacy-compliant manner.
      </p>
      <br />
      <p>
        We will be happy to provide you with an individual offer to protect yourself and your
        company in the best possible way. Contact us directly or visit our website below.
      </p>
      <br />
      <h3>Contact:</h3>
      <p>Phone: +49 (0) 228 286 285 81</p>
      <p>Email: <a href="mailto:contact@identeco.de">contact@identeco.de</a></p>
      <p>
        Web:
        <a href="https://identeco.de/"
          ><v-btn density="compact" elevation="0" variant="text" class="rstbtn">Identeco</v-btn></a
        >
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
    min-height: 75vh;
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
.rstbtn {
  background-color: rgb(245, 179, 51);
}
.header-row {
  position: relative;
  right: -6.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
}
p {
  text-align: left;
}
article {
  padding-left: 12rem;
  padding-right: 12rem;
}
</style>
