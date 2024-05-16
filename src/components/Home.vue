<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="border-gray-200 bg-white dark:bg-[#343a3f]">
    <div
      class="mx-auto flex max-w-screen-xl flex-col justify-center gap-x-10 pt-4 md:flex-row xl:gap-x-32"
    >
      <img
        class="max-h-[370px] max-w-[300px] self-center object-cover md:w-1/2"
        :src="picture"
        alt=""
      />
      <div class="flex flex-col justify-between gap-8 p-4 leading-normal md:w-1/2">
        <span class="text-3xl font-medium dark:text-[#cac9c9]">hello, i'm Huy...</span>
        <div class="text-justify dark:text-[#cac9c9]">
          <p v-html="description"></p>
        </div>
        <div class="flex justify-center gap-4">
          <button
            class="me-2 inline-flex items-center rounded-[4px] border border-solid border-black bg-white p-3 text-center text-base font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-black dark:border-white dark:bg-[#343a3f] dark:text-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-black"
            @click="open('github')"
            v-tooltip.bottom="'Github'"
          >
            <i class="fab fa-github"></i>
          </button>
          <button
            class="me-2 inline-flex items-center rounded-[4px] border border-solid border-[#007ab5] p-3 text-center text-base font-medium text-[#007ab5] hover:bg-[#007ab5] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-[#007ab5] dark:bg-[#343a3f] dark:text-[#007ab5] dark:hover:bg-[#007ab5] dark:hover:text-white dark:focus:ring-blue-800"
            @click="open('linkedin')"
            v-tooltip.bottom="'LinkedIn'"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </button>

          <button
            class="me-2 inline-flex items-center rounded-[4px] border border-solid border-black bg-white p-3 text-center text-base font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-black dark:border-white dark:bg-[#343a3f] dark:text-white dark:hover:border-black dark:hover:bg-black dark:hover:text-white dark:focus:ring-black"
            @click="open('twitter')"
            v-tooltip.bottom="'Twitter'"
          >
            <i class="fa-brands fa-x-twitter"></i>
          </button>
          <button
            class="me-2 inline-flex items-center rounded-[4px] border border-solid border-fuchsia-500 bg-white p-3 px-[12px] text-center text-base font-medium text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-fuchsia-600 dark:border-fuchsia-600 dark:bg-[#343a3f] dark:text-fuchsia-600 dark:hover:bg-fuchsia-600 dark:hover:text-white dark:focus:ring-fuchsia-600"
            @click="open('resume')"
            v-tooltip.bottom="'Resume'"
          >
            <i class="fa-solid fa-file-pdf"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import info from '../../info'

const picture = info.flat_picture
const description = info.description
const linkedin = info.links.linkedin
const github = info.links.github
const twitter = info.links.twitter
const resume = info.links.resume

const open = (link) => {
  switch (link) {
    case 'linkedin':
      window.open(linkedin, '_blank')
      break
    case 'github':
      window.open(github, '_blank')
      break
    case 'twitter':
      window.open(twitter, '_blank')
      break
    case 'resume':
      window.open(resume, '_blank')
      break
  }
}
</script>

<style lang="scss" scoped></style>
