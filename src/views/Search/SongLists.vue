<template>
  <v-list three-line height="80%">
    <v-list-item v-for="item in list" :key="item.id" @click="play(item.id)">
      <!-- avatar -->
      <v-list-item-avatar v-if="item" tile size="50" class="mt-5">
        <v-img
          :src="item.pic"
          :lazy-src="item.artists[0].img1v1Url"
          :alt="item.name"
        />
      </v-list-item-avatar>
      <!-- name -->
      <v-list-item-content class="py-5">
        <b class="text-truncate">
          <v-list-item-title>
            {{ item.name }}
            <v-chip
              v-if="item.copyrightId != 0"
              x-small
              color="orange"
              text-color="white"
              class="mx-1"
              >MVP
            </v-chip>
          </v-list-item-title>
          <v-list-item-subtitle
            v-html="item.artists[0].name"
            class="red--text text--lighten-2 pt-1"
          />
        </b>
      </v-list-item-content>
      <!-- time -->
      <v-list-item-icon>
        <v-list-item-subtitle class="mt-5" v-html="item.duration" />
      </v-list-item-icon>
    </v-list-item>
  </v-list>
</template>

<script>
// api
import { GetSongURL } from "@/api/songURL.js";
import { GetSongDetail } from "@/api/songDetail.js";

export default {
  props: ["list"],

  data() {
    return {
      song: {
        name: "",
        album: [],
        url: "",
        pic: "",
        artist: "",
      },
    };
  },

  methods: {
    play(id) {
      // 1. get song URL
      GetSongURL({ id: id }).then((res) => {
        this.song.url = res.data.data[0].url;
      });
      // 2. get song detail
      GetSongDetail({ ids: id }).then((res) => {
        // console.log(res.data.songs[0]);
        this.song.name = res.data.songs[0].name;
        this.song.album = res.data.songs[0].alia;
        this.song.pic = res.data.songs[0].al.picUrl;
        this.song.artist = res.data.songs[0].ar[0].name;
        // console.log(this.song);
        this.$emit("songSelected", this.song);
      });
    },
  },
};
</script>

<style></style>
