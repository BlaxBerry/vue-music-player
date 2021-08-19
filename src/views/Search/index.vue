<template>
  <div color="basil">
    <!-- result name + count -->
    <v-subheader>
      Search
      <b class="mx-2 text-h6">{{ $route.query.q }}</b>
      found
      <v-chip
        class="ma-1 font-weight-black"
        x-small
        color="red lighten-2 "
        outlined
      >
        {{ count ? count : 0 }}
      </v-chip>
      results
    </v-subheader>

    <!-- tab -->
    <v-tabs v-model="tab" color="red lighten-2">
      <v-tab
        v-for="(item, index) in items"
        :key="index"
        class="font-weight-black"
        @click="changeType(index)"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <!-- tab content-->
    <v-tabs-items v-model="tab">
      <!-- songlists -->
      <v-tab-item><SongLists :list="songList"/></v-tab-item>
      <v-tab-item>{{ tab }}</v-tab-item>
      <v-tab-item>{{ tab }}</v-tab-item>
    </v-tabs-items>

    <Playbar />
  </div>
</template>

<script>
//api
import { Search } from "@/api/search.js";
// components
import SongLists from "./SongLists.vue";
import Playbar from "@/components/Playbar/Playbar.vue";

export default {
  components: {
    SongLists,
    Playbar,
  },

  data() {
    return {
      // tab change
      tab: null,
      items: ["Lists", "Sheets", "MVs"],
      // serach type
      type: 1,
      // list
      songList: [],
      count: 0,
    };
  },

  methods: {
    changeType(index) {
      switch (index) {
        case 0:
          this.type = 1;
          break;
        case 1:
          this.type = 1000;
          break;
        case 2:
          this.type = 1004;
          break;
        default:
          this.type = 1;
          break;
      }
      this.init();
    },

    init() {
      // search list
      Search({
        keywords: this.$route.query.q,
        type: this.type,
        limit: 10,
      }).then((res) => {
        console.log(res.data.result.songs);
        this.songList = res.data.result.songs;
        this.count = res.data.result.songCount;
        // handle time
        if (res.data.result.songs) {
          for (let i = 0; i < this.songList.length; i++) {
            let m = parseInt(this.songList[i].duration / 1000 / 60);
            let s = parseInt((this.songList[i].duration / 1000) % 60);
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;
            this.songList[i].duration = m + ":" + s;
          }
        }
      });
    },
  },

  created() {
    this.init();
  },
};
</script>

<style></style>
