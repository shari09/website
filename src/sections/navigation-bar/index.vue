<template>
  <ul class="md:fixed top-0 flex flex-row w-full bg-white h-16 md:h-[72px] items-center px-3 z-50">
    <img src="/assets/menu.svg" class="h-auto w-8 mr-auto my-auto md:hidden" @click="open = true"/>
    <div class="absolute md:hidden h-screen w-screen top-0 left-0 z-40 bg-black opacity-70" 
      :class="[!open && 'hidden']"
      @click="open = false"
    />
    <div class="md:h-full md:flex md:flex-row"
      :class="[open ? 'flex flex-col absolute bg-white top-0 left-0 z-50 h-full pt-12 w-4/5 pl-6 justify-start' : 'hidden']"
    >
      <NavIcon 
        v-for="navLink in Object.values(navLinks)" 
        :text="navLink.display" 
        :href="'#'+navLink.anchor"
        :key="navLink.anchor"
        :isHovering="isHovering"
        :current="current === navLink.anchor"
        @mouseenter="setIsHovering(true)"
        @mouseleave="setIsHovering(false)"
        class="md:flex"
        :class="[open ? 'flex mr-auto h-auto my-2' : 'hidden']"
        @click="open = false"
      />
    </div>
    <div class="ml-auto ">
      <a v-for="icon in socialMedia" 
        :key="'nav'+icon.logoPath" 
        :href="icon.link"
      >
        <img :src="icon.logoPath" class="px-2 md:px-4 h-auto w-12 md:w-16 inline-block opacity-80 hover:opacity-100 fade"/>
      </a>
    </div>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
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
    const open = ref<boolean>(false);

    watch(open, (value) => {
      if (value) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    });

    return {
      isHovering,
      setIsHovering,
      navLinks,
      socialMedia,
      open,
    }
  },
});

</script>
