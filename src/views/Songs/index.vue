<template>
  <div>
    <v-tabs centered color="red darken-2">
      <!-- tab bar -->
      <v-tab
        v-for="tab in tabItems"
        :key="tab.searchType"
        @click="changSearchTabsType(tab.searchType)"
        class="common-tabs"
      >
        {{ tab.name }}
      </v-tab>

      <!-- content -->
      <v-tab-item> hello {{ search.searchType }} </v-tab-item>
      <v-tab-item> hello {{ search.searchType }} </v-tab-item>
      <v-tab-item> hello {{ search.searchType }} </v-tab-item>
      <v-tab-item> hello {{ search.searchType }} </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
// tab items
import { tabItems } from "../../assets/data/Tabs/SongTabItems";

export default {
  data() {
    return {
      tabItems,
      search: {
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
};
</script>

<style></style>
