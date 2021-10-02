<template>
  <div class="right-btns d-flex align-center pl-2">
    <!-- favourite -->
    <v-btn
      icon
      elevation="0"
      class="d-none d-sm-block mr-2"
      @click="$router.push('./hots')"
    >
      <v-badge color="primary" content="6">
        <v-icon color="red darken-2">mdi-heart</v-icon>
      </v-badge>
    </v-btn>

    <!-- settting -->
    <v-btn icon elevation="0" @click="showDrawerRight()">
      <v-icon>mdi-cog-outline</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    showDrawerRight() {
      this.$store.commit("showMaskRightSlideNav");
    },
  },
};
</script>
