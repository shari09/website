<template>
  <div class="px-2 relative w-full md:w-1/2 h-[26em]" @mouseenter="hover = true" @mouseleave="hover = false">
    <img :src="info.photoPath" class="object-cover rounded-xl w-full h-full" />
    <transition name="fade" mode="out-in">
      <div class="absolute top-0 w-full h-full flex flex-col justify-center bg-white bg-opacity-90" v-if="hover">
        <div class="text-black text-2xl text-center m-2">{{ info.name }}</div>
        <div class="px-32 text-gray-900 font-light text-lg text-center my-8">{{ info.description }}</div>
        <a class="
            text-xl text-center transition duration-500 ease-in-out
            py-2 px-8 inline-block rounded-xl mx-auto bg-gray-700 text-white hover:scale-110"
          :href="info.link"
        >
          VIEW
        </a>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { PhotoCard } from '@/utils/interfaces';

export default defineComponent({
  name: 'PhotoCard',
  props: {
    info: {
      type: Object as PropType<PhotoCard>,
      required: true,
    },
  },
  setup() {
    const hover = ref<boolean>(false);

    return {
      hover,
      baseUrl: process.env.BASE_URL,
    }
  },
});
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

</style>
