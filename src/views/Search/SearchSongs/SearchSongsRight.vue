<template>
  <div class="d-flex flex-column align-center">
    <img :src="song.pic" :alt="song.name" style="max-width:70%" />
    <h2 class="pt-4 pb-2">{{ song.name }}</h2>
    <h3 class="grey--text pb-2">{{ song.album.name }}</h3>
    <h3>
      <span
        v-for="a in song.artists"
        :key="a.id"
        class="red--text text--darken-2 mr-3"
        v-html="a.name"
      />
    </h3>
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      song: {},
    };
  },

  computed: {
    ...mapGetters(["songSelected", "searchResultSongList"]),
  },

  watch: {
    songSelected: function(newVal) {
      this.song = newVal;
    },
  },

  created() {
    this.song = this.searchResultSongList[0];
  },
};
</script>
