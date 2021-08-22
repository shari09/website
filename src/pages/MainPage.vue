<template>
  <NavigationBar :current="current" />
  <Home :ref="el => sections.home = el" />
  <About :ref="el => sections.about = el" />
  <Skills />
  <Experience :ref="el => sections.work = el" />
  <Projects />
  <Testimonies :ref="el => sections.testimonies = el"/>
  <Footer />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
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
  setup() {
    const sections = ref({});
    const current = ref('home');

    onMounted(() => {
      document.addEventListener('scroll', () => {
        if (Object.entries(sections.value).some(([, val]) => !val)) {
          return;
        }
        // @ts-ignore
        const { section: curSection } = Object.entries(sections.value).reduce((prev, [section, { root }]) => {
          const y = root.getBoundingClientRect().top;
          return y <= 2 && y >= prev.value ? { section, value: y } : prev
        }, { section: 'home', value: -10000 });
        current.value = curSection;
      });
    });

    return {
      current,
      sections,
    }
  },
});
</script>
