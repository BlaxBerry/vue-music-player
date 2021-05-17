<template>
  <!-- 歌单详情 -->
  <div id="album">
    <!-- 顶部卡片 -->
    <HighQualityCard :hightQuality="playlist"></HighQualityCard>

    <!-- list -->
    <ListCard :list="playlist.tracks"></ListCard>

    <audio
      :src="playURL"
      autoplay
      controls
      style="width:100%; position:fixed; bottom:0; left:0; z-index: 9; "
    ></audio>
  </div>
</template>

<script>
// High Quality Card
import HighQualityCard from "@/components/Card/HighQuality.vue";
// List Card
import ListCard from "@/components/Card/ListCard.vue";

// API
import {
  //歌单详情
  GetAlbumDetail,
} from "@/network/api.js";

export default {
  name: "Album",
  data() {
    return {
      // /歌单详情
      playlist: {
        // 当前歌单 pic
        // coverImg:
      },

      // background Pic
      backgrouondImgURL: "",
      // URL
      playURL: "",
    };
  },
  components: {
    HighQualityCard,
    ListCard,
  },
  created() {
    // get 歌单详情
    GetAlbumDetail({
      id: this.$route.query.id,
    }).then((res) => {
      // console.log(res);
      // console.log(res.playlist);
      this.playlist = res.playlist;
    });
  },
};
</script>

<style></style>
