<template>
  <div class="w-full pl-28">
    <p class="text-3xl">{{ header.plain }}</p>
    <p class="text-4xl font-bold"
      :class="`text-${color}`"
    >
      {{ header.emphasis }}
    </p>
    <div class="h-1 bg-purple-dark rounded-3xl" :style="{ width: `${header.emphasis.length+3}em` }"/>
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
