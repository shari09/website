<template>
  <div class="bg-black h-72 mt-32 bg-opacity-[85%]">
    <div class="w-5/6 mx-auto h-full text-gray-200 md:text-gray-300 flex flex-row items-center">
      <div class="mr-auto">
        <a v-for="icon in socialMedia" 
          :key="'footer'+icon.logoPath" 
          :href="icon.link"
        >
          <img :src="icon.logoPath" 
            class="text-center px-auto px-4 h-auto w-22 inline-block 
            brightness-0 invert-[0.8] md:invert-[0.7] md:hover:invert"/>
        </a>
      </div>
      <div class="ml-auto text-xl flex flex-col md:flex-row">
        <a v-for="(navLink, key) in navLinks" 
          :key="'footer'+navLink.anchor" 
          :href="'#'+navLink.anchor" 
          class="md:hover:text-white"
        >
          <p v-if="key !== 'home'" class="hidden md:inline mx-2">·</p>
          <p class="inline">{{ navLink.display }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { navLinks, socialMedia } from '@/utils/data';

export default defineComponent({
  name: 'Footer',
  setup() {
    return {
      navLinks,
      socialMedia,
    }
  },
});
</script>
