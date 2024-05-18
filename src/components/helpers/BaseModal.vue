<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div v-show="showModal" class="relative z-10">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <Transition name="modal-inner">
          <!-- <div
            v-if="showModal"
            class="fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-x-hidden md:inset-0"
          > -->
          <div v-if="showModal" class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-8 pt-32">
              <div class="relative max-h-full w-full max-w-2xl">
                <!-- Modal content -->
                <div class="relative rounded-lg bg-white shadow dark:bg-gray-700 sm:mt-0">
                  <!-- Modal header -->
                  <div
                    class="flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600"
                  >
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl">
                      {{ modalInfo.name }}
                    </h3>
                    <button
                      id="closeButton"
                      type="button"
                      @click.prevent="$emit('close-modal')"
                      class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <!-- Modal body -->
                  <div class="h-[600px] space-y-3 overflow-y-auto p-6 pt-1">
                    <time
                      class="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
                      >{{ modalInfo.date }} • {{ modalInfo.category }}</time
                    >
                    <br />
                    <span
                      v-for="tech in modalInfo.technologies"
                      :key="tech"
                      class="me-2 inline-block rounded border border-gray-500 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-400"
                      >{{ tech }}</span
                    >
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      {{ modalInfo.description }}
                    </p>
                    <Gallery :images="modalInfo.pictures" />
                    <!-- TODO: image -->
                  </div>
                  <!-- Modal footer -->
                  <div
                    class="flex items-center justify-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600"
                  >
                    <button
                      @click="open(modalInfo.github)"
                      type="button"
                      class="rounded-lg border border-solid bg-primary-50 px-5 py-2.5 text-center text-sm font-medium text-secondary-100 hover:bg-secondary-50 hover:text-primary-100 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-primary-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-800 dark:focus:ring-gray-900"
                    >
                      github
                    </button>
                    <button
                      type="button"
                      @click.prevent="$emit('close-modal')"
                      class="rounded-lg border border-solid bg-primary-50 px-5 py-2.5 text-center text-sm font-medium text-secondary-100 hover:bg-secondary-50 hover:text-primary-100 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-primary-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-800 dark:focus:ring-gray-900"
                    >
                      close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import Gallery from './Gallery.vue'
defineEmits(['close-modal'])
defineProps({
  showModal: {
    type: Boolean,
    required: true
  },
  modalInfo: {
    type: Object,
    required: true
  }
})

const open = (url) => {
  window.open(url, '_blank')
}
</script>

<style lang="scss" scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.5);
}

.modal-inner-leave-to {
  transform: scale(0.5);
}
</style>
