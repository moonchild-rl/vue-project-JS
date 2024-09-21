<template>
  <v-container class="about">
    <div class="header-row">
      <RouterLink to="/email" @click="this.$emit('setCheck', 4)">
        <v-btn class="rtrnbtn" icon="mdi-arrow-left" size="x-large" elevation="0"></v-btn>
      </RouterLink>
      <h1>Further explanation of Results</h1>
    </div>
    <article style="display: flex; flex-direction: column">
      <h1 class="heel-step">Data sources for this report</h1>
      <p>
        Identeco’s IT security experts collect stolen identity data from appropriate sources for
        analysis. Overall, the analyzed data for your domain {{ data.domain }} was found within
        {{ data.data.sources.collections }} publicly available leak collections on the Internet.
        Account data concerning your domain was extracted from {{ data.data.sources.files }} files.
        This means that on average {{ data.data.sources.avg_identities_per_collection }} data points
        related to your domain are included in each collection.
      </p>
      <div class="heel">
        <img src="@/assets/folders.svg" alt="folders" class="resize" />
        <p>
          <span style="font-weight: bold"> {{ data.data.sources.collections }} </span>
          Leak collections
        </p>
      </div>
      <div class="heel">
        <img src="@/assets/copy.svg" alt="copy" class="resize" />
        <p>
          <span style="font-weight: bold"> {{ data.data.sources.files }} </span>
          Number of files
        </p>
      </div>
      <div class="heel">
        <img src="@/assets/user-unlock.svg" alt="user-unlock" class="resize" />
        <p>
          <span style="font-weight: bold">
            {{ data.data.sources.avg_identities_per_collection }}
          </span>
          &#8709; Identities per collection
        </p>
      </div>
      <v-container>
        <RouterLink to="/recommendation" @click="scrollToTop()"
          ><v-btn
            block
            color="indigo-darken-3"
            variant="tonal"
            size="x-large"
            rounded="lg"
            class="continue_btn"
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
  emits: ['setCheck'],
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
img {
  justify-content: center;
  align-content: center;
  scale: 60%;
  margin-top: -6rem;
  margin-bottom: -6rem;
}
img.resize {
  width: 75px;
  height: 75px;
  float: left;
  margin: 1rem 1rem;
}
.heel {
  display: flex;
  align-items: center; /* Aligns the items (image and paragraph) vertically in the center */
  margin-top: 3rem;
  margin-bottom: 1rem;
}
.heel-step {
  margin-bottom: 1rem;
}
.header-row {
  position: relative;
  right: -6.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
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
.continue_btn {
  background-color: rgb(245, 179, 51);
}
</style>
