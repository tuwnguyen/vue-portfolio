<template>
  <div
    class="border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400"
  >
    <ul class="-mb-px flex flex-wrap justify-center">
      <li v-for="(title, idx) in tabTitles" :key="idx" class="me-2 cursor-pointer">
        <a
          @click="handleClick(title)"
          class="inline-block rounded-t-lg border-b-2 border-transparent p-4 text-xl font-medium hover:border-gray-300 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-300 [&.active]:border-gray-300 [&.active]:text-black [&.active]:dark:text-[#cac9c9]"
          :class="{ active: selectedTitle === title }"
          >{{ title }}</a
        >
      </li>
    </ul>
  </div>
  <slot />
</template>

<script setup>
import { provide, ref, useSlots } from 'vue'
const slots = useSlots()
const tabTitles = ref(slots.default().map((tab) => tab.props.title))
const selectedTitle = ref(tabTitles.value[0])
provide('selectedTitle', selectedTitle)

const handleClick = (title) => {
  selectedTitle.value = title
}
</script>

<style lang="scss" scoped></style>
