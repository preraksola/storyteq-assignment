<script>
import SearchInput from "@/components/SearchInput.vue";
import { mapGetters } from "vuex";
import NoDataFound from "@/components/NoDataFound.vue";

export default {
  name: "SearchCities",

  components: { NoDataFound, SearchInput },

  data() {
    return {
      filteredCities: null,
    };
  },

  methods: {
    search(text) {
      this.filteredCities = this.cities.filter((city) =>
        city.toLowerCase().includes(text.toLowerCase()),
      );
    },

    clear() {
      this.filteredCities = null;
    },
  },

  computed: {
    ...mapGetters(["cities"]),

    noCities() {
      return this.filteredCities?.length === 0;
    },
  },
};
</script>

<template lang="pug">
  .input.q-mb-md
    search-input(
      @search="search"
      @clear="clear"
    )

  .cities.flex.q-pa-md.row.justify-center
    transition-group(name="list" tag="div")
      q-list.list(
        v-if="filteredCities?.length"
        bordered
        separator
      )
        q-item-label.text-right(header) {{ filteredCities.length }} result(s) found
        q-item(
          v-for="city in filteredCities"
          :key="city"
        )
          q-item-section
            q-item-label {{ city }}

      no-data-found(v-else-if="noCities")

</template>

<style scoped lang="scss">
.list {
  width: 500px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-move {
  transition: transform 0.3s ease;
}
</style>
