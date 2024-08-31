<script setup>
import { RouterView } from 'vue-router';

import NavBarCom from './components/NavBarCom.vue';
import FooterCom from './components/FooterCom.vue';
import HeroCom from './components/HeroCom.vue';
</script>

<template>
  <div class="is-flex is-flex-direction-column min-vh-100">
    <header>
      <HeroCom />
      <NavBarCom />

    </header>
    <main class="my-4 mx-2 is-flex-grow-1">
      <transition name="route">
        <RouterView />
      </transition>
    </main>
    <footer>
      <FooterCom />
    </footer>
  </div>
</template>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}

.route-enter-active,
.route-leave-active {
  transition: opacity 0.5s ease;
}
</style>
