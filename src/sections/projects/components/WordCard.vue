<template>
  <div class="px-2 w-full md:w-1/3 h-full md:h-[30em]">
    <div class="bg-white rounded-xl w-full h-full p-10 pb-6 flex flex-col">
      <div class="text-3xl text-gray-900">{{ info.name }}</div>
      <div class="font-thin text-sm text-gray-800">
      {{ languages }}
      </div>
      <ul class="list-inside overflow-y-auto list-disc mt-6 mb-10 font-thin text-gray-800">
        <li v-for="(description, i) in info.description" :key="info.name+i">
          {{ description }}
        </li>
      </ul>
      <a class="text-gray-700 text-xl text-center border border-gray-700 transition duration-500 ease-in-out
          py-1 px-10 inline-block rounded-lg mr-auto hover:bg-gray-700 hover:text-white hover:scale-110 mt-auto"
        :href="info.link"
      >
        VIEW
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { WordCard } from '@/utils/interfaces';

export default defineComponent({
  name: 'WordCard',
  props: {
    info: {
      type: Object as PropType<WordCard>,
      required: true,
    },
  },
  setup(props) {
    const languages = props.info.languages.reduce((acc, cur, i) => {
      if (i === 0) {
        return `${acc} ${cur}`
      }
      return `${acc} · ${cur} `;
    }, '');

    return {
      languages,
    }
  },
});
</script>
