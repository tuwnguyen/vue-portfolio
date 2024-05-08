<template>
  <div class="border-gray-200 bg-[#f8f9fa] dark:bg-[#262c30]">
    <div class="mx-auto max-w-screen-xl py-4">
      <div class="text-center">
        <span class="text-3xl font-medium dark:text-[#cac9c9]">about me.</span>
      </div>
      <hr width="50%" />
      <div class="flex flex-auto flex-col items-center justify-center gap-4 p-4 md:flex-row">
        <div class="w-full md:w-1/2"><Timeline /></div>
        <div class="w-full md:w-1/2"><Timeline /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Timeline from './helpers/Timeline.vue'
</script>

<style lang="scss" scoped></style>
