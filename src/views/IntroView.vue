<template>
  <v-container class="about">
    <article>
      <h1 class="intro-header">Intoduction</h1>
    <p>
      Criminals use a variety of methods to obtain large amounts of valid access data. For
example, security vulnerabilities in IT systems of online services and companies are
attacked in order to copy user databases.
    </p>
    <br/>
    <p>
      Malware or phishing methods are also used to steal the access data directly from the
user. As a result, many collections of so-called data leaks containing access data are
traded and distributed publicly on the Internet.
    </p>
    <br/>
    <p>
      Criminals use leaked login names, email addresses and passwords to act on behalf of
your company’s employees and access, manipulate or delete your and your business
partners’ resources (e.g. online services, files, correspondences).
    </p>
    <br/>
    <p>
      The problem is amplified because many people use the same credentials on multiple
online services. With stolen access data for a single service, all user accounts secured
with it are thus at risk.
    </p>
    <br/>
    <p>
      This report gives you information about the extent of affected user accounts of your
domain. For this purpose, Identeco continuously collects these compromised creden-
tials from all areas of the Internet, processes them in a GDPR-compliant manner and
then provides you with protection against unauthorized access as a service.
    </p>
    <br/>
    <img alt="ad-footer" class="ad-banner" src="@/assets/Gefahr_Grafik.svg" />
  </article>
  </v-container
  ><v-container>
    <RouterLink to="/overview" @click="scrollToTop"
      ><v-btn block color="indigo-darken-3" variant="outlined" size="x-large" rounded="lg"
        >Continue to the Overview</v-btn
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
h1 {
  text-align: left;
}
.intro-header{
  padding-left: 10px;
  margin-bottom: 15px;
  color: #00426bce;
}
p {
  text-align: left;
  margin: 0.5rem;
}
article {
    padding-left: 12rem;
    padding-right: 12rem;
  }
img {
  margin-top: -14rem;
  margin-bottom: -12.5rem;
  margin-left: -22.5rem;
  margin-right: -22.5rem;
}
</style>
