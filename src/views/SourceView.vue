<template>
  <v-container class="about">
    <div style="position: relative; right: -6.5em; display: flex; flex-direction: row; align-items: center;">
      <RouterLink to="/email">
        <v-btn class="rtrnbtn" icon="mdi-arrow-left" size="x-large" elevation="0"></v-btn>
      </RouterLink>
      <h1>Further explanation of Results</h1>
    </div>
    <article style="display: flex; flex-direction: column;">
    <h1>Data sources for this report</h1>
    <p>
      Identeco’s IT security experts collect stolen identity data from appropriate sources for
analysis. Overall, the analyzed data for your domain {{ data.domain }} was found within
{{ data.data.sources.collections }} publicly available leak collections on the Internet. Account data concerning your
domain was extracted from {{ data.data.sources.files }} files. This means that on average {{ data.data.sources.avg_identities_per_collection }} data points
related to your domain are included in each collection.
    </p>
    <br/>
    <img src="@/assets/data-sources-graph.svg" alt="sketch" class="resize" />
    <br/>
    <v-container>
    <RouterLink to="/recommendation" @click="scrollToTop()"
      ><v-btn block color="indigo-darken-3" variant="tonal" size="x-large" rounded="lg"
        >Continue to Recommended Actions</v-btn
      ></RouterLink
    >
  </v-container>
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
img {
 justify-content: center;
 align-content: center;
 scale: 60%;
 margin-top: -6rem;
 margin-bottom: -6rem;
}
.header-row{
  display: flex;
  align-items: center; /* Vertically center the button and text */
}
h1 {
  text-align: center;
  color: #00426be0;
  font-size: 35px;
  width: fit-content;
}
h2 {
  text-align: center;
  color: #00426be0;
  font-size: 30px;
}
p {
  text-align: left;
}
article {
    padding-left: 12rem;
    padding-right: 12rem;
  }
</style>
