<template>
  <v-tabs color="red darken-2">
    <!-- tabs -->
    <v-tab
      v-for="(item, i) in tabItems"
      :key="i"
      class="justify-start"
      @click="changTabs(i + 1)"
    >
      <v-icon left>
        {{ item.icon }}
      </v-icon>
      {{ item.name }}
    </v-tab>

    <!-- contents -->
    <v-tab-item> <Songs v-if="tab == 1" id /> </v-tab-item>
    <v-tab-item> <Albums v-if="tab == 2" /> </v-tab-item>
    <v-tab-item> <MVs v-if="tab == 3" /> </v-tab-item>
  </v-tabs>
</template>

<script>
// tabs items
import { tabItems } from "../../assets/data/Tabs/SearchTabItems";
// components
import Songs from "./HotSongs/index.vue";
import Albums from ".//HotAlbums/index.vue";
import MVs from "./HotMVs/index.vue";

export default {
  components: { Songs, Albums, MVs },

  data() {
    return {
      tab: 1,
      tabItems,
    };
  },

  methods: {
    changTabs(type) {
      this.tab = type;
    },
  },
};
</script>

<style></style>
