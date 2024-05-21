<script setup>
import NavBar from '@/components/NavBar.vue'
import Home from '@/components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import { onMounted, provide, ref } from 'vue'
const selectedNav = ref('home')

provide('selectedNav', selectedNav)

window.onscroll = () => {
  ;['about', 'contact', 'skills', 'work'].forEach((nav) => {
    let elementPosition = document.getElementById(nav).offsetTop
    if (scrollY >= elementPosition - 80) {
      selectedNav.value = nav
    }
  })
}

onMounted(() => {
  ;['about', 'contact', 'skills', 'work'].forEach((l) => {
    if (window.location.href.includes(l)) {
      let elementPosition = document.getElementById(l).offsetTop
      setTimeout(() => {
        window.scrollTo({ top: elementPosition - 100, behavior: 'smooth' })
      }, 2)
    }
  })
})

const scrollTo = (ele) => {
  if (ele == 'home') {
    window.scrollTo({ top: -80, behavior: 'smooth' })
  } else {
    handleClickNav(ele)
    let elementPosition = document.getElementById(ele).offsetTop
    setTimeout(() => {
      window.scrollTo({ top: elementPosition - 80, behavior: 'smooth' })
    }, 2)
  }
}

const handleClickNav = (nav) => (selectedNav.value = nav)
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
