<script setup>
import NavBar from '@/components/NavBar.vue'
import HomeView from '@/components/HomeView.vue'
import AboutView from './components/AboutView.vue'
import Skills from './components/Skills.vue'
import Portfolio from './components/Portfolio.vue'
</script>

<template>
  <NavBar />
  <div class="mt-20">
    <HomeView />
    <AboutView id="about" />
    <Skills id="skills" />
    <Portfolio id="portfolio" />
    <HomeView id="contact" />
  </div>
</template>
