<template>
  <div class="w-full pl-4 md:pl-28">
    <p class="text-3xl">{{ header.plain }}</p>
    <p class="text-4xl font-bold"
      :class="`text-${color}`"
    >
      {{ header.emphasis }}
    </p>
    <div class="h-1 rounded-3xl" :class="`bg-${color}`" :style="{ width: `${header.emphasis.length+3}em` }"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Header } from '@/utils/interfaces';

// TODO: get rid of the inline-style
export default defineComponent({
  name: 'Header',
  props: {
    header: {
      type: Object as PropType<Header>,
      required: true,
    },
    color: {
      type: String,
      default: 'purple-darkest',
    },
  },
});
</script>
