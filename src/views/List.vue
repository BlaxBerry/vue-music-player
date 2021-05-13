<template>
  <!-- List -->
  <div id="list">
    <!-- 精品歌单 -->
    <HighQualityCard :hightQuality="topHighQuality" />
    <!-- PLay Bar -->
    <!-- <PlayBar></PlayBar> -->
    <audio :src="playURL" autoplay controls></audio>
  </div>
</template>

<script>
// High Quality Card
import HighQualityCard from "@/components/Card/HighQuality.vue";
// Play Bar
import PlayBar from "@/components/PlayBar/PlayBar.vue";

// API
import {
  // 精品歌单
  GetHighQualitySong,
} from "@/network/api.js";

export default {
  data() {
    return {
      // 精品歌单对象
      topHighQuality: {},
      // 播放URL
      playURL: "",
    };
  },
  components: {
    HighQualityCard,
  },
  methods: {},
  created() {
    // 获取精品歌单
    GetHighQualitySong({
      limit: 1,
    }).then((res) => {
      console.log(res.playlists[0]);
      this.topHighQuality = res.playlists[0];
    });
  },
};
</script>

<style lang="less" scoped>
@import "../assets/style/List/List.less";
audio {
  width: 100%;
}
</style>
