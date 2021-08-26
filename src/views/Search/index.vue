<template>
  <div color="basil">
    <!-- result name + count -->
    <p class="text-caption my-0">
      Search
      <span class="mx-1 text-h6 font-weight-bold">{{ keywords }}</span>
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
    </p>

    <!-- tab -->
    <v-tabs v-model="tab" color="red lighten-2" centered>
      <v-tab
        v-for="(item, index) in items"
        :key="index"
        class="font-weight-black"
        @click="changeType(index)"
      >
        <v-icon class="mr-1">{{ item.icon }}</v-icon>
        {{ item.name }}
      </v-tab>
    </v-tabs>
    <!-- tab content-->
    <v-tabs-items v-model="tab">
      <!-- 1. songlists -->
      <v-tab-item>
        <SongLists :list="songList" />
      </v-tab-item>
      <!-- 2. songsheets -->
      <v-tab-item>
        <SongSheets :list="songSheets" />
      </v-tab-item>
      <!-- 3. mvs -->
      <v-tab-item>
        <MVs :list="mvList" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
//api
import { Search } from "@/api/search.js";
import { GetSongDetail } from "@/api/songDetail.js";
// components
import SongLists from "./SongLists.vue";
import SongSheets from "./SongSheets.vue";
import MVs from "./MVs.vue";

export default {
  components: {
    SongLists,
    SongSheets,
    MVs,
  },

  data() {
    return {
      // tab change
      tab: null,
      items: [
        { name: "List", icon: "mdi-music-box-outline" },
        { name: "Sheets", icon: "mdi-music-box-multiple-outline" },
        { name: "MVs", icon: "mdi-play-box-outline" },
      ],
      // serach type
      type: 1,
      // list
      songList: [],
      // sheets
      songSheets: [],
      // mvs
      mvList: [],
      count: 0,

      // default search value
      keywords: "蜜雪冰城",
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
      if (this.$route.query.q) {
        this.keywords = this.$route.query.q;
      }
      // search list
      Search({
        keywords: this.keywords,
        type: this.type,
        limit: 10,
      }).then((res) => {
        // console.log(res.data.result);
        // 1. song list
        if (res.data.result.songs) {
          this.songList = res.data.result.songs;
          this.count = res.data.result.songCount;
          // song avatar
          this.songList.forEach((item) => {
            GetSongDetail({ ids: item.id }).then((result) => {
              item.pic = result.data.songs[0].al.picUrl;
            });
          });
          // console.log(this.songList);
          // handle time
          for (let i = 0; i < this.songList.length; i++) {
            let m = parseInt(this.songList[i].duration / 1000 / 60);
            let s = parseInt((this.songList[i].duration / 1000) % 60);
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;
            this.songList[i].duration = m + ":" + s;
          }
        }
        // 2. song sheets
        if (res.data.result.playlists) {
          this.songSheets = res.data.result.playlists;
          this.count = res.data.result.playlistCount;
        }
        // 3. mv list
        if (res.data.result.mvs) {
          this.mvList = res.data.result.mvs;
          this.count = res.data.result.mvCount;
          // handle time
          for (let i = 0; i < this.mvList.length; i++) {
            let m = parseInt(this.mvList[i].duration / 1000 / 60);
            let s = parseInt((this.mvList[i].duration / 1000) % 60);
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;
            this.mvList[i].duration = m + ":" + s;
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
