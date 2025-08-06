<script setup>
  const downloadCV = () => {
    const contractPath = '/documents/Resume.pdf';
    const link = document.createElement('a');
    link.href = contractPath;
    link.download = 'vida-mohammadi-resume.pdf';
    link.click();
  };
</script>
<template>
  <v-container class="mt-10">
    <v-row>
      <v-col cols="5">
        <v-img src="/my-portfolio/images/IMG_E3746.JPG" height="500px" />
      </v-col>
      <v-col cols="7">
        <div class="ml-8 mt-5">
          <p class="text-primary mb-3">Who am i?</p>
          <h1 class="font-weight-bold mb-3">
            I'm Vida Mohammadi, a FrontEnd developer
          </h1>
          <p class="">
            Built responsive web applications with Vue.js and Nuxt 3.
            <br />
            Migrated legacy Vue.js codebase to Nuxt 3.
            <br />
            Implemented advanced state management using Vuex and Pinia to
            optimize API data flow and performance.
          </p>
          <v-divider class="border-opacity-100 my-10" />
          <v-row>
            <v-col cols="6">
              <p>Name: Vida Mohammadi</p>
            </v-col>
            <v-col cols="6">
              <p>Location: Tehran, Iran</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <p>age: 28</p>
            </v-col>
            <v-col cols="6">
              <p>Email: m.vidamohammadi@gmail.com</p>
            </v-col>
          </v-row>
          <v-row>
            <v-btn class="bg-primary text-body-2 rounded-md mt-5 text-white" @click='downloadCV'>
              Download CV
            </v-btn>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped></style>
