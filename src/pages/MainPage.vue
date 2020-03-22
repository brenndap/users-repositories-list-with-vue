<template>
  <v-container style="min-height: 85vh">
    <git-hub-banner />
    <div class="text-center ma-2">
      <v-snackbar v-model="error" color="error" top>
        {{ errorMessage }}
        <v-btn text @click="closeError">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-snackbar>
    </div>
  </v-container>
</template>

<script>
import GitHubBanner from "../components/GitHubBanner";
import { mapState } from "vuex";
export default {
  name: "MainPage",
  components: {
    GitHubBanner
  },
  computed: {
    ...mapState(["errorMessage", "search"]),
    error: {
      get() {
        return this.$store.state.error;
      },
      set() {
        this.$store.commit("setError", false);
      }
    }
  },
  methods: {
    closeError() {
      this.$store.commit("setError", false);
      this.$store.commit("setErrorMessage", "");
    }
  }
};
</script>