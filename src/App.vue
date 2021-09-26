<template>
  <v-app>
    <!-- top nav -->
    <TopNav />

    <!-- side nav -->
    <SideNav />

    <!-- main -->
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- footer -->
    <Footer />
  </v-app>
</template>

<script>
// components
import TopNav from "./components/Nav/TopNav.vue";
import SideNav from "./components/Nav/SideNav.vue";
import Footer from "./components/Footer/index.vue";

export default {
  name: "App",
  components: { TopNav, SideNav, Footer },

  data: () => ({}),
};
</script>

<style lang="scss">
@import "./style/index.scss";
</style>
