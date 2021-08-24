<template>
  <a class="px-3 flex h-full flex-col" 
    @mouseenter="setActive(true)"
    @mouseleave="setActive(false)"
  >
    <span 
      class="mt-auto text-lg fade text-purple opacity-90" 
      :class="[isActive() && 'md:text-purple-darkest']"
    >{{ text }}</span>
    <div class="mb-auto">
      <div 
        class="hidden md:block h-1 bg-purple-dark rounded-3xl mb-auto fade"
        :class="[ !isActive() && 'bg-opacity-0']"
      />
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: 'NavIcon',
  props: {
    text: {
      type: String,
      required: true,
    },
    isHovering: {
      type: Boolean,
      default: false,
    },
    current: {
      type: Boolean,
      default: false,
    },
  }, 
  setup(props) {
    const active = ref(false);
    const setActive = (state: boolean) => { active.value = state };

    const isActive = (): boolean => active.value || (!props.isHovering && props.current)
    return {
      isActive,
      setActive,
    }
  },
});
</script>
