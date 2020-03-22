<template>
  <v-app-bar class="nav d-flex justify-center pa-4" dark max-height="80px">
    <v-text-field
      @keyup.native.enter="searchRepo"
      solo
      clearable
      label="Buscar..."
      append-icon="mdi-magnify"
      v-model="searchValue"
      @click:append="searchRepo"
      class="mb-2"
    />
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    search() {
      return this.$store.state.search;
    },
    searchValue: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        this.$store.commit("setSearch", value);
      }
    }
  },
  methods: {
    searchRepo() {
      if (!this.searchValue) {
        this.$router.push({ path: "/" });
        this.$store.commit("setError", true);
        this.$store.commit(
          "setErrorMessage",
          "Você precisa inserir um username."
        );
      } else {
        this.$router.push({ path: "/repos" });
        this.$store.dispatch("onSearchRepo");
      }
    }
  }
};
</script>
