<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="title === selectedTitle">
    <div v-if="porfolioInfo.length === 0" class="text-center text-black dark:text-white">
      <p class="p-2">Nothing here!</p>
    </div>
    <div v-else>
      <div
        class="test-tab mt-4 flex flex-col flex-wrap items-center justify-center gap-2 align-top md:flex-row md:items-start"
      >
        <div
          v-for="(project, idx) in porfolioInfo"
          :key="idx"
          class="smcard max-h-svh w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-[#0f182a] sm:w-1/2 md:w-1/3"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <a href="#">
            <img class="h-auto rounded-t-lg" :src="importImg(project.pictures[0].img)" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {{ project.name }}
              </h5>
            </a>
            <p class="mb-3 line-clamp-4 font-normal text-gray-700 dark:text-gray-400">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-1">
              <a
                href="#"
                @click.prevent="toggleModal(project)"
                class="dark:hover:bg- inline-flex cursor-pointer items-center rounded-md bg-primary-50 px-3 py-2 text-center text-sm font-medium text-secondary-100 hover:bg-secondary-50 hover:text-primary-100 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-800 dark:focus:ring-gray-900"
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
                :href="project.visit"
                target="_blank"
                class="dark:hover:bg- inline-flex items-center rounded-md bg-primary-50 px-3 py-2 text-center text-sm font-medium text-secondary-100 hover:bg-secondary-50 hover:text-primary-100 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-800 dark:focus:ring-gray-900"
              >
                visit website
                <i class="fa-solid fa-globe ms-2 h-3.5 w-3.5 rtl:rotate-180"></i>
              </a>
            </div>
          </div>
        </div>
        <BaseModal :showModal :modalInfo @close-modal="toggleModal"> </BaseModal>
      </div>
      <div v-if="showBtn" class="mt-4 text-center" id="showmore">
        <button
          @click.prevent="$emit('show-more')"
          class="inline-flex items-center rounded-[4px] border border-solid border-black bg-white p-2 text-center text-black hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-black dark:border-white dark:bg-[#0b1829] dark:text-white dark:hover:border-black dark:hover:bg-white dark:hover:text-black dark:focus:ring-black"
        >
          see more
          <i class="fa-solid fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'
import BaseModal from './BaseModal.vue'

defineEmits(['show-modal', 'show-more'])

const { title, porfolioInfo, showBtn } = defineProps({
  title: String,
  porfolioInfo: Array,
  showBtn: Boolean
})

const importImg = (img) => new URL(`../../assets/${img}`, import.meta.url).href

const showModal = ref(false)
const modalInfo = ref({})

const selectedTitle = inject('selectedTitle')

const toggleModal = (project) => {
  showModal.value = !showModal.value
  modalInfo.value = project
}
</script>

<style lang="scss" scoped></style>
