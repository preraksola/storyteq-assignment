<script>
import SearchBooks from "@/components/SearchBooks.vue";
import SearchCities from "@/components/SearchCities.vue";

export default {
  name: "HomePage",
  components: { SearchCities, SearchBooks },

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

  created() {
    // Initial store with data
    this.$store.commit("initBooksData", [
      {
        title: "Don Quixote",
        author: "Miguel De Cervantes",
      },
      {
        title: "Pilgrim's Progress",
        author: "John Bunyan",
      },
      {
        title: "Robinson Crusoe",
        author: "Daniel Defoe",
      },
      {
        title: "Gulliver's Travels",
        author: "Jonathan Swift",
      },
      {
        title: "Tom Jones",
        author: "Henry Fielding",
      },
      {
        title: "Clarissa",
        author: "Samuel Richardson",
      },
      {
        title: "Tristram Shandy",
        author: "Laurence Sterne",
      },
    ]);

    this.$store.commit("initCitiesData", [
      "san jose",
      "santiago",
      "san francisco",
      "santa rosa",
      "san juan",
      "sabadell",
      "salamanca",
      "salt lake city",
      "salinas",
      "salem",
      "sausalito",
      "taipei",
      "tel aviv",
      "tempe",
      "termez",
      "temuco",
      "tiajuna",
      "tieling",
      "thousand oaks",
      "thunder bay",
      "tokyo",
      "tulsa",
    ]);
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
      search-cities(v-else-if="tab.name === 'cities'")
</template>

<style scoped lang="scss"></style>
