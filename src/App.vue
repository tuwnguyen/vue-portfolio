<script setup>
import NavBar from '@/components/NavBar.vue'
import Home from '@/components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <NavBar />
  <div class="mt-20">
    <Home />
    <About id="about" />
    <Skills id="skills" />
    <Portfolio id="portfolio" />
    <Contact id="contact" />
    <Footer />
  </div>
</template>
