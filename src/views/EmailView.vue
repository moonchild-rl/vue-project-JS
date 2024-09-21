<template>
  <v-container class="about">
    <div class="header-row">
      <RouterLink to="/hashed" @click="this.$emit('setCheck', 3)">
        <v-btn class="rtrnbtn" icon="mdi-arrow-left" size="x-large" elevation="0"></v-btn>
      </RouterLink>
      <h1>Further explanation of Results</h1>
    </div>
    <article>
      <v-container>
        <h2>
          Email address only
          <span class="risk">(Risk: Low/Medium)</span>
        </h2>
        <v-container>
          <div>
            <img src="@/assets/at.svg" alt="at-sign" class="resize" />
            <p>
              <span style="font-weight: bold">
                {{ data.data.email.current }}
                of these <span class="risk">{{ data.data.email.new }}</span> new distinct email
                adresses</span
              ><br />
              could be found in our database of leaks.
            </p>
          </div></v-container
        >
        <p>
          <span style="font-weight: bold">Possible consequences:</span> With valid email addresses,
          the volume of SPAM increases and attackers are more successful in delivering malware. The
          risk of targeted social en- gineering attacks, e.g. email phishing, also increases when
          attackers use supposedly correct senders or co-recipients in emails. A special type of
          social engineering attack is CEO fraud, in which the transfer of large sums of money to an
          attackers bank account is ordered in the name of the CEO or another authorized person.
        </p>
        <br />
        <p v-if="data.data.email.new > 0">
          Because this seems to be an issue for your company we
          <span style="text-decoration: underline">strongly</span> advise to inform affected
          employees and ensure they can change their emails. Obviously they should also create a new
          password even if the previous one was not found in the database of leaks.
        </p>
      </v-container>
      <br />
      <v-container>
        <RouterLink to="/sources" @click="scrollToTop(), this.$emit('setCheck', 5)"
          ><v-btn
            block
            color="indigo-darken-3"
            variant="tonal"
            size="x-large"
            rounded="lg"
            class="continue_btn"
            >Continue to Data Sources</v-btn
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
img.resize {
  width: 75px;
  height: 75px;
  float: left;
  margin: 1rem 1rem;
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
}
h2 {
  text-align: center;
  color: #00426be0;
  font-size: 30px;
}
p {
  text-align: left;
}
.risk {
  font-weight: bold;
  color: rgba(245, 180, 51, 0.8);
}
article {
  padding-left: 12rem;
  padding-right: 12rem;
}
.continue_btn {
  background-color: rgb(245, 179, 51);
}
</style>
