<script>
import SearchBooks from "@/components/SearchBooks.vue";

export default {
  name: "HomePage",
  components: { SearchBooks },

  data() {
    return {
      tabs: [
        {
          name: "books",
          label: "Books",
          icon: "auto_stories",
        },
        {
          name: "cities",
          label: "Cities",
          icon: "location_city",
        },
      ],
      selectedTab: "books",
    };
  },
};
</script>

<template lang="pug">
  q-tabs(
    v-model="selectedTab"
    align="center"

  )
    q-tab(v-for="tab in tabs"
      :key="tab.name"
      :name="tab.name"
      :label="tab.label"
      :icon="tab.icon"
    )

  q-separator

  q-tab-panels(v-model="selectedTab" animated)
    q-tab-panel(v-for="tab in tabs" :key="tab.name" :name="tab.name")
      search-books(v-if="tab.name === 'books'")
</template>

<style scoped lang="scss"></style>
