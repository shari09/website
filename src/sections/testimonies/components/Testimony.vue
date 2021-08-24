<template>
  <div class="bg-purple-dark text-white p-10 rounded-full flex flex-col align-center text-center flex-shrink-0 w-full md:w-96">
    <div class="my-4">{{ testimony.quote }}</div>
    <div class="font-bold">{{ testimony.author }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Testimony } from '@/utils/interfaces';

export default defineComponent({
  name: 'Quote',
  props: {
    testimony: {
      type: Object as PropType<Testimony>,
      required: true,
    },
  },
});
</script>
