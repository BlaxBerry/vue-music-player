<template>
  <v-navigation-drawer
    v-model="$store.state.toolsHandlers.SlidNavagation.isShowMaskRightSlide"
    fixed
    right
  >
    <v-list nav dense>
      <!-- 1. title-->
      <div class="d-flex justify-space-between align-center my-4 mx-2">
        <div class="d-flex">
          <h2>设置</h2>
        </div>
        <v-btn icon @click.stop="closeDrawerRight">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <v-divider></v-divider>

      <!-- 3. theme btns -->
      <ThemeToggle class="my-2 mx-2" />
      <v-divider></v-divider>

      <!-- about -->
      <v-list-item
        class="py-2 mb-0"
        href="https://github.com/BlaxBerry/vue-music-player"
        target="_blank"
      >
        <v-img
          :src="require('../../../assets/images/logo.png')"
          max-width="30"
        />
        <v-list-item-title
          class="text-body-1 pl-4"
          v-html="'About <small>2.0</small>'"
        />
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// components
import ThemeToggle from "./ThemeToggleBtns.vue";

export default {
  components: { ThemeToggle },
  methods: {
    closeDrawerRight() {
      this.$store.commit("closeMaskLeftSlideNav");
    },
  },
};
</script>

<style></style>
