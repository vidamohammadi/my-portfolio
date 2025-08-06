<script setup>
  const skills = reactive([
    {title: 'JavaScript', path: 'js'},
    {title: 'Nuxt.js', path: 'nuxt'},
    {title: 'Vue.js', path: 'vue'},
    {title: 'pinia', path: 'pinia'},
    // {title: 'vuetify', path: 'vuetify'},
    {title: 'Git', path: 'git'},
  ]);
</script>

<template>
  <v-container class="mt-10">
    <div class="text-overlay">
      <h1 class="outlined-text">SKILLS</h1>
      <p class="text-white over-text">my skills</p>
    </div>
    <v-row class="ma-5 align-content-lg-space-between">
      <v-col lg="2" cols="4" v-for="(item, index) in skills" :key='index' >
         <skills-info-card :skill="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
  .text-overlay {
    position: relative;
    display: inline-block;
  }

  .outlined-text {
    font-size: 64px;
    color: transparent;
    -webkit-text-stroke: 0.2px wheat;
    font-weight: lighter;
    margin: 0;
  }

  .over-text {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 30px;
    font-weight: bolder;
    margin: 0;
  }
</style>
