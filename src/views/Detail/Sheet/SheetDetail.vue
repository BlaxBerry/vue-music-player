<template>
  <div>
    <!-- top card -->
    <TopCard :sheet="sheet"/>

    <!-- list count -->
    <div v-if="tracksList.length != 0" class="count font-weight-black py-0">
      found
      <v-chip class="ma-1" x-small color="red lighten-2 " outlined>
        {{ tracksList.length }}
      </v-chip>
      results
    </div>

    <!-- lists -->
    <List :list="tracksList" @songSelected="getSongSelected" />
  </div>
</template>

<script>
// api
import { GetSheetDetail } from "@/api/sheetDetail.js";
// components
import TopCard from "./TopCard.vue";
import List from "@/views/Search/SongLists.vue";

export default {
  components: {
    TopCard ,
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
// .count {
//   margin-top: 180px;
// }
// .v-card {
//   position: fixed !important;
//   width: 100%;
//   top: 45px;
//   left: 0;
//   right: 0;
//   z-index: 3;
//   padding: 0 10px;
// }
</style>
