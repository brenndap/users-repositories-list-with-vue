<template>
  <v-row>
    <v-col cols="4" class="d-flex justify-between align-center flex-column mx-auto mt-4">
      <v-avatar size="150px">
        <img alt="Profile image" :src="profileImage" />
      </v-avatar>
      <strong class="mt-3">{{ profileName }}</strong>
    </v-col>
  </v-row>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "UserProfile",
  computed: { ...mapState(["profileName", "profileImage"]) }
};
</script>  