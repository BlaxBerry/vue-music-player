<template>
  <v-app>
    <!-- side nav -->
    <SideNav />
    <MaskLeft />

    <!-- top bar -->
    <TopBar />

    <!-- main -->
    <v-main>
      <v-container fluid>
        <router-view></router-view>
        <MaskRight />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// components
import TopBar from "./components/TopBar/index.vue";
import SideNav from "./components/SideNav/Left/LargeScreen/index.vue";
import MaskLeft from "./components/SideNav/Left/MaskSlide/index.vue";
import MaskRight from "./components/SideNav/Right/index.vue";

export default {
  name: "App",
  components: { TopBar, SideNav, MaskLeft, MaskRight },
  mounted() {
    // vuetify dark theme
    this.$vuetify.theme.dark = true;
  },
};
</script>

<style lang="scss">
@import "./style/index.scss";
</style>
