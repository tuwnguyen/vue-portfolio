<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="border-gray-200 bg-[#f8f9fa] dark:bg-[#262c30]">
    <div class="mx-auto max-w-screen-xl py-4">
      <div class="text-center">
        <span class="text-3xl font-medium dark:text-[#cac9c9]">portfolio.</span>
      </div>
      <hr width="50%" />
      <TabsWrapper>
        <Tab title="development" :data="all_infos"></Tab>
        <Tab title="architect" :data="null"></Tab>
      </TabsWrapper>
    </div>
  </div>
</template>

<script setup>
import Tab from './helpers/Tab.vue'
import TabsWrapper from './helpers/TabsWrapper.vue'
import info from '../../info'
const all_infos = info.portfolio
</script>

<style lang="scss" scoped></style>
