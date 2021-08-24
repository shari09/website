<template>
  <div class="h-[72px] pt-32" :id="navLinks.testimonies.anchor" ref="root"/>
  <Header :header="header" class="my-14"/>
  <div class="flex flex-row mb-12">
    <img src="/assets/left-arrow.svg" 
      class="hidden md:block ml-auto hover:cursor-pointer"
      @click="scroll(-quoteWidth)"
      v-if="overflow"
    />
    <div ref="wrapper" class="mx-2 md:w-5/6 md:mx-auto flex flex-col md:flex-row flex-nowrap md:overflow-x-auto items-center justify-between no-scrollbar">
      <Testimony class="m-4 md:m-10" 
        :testimony="testimony" 
        v-for="(testimony, i) in testimonies" 
        :key="'testimonies'+i"
        ref="block"
      />
    </div>
    <img src="/assets/right-arrow.svg" 
      class="hidden md:block mr-auto hover:cursor-pointer"
      @click="scroll(quoteWidth)"
      v-if="overflow"
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
    const overflow = ref<boolean>(false);
    const root = ref(null);

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
      const watchWidth = () => {
        if (wrapper.value === null) {
          return;
        }
        const fullWidth = wrapper.value.scrollWidth;
        const visibleWidth = wrapper.value.clientWidth;
        
        if (fullWidth > visibleWidth && !overflow.value) {
          overflow.value = true;
          wrapper.value.scrollTo({
            left: wrapper.value.scrollLeft + (fullWidth-visibleWidth)/2,
            behavior: 'smooth',
          });
        }
        if (fullWidth <= visibleWidth && overflow.value) {
          overflow.value = false;
        }
      }
      watchWidth();
      window.addEventListener('resize', watchWidth);
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
      overflow,
      root,
    }
  },
});
</script>

<style scoped>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
</style>
