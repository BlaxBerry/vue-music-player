<template>
  <v-app>
    <!-- side nav -->
    <SideNav />
    <MaskLeft />

    <!-- top bar -->
    <TopBar />

    <!-- main -->
    <v-main>
      <v-container fluid class="pa-0">
        <router-view
          :style="
            $store.getters.songSelected.url
              ? 'padding-bottom:70px'
              : 'padding-bottom:0'
          "
        ></router-view>
        <MaskRight style="z-index:99" />
      </v-container>
    </v-main>

    <!-- player -->
    <v-footer app style="z-index:10">
      <Player />
    </v-footer>
  </v-app>
</template>

<script>
// components
import TopBar from "./components/TopBar/index.vue";
import SideNav from "./components/SideNav/Left/LargeScreen/index.vue";
import MaskLeft from "./components/SideNav/Left/MaskSlide/index.vue";
import MaskRight from "./components/SideNav/Right/index.vue";
import Player from "./components/Player/index.vue";

export default {
  name: "App",
  components: { TopBar, SideNav, MaskLeft, MaskRight, Player },
  mounted() {
    // vuetify dark theme
    this.$vuetify.theme.dark = true;
  },
};
</script>

<style lang="scss">
@import "./style/index.scss";
</style>
