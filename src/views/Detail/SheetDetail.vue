<template>
  <div>
    <!-- top card -->
    <v-card dark>
      <div class="d-flex flex-no-wrap align-center mb-4">
        <v-avatar class="ma-3" size="150" tile>
          <v-img :lazy-src="sheet.coverImgUrl" :src="songSelected.pic" />
        </v-avatar>
        <div>
          <v-card-title
            class="text-h5 font-weight-black"
            v-html="songSelected.name ? songSelected.name : sheet.name"
          />
          <v-card-subtitle
            class="py-3"
            v-text="
              songSelected.artist ? songSelected.artist : sheet.description
            "
          />
          <v-card-subtitle
            class="py-0 pl-4 font-weight-black d-flex align-center"
          >
            <b v-if="!songSelected.name">
              <v-chip
                v-for="(item, index) in sheet.tags"
                :key="index"
                class="mr-2"
                color="red lighten-2"
                small
                text-color="white"
                >{{ item }}
              </v-chip></b
            >
            <v-btn
              large
              v-if="songSelected.url"
              fab
              icon
              height="40px"
              width="40px"
            >
              <v-icon v-if="!isPlay" @click="play">mdi-play</v-icon>
              <v-icon v-if="isPlay" @click="pause">mdi-pause</v-icon>
            </v-btn>
          </v-card-subtitle>
          <audio :src="songSelected.url" autoplay loop ref="audio"></audio>
        </div>
      </div>
    </v-card>

    <!-- lists -->
    <List :list="tracksList" @songSelected="getSongSelected" />
  </div>
</template>

<script>
// api
import { GetSheetDetail } from "@/api/sheetDetail.js";
// components

import List from "@/views/Search/SongLists.vue";

export default {
  components: {
    List,
  },
  data() {
    return {
      // sheet detail
      sheet: {},
      isPlay: false,
      // song list
      tracksList: [],
      // song selected
      songSelected: "",
    };
  },

  mounted() {
    GetSheetDetail({ id: this.$route.query.id }).then((res) => {
      this.sheet = res.data.playlist;
      this.tracksList = res.data.playlist.tracks;
    });
  },

  methods: {
    play() {
      this.isPlay = !this.isPlay;
      this.$refs.audio.play();
    },
    pause() {
      this.isPlay = !this.isPlay;
      this.$refs.audio.pause();
    },
    getSongSelected(data) {
      this.songSelected = data;
      this.isPlay = true;
    //   console.log(this.songSelected);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-list {
  margin-top: 180px;
}
.v-card {
  position: fixed !important;
  width: 100%;
  top: 45px;
  left: 0;
  right: 0;
  z-index: 3;
  padding: 0 10px;
}
</style>
