<template>
  <div class="right-btns d-flex align-center pl-2">
    <!-- dark theme toggle btn -->
    <ThemeToggle class=" d-none d-sm-flex d-md-none align-center" />

    <!-- favourite -->
    <v-btn
      icon
      elevation="2"
      class="d-none d-sm-block mr-2"
      @click="$router.push('./hots')"
    >
      <v-badge color="primary" content="6">
        <v-icon color="red darken-2">mdi-heart</v-icon>
      </v-badge>
    </v-btn>

    <!-- settting -->
    <v-btn icon elevation="2" @click="showDrawerRight()">
      <v-badge dot color="red">
        <v-icon>mdi-cog-outline</v-icon>
      </v-badge>
    </v-btn>
  </div>
</template>

<script>
// components
import ThemeToggle from "./ToolBtnsThemeToggle.vue";

export default {
  components: { ThemeToggle },

  data() {
    return {
      isDarkTheme: true,
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      this.$vuetify.theme.dark = this.isDarkTheme;
    },
    showDrawerRight() {
      this.$store.commit("showMaskRightSlideNav");
    },
  },
};
</script>
