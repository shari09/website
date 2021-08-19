<template>
  <NavigationBar :current="'home'"/>
  <Home />
  <About />
  <Skills />
  <Experience />
  <Projects />
  <Testimonies />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { 
  Home, About, NavigationBar, Skills, 
  Experience, Projects, Testimonies, Footer,
} from '@/sections';

export default defineComponent({
  name: 'MainPage',
  components: { 
    Home, About, NavigationBar, Skills, 
    Experience, Projects, Testimonies, Footer,
  },
});
</script>
