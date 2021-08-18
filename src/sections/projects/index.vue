<template>
  <div class="py-32">
    <Header :header="header" />
    <div class="flex flex-row p-3 mt-20 flex-wrap">
      <PhotoCard v-for="(card, i) in photoCards" :key="card.name+i" :info="card"/>
      <WordCard 
        v-for="(card, i) in wordCards" 
        :key="card.name+i" 
        :info="card"
        class="mt-3"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Header } from '@/common-components';

import { projects } from '@/utils/data';

import { PhotoCard, WordCard } from './components';

export default defineComponent({
  name: 'Projects',
  components: { Header, PhotoCard, WordCard },
  setup() {
    return {
      ...projects,
    }
  },
});
</script>
