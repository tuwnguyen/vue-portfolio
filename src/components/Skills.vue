<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="border-gray-200 bg-white dark:bg-[#343a3f]">
    <div class="mx-auto max-w-screen-xl py-4">
      <div class="text-center">
        <span class="text-3xl font-medium dark:text-[#cac9c9]">skills.</span>
      </div>
      <hr width="50%" />
      <div class="mt-4 space-y-10 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
        <div
          v-for="(skill, idx) in skills"
          :key="idx"
          class="flex flex-col items-center justify-start p-2 text-center"
        >
          <div
            class="bg-secondary-50 dark:bg-primary-50 mb-1 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12"
          >
            <div class="text-primary-50 dark:text-secondary-50 h-5 w-5 lg:h-6 lg:w-6">
              <i :class="skill.icon"></i>
            </div>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">{{ skill.title }}</h3>
          <p class="text-gray-500 md:max-w-full md:break-words dark:text-gray-400">
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
