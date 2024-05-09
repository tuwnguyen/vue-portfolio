<script setup>
import NavBar from '@/components/NavBar.vue'
import HomeView from '@/components/HomeView.vue'
import AboutView from './components/AboutView.vue'
import Skills from './components/Skills.vue'
</script>

<template>
  <NavBar />
  <div>
    <HomeView />
    <AboutView id="about" />
    <Skills id="skills" />
  </div>
</template>
