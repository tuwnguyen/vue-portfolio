<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="border-gray-200 transition-colors duration-500 dark:bg-[#0f182a]">
    <div class="bg-grid-slate dark:bg-grid-slate-dark mx-auto max-w-screen-xl bg-center py-4">
      <div data-aos="fade" data-aos-once="true" data-aos-duration="1000" class="text-center">
        <span class="text-3xl font-medium dark:text-[#cac9c9]">about me.</span>
      </div>

      <div class="flex flex-col gap-4 p-4 md:flex-row">
        <div class="w-full md:w-1/2"><Timeline :data="education" /></div>
        <div class="w-full md:w-1/2"><Timeline :data="experience" /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Timeline from './helpers/Timeline.vue'
import info from '../../info'
const education = {
  title: 'education',
  data: info.education
}
const experience = {
  title: 'experience',
  data: info.experience
}
</script>

<style lang="scss" scoped></style>
