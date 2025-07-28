<script setup>
  import {useDisplay} from 'vuetify';

  const {height} = useDisplay();
  const screenHeight = computed(() => height.value - 60);
</script>
<template>
  <v-container class="bg-light_black" fluid>
    <v-row class="px-10">
      <v-col cols="6">
        <div
          class="pa-10 align-content-center"
          :style="{height: screenHeight + 'px !important'}">
          <span>Hi there!</span>
          <h1 class="">I am Developer |</h1>
          <span>I make the complex simple.</span>
          <br />
          <v-btn class="bg-primary text-white text-body-2 rounded-md mt-5">
            Contact Me
          </v-btn>
        </div>
        <v-row style="height: 50px">
          <v-col cols="4" class="pa-0">
            <span class="font-weight-bold">Email</span>
            <br />
            <span class="font-weight-thin text-caption">
              m.vidamohammadi@gmail.com
            </span>
          </v-col>
          <v-divider
            vertical
            class="border-opacity-100 mr-4"
            style="height: 50px"></v-divider>
          <v-col cols="3" class="pa-0">
            <span class="font-weight-bold">Phone</span>
            <br />
            <span class="font-weight-thin text-caption">09102734398</span>
          </v-col>
          <v-divider
            vertical
            class="border-opacity-100 mr-4"
            style="height: 50px"></v-divider>
          <v-col cols="3" class="pa-0">
            <span class="font-weight-bold">Location</span>
            <br />
            <span class="font-weight-thin text-caption">Tehran, Iran</span>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" class="mt-5">
        <v-img
          src="/images/IMG_4250.jpeg"
          :style="{height: screenHeight + 'px !important'}" />
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped></style>
