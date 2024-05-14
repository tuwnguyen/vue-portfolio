<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="border-gray-200 bg-[#f8f9fa] dark:bg-[#262c30]">
    <div class="mx-auto max-w-screen-xl py-4">
      <div class="text-center">
        <span class="text-3xl font-medium dark:text-[#cac9c9]">portfolio.</span>
      </div>
      <hr width="50%" />
      <TabsWrapper>
        <Tab title="development" :porfolioInfo="porfolio_info"></Tab>
        <Tab title="architect" :porfolioInfo="null"></Tab>
      </TabsWrapper>
      <div v-if="showBtn !== `show less`" class="mt-4 text-center" id="showmore">
        <button
          @click.prevent="showMore()"
          class="inline-flex items-center rounded-[4px] border border-solid border-black bg-white p-2 text-center font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-black dark:border-white dark:bg-[#343a3f] dark:text-white dark:hover:border-black dark:hover:bg-black dark:hover:text-white dark:focus:ring-black"
        >
          {{ showBtn }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tab from './helpers/Tab.vue'
import TabsWrapper from './helpers/TabsWrapper.vue'
import info from '../../info'
import { onMounted, ref, watch } from 'vue'

const all_infos = info.portfolio
const porfolio_info = ref([])
const showBtn = ref('show more')
const showNumber = ref(3)

onMounted(() => {
  for (let i = 0; i < showNumber.value; i++) {
    porfolio_info.value.push(all_infos[i])
  }
})

watch(showNumber, (newShowNumber, oldShowNumber) => {
  porfolio_info.value = []
  for (let i = 0; i < newShowNumber; i++) {
    porfolio_info.value.push(all_infos[i])
  }
})

const showMore = () => {
  if (showNumber.value !== all_infos.length) {
    showNumber.value += 3
    location.href = '#showmore'
    if (showNumber.value > all_infos.length) {
      showNumber.value = all_infos.length
      showBtn.value = 'show less'
    }
  }
}
</script>

<style lang="scss" scoped></style>
