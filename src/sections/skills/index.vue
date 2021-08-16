<template>
  <div class="h-[72px]"/>
  <Header :header="header"/>
  <div class="flex flex-wrap flex-row bg-purple w-4/5 mx-auto mt-10 mb-32 p-[5%] rounded-3xl justify-around">
    <div v-for="logo in logos" :key="logo.path" class="m-6 w-18">
      <img :src="logo.path" class="mx-auto"/>
      <div class="text-white text-center">{{ logo.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Header } from '@/common-components';
import { skills } from '@/utils/data';


export default defineComponent({
  name: 'Skills',
  components: { Header },
  setup() {
    return {
      ...skills,
    }
  },
});
</script>
