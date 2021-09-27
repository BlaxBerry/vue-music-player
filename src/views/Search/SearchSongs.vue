<template>
  <v-row class="d-flex justify-space-between">
    <!-- left img -->
    <v-col
      class="d-none d-md-flex flex-column align-center left pr-0"
      cols="4"
      lg="7"
    >
      <div class="px-4 pb-4">
        <v-img :src="songSelected.pic" max-width="350" />
        <!-- name -->
        <v-card-title
          class="text-h5 font-weight-black"
          v-text="songSelected.name"
        />
        <!-- album -->
        <v-card-subtitle
          class="text-h6 pb-1 grey--text"
          v-text="songSelected.album"
        />
        <!-- artists -->
        <v-card-subtitle class="text-h6 py-0">
          <span
            v-for="(item, index) in songSelected.artists"
            :key="index"
            class="red--text text--darken-2 mr-3"
            v-text="item.name"
          />
        </v-card-subtitle>
      </div>
      <!-- comments list -->
      <v-list class="common-scroll-list comments-list mt-2">
        <v-list-item
          v-for="item in songSelected.comments"
          :key="item.id"
          class="px-0 pr-4 pr-lg-10"
        >
          <!-- avatar -->
          <v-list-item-avatar class="mx-lg-6">
            <v-img :src="item.user.avatarUrl" />
          </v-list-item-avatar>
          <v-list-item-content class="py-0">
            <!-- name  -->
            <v-list-item-title
              v-text="item.user.nickname"
              class="text-body-2 red--text text--darken-4"
            />
            <!-- content -->
            <p v-html="item.content" class="text-caption font-weight-light" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>

    <!-- right list -->
    <v-col class="right common-scroll-list pl-0" cols="12" md="8" lg="5">
      <v-hover v-slot="{ hover }" v-for="item in songList" :key="item.id">
        <v-card
          :elevation="hover ? 6 : 2"
          class="ma-3 px-2"
          rounded
          @click="selectSong(item)"
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div class="d-flex flex-column flex-no-wrap justify-space-between">
              <!-- name -->
              <v-card-title
                class="text-body-1 text-md-h6 font-weight-black"
                v-text="item.name"
              />
              <!-- album -->
              <v-card-subtitle
                class="text-caption text-md-body-1 pb-2"
                v-text="item.album.name"
              />
              <!-- artists -->
              <v-card-subtitle class="pt-0">
                <span
                  v-for="(artist, i) in item.artists"
                  :key="i"
                  class="text-body-2 text-md-body-1 red--text text--darken-2 mr-3"
                  v-text="artist.name"
                />
              </v-card-subtitle>
            </div>
            <v-avatar class="pa-1" size="125" tile>
              <v-img :src="item.pic" />
            </v-avatar>
          </div>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
// api
import GetSongComments from "../../api/Detail/Song/getSongComment";

export default {
  props: ["songList"],

  data() {
    return {
      songSelected: {
        name: "",
        album: "",
        artists: [],
        pic: "",
        comments: [],
      },
    };
  },

  watch: {
    songList: {
      handler(newVal) {
        // get the default first item of list
        if (newVal) {
          let name = newVal[0].name;
          let album = newVal[0].album.name;
          let artists = newVal[0].artists;
          let pic = newVal[0].pic;
          this.songSelected = {
            name,
            album,
            artists,
            pic,
            comments: [],
          };
        }
      },
      immediate: true,
    },
  },

  created() {
    // get default the first song detail
    this.selectSong(this.songList[0]);
  },

  methods: {
    async selectSong(item) {
      // 1. get song selected detail
      let name = item.name;
      let album = item.album.name;
      let artists = item.artists;
      let pic = item.pic;
      this.songSelected = {
        name,
        album,
        artists,
        pic,
        comments: [],
      };
      // 2. get song comments
      let id = item.id;
      let res = await GetSongComments({ id });
      this.songSelected.comments = res.hotComments;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  cursor: pointer;
  line-height: 1rem;
  img {
    width: 100%;
  }
}

.comments-list {
  width: 100%;
  height: 30vh !important;
}
</style>
