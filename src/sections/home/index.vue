<template>
  <div :id="anchor" class="bg-purple-lightest h-[90vh]">
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { navLinks, home } from '@/utils/data';

export default defineComponent({
  name: 'Home',
  setup() {
    const { home: { anchor } } = navLinks;
    return {
      anchor,
    }
  },
});
</script>
