<template>
  <div>
    <v-tabs icons-and-text right color="red darken-2">
      <!-- tab bar -->
      <v-tab
        v-for="tab in tabItems"
        :key="tab.searchType"
        @click="changSearchTabsType(tab.searchType)"
      >
        {{ tab.name }}
        <v-icon>{{ tab.icon }}</v-icon>
      </v-tab>

      <!-- content -->
      <v-tab-item> <Songs v-if="search.searchType == 1"/></v-tab-item>
      <v-tab-item> <Albums v-if="search.searchType == 1000" /> </v-tab-item>
      <v-tab-item> <MVs v-if="search.searchType == 1004" /> </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
// tabs items
import { tabItems } from "../../assets/data/Tabs/SearchTabItems";
// components
import Songs from "./SearchSongs/index.vue";
import Albums from "./SearchAlbums/index.vue";
import MVs from "./SearchMVs/index.vue";

export default {
  components: { Songs, Albums, MVs },
  data() {
    return {
      tabItems,
      search: {
        queryKeyword: "",
        searchKeyword: "Sia",
        searchPage: 1,
        searchType: 1,
      },
    };
  },
  methods: {
    searchList() {
      let params = {
        keywords: this.search.searchKeyword,
        type: this.search.searchType,
        limit: 30,
        page: this.search.searchPage,
        offset: (this.search.searchPage - 1) * 30,
      };
      this.$store.dispatch("search", params);
    },

    changSearchTabsType(type) {
      this.search.searchType = type;
      this.searchList();
    },
  },

  created() {
    // 1.
    let keyword = this.$route.query.keyword;
    this.searchQueryKeyword = keyword ? keyword : "Sia";
    // 2.
    this.searchList();
  },
};
</script>
