<template>
  <NavigationBar :navLinks="navLinks" />
  <div class="h-screen">

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NavigationBar } from '@/sections/navigation-bar';

import { navLinks } from '@/utils/data';

export default defineComponent({
  name: 'MainPage',
  components: { NavigationBar },
  setup() {
    return {
      navLinks,
    }
  },
});
</script>
