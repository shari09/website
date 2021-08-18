<template>
  <NavigationBar :current="'home'"/>
  <Home />
  <About />
  <Skills />
  <Experience />
  <Projects />
  <!-- <Testimonies />
  <Footer /> -->
  <div class="h-screen">

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { 
  Home, About, NavigationBar, Skills, 
  Experience, Projects,
} from '@/sections';

export default defineComponent({
  name: 'MainPage',
  components: { 
    Home, About, NavigationBar, Skills, 
    Experience, Projects,
  },
});
</script>
