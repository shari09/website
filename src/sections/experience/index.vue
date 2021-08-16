<template>
  <div class="h-[72px] bg-white" :id="navLinks.work.anchor"/>
  <div class="pt-20 pb-32 bg-white">
    <Header :header="header" :color="'blue-dark'" class="mb-20"/>
    <div class="bg-blue w-4/5 mx-auto my-2 rounded-xl py-8" 
      v-for="(position, i) in positions" 
      :key="position+i"
      @mouseenter="curHover = i" 
      @mouseleave="curHover = -1"
    >
      <transition name="fade" mode="out-in">
        <div 
          class="font-bold text-white text-2xl text-center"
          v-if="curHover !== i"
        >
          {{ `${position.company} — ${position.role}` }}
        </div>
        <div class="text-gray-100 text-xl px-6 flex flex-nowrap" 
          v-else 
          :ref="cards[i]"
        >
          <p class="">{{ position.description }}</p>
          <p class="ml-auto pl-6 flex-shrink-0">{{ position.duration }}</p>
        </div>  
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, Ref } from 'vue';
import { Header } from '@/common-components';

import { navLinks, experience } from '@/utils/data';

export default defineComponent({
  name: 'Experience',
  components: { Header },
  setup() {
    const curHover = ref<number>(-1);
    const cards: Ref<null | Element>[] = experience.positions.map(() => ref(null));

    watch(curHover, (val, oldVal) => {
      if (val === -1) {
        return;
      }
      console.log(cards[val].value?.clientHeight);
      console.log(cards[oldVal]?.value?.clientHeight);
    });

    return {
      ...experience,
      navLinks,
      curHover,
      cards,
    }
  },
});
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.15s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

</style>
