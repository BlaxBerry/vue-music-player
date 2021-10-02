<template>
  <v-list dense>
    <!-- <v-subheader> {{ $store.state.searchResult.count }}</v-subheader> -->
    <v-list-item-group v-if="$store.getters.searchResultSongList">
      <v-list-item
        v-for="item in $store.getters.searchResultSongList"
        :key="item.id"
        class="mb-2"
        @click="playSong(item)"
      >
        <!-- pic -->
        <v-list-item-avatar size="100" tile>
          <img :src="item.pic" />
        </v-list-item-avatar>
        <!--detail -->
        <v-list-item-content class="pt-4">
          <!-- name -->
          <v-list-item-title
            class="text-body-1 text-md-h6 font-weight-black"
            v-html="item.name"
          />
          <!-- album name  -->
          <v-list-item-subtitle
            class="text-caption text-md-body-1 py-1"
            v-html="item.album.name"
          />
          <!-- artists name -->
          <v-list-item-subtitle>
            <span
              v-for="a in item.artists"
              :key="a.id"
              class="text-body-2 text-md-body-1 red--text text--darken-2 mr-3"
              v-html="a.name"
            />
          </v-list-item-subtitle>
          <!-- tools -->
          <div class="d-flex align-center justify-space-between mt-1">
            <!-- btns -->
            <div>
              <v-btn elevation="0" fab x-small @click="addToFavourite">
                <v-icon dark color="pink">mdi-heart</v-icon>
              </v-btn>
              <v-btn
                elevation="0"
                fab
                x-small
                class="mx-2"
                v-if="item.mvid"
                @click="goCheckMV(item.mvid)"
              >
                <v-icon dark color="primary">mdi-movie-open</v-icon>
              </v-btn>
              <v-chip dark color="yellow darken-2" v-if="item.fee == 1">
                MVP
              </v-chip>
            </div>
            <!-- times -->
            <span class="font-weight-black" v-if="item.fee !== 1">
              {{ item.duration | timeFormat }}
            </span>
            <span class="font-weight-black" v-else>00:30</span>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
// utils
import "../../../utils/filters/formatTime";
import saveLocalstorage from "../../../utils/localStorage/saveLocalstorage";

export default {
  data() {
    return {
      songSelected: {},
    };
  },
  methods: {
    playSong(song) {
      // 1. format obj
      let { name, id, pic, url } = song;
      let album = {
        name: song.album.name,
        id: song.album.id,
        publishTime: song.album.publishTime,
      };
      let artists = song.artists.map((e) => {
        return {
          name: e.name,
          id: e.id,
        };
      });
      let fee = song.fee == 1 ? true : false;
      let duration = song.fee == 1 ? "00:30" : song.duration;
      let params = { name, id, pic, duration, album, artists, url, fee };
      this.songSelected = params;
      this.songSelected;
      // 2. save obj selected in vuex
      this.$store.commit("saveSongSelected", params);
    },

    goCheckMV(mvid) {
      this.$router.push("/mv?id=" + mvid);
    },

    addToFavourite() {
      if (this.$store.getters.songSelected == {}) return;
      saveLocalstorage(
        this.$store.getters.songSelected,
        "MusicPlayer-Favourites-Songs",
        "Song"
      );
    },
  },
};
</script>

<style></style>
