<template>
  <div style="min-height: 85vh; width: 100%;" class="d-flex justify-center flex-column align-center">
    <div v-if="!error">
      <user-profile v-if="profileName" :profileName="profileName" :profileImage="profileImage" />
      <p v-if="!loading && !repos.length && profileName.length" class="dsplay-1">Este usuário não possui repositórios.</p>
      <repo-list v-if="!loading && profileName.length && repos.length" />
      <v-row v-if="loading" justify="center" class="mt-6">
        <v-progress-circular :value="100" :indeterminate="loading"></v-progress-circular>
      </v-row>
    </div>
    <div v-if="error" class="text-center" width="500px" max-height="300px">
      <p class="display-4 font-weight-bold">{{errorStatus}}</p>
      <p class="display-1">{{errorMessage}}</p>
    </div>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile";
import RepoList from "../components/RepoList";
import { mapState } from "vuex";

export default {
  name: "RepoPage",
  components: {
    UserProfile,
    RepoList
  },
  computed: {
    ...mapState([
      "repos",
      "search",
      "profileName",
      "profileImage",
      "loading",
      "totalRepos",
      "error",
      "errorMessage",
      "errorStatus"
    ])
  },
  mounted() {
    if(!this.search)
      this.$router.push({ path: "/" })
  },
  methods: {
    changePage() {
      this.$store.dispatch("onChangePage");
    }
  }
};
</script>