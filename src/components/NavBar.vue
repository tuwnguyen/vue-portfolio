<template>
  <nav class="fixed left-0 right-0 top-0 z-50 border-gray-200 bg-[#f8f9fa] dark:bg-[#262c30]">
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
          class="mt-4 flex flex-col rounded-lg bg-gray-50 p-4 font-medium dark:bg-[#262c30] md:mt-0 md:flex-row md:space-x-8 md:bg-[#f8f9fa] md:p-0 md:dark:bg-[#262c30] rtl:space-x-reverse"
        >
          <li class="">
            <a
              href="#about"
              class="block rounded px-3 py-2 text-[#7c7c7d] dark:text-[#d3d2d2] md:bg-transparent md:p-0 md:text-[#7c7c7d]"
              aria-current="page"
              >about</a
            >
          </li>
          <li>
            <a
              href="#skills"
              class="block rounded px-3 py-2 text-[#7c7c7d] hover:bg-gray-100 dark:text-[#d3d2d2] dark:hover:text-[#d3d2d2] md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-black md:dark:hover:bg-transparent md:dark:hover:text-white"
              >skills</a
            >
          </li>
          <li>
            <a
              href="#portfolio"
              class="block rounded px-3 py-2 text-[#7c7c7d] hover:bg-gray-100 dark:text-[#d3d2d2] dark:hover:text-[#d3d2d2] md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-black md:dark:hover:bg-transparent md:dark:hover:text-white"
              >portfolio</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="block rounded px-3 py-2 text-[#7c7c7d] hover:bg-gray-100 dark:text-[#d3d2d2] dark:hover:text-[#d3d2d2] md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-black md:dark:hover:bg-transparent md:dark:hover:text-white"
              >contact</a
            >
          </li>
          <li>
            <a
              href="#"
              @click.prevent="toggleDark()"
              class="block rounded px-3 py-2 text-[#4f4f52] hover:bg-gray-100 dark:text-[#d3d2d2] dark:hover:text-[#d3d2d2] md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-black md:dark:hover:bg-transparent md:dark:hover:text-white"
              ><i
                :class="{
                  'fas fa-moon': darkMode,
                  'far fa-moon': !darkMode
                }"
                v-tooltip.bottom="darkMode ? 'Night Mode' : 'Light Mode'"
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
// import { onMounted, ref } from 'vue'
// import { Collapse } from 'flowbite'
import info from '../../info.js'

const logo_name = info.logo_name
const navbar = ref(null)
const toggleBtn = ref(null)
const darkMode = ref(true)
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

// onMounted(() => {
//   const collapse = new Collapse(navbar, toggleBtn)

//   // hide the target element
//   collapse.toggle()
// })
</script>

<style lang="scss" scoped></style>
