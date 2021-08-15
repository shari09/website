<template>
  <NavigationBar :current="'home'"/>
  <Home />
  <About />
  <div class="h-screen">

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Home, About, NavigationBar } from '@/sections';

export default defineComponent({
  name: 'MainPage',
  components: { NavigationBar, Home, About },
});
</script>
