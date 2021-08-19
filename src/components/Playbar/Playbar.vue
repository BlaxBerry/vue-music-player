<template>
  <v-card v-if="song.name" class="d-flex flex-no-wrap align-center" dark>
    <!-- img -->
    <v-avatar class="ma-3" size="70" tile>
      <v-img :src="song.pic"></v-img>
    </v-avatar>
    <!-- play + pause btn-->
    <v-card-actions>
      <v-btn fab large icon height="40px" width="40px">
        <v-icon v-if="!isPlay" @click="play">mdi-play</v-icon>
        <v-icon v-if="isPlay" @click="pause">mdi-pause</v-icon>
      </v-btn>
    </v-card-actions>
    <!-- name -->
    <div>
      <v-card-title class="py-0 pb-4">{{ song.name }}</v-card-title>
      <v-card-subtitle v-if="song.album.length" class="py-0 text-caption">
        ( {{ song.album[0] + " | " + song.album[1] }} )
      </v-card-subtitle>
      <v-card-subtitle class="py-0 red--text text--lighten-2">
        <small>{{ song.artist }}</small>
      </v-card-subtitle>
    </div>
    <audio :src="song.url" autoplay loop ref="audio"></audio>
  </v-card>
</template>

<script>
export default {
  props: ["song"],
  data: () => ({
    isPlay: true,
  }),

  methods: {
    play() {
      this.isPlay = !this.isPlay;
      this.$refs.audio.play();
    },
    pause() {
      this.isPlay = !this.isPlay;
      this.$refs.audio.pause();
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  width: 100%;
  height: 85px;
  padding: 0 10px;
}
</style>
