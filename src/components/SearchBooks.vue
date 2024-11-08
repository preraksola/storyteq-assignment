<script>
import SearchInput from "@/components/SearchInput.vue";
import { mapGetters } from "vuex";
import NoDataFound from "@/components/NoDataFound.vue";

export default {
  name: "SearchBooks",

  components: { NoDataFound, SearchInput },

  data() {
    return {
      filteredBooks: null,
    };
  },

  methods: {
    search(text) {
      this.filteredBooks = this.books.filter((book) =>
        book.title.toLowerCase().includes(text.toLowerCase()),
      );
    },

    clear() {
      this.filteredBooks = null;
    },
  },

  computed: {
    ...mapGetters(["books"]),

    noBooks() {
      return this.filteredBooks?.length === 0;
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

  .books.flex.q-pa-md.row.justify-center
    transition-group(name="list" tag="div")
      q-list.list(
        v-if="filteredBooks?.length"
        bordered
        separator
      )
        q-item-label.text-right(header) {{ filteredBooks.length }} book(s) found
        q-item(
          v-for="book in filteredBooks"
          :key="book.title"
        )
          q-item-section
            q-item-label {{ book.title }}
            q-item-label(caption) Author: {{ book.author }}

      no-data-found(v-else-if="noBooks")

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
