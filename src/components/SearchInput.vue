<script>
export default {
  name: "SearchInput",

  emits: ["search", "clear"],

  data() {
    return {
      text: "",
    };
  },

  mounted() {
    this.$refs?.searchInput?.focus();
  },

  methods: {
    search() {
      if (this.text?.length >= 3) {
        this.$emit("search", this.text);
      } else {
        this.clear();
      }
    },

    clear() {
      this.$emit("clear");
    },
  },
};
</script>

<template lang="pug">
  .flex.q-pa-md.row.justify-center
    q-input.input(
      ref="searchInput"
      v-model="text"
      label="Search"
      outlined
      clearable
      hint="Type at least 3 characters"
      debounce="500"
      @update:model-value="search"
      @clear="clear"
    )
      template(v-slot:prepend)
        q-icon(name="search")
</template>

<style scoped lang="scss">
.input {
  width: 500px;
}
</style>
