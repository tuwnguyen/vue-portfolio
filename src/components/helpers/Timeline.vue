<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <p
    data-aos="fade"
    data-aos-once="true"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-duration="500"
    class="my-4 text-2xl font-medium dark:text-[#cac9c9]"
  >
    {{ data.data.title }}
  </p>
  <ol
    v-for="(e, idx) in data.data.data"
    :key="idx"
    class="relative border-s border-gray-200 dark:border-gray-700"
    data-aos="fade-up"
    data-aos-once="true"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-duration="500"
  >
    <li class="mb-10 ms-4">
      <div
        class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
      ></div>
      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{
        e.date
      }}</time>
      <h3 class="text-lg font-medium dark:text-[#cac9c9]">{{ e.name }}, {{ e.place }}</h3>
      <p class="mb-4 text-base text-gray-500 dark:text-gray-400">{{ e.degree || e.position }}</p>
      <p class="mb-4 text-base text-gray-500 dark:text-gray-400">
        {{ e.description }}
      </p>
      <span
        v-for="sk in e.skills"
        :key="sk"
        class="me-2 inline-block rounded border border-gray-500 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-400"
        >{{ sk }}</span
      >
    </li>
  </ol>
</template>
<script setup>
const data = defineProps({
  data: {
    title: String,
    data: Object
  }
})
</script>

<style lang="scss" scoped></style>
