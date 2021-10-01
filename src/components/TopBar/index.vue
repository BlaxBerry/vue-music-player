<template>
  <v-app-bar app fixed height="80px" elevation="1">
    <!-- show side nav bar btn -->
    <v-app-bar-nav-icon class="d-lg-none" @click="showDrawerLeft" />

    <!-- title -->
    <v-toolbar-title class="d-none d-md-inline-flex align-center d-lg-none">
      <v-img
        :src="require('../../assets/images/logo.png')"
        max-width="35"
        class="white mr-2"
        style="border-radius:50%"
      />
      <h4
        class="font-weight-black"
        v-text="'MusicPlayer'"
      />
    </v-toolbar-title>

    <!-- search field -->
    <div class="d-flex align-center justify-center" style="flex:1">
      <v-text-field
        v-model="searchVal"
        label="Search"
        solo
        clearable
        dense
        color="red darken-2"
        class="mt-7 mx-7"
        prepend-inner-icon="mdi-magnify"
        @keydown.enter="goSearch"
      />
      <v-spacer></v-spacer>

      <!-- right btns -->
      <ToolBtns />
    </div>
  </v-app-bar>
</template>

<script>
// components
import ToolBtns from "./ToolBtns.vue";

export default {
  components: { ToolBtns },

  data() {
    return {
      searchVal: "Sia",
      sildeLeftISShow: null,
    };
  },
  methods: {
    showDrawerLeft() {
      this.$store.commit("showMaskLeftSlideNav");
    },
  },
};
</script>

<style lang="scss" scoped></style>
