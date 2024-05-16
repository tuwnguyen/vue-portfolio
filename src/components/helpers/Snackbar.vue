<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Teleport to="body">
    <Transition name="fade">
      <div class="relative z-10" v-show="showSnackbar">
        <div
          id="toast-success"
          class="fixed right-1 top-24 mb-4 flex w-full max-w-xs items-center rounded-lg p-4 text-white shadow"
          :class="{
            'bg-emerald-400': snackbarStatus === 'success',
            'bg-amber-300': snackbarStatus === 'fail',
            'bg-red-400': snackbarStatus === 'invalid'
          }"
          role="alert"
        >
          <div
            class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
            :class="{
              'bg-green-100 text-green-500': snackbarStatus === 'success',
              'bg-red-100 text-red-400': snackbarStatus === 'invalid',
              'bg-amber-100 text-amber-300': snackbarStatus === 'fail'
            }"
          >
            <i
              class="fa-solid"
              :class="{
                'fa-check': snackbarStatus === 'success',
                'fa-circle-exclamation': snackbarStatus !== 'success'
              }"
            ></i>
            <!-- fa-circle-exclamation, fa-check-->
            <span class="sr-only">Check icon</span>
          </div>
          <div class="ms-3 text-sm font-normal">{{ snackbarMessage }}</div>
          <button
            @click="$emit('close')"
            type="button"
            class="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg
              class="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineEmits(['close'])
defineProps({
  showSnackbar: {
    type: Boolean,
    require: true
  },
  snackbarMessage: {
    type: String,
    require: true
  },
  snackbarStatus: {
    type: String,
    require: true
  }
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
