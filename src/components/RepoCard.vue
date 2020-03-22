<template>
  <v-card
    hover
    :href="repoUrl"
    width="400"
    min-height="150"
    class="d-flex flex-column justify-between mt-3 mx-2"
  >
    <v-row class="d-flex align-start justify-between">
      <v-col cols="8">
        <v-card-title>{{ repoName }}</v-card-title>
      </v-col>
      <v-col cols="4">
        <v-card-text class="d-flex align-center justify-end">
          <v-icon>mdi-star</v-icon>
          <span>{{ repoStargazers }}</span>
        </v-card-text>
      </v-col>
    </v-row>
    <v-card-subtitle>{{ repoDescription }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "repo-card",
  props: {
    repoName: {
      type: String,
      required: true
    },
    repoStargazers: {
      type: Number,
      required: true
    },
    repoDescription: {
      type: String
    },
    repoUrl: {
      type: String,
      required: true
    }
  }
};
</script>
