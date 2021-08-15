<template>
  <NavigationBar :current="'home'"/>
  <Home />
  <div class="h-screen">

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NavigationBar } from '@/sections/navigation-bar';
import { Home } from '@/sections/home';

export default defineComponent({
  name: 'MainPage',
  components: { NavigationBar, Home },
});
</script>
