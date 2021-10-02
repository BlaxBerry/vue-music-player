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
      <h4 class="font-weight-black" v-text="'MusicPlayer'" />
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

      <!-- search history -->
      <v-menu
        v-if="historyList.length"
        offset-y
        close-on-content-click
        transition="slide-y-transition"
        rounded="b-xl"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            icon
            elevation="0"
            class="d-none d-sm-flex"
          >
            <v-badge color="primary" :content="historyList.length">
              <v-icon color="red darken-2" large>mdi-history</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-list class="py-0 px-1">
          <v-list-item
            v-for="(s, i) in historyList"
            :key="i"
            class="red--text text--darken-2 pl-0 d-flex align-center"
            @click="searchVal = s"
          >
            <v-icon color="red darken-2" small>mdi-history</v-icon>
            <b class="ml-1">{{ s }}</b>
          </v-list-item>
          <v-list-item @click="clearHistory">
            <small class="red--text text--darken-2">删除记录</small>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- right btns -->
      <v-spacer></v-spacer>
      <ToolBtns />
    </div>
  </v-app-bar>
</template>

<script>
// components
import ToolBtns from "./ToolBtns.vue";
// utils
import saveLocalStorage from "../../utils/localStorage/saveLocalstorage";

export default {
  components: { ToolBtns },

  data() {
    return {
      searchVal: "Sia",
      sildeLeftISShow: null,
      historyList: [],
    };
  },
  created() {
    this.getHistory();
  },
  methods: {
    showDrawerLeft() {
      this.$store.commit("showMaskLeftSlideNav");
    },
    getHistory() {
      let savedList = JSON.parse(localStorage.getItem("MusicPlayer-Hitorsy"));
      if (savedList) this.historyList = savedList.reverse().slice(0, 5);
    },
    clearHistory() {
      localStorage.clear("MusicPlayer-Hitorsy");
      this.historyList = [];
    },
    goSearch() {
      if (this.searchVal.trim() == "") {
        this.searchVal = "Cannot be Empty";
        return;
      }
      let params = {
        keywords: this.searchVal,
        type: 1,
        limit: 30,
        page: 1,
        offset: 0,
      };
      // 1. search and go to Search View
      this.$store.dispatch("search", params);
      this.$router.push("/search?keyword=" + this.searchVal);

      // 2. save search history in localstorage
      saveLocalStorage(this.searchVal, "MusicPlayer-Hitorsy");
      this.getHistory();
    },
  },
};
</script>

<style lang="scss" scoped>
.v-menu__content {
  top: 80px !important;
  .v-list-item {
    min-height: 30px !important;
  }
}
</style>
