<template>
  <div>
    <!-- numbers + clearbtn -->
    <TopBar
      :count="songListSaved.length"
      @onClearLocalStorageList="clearLocalStorageList"
    />

    <!-- card list -->
    <Cards :songList="songListSaved" />

    <!-- empty -->
  </div>
</template>

<script>
// copmonents
import Cards from "./HotsCards.vue";
import TopBar from "./HotsTopBar.vue";

export default {
  components: { Cards, TopBar },

  data() {
    return {
      songListSaved: [],
    };
  },
  mounted() {
    let songListSaved = localStorage.getItem("musicplayer-songs-saved");
    if (songListSaved) {
      this.songListSaved = JSON.parse(songListSaved);
    }
  },

  methods: {
    clearLocalStorageList(data) {
      this.songListSaved = data;
    },
  },
};
</script>
