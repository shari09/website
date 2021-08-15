<template>
  <ul class="fixed top-0 flex flex-col md:flex-row w-full bg-white h-[72px] items-center pl-3">
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
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { navLinks } from '@/utils/data';

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
    }
  },
});

</script>
