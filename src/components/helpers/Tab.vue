<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="title === selectedTitle">
    <div v-if="data === null" class="text-center">Nothing here!</div>
    <div
      v-else
      class="mt-4 flex flex-col flex-wrap items-center justify-center gap-2 align-top md:flex-row md:items-start"
    >
      <div
        v-for="(card, idx) in data"
        :key="idx"
        class="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-[#343a3f] sm:w-1/2 md:w-1/3"
      >
        <a href="#">
          <img class="h-auto rounded-t-lg" :src="card.pictures[0].img" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ card.name }}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
            chronological order.
          </p>
          <a
            href="#"
            class="dark:hover:bg- inline-flex items-center rounded-md bg-primary-50 px-3 py-2 text-center text-sm font-medium text-secondary-100 hover:bg-secondary-50 hover:text-primary-100 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-800 dark:focus:ring-gray-900"
          >
            read more
            <svg
              class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            class="dark:hover:bg- ml-2 inline-flex items-center rounded-md bg-primary-50 px-3 py-2 text-center text-sm font-medium text-secondary-100 hover:bg-secondary-50 hover:text-primary-100 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-800 dark:focus:ring-gray-900"
          >
            visit website
            <i class="fa-solid fa-globe ms-2 h-3.5 w-3.5 rtl:rotate-180"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const { title, data } = defineProps({
  title: String,
  data: Array
})
const selectedTitle = inject('selectedTitle')
console.log('::tab title: ', title)
console.log('::data: ', data)
console.log('::selected: ', selectedTitle.value)
</script>

<style lang="scss" scoped></style>
