<script>
import SearchInput from "@/components/SearchInput.vue";

export default {
  name: "SearchBooks",

  components: { SearchInput },

  methods: {
    search(text) {
      console.log(text);
    },
  },
};
</script>

<template lang="pug">
  .input
    search-input(
      @search="search"
    )

</template>

<style scoped lang="scss"></style>
