<template>
  <div color="basil">
    <v-subheader>
      <b class="mx-1 mr-2 text-h5">{{ $route.query.q }}</b>
      Found
      <b class="mx-1">{{ count }}</b>
      Results
    </v-subheader>

    <!-- tab -->
    <v-tabs v-model="tab" color="red lighten-2">
      <v-tab v-for="(item, index) in items" :key="index">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <!-- songlists -->
      <v-tab-item><SongLists :list="songList"/></v-tab-item>
      <v-tab-item>{{ tab }}</v-tab-item>
      <v-tab-item>{{ tab }}</v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
//api
import { Search } from "@/api/search.js";
// components
import SongLists from "./SongLists.vue";

export default {
  components: {
    SongLists,
  },

  data() {
    return {
      // tab change
      tab: null,
      items: ["Lists", "Sheets", "MVs"],
      // list
      songList: [],
      count: 0,
    };
  },

  methods: {},

  created() {
    let type;
    switch (this.tab) {
      case 0:
        type = 1;
        break;
      case 1:
        type = 100;
        break;
      case 2:
        type = 1004;
        break;
      default:
        break;
    }
    // search list
    Search({
      keywords: this.$route.query.q,
      type: type,
      limit: 10,
    }).then((res) => {
      console.log(res.data.result.songs);
      this.songList = res.data.result.songs;
      this.count = res.data.result.songCount;
      // handle time
      for (let i = 0; i < this.songList.length; i++) {
        let m = parseInt(this.songList[i].duration / 1000 / 60);
        let s = parseInt((this.songList[i].duration / 1000) % 60);
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        this.songList[i].duration = m + ":" + s;
      }
    });
  },
};
</script>

<style></style>
