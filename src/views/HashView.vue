<template>
  <v-container class="about">
    <article>
      <v-container class="header-row">
    <RouterLink to="/clear">
      <v-btn class="rtrnbtn" icon="mdi-arrow-left" size="x-large" elevation="0"></v-btn>
    </RouterLink>
    <h1>Further explanation of Results</h1>
    </v-container>
    <v-container>
      <h2>
        Email address and hash value of a password
        <span style="color: orange; font-weight: bold">(Risk: Medium)</span>
      </h2>
      <div>
        <img src="@/assets/unlock-duotone.svg" alt="open-lock" class="resize" />
        <p>
          <span style="font-weight: bold">
            {{
              (
                data.data.email_hashed_password_combinations.current / data.data.total.current
              ).toFixed(2)
            }}
            % ({{ data.data.email_hashed_password_combinations.current }} of these <span style="color:orange">
            {{ data.data.email_hashed_password_combinations.new }}</span> new hits)</span
          ></p><p>
          of the distinct combinations of credentials contain the email address and the
          hash value of a password.
        </p>
        </div>
        <br/>
      <p>
        A hash value is the result of a so-called hash function, these are cryptographically ob-
fuscated values of the plaintext passwords. They cannot be used directly as a password
to log in to a service. However, attackers regularly succeed in calculating the original
plaintext passwords from the hash values through vulnerabilities and so-called brute
force attacks.
      </p>
      <br/>
      <p>
        <span style="font-weight: bold">Possible consequences:</span> Attackers can actively attack the hash value and, under cer-
tain circumstances, can penetrate your company infrastructure undetected. According
to the user rights, files can be copied, modified or deleted. In addition, unauthorized
access to email accounts and services of your business partners may be possible.
      </p>
    </v-container>
    <br/>
    <v-container>
    <RouterLink to="/email" @click="scrollToTop(); check4 = true"
      ><v-btn block color="indigo-darken-3" variant="tonal" size="x-large" rounded="lg"
        >Continue to Emails only</v-btn
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
img.resize {
  width: 75px;
  height: 75px;
  float: left;
  margin: 1rem 1rem;
}
.header-row{
  display: flex;
  align-items: center; /* Vertically center the button and text */
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
.vli {
  text-align: center;
}
article {
    padding-left: 12rem;
    padding-right: 12rem;
  }
</style>
