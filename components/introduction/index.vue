<script setup>
  import {useDisplay} from 'vuetify';

  const {lgAndUp} = useDisplay();
  const isDesktop = computed(() => lgAndUp.value);
  const downloadCV = () => {
    const contractPath = '/my-portfolio/documents/Resume.pdf';
    const link = document.createElement('a');
    link.href = contractPath;
    link.download = 'vida-mohammadi-resume.pdf';
    link.click();
  };
</script>
<template>
  <v-container class="mt-10">
    <v-row>
      <v-col v-if="isDesktop" cols="5">
        <v-img src="/my-portfolio/images/IMG_E3746.JPG" height="500px" />
      </v-col>
      <v-col cols="12" lg="7">
        <div class="ml-lg-8 mt-5 text-lg-body-1 text-caption">
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
          <v-divider v-if="isDesktop" class="border-opacity-100 my-10" />
          <v-row v-if="isDesktop">
            <v-col cols="6">
              <p>Name: Vida Mohammadi</p>
            </v-col>
            <v-col cols="6">
              <p>Location: Tehran, Iran</p>
            </v-col>
          </v-row>
          <v-row v-if="isDesktop">
            <v-col cols="6">
              <p>age: 28</p>
            </v-col>
            <v-col cols="6">
              <p>Email: m.vidamohammadi@gmail.com</p>
            </v-col>
          </v-row>
          <v-row :class="isDesktop ? '' : 'w-100 d-flex justify-end '">
            <v-btn
              class="bg-primary rounded-md mt-lg-5 mt-10 text-white text-lg-body-2 text-caption"
              @click="downloadCV">
              Download CV
            </v-btn>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped></style>
