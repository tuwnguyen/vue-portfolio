<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="border-gray-200 bg-white dark:bg-[#343a3f]">
    <div class="mx-auto max-w-screen-xl py-4">
      <div class="text-center">
        <span class="text-3xl font-medium dark:text-[#cac9c9]">contact.</span>
      </div>
      <hr width="50%" />
      <div class="mx-auto max-w-screen-md px-4 py-8 lg:py-8">
        <h3 class="text-center text-gray-900 dark:text-gray-300">
          lets get in touch <span class="text-2xl">🤝</span> send me a message:
        </h3>
        <form action="#" class="space-y-4">
          <div>
            <label for="email" class="mb-1 block text-lg text-gray-900 dark:text-gray-300"
              >email</label
            >
            <input
              type="email"
              id="email"
              v-model="email"
              class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="name@abc.com"
              required
            />
          </div>
          <div>
            <label for="subject" class="mb-1 block text-lg text-gray-900 dark:text-gray-300"
              >name</label
            >
            <input
              type="text"
              id="subject"
              v-model="name"
              class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="tuw nguyen"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="mb-2 block text-lg text-gray-900 dark:text-gray-300"
              >message</label
            >
            <textarea
              id="message"
              rows="6"
              v-model="message"
              class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="leave a comment..."
            ></textarea>
          </div>
          <button
            type="button"
            @click.prevent="sendEmail()"
            class="w-full rounded-[4px] border border-solid border-black bg-white p-2 text-center font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-black dark:border-white dark:bg-[#343a3f] dark:text-white dark:hover:border-black dark:hover:bg-black dark:hover:text-white dark:focus:ring-black"
          >
            send message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import config from '../../config'
import emailjs from '@emailjs/browser'
const email = ref('')
const name = ref('')
const message = ref('')
const showSnackbar = ref(false)
const snackbarMessage = ref('')
const snackbarColor = ref('')

const sendEmail = () => {
  if (!email.value || !name.value || !message.value) {
    showSnackbar.value = true
    snackbarMessage.value = 'Please fill all the fields!'
    snackbarColor.value = 'red'
  } else {
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
          snackbarMessage.value = 'Thank you for reaching out.'
          snackbarColor.value = 'green'
          console.log('SUCCESS!', res.status, res.text)
        },
        (err) => {
          showSnackbar.value = true
          snackbarMessage.value = 'Oops! Something went wrong.'
          snackbarColor.value = 'orange'
          console.log('FAILED...', err)
        }
      )
  }
}
</script>

<style lang="scss" scoped></style>
