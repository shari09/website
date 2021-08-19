<template>
  <div class="bg-black h-64 mt-32 bg-opacity-[85%]">
    <div class="w-5/6 mx-auto h-full text-white flex flex-row items-center">
    <div class="ml-auto text-xl">
      <a v-for="(navLink, key) in navLinks" :key="'footer'+navLink.anchor" :href="'#'+navLink.anchor" >
        {{ key === 'home' ? navLink.display : ` · ${navLink.display}` }}
      </a>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { navLinks } from '@/utils/data';

export default defineComponent({
  name: 'Footer',
  setup() {
    return {
      navLinks,
    }
  },
});
</script>
