<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="border-gray-200 transition-colors duration-500 dark:bg-[#0f182a]">
    <div class="bg-grid-slate dark:bg-grid-slate-dark mx-auto max-w-screen-xl bg-center py-4">
      <div data-aos="fade" data-aos-once="true" data-aos-duration="1000" class="text-center">
        <span class="text-3xl font-medium dark:text-[#cac9c9]">work.</span>
      </div>

      <TabsWrapper>
        <Tab
          title="development"
          :porfolioInfo="porfolio_info"
          :showBtn
          @show-more="showMore()"
        ></Tab>
        <Tab
          title="architecture"
          :porfolioInfo="architect_info"
          :showBtn
          @show-more="showMore()"
        ></Tab>
      </TabsWrapper>
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
const architect_info = ref([])
const showBtn = ref(true)
const showNumber = ref(3)

onMounted(() => {
  for (let i = 0; i < showNumber.value; i++) {
    porfolio_info.value.push(all_infos[i])
  }
})

watch(showNumber, (newShowNumber) => {
  porfolio_info.value = []
  for (let i = 0; i < newShowNumber; i++) {
    porfolio_info.value.push(all_infos[i])
  }
})

const showMore = () => {
  if (showNumber.value !== all_infos.length) {
    showNumber.value += 3
    setTimeout(() => {
      let heightScroll = document.getElementsByClassName('smcard')[0].clientHeight
      if (window.innerWidth <= 768 && showNumber.value < all_infos.length) heightScroll *= 3
      window.scrollBy({
        top: heightScroll,
        behavior: 'smooth'
      })
    }, 2)
    if (showNumber.value > all_infos.length) {
      showNumber.value = all_infos.length
      showBtn.value = false
    }
  }
}
</script>

<style lang="scss" scoped></style>
