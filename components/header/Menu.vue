<script setup>
  const menuItems = reactive([
    {title: 'Home'},
    {title: 'About'},
    {title: 'Services'},
    {title: 'Resume'},
    {title: 'Contact'}
  ]);
</script>
<template>
  <nav class="d-flex justify-center align-center pa-5 w-100 bg-light_black">
    <NuxtLink
      v-for="item in menuItems"
      :key="item.title"
      to="/"
      class="text-secondary text-shades-white text-decoration-none text-subtitle-2 font-weight-medium pr-4 d-block">
      {{ item.title }}
    </NuxtLink>
  </nav>
</template>
<style scoped></style>
