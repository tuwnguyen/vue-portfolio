<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="border-gray-200 bg-white transition-colors duration-500 dark:bg-[#343a3f]">
    <div class="mx-auto max-w-screen-xl py-4">
      <div data-aos="fade" data-aos-once="true" data-aos-duration="1000" class="text-center">
        <span class="text-3xl font-medium dark:text-[#cac9c9]">skills.</span>
      </div>
      <hr width="50%" />
      <div class="mt-4 space-y-10 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
        <div
          v-for="(skill, idx) in skills"
          :key="idx"
          class="flex flex-col items-center justify-start p-2 text-center"
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div
            class="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-secondary-50 dark:bg-primary-50 lg:h-12 lg:w-12"
          >
            <div class="h-5 w-5 text-primary-50 dark:text-secondary-50 lg:h-6 lg:w-6">
              <i :class="skill.icon"></i>
            </div>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">{{ skill.title }}</h3>
          <p class="text-gray-500 dark:text-gray-400 md:max-w-full md:break-words">
            {{ skill.info.join(', ') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import info from '../../info'
const skills = info.skills
</script>

<style lang="scss" scoped></style>
