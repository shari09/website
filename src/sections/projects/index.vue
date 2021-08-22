<template>
  <div class="py-32">
    <Header :header="header" />
    <div class="flex flex-row w-5/6 mx-auto mt-20 flex-wrap">
      <PhotoCard v-for="(card, i) in photoCards" :key="card.name+i" :info="card"/>
      <WordCard 
        v-for="(card, i) in wordCards" 
        :key="card.name+i" 
        :info="card"
        class="mt-3"
      />
    </div>
    <div class="mx-auto text-2xl text-center mt-14 text-gray-900">
      And... much more on 
      <a href="https://github.com/shari09" class="text-purple-dark hover:text-purple-darkest font-bold">GitHub!</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Header } from '@/common-components';

import { projectsSection } from '@/utils/data';

import { PhotoCard, WordCard } from './components';

export default defineComponent({
  name: 'Projects',
  components: { Header, PhotoCard, WordCard },
  setup() {
    return {
      ...projectsSection,
    }
  },
});
</script>
