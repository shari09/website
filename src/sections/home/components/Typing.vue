<template>
  <p>{{ chars }}</p>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, PropType, ref, watch } from 'vue';

export default defineComponent({
  name: 'Typing',
  props: {
    words: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup(props) {
    const chars = ref<string>('|');
    const idx = ref<number>(0);
    const word = ref<string>(props.words[idx.value]);

    const typeTime = 100;
    const pauseTime = 500;
    const deleteTime = 50;
    let typeId = 0;
    let pauseId = 0;
    let deleteId = 0;

    const start = () => {
      clearInterval(deleteId);
      typeId = setInterval(() => {
        const len = chars.value.length;
        if (len-1 !== word.value.length) {
          chars.value = `${chars.value.substring(0, len-1)}${word.value[len-1]}|`;
          return;
        }
        pause();
      }, typeTime);
    };

    const pause = () => {
      clearInterval(typeId);
      pauseId = setTimeout(() => deleteWord(), pauseTime);
    };

    const deleteWord = () => {
      clearInterval(pauseId);
      deleteId = setInterval(() => {
        const len = chars.value.length;
        if (len-1 !== 0) {
          chars.value = `${chars.value.substring(0, len-2)}|`;
          return;
        }
        idx.value = idx.value === props.words.length-1 ? 0 : idx.value+1;
        start();
      }, deleteTime);
    };

    watch(idx, (_, newVal) => {
      word.value = props.words[newVal]
    });

    onMounted(() => start());

    onUnmounted(() => [typeId, pauseId, deleteId].forEach(id => clearInterval(id)));

    return {
      chars,
    }
  },
});
</script>
