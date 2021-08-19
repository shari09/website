<template>
  <div :id="anchor" class="bg-purple-lightest h-[90vh] flex flex-col md:flex-row items-center justify-center">
    <div class="w-full md:w-1/4 ml-auto text-purple-darkest">
      <p class="text-lg">{{ tag }}</p>
      <p class="text-5xl font-bold">{{ name }}</p>
      <Typing class="text-2xl mt-1" :words="options"/>
    </div>
    <div class="w-full md:w-1/2">
      <img alt="Profile photo" :src="logoPath" class="w-3/5 md:w-1/2 md:max-w-[400px] mx-auto" >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { navLinks, homeSection } from '@/utils/data';
import { Typing } from './components';


export default defineComponent({
  name: 'Home',
  components: { Typing },
  setup() {
    const { home: { anchor } } = navLinks;

    return {
      anchor,
      ...homeSection,
    }
  },
});
</script>
