<template>
  <div class="h-[8vh] rounded-t-3xl bg-white w-5/6 mx-auto text-center">
    <a :href="'#'+about" class="inline-block">
      <img 
        src="/assets/bx_bxs-down-arrow.svg" 
        class="m-auto animate-bounce w-8 pt-8 cursor-pointer"
      />
    </a>
  </div>
  <div class="w-full h-[72px] bg-white" :id="about" ref="root" />
  <Header :header="header" class="bg-white pt-6" />
  <div class="py-14 md:py-28 bg-white items-center flex flex-col md:flex-row">
    <div class="ml-2 md:ml-0 text-center md:text-right flex-1 pr-3">
      <p class="md:ml-40 text-purple-darkest text-4xl">{{ quote }}</p>
      <p class="md:ml-40 text-magenta text-5xl">{{ tagline }}</p>
    </div>
    <div class="mt-10 md:mt-0 flex-1 pl-3">
      <p class="md:pr-40 text-lg text-blue-dark">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { Header } from '@/common-components';
import { aboutSection, navLinks } from '@/utils/data';

export default defineComponent({
  name: 'About',
  components: { Header },
  setup() {
    const root = ref(null);

    return {
      about: navLinks.about.anchor,
      ...aboutSection,
      root,
    }
  },
});
</script>
