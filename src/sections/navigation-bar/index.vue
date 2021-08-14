<template>
  <ul class="flex flex-col md:flex-row sticky bg-white h-[72px] items-center pl-3">
    <NavIcon 
      v-for="navLink in navLinks" 
      :text="navLink.display" 
      :href="'#'+navLink.link"
      :key="navLink.link"
      :isHovering="isHovering"
      @mouseenter="setIsHovering(true)"
      @mouseleave="setIsHovering(false)"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

import { NavIcon } from './components';

export default defineComponent({
  name: 'NavigationBar',
  props: {
    navLinks: {
      type: Array as PropType<string[]>,
      required: true,
    },
    current: {

    },
  },
  components: { NavIcon },
  setup() {
    const isHovering = ref<boolean>(false);

    const setIsHovering = (state: boolean) => { isHovering.value = state };

    return {
      isHovering,
      setIsHovering,
    }
  },
});

</script>
