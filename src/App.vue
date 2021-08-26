<template>
  <v-app>
    <!-- topNav + leftNavDrawer -->
    <Nav />
    <!-- main -->
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <!-- audio -->
    <PlayBar/>
    <!-- footer -->
    <Footer />
  </v-app>
</template>

<script>
// components
import Nav from "@/components/Nav/Nav.vue";
import Footer from "@/components/Footer/Footer.vue";
import PlayBar from "@/components/Playbar/Playbar.vue"

export default {
  name: "App",
  components: {
    Nav,
    PlayBar,
    Footer,
  },

  data: () => ({}),
};
</script>

<style lang="scss">
@import "./style/index.scss";
</style>
