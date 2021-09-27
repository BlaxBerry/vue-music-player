<template>
  <div>
    <!-- top nav bar-->
    <v-app-bar app class="px-md-6 px-lg-10">
      <!-- show side nav bar btn -->
      <v-app-bar-nav-icon @click="showSideNav" />
      <v-toolbar-title class="d-none d-md-inline-block"
        >Music Player</v-toolbar-title
      >

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
        color="red darken-2"
        class="mt-7 mx-7"
        prepend-inner-icon="mdi-magnify"
        @keydown.enter="goSearch"
      />

      <!-- dark theme toggle btn -->
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        color="red darken-2"
        persistent-hint
        class="mt-6"
        @change="toggleTheme"
      />
      <v-icon>
        {{ isDarkTheme ? "mdi-weather-night" : "mdi-weather-sunny" }}
      </v-icon>
    </v-app-bar>

    <!-- alert message -->
    <v-snackbar
      v-model="isShowAlertMessage"
      absolute
      centered
      :multi-line="true"
      color="red darken-2"
      elevation="50"
    >
      Cannot Search an Empty
      <template v-slot:action="{ attrs }">
        <v-btn
          dark
          x-small
          fab
          v-bind="attrs"
          @click="isShowAlertMessage = false"
        >
          x
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkTheme: true,
      searchVal: "",
      isShowAlertMessage: false,
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
      // 1. vuex Axios 请求 get song list
      let keywords = this.searchVal.trim();
      let params = {
        keywords,
        type: 1,
        limit: 30,
      };
      if (keywords == "") {
        this.isShowAlertMessage = true;
        return;
      }
      // 默认获取 song list
      this.$store.dispatch("getSearchResultList", params);
      // 重新获取 song list 的 pic
      this.$store.dispatch("getSearchResultSongsListPic", params);

      // 2. go to Search view
      this.$router.push("/search?keyword=" + this.searchVal);
    },
  },
};
</script>
