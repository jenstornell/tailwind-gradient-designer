<template>
  <div class="flex flex-col gap-1">
    <HeadingSmall for_id="prefix" title="Prefix" />
    <div class="mb-2 text-gray-500">
      Good for pseudo classes (like :hover)
    </div>
    <div
      style="font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;"
    >
      <input
        id="prefix"
        type="text"
        v-model="prefix"
        class="w-64 p-2 bg-gray-100 rounded ring-2 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        spellcheck="false"
        autocomplete="off"
      />
    </div>
  </div>
  <div class="flex flex-col gap-1">
    <HeadingSmall title="Tailwind classes" />
    <div class="mb-2 text-gray-500">
      Make sure to install
      <a class="underline" href="https://tailwindcss.com/" target="_blank"
        >Tailwind</a
      >
      to use them.
    </div>

    <div
      class="flex items-center justify-between bg-gray-100 shadow select-all"
    >
      <div
        v-if="thisGradientClasses.value"
        class="px-6 py-4 text-blue-800"
        style="font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;"
      >
        <span
          v-for="(item, index) in thisGradientClasses.value.split(' ')"
          :key="`out_class_${index}`"
        >
          <span class="text-red-800" v-show="{ hidden: index == 0 }">{{
            prefix
          }}</span
          >{{ item }}&nbsp;</span
        >
      </div>
      <div class="px-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M15.243 4.515l-6.738 6.737-.707 2.121-1.04 1.041 2.828 2.829 1.04-1.041 2.122-.707 6.737-6.738-4.242-4.242zm6.364 3.535a1 1 0 0 1 0 1.414l-7.779 7.779-2.12.707-1.415 1.414a1 1 0 0 1-1.414 0l-4.243-4.243a1 1 0 0 1 0-1.414l1.414-1.414.707-2.121 7.779-7.779a1 1 0 0 1 1.414 0l5.657 5.657zm-6.364-.707l1.414 1.414-4.95 4.95-1.414-1.414 4.95-4.95zM4.283 16.89l2.828 2.829-1.414 1.414-4.243-1.414 2.828-2.829z"
          />
        </svg>
      </div>
    </div>
  </div>

  <div class="flex flex-col gap-1">
    <HeadingSmall title="CSS" />
    <div class="mb-2 text-gray-500">
      Native CSS without dependencies.
    </div>

    <div
      class="flex items-center justify-between bg-gray-100 shadow select-all"
    >
      <div
        class="px-6 py-4 text-blue-800"
        style="font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;"
      >
        <span class="text-rose-800">background-image:</span>
        {{ state.css }};
      </div>
      <div class="px-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M15.243 4.515l-6.738 6.737-.707 2.121-1.04 1.041 2.828 2.829 1.04-1.041 2.122-.707 6.737-6.738-4.242-4.242zm6.364 3.535a1 1 0 0 1 0 1.414l-7.779 7.779-2.12.707-1.415 1.414a1 1 0 0 1-1.414 0l-4.243-4.243a1 1 0 0 1 0-1.414l1.414-1.414.707-2.121 7.779-7.779a1 1 0 0 1 1.414 0l5.657 5.657zm-6.364-.707l1.414 1.414-4.95 4.95-1.414-1.414 4.95-4.95zM4.283 16.89l2.828 2.829-1.414 1.414-4.243-1.414 2.828-2.829z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import HeadingSmall from "@/components/HeadingSmall.vue";
import { ref } from "vue";
import vclone from "@/vclone/";

export default {
  components: {
    HeadingSmall,
  },
  setup() {
    const { state, thisGradientClasses } = vclone;
    const prefix = ref("");

    return { state, prefix, thisGradientClasses };
  },
};
</script>
