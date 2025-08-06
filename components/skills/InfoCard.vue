<script setup>
  import {useDisplay} from 'vuetify';

  const {lgAndUp} = useDisplay();
  const isDesktop = computed(() => lgAndUp.value);
  const props = defineProps(['skill']);
  const skillsData = computed(() => props.skill);
</script>

<template>
  <v-card class="pa-lg-5 pa-2 d-flex flex-column align-center justify-center bg-light_black white-shadow rounded-lg">
     <v-img
      :src="`/my-portfolio/images/skills/${skillsData.path}.png`"
      width="100"
      height="100"
    />
    <p v-if='isDesktop' class="text-white mt-2">{{ skillsData.title }}</p>
  </v-card>
</template>

<style scoped>
  .white-shadow {
    box-shadow: 0 1px 15px rgba(255, 255, 255, 0.3);
  }

</style>
