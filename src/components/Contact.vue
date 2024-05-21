<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="bg-light-mode2 dark:bg-dark-mode border-gray-200 bg-white bg-right transition-colors duration-500 dark:bg-[#343a3f]"
  >
    <div class="bg-grid-slate dark:bg-grid-slate-dark mx-auto max-w-screen-xl bg-center py-4">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <span class="text-3xl font-medium dark:text-[#cac9c9]">contact.</span>
      </div>
      <div class="mx-auto max-w-screen-md px-4 py-8">
        <h3
          class="text-center text-gray-900 dark:text-gray-300"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          lets get in touch <span class="text-2xl">🤝</span> send me a message:
        </h3>
        <form action="#" class="space-y-4">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <label for="email" class="mb-1 block text-lg text-gray-900 dark:text-gray-300"
              >email</label
            >
            <input
              type="email"
              id="email"
              v-model="email"
              class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-[#0e192a] dark:text-white dark:placeholder-gray-400"
              placeholder="name@abc.com"
              required
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <label for="subject" class="mb-1 block text-lg text-gray-900 dark:text-gray-300"
              >name</label
            >
            <input
              type="text"
              id="subject"
              v-model="name"
              class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-[#0e192a] dark:text-white dark:placeholder-gray-400"
              placeholder="tuw nguyen"
              required
            />
          </div>
          <div
            class="sm:col-span-2"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <label for="message" class="mb-2 block text-lg text-gray-900 dark:text-gray-300"
              >message</label
            >
            <textarea
              id="message"
              rows="6"
              v-model="message"
              class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-[#0e192a] dark:text-white dark:placeholder-gray-400"
              placeholder="leave a comment..."
            ></textarea>
          </div>
          <button
            :disabled="disabledSubmit"
            type="button"
            @click.prevent="sendEmail()"
            class="w-full rounded-[4px] border border-solid border-black bg-white p-2 text-center text-black hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-black disabled:cursor-not-allowed dark:border-white dark:bg-[#0b1829] dark:text-white dark:hover:border-black dark:hover:bg-white dark:hover:text-black dark:focus:ring-black"
            data-aos="fade"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-offset="50"
            data-aos-delay="100"
          >
            send message
          </button>
        </form>
      </div>
      <Snackbar :showSnackbar :snackbarMessage :snackbarStatus @close="closeSnackbar()"> </Snackbar>
    </div>
  </div>
</template>

<script setup>
import Snackbar from './helpers/Snackbar.vue'
import { ref, watch } from 'vue'
import config from '../../config'
import emailjs from '@emailjs/browser'
const email = ref('')
const name = ref('')
const message = ref('')
const showSnackbar = ref(false)
const snackbarMessage = ref('')
const snackbarStatus = ref('')
const disabledSubmit = ref(false)
const sendEmail = () => {
  if (!email.value || !name.value || !message.value) {
    showSnackbar.value = true
    snackbarMessage.value = 'Please fill all the fields!'
    snackbarStatus.value = 'invalid'
  } else {
    disabledSubmit.value = true
    const templateParams = {
      to_name: config.emailjs.toName,
      from_name: name.value,
      message_html: message.value,
      user_email: email.value
    }
    emailjs
      .send(config.emailjs.serviceID, config.emailjs.templateID, templateParams, {
        publicKey: config.emailjs.publicKey
      })
      .then(
        (res) => {
          email.value = ''
          name.value = ''
          message.value = ''

          showSnackbar.value = true
          snackbarMessage.value = 'Thank you for reaching out!'
          snackbarStatus.value = 'success'
          disabledSubmit.value = false
          console.log('SUCCESS!', res.status, res.text)
        },
        (err) => {
          showSnackbar.value = true
          snackbarMessage.value = 'Oops! Something went wrong.'
          snackbarStatus.value = 'fail'
          disabledSubmit.value = false
          console.log('FAILED...', err)
        }
      )
  }
}

const closeSnackbar = () => {
  showSnackbar.value = false
}

watch(showSnackbar, (newShowSnackbar) => {
  if (newShowSnackbar) {
    setTimeout(() => {
      showSnackbar.value = false
    }, 2000)
  }
})
</script>

<style lang="scss" scoped></style>
