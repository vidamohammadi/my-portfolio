<script setup></script>
<template>
  <v-app class="bg-black pa-0">
    <Menu />
    <main style="padding-top: 0">
      <NuxtPage />
    </main>
  </v-app>
</template>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { background: #0a0a0a; }

@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
</style>
