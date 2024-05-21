<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="bg-light-mode2 dark:bg-dark-mode border-gray-200 bg-cover bg-center transition-colors duration-500 dark:bg-contain"
  >
    <div
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
      class="bg-grid-slate dark:bg-grid-slate-dark mx-auto flex max-w-screen-xl flex-col justify-center gap-x-0 bg-center pt-4 md:flex-row xl:gap-x-4"
    >
      <div class="grow md:w-1/2">
        <div
          class="relative mx-auto my-0 h-[400px] w-[400px] md:flex md:h-full md:w-full md:items-center md:justify-center"
        >
          <div
            class="bg-linear-gradient absolute left-1/2 top-1/2 h-[256px] w-[256px] -translate-x-1/2 -translate-y-1/2 blur-3xl md:h-[400px] md:w-[400px]"
          ></div>
          <img
            class="absolute left-1/2 top-1/2 h-auto max-h-[350px] max-w-[350px] -translate-x-1/2 -translate-y-1/2 md:max-h-[370px] md:max-w-[350px]"
            :src="picture"
            alt=""
          />
        </div>
      </div>
      <div class="flex flex-col justify-between gap-8 p-4 leading-normal md:w-1/2">
        <span class="text-3xl font-medium dark:text-white">{{ introduce }}</span>
        <div class="flex flex-col space-y-6 dark:text-[#cac9c9]">
          <p v-html="description.line1"></p>
          <p v-html="description.line2"></p>
          <ul role="list" class="list-arrow grid list-inside grid-cols-2 pl-5 font-medium">
            <li v-for="(tech, idx) in description.line3" :key="idx">{{ tech }}</li>
          </ul>
          <p v-html="description.line4"></p>
        </div>
        <div class="flex justify-center gap-4">
          <button
            class="me-2 inline-flex h-10 w-10 items-center bg-transparent p-3 text-center text-3xl font-medium text-black transition duration-500 ease-in-out hover:scale-125 dark:text-white"
            @click="open('github')"
            v-tooltip.bottom="{ content: 'github' }"
          >
            <i class="fab fa-github"></i>
          </button>
          <button
            class="me-2 inline-flex h-10 w-10 items-center bg-transparent p-3 text-center text-3xl font-medium text-[#007ab5] transition duration-500 ease-in-out hover:scale-125"
            @click="open('linkedin')"
            v-tooltip.bottom="'linkedIn'"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </button>

          <button
            class="me-2 inline-flex h-10 w-10 items-center bg-transparent p-3 text-center text-3xl font-medium text-black transition duration-500 ease-in-out hover:scale-125 dark:text-white"
            @click="open('twitter')"
            v-tooltip.bottom="'twitter'"
          >
            <i class="fa-brands fa-x-twitter"></i>
          </button>
          <button
            class="me-2 inline-flex h-10 w-10 items-center bg-transparent p-3 px-[12px] text-center text-3xl font-medium text-fuchsia-600 transition duration-500 ease-in-out hover:scale-125"
            @click="open('resume')"
            v-tooltip.bottom="'resume'"
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
const introduce = info.introduce
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
