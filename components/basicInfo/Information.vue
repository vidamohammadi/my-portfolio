<script setup>
  import {useDisplay} from 'vuetify';

  const {height} = useDisplay();
  const screenHeight = computed(() => height.value - 100);
</script>
<template>
  <v-container class="">
    <v-row class="">
      <v-col cols="6">
        <div
          class="pa-10 align-content-center"
          :style="{height: screenHeight - 50 + 'px !important'}">
          <span>Hi there!</span>
          <h1 class="">I am Developer |</h1>
          <span>I make the complex simple.</span>
          <br />
          <v-btn class="bg-green-accent-2 text-body-2 rounded-lg mt-5">
            contact me
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
          src="/images/IMG_4250.JPG"
          :style="{height: screenHeight + 'px !important'}" />
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped></style>
