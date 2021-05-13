<template>
  <!-- Play Bar -->
  <div id="play_bar">
    <div class="block">
      <p class="lyric">歌词</p>
      <div class="player">
        <!-- control btns -->
        <div class="btns">
          <div class="prew btn"><i class="el-icon-caret-left"></i></div>
          <div class="paly btn" v-if="!isShow" @click="play">
            <i class="el-icon-video-play"></i>
          </div>
          <div class="paly btn" v-if="isShow" @click="play">
            <i class="el-icon-video-pause"></i>
          </div>
          <div class="next btn"><i class="el-icon-caret-right"></i></div>
        </div>
        <!-- slider -->
        <el-slider v-model="val" :format-tooltip="formatTooltip"></el-slider>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // slider val time
      val: 0,
      // pause btn is Show
      isShow: false,
      // play song URL
      playUrl: "",
    };
  },
  methods: {
    // slider
    formatTooltip(val) {
      return val / 100;
    },

    // paly song
    play() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/style/PLayBar/PlayBar.less";
</style>
