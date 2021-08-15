<template>
  <div class="h-[5vh] rounded-t-3xl bg-white w-5/6 mx-auto"/>
  <div class="h-[5vh] bg-white w-full" @click.stop />
  <Header :header="header" class="bg-white" :id="about"/>
  <div class="py-28 bg-white flex items-center">
    <div class="text-right flex-1 pr-3">
      <p class="ml-40 text-purple-darkest text-4xl">{{ quote }}</p>
      <p class="ml-40 text-magenta text-5xl">{{ tagline }}</p>
    </div>
    <div class="flex-1 pl-3">
      <p class="pr-40 text-lg text-blue-dark">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Header } from '@/common-components';
import { about, navLinks } from '@/utils/data';

// TODO: make a scroll down button

export default defineComponent({
  name: 'About',
  components: { Header },
  setup() {

    return {
      about: navLinks.about.anchor,
      ...about,
    }
  },
});
</script>
