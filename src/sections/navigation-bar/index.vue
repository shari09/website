<template>
  <ul class="fixed top-0 flex flex-col md:flex-row w-full bg-white h-[72px] items-center px-3 z-50">
    <NavIcon 
      v-for="navLink in Object.values(navLinks)" 
      :text="navLink.display" 
      :href="'#'+navLink.anchor"
      :key="navLink.anchor"
      :isHovering="isHovering"
      :current="current === navLink.anchor"
      @mouseenter="setIsHovering(true)"
      @mouseleave="setIsHovering(false)"
    />
    <div class="ml-auto">
      <a v-for="icon in socialMedia" 
        :key="'nav'+icon.logoPath" 
        :href="icon.link"
      >
        <img :src="icon.logoPath" class="px-4 h-auto w-16 inline-block opacity-50 hover:opacity-100 fade"/>
      </a>
    </div>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { navLinks, socialMedia } from '@/utils/data';

import { NavIcon } from './components';

export default defineComponent({
  name: 'NavigationBar',
  components: { NavIcon },
  props: {
    current: {
      type: String,
      default: navLinks.home.anchor,
    },
  },
  setup() {
    const isHovering = ref<boolean>(false);
    const setIsHovering = (state: boolean) => { isHovering.value = state };


    return {
      isHovering,
      setIsHovering,
      navLinks,
      socialMedia,
    }
  },
});

</script>
