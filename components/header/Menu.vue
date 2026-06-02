<script setup>
const menuItems = [
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Experience', href: '#experience' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
];

const scrolled = ref(false);
const menuOpen = ref(false);

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 40;
  });
});
</script>

<template>
  <nav :class="['navbar', { scrolled }]">
    <div class="nav-inner">
      <a href="#" class="nav-logo">VM<span class="logo-dot">.</span></a>

      <!-- Desktop -->
      <div class="nav-links">
        <a v-for="item in menuItems" :key="item.title" :href="item.href" class="nav-link">
          {{ item.title }}
        </a>
      </div>

      <!-- Mobile toggle -->
      <button class="nav-toggle" @click="menuOpen = !menuOpen">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="mobile-menu">
      <a v-for="item in menuItems" :key="item.title" :href="item.href" class="mobile-link" @click="menuOpen = false">
        {{ item.title }}
      </a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.3s, border-color 0.3s;
  border-bottom: 1px solid transparent;
}
.navbar.scrolled {
  background: rgba(10, 10, 10, 0.92);
  backdrop-filter: blur(12px);
  border-bottom-color: #2a2a2a;
}
.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-logo {
  font-family: 'Syne', 'Segoe UI', sans-serif;
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  text-decoration: none;
  letter-spacing: -0.02em;
}
.logo-dot { color: #00e5a0; }
.nav-links { display: flex; gap: 32px; }
.nav-link {
  font-size: 14px;
  font-weight: 500;
  color: #888;
  text-decoration: none;
  transition: color 0.2s;
  letter-spacing: 0.02em;
}
.nav-link:hover { color: #f0f0f0; }
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.nav-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: #f0f0f0;
  border-radius: 2px;
}
.mobile-menu {
  background: rgba(10, 10, 10, 0.97);
  padding: 16px 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.mobile-link {
  padding: 12px 0;
  font-size: 16px;
  font-weight: 600;
  color: #888;
  text-decoration: none;
  border-bottom: 1px solid #1a1a1a;
}
.mobile-link:hover { color: #00e5a0; }

@media (max-width: 768px) {
  .nav-links { display: none; }
  .nav-toggle { display: flex; }
}
</style>
