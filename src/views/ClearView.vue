<template>
  <v-container class="about">
    <div class="header-row">
      <RouterLink to="/overview" @click="this.$emit('setCheck', 1)">
        <v-btn class="rtrnbtn" icon="mdi-arrow-left" size="x-large" elevation="0"></v-btn>
      </RouterLink>
      <h1>Further explanation of Results</h1>
    </div>
    <article>
      <v-container>
        <h2>Email adresses and passwords in clear</h2>
        <h2 style="color: red; font-weight: bold">(Risk: High)</h2>
        <div>
          <img src="@/assets/lock-open-duotone_red.svg" alt="red-lock" class="resize" />
          <p>
            <span style="font-weight: bold">
              {{
                (
                  data.data.email_cleartext_password_combinations.current / data.data.total.current
                ).toFixed(2)
              }}
              % ({{ data.data.email_cleartext_password_combinations.current }} of these
              <span style="color: red">
                {{ data.data.email_cleartext_password_combinations.new }}</span
              >
              new hits)</span
            >
          </p>
          <p>
            of the distinct combinations of credentials contain the email address and password in
            clear.
          </p>
          <br />
        </div>
        <p>
          <span style="font-weight: bold">Possible consequences:</span> Attackers can penetrate your
          corporate infrastructure unde- tected. According to user rights, files can be copied,
          modified or deleted. In addition, unauthorized access to email accounts and services of
          your business partners may be possible.
        </p>
        <br />
        <p v-if="data.data.email_cleartext_password_combinations.new > 0">
          This is the worst type of breach and has to be dealt with under all circumstances. We
          <span style="text-decoration: underline">strongly</span> advise to inform affected
          employees and change all involved passwords immediately.
        </p>
      </v-container>
      <br />
      <v-container>
        <RouterLink to="/hashed" @click="scrollToTop(), this.$emit('setCheck', 3)"
          ><v-btn
            block
            color="indigo-darken-3"
            variant="tonal"
            size="x-large"
            rounded="lg"
            class="continue_btn"
            >Continue to Hashed Combinations</v-btn
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
article {
  padding-left: 12rem;
  padding-right: 12rem;
}
.continue_btn {
  background-color: rgb(245, 179, 51);
}
</style>
