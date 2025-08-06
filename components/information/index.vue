<script setup>
  import {useDisplay} from 'vuetify';

  const {height, lgAndUp} = useDisplay();
  const screenHeight = computed(() => height.value - 60);
  const isDesktop = computed(() => lgAndUp.value);

  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  };
</script>
<template>
  <v-container v-if="isDesktop" class="bg-light_black" fluid>
    <v-row class="px-10">
      <v-col cols="6">
        <div
          class="pa-10 align-content-center"
          :style="{height: screenHeight + 'px !important'}">
          <span>Hi there!</span>
          <h1 class="">I am Developer |</h1>
          <span>I make the complex simple.</span>
          <br />
          <v-btn
            class="bg-primary text-white text-body-2 rounded-md mt-5"
            @click="scrollToContact">
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
          src="/my-portfolio/images/IMG_4250.jpeg"
          :style="{height: screenHeight + 'px !important'}" />
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else class="bg-light_black" fluid>
    <v-row>
      <v-col cols="12" class="mt-5">
        <div class="position-relative">
          <v-img
            src="/my-portfolio/images/IMG_4250.jpeg"
            height="500px"
            cover></v-img>
          <v-row class="overlay-content">
            <v-col cols="8">
              <div class="d-flex flex-column pt-5 pl-5">
                <span class="text-white text-caption">Hi there!</span>
                <h1 class="text-white text-subtitle-1">I am Developer |</h1>
                <span class="text-white text-caption mb-3">
                  I make the complex simple.
                </span>
              </div>
            </v-col>
            <v-col cols="4">
              <v-btn
                class="bg-primary text-white text-body-2 rounded-lg d-flex justify-center mt-5"
                @click="scrollToContact">
                Contact Me
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <v-row class="pa-5">
      <ul class="text-caption" style="list-style: none; padding: 0; margin: 0;">
        <li>Email: m.vidamohammadi@gmail.com</li>
        <li>Phone: 09102734398</li>
        <li>Location: Tehran, Iran</li>
      </ul>
    </v-row>
  </v-container>
</template>
<style scoped>
  .position-relative {
    position: relative;
  }

  .overlay-content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
</style>
