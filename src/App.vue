<script setup>
import NavBar from '@/components/NavBar.vue'
import Home from '@/components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import { onMounted } from 'vue'
onMounted(() => {
  ;['about', 'contact', 'skills', 'work'].forEach((l) => {
    if (window.location.href.includes(l)) {
      var elementPosition = document.getElementById(l).offsetTop
      console.log('skills', elementPosition, l)
      setTimeout(() => {
        window.scrollTo({ top: elementPosition - 100, behavior: 'smooth' })
      }, 2)
    }
  })
})

const scrollTo = (ele) => {
  if (ele == 'home') {
    this.$router.push(`/`)
    window.scrollTo({ top: -80, behavior: 'smooth' })
  } else {
    console.log('here', ele)
    var elementPosition = document.getElementById(ele).offsetTop
    console.log('here', elementPosition)
    setTimeout(() => {
      window.scrollTo({ top: elementPosition - 80, behavior: 'smooth' })
    }, 2)
  }
}
</script>

<template>
  <NavBar @scroll="scrollTo" />
  <div class="mt-20">
    <Home />
    <About id="about" />
    <Skills id="skills" />
    <Portfolio id="work" />
    <Contact id="contact" />
    <Footer />
  </div>
</template>
