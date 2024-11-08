<script>
import { ref } from "vue";
import HomePage from "@/components/HomePage.vue";

export default {
  name: "LayoutDefault",

  components: { HomePage },

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>

<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header(elevated)
      q-toolbar
        q-toolbar-title Autocomplete Service


    q-page-container
      HomePage
</template>
