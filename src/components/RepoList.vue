<template>
  <v-container fluid>
    <v-row justify="center">
      <repo-card
        v-for="(repo, idx) in repos"
        :key="idx"
        :repoName="repo.name"
        :repoDescription="repo.description"
        :repoStargazers="repo.stargazers_count"
        :repoUrl="repo.html_url"
      />
    </v-row>
    <div class="text-center mt-4">
      <v-pagination
        v-if="repos.length"
        v-model="page"
        :length="Math.ceil(totalRepos/9)"
        :total-visible="5"
        color="#000"
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
import RepoCard from "./RepoCard";
import { mapState } from "vuex";
export default {
  name: "repo-list",
  components: {
    RepoCard
  },
  computed: {
    ...mapState(["totalRepos", "repos"]),
    page: {
      get(){
        return this.$store.state.page
      },
      set(value){
        this.$store.commit("setPage", value)
      }
    }
  },
  watch: {
    page() {
      this.$store.dispatch("onChangePage")
    }
  }
};
</script>
