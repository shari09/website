<template>
  <Header :header="header"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Header } from '@/common-components';
import { about } from '@/utils/data';

export default defineComponent({
  name: 'About',
  components: { Header },
  setup() {
    return {
      header: about.header,
    }
  },
});
</script>
