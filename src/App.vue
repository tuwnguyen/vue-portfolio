<script setup>
import NavBar from '@/components/NavBar.vue'
import HomeView from '@/components/HomeView.vue'
import AboutView from './components/AboutView.vue'
</script>

<template>
  <NavBar />
  <div>
    <HomeView />
    <AboutView id="about" />
  </div>
</template>
