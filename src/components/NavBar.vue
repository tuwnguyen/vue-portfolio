<template>
  <nav
    class="fixed left-0 right-0 top-0 z-50 border-gray-200 bg-white transition-colors duration-500 dark:bg-[#0f182a]"
  >
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-6">
      <a href="/" class="relative flex items-center space-x-3 rtl:space-x-reverse">
        <div
          class="absolute -left-3 top-9 h-[2px] w-[180px] bg-[#262c30] before:block before:h-[2px] before:w-[55px] before:-translate-x-3 before:-translate-y-4 before:rotate-90 before:bg-[#262c30] before:content-[''] dark:bg-[#f8f9fa] before:dark:bg-[#f8f9fa]"
        ></div>
        <span
          class="self-center whitespace-nowrap text-2xl font-semibold tracking-normal transition-all duration-500 hover:tracking-wider dark:text-[#d3d2d2]"
          >{{ logo_name }}</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        aria-controls="navbar-default"
        aria-expanded="false"
        ref="toggleBtn"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        class="hidden w-full origin-top animate-showMenu md:block md:w-auto md:animate-none"
        id="navbar-default"
        ref="navbar"
      >
        <ul
          class="mt-4 flex flex-col rounded-lg bg-white p-4 font-medium transition-colors duration-500 dark:bg-[#0f182a] md:mt-0 md:flex-row md:space-x-8 md:p-0 rtl:space-x-reverse"
        >
          <li class="">
            <a
              @click="$emit('scroll', 'about')"
              href="#about"
              class="block rounded px-3 py-2 hover:bg-transparent hover:text-sky-500 dark:text-[#d3d2d2] dark:hover:text-sky-500 md:border-0 md:p-0 [&.active]:text-sky-500"
              aria-current="page"
              :class="{ active: selectedNav === 'about' }"
              >about</a
            >
          </li>
          <li>
            <a
              @click="$emit('scroll', 'skills')"
              href="#skills"
              class="block rounded px-3 py-2 hover:bg-transparent hover:text-sky-500 dark:text-[#d3d2d2] dark:hover:text-sky-500 md:border-0 md:p-0 [&.active]:text-sky-500"
              :class="{ active: selectedNav === 'skills' }"
              >skills</a
            >
          </li>
          <li>
            <a
              @click="$emit('scroll', 'work')"
              href="#work"
              class="block rounded px-3 py-2 hover:bg-transparent hover:text-sky-500 dark:text-[#d3d2d2] dark:hover:text-sky-500 md:border-0 md:p-0 [&.active]:text-sky-500"
              :class="{ active: selectedNav === 'work' }"
              >work</a
            >
          </li>
          <li>
            <a
              @click="$emit('scroll', 'contact')"
              href="#contact"
              class="block rounded px-3 py-2 hover:bg-transparent hover:text-sky-500 dark:text-[#d3d2d2] dark:hover:text-sky-500 md:border-0 md:p-0 [&.active]:text-sky-500"
              :class="{ active: selectedNav === 'contact' }"
              >contact</a
            >
          </li>
          <li class="">
            <a
              href="#"
              class="block rounded px-3 py-2 text-sky-500 hover:underline md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent"
              >resume</a
            >
          </li>
          <li>
            <a
              href="#"
              @click.prevent="toggleDark()"
              class="block rounded px-3 py-2 hover:text-sky-500 dark:text-[#d3d2d2] dark:hover:text-sky-500 md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent"
              ><i
                class="w-4"
                :class="{
                  'fa-regular fa-sun': darkMode,
                  'fa-solid fa-moon': !darkMode
                }"
                v-tooltip.bottom="darkMode ? 'Dark Mode' : 'Light Mode'"
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { inject, ref } from 'vue'
import info from '../../info.js'

const logo_name = info.logo_name
const navbar = ref(null)
const toggleBtn = ref(null)
const darkMode = ref(true)
const selectedNav = inject('selectedNav')

defineEmits(['scroll'])
const toggleDark = () => {
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
      darkMode.value = true
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
      darkMode.value = false
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
      darkMode.value = false
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
      darkMode.value = true
    }
  }
}
</script>

<style lang="scss" scoped></style>
