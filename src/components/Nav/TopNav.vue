<template>
  <div>
    <!-- top nav bar-->
    <v-app-bar dark app class="px-md-6 px-lg-10">
      <!-- show side nav bar btn -->
      <v-app-bar-nav-icon @click="showSideNav" />

      <v-spacer></v-spacer>

      <!-- router btn -->
      <!-- <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left-bold</v-icon>
      </v-btn>
      <v-btn icon @click="$router.go(1)">
        <v-icon>mdi-arrow-right-bold</v-icon>
      </v-btn> -->

      <!-- search-->
      <v-text-field
        v-model="searchVal"
        label="Search"
        outlined
        dense
        class="mt-7 mx-7"
        prepend-inner-icon="mdi-magnify"
        @keydown.enter="goSearch"
      />

      <!-- dark theme btn -->
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        persistent-hint
        class="mt-6"
        @change="toggleTheme"
      />
      <v-icon>
        {{ isDarkTheme ? "mdi-weather-night" : "mdi-weather-sunny" }}
      </v-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkTheme: false,
      searchVal: "",
    };
  },
  methods: {
    showSideNav() {
      this.$store.commit("showAppSideNav");
    },

    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      this.$vuetify.theme.dark = this.isDarkTheme;
    },

    goSearch() {
      this.$router.push("/search?keyword=" + this.searchVal);
    },
  },
};
</script>
