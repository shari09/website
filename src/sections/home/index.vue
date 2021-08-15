<template>
  <div :id="anchor" class="bg-purple-lightest h-[90vh] flex flex-col md:flex-row items-center justify-center">
    <div class="w-full md:w-1/2">
      <p>{{ tag }}</p>
      <p>{{ name }}</p>
      <Typing :words="options"/>
    </div>
    <div class="w-full md:w-1/2">
      <img alt="Profile photo" :src="baseUrl+logoPath" class="w-3/5 md:w-1/2 md:max-w-[400px] mx-auto" >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { navLinks, home } from '@/utils/data';
import { Typing } from './components';


export default defineComponent({
  name: 'Home',
  components: { Typing },
  setup() {
    const { home: { anchor } } = navLinks;

    return {
      anchor,
      ...home,
      baseUrl: process.env.BASE_URL,
    }
  },
});
</script>
