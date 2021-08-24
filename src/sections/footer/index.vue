<template>
  <div class="bg-black h-72 mt-32 bg-opacity-[85%]">
    <div class="w-5/6 mx-auto h-full text-gray-300 flex flex-row items-center">
    <div class="mr-auto">
      <a v-for="icon in socialMedia" 
        :key="'footer'+icon.logoPath" 
        :href="icon.link"
      >
        <img :src="icon.logoPath" class="px-4 h-auto w-22 inline-block brightness-0 invert-[0.7] hover:invert"/>
      </a>
    </div>
    <div class="ml-auto text-xl">
      <a v-for="(navLink, key) in navLinks" 
        :key="'footer'+navLink.anchor" 
        :href="'#'+navLink.anchor" 
        class="hover:text-white"
      >
        {{ key === 'home' ? navLink.display : ` · ${navLink.display}` }}
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
