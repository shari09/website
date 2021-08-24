<template>
  <div class="h-[72px]"/>
  <Header :header="header"/>
  <div class="hidden md:block flex flex-col bg-purple w-5/6 mx-auto mt-10 mb-32 p-[5%] rounded-3xl ">
    <div class="justify-between flex flex-nowrap flex-row "
      v-for="(logos, i) in logoGroups" :key="'logogroup'+i"
    >
      <div v-for="logo in logos" :key="logo.path" class="m-6 w-18 flex-shrink-0">
        <img :src="logo.path" class="mx-auto h-auto"/>
        <div class="text-white text-center">{{ logo.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { Header } from '@/common-components';
import { skillsSection } from '@/utils/data';


export default defineComponent({
  name: 'Skills',
  components: { Header },
  setup() {
    const numCol = ref(8);

    const logoGroups = [];
    for (let i = 0; i < Math.ceil(skillsSection.logos.length/numCol.value); i++) {
      logoGroups.push(skillsSection.logos.slice(i*numCol.value, i*numCol.value+numCol.value));
    }
    return {
      header: skillsSection.header,
      logoGroups,
    }
  },
});
</script>
