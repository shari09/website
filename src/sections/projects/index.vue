<template>
  <Header :header="header" :color="'blue-dark'"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Header } from '@/common-components';

export default defineComponent({
  name: 'Projects',
  components: { Header },
  setup() {
    return {

    }
  },
});
</script>
