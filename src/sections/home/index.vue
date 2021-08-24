<template>
  <div :id="anchor" class="bg-purple-lightest h-[70vh] md:h-[90vh] flex flex-col flex-col-reverse md:flex-row items-center justify-center" ref="root">
    <div class="md:w-1/4 mr-auto ml-10 mt-16 md:ml-auto text-purple-darkest">
      <p class="text-lg">{{ tag }}</p>
      <p class="text-5xl font-bold">{{ name }}</p>
      <Typing class="text-2xl mt-1" :words="options"/>
    </div>
    <div class="md:w-1/2">
      <img alt="Profile photo" :src="logoPath" class="w-2/3 md:w-1/2 md:max-w-[400px] mx-auto" >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { navLinks, homeSection } from '@/utils/data';
import { Typing } from './components';


export default defineComponent({
  name: 'Home',
  components: { Typing },
  setup() {
    const { home: { anchor } } = navLinks;
    const root = ref(null);

    return {
      anchor,
      ...homeSection,
      root,
    }
  },
});
</script>
