<template>
  <div class="h-[72px]" :id="navLinks.testimonies.anchor"/>
  <Header :header="header" class="my-10"/>
  <div class="flex flex-row">
    <img src="/assets/left-arrow.svg" 
      class="ml-auto hover:cursor-pointer"
      @click="scroll(-quoteWidth)"
    />
    <div ref="wrapper" class="w-5/6 mx-auto flex flex-row flex-nowrap overflow-x-auto items-center">
      <Testimony class="m-10" 
        :testimony="testimony" 
        v-for="(testimony, i) in testimonies" 
        :key="'testimonies'+i"
        ref="block"
      />
    </div>
    <img src="/assets/right-arrow.svg" 
      class="mr-auto hover:cursor-pointer"
      @click="scroll(quoteWidth)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import { Header } from '@/common-components';
import { navLinks, testimoniesSection } from '@/utils/data';

import { Testimony } from './components';

export default defineComponent({
  name: 'Testimonies',
  components: { Header, Testimony },
  setup() {
    const wrapper = ref<Element | null>(null);
    const block = ref(null);
    const quoteWidth = ref<number>(0);

    const scroll = (amount: number) => {
      if (!wrapper.value) {
        return;
      }
      wrapper.value.scrollTo({
        left: wrapper.value.scrollLeft + amount,
        behavior: 'smooth',
      });
    };

    onMounted(() => {
      if (!wrapper.value) {
        return;
      }
      const fullWidth = wrapper.value.scrollWidth;
      const visibleWidth = wrapper.value.clientWidth;

      wrapper.value.scrollTo({
        left: wrapper.value.scrollLeft + (fullWidth-visibleWidth)/2,
        behavior: 'smooth',
      });
    });

    watch(block, (value) => {
      if (value) {
        // @ts-ignore
        quoteWidth.value = value.$el.clientWidth;
      }
    });

    return {
      navLinks,
      ...testimoniesSection,
      wrapper,
      scroll,
      block,
      quoteWidth,
    }
  },
});
</script>
