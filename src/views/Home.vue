<template>
  <div id="home">
    <!-- Home -->
    <div class="swper">
      <Swipe :swipeList="swipeList" v-if="swipeList.length > 0"></Swipe>
      <!-- empty -->
      <Empty v-if="swipeList.length == 0"></Empty>
    </div>

    <!-- new song -->
    <div class="new_songs box">
      <h2>New Songs</h2>
      <Card :list="newSongList" v-if="newSongList.length > 0"></Card>
      <!-- empty -->
      <Empty v-if="newSongList.length == 0"></Empty>
    </div>

    <!-- Recommend MV  -->
    <div class="recommend_mv box">
      <h2>Recommend MV</h2>
      <MVCard
        :list="recommendMVList"
        v-if="recommendMVList.length > 0"
      ></MVCard>
    </div>
    <!-- empty -->
    <Empty v-if="recommendMVList.length == 0"></Empty>

    <!-- album list -->
    <div class="recommend_music box">
      <h2>Recommend Music</h2>
      <Card :list="recommendList" />
    </div>
    <!-- empty -->
    <Empty v-if="recommendList.length == 0"></Empty>

    <audio
      :src="playURL"
      autoplay
      controls
      style="width:100%; position:fixed; bottom:0; left:0; z-index: 9; "
    ></audio>
  </div>
</template>

<script>
// @ is an alias to /src
//Top Nav Bar
import Swipe from "@/components/Swipe/Swipe.vue";
// Card
import Card from "@/components/Card/Card.vue";
// MV Card
import MVCard from "@/components/Card/MVCard.vue";
// Empty
import Empty from "@/components/Empty/Empty.vue";

// API
import {
  // 轮播
  GetSwipe,
  // 推荐歌单
  GetRecommendList,
  // 推荐MV
  GetRecommendMV,
  // new songs
  GetnewSong,
} from "@/network/api.js";

export default {
  name: "Home",
  data() {
    return {
      // Swipe 轮播
      swipeList: [],
      // 推荐歌单
      recommendList: [],
      // 推荐MV
      recommendMVList: [],
      // new song list
      newSongList: [],

      // play URL
      playURL: "",
    };
  },
  components: {
    Swipe,
    Card,
    MVCard,
    Empty,
  },
  created() {
    // get Swipe Pics
    GetSwipe().then((res) => {
      // console.log(res.banners);
      this.swipeList = res.banners;
    });

    // get new Songs
    GetnewSong().then((res) => {
      // console.log(res.result);
      this.newSongList = res.result;
    });

    // 推荐歌单
    GetRecommendList().then((res) => {
      // console.log(res.result);
      this.recommendList = res.result;
    });

    // 推荐MV
    GetRecommendMV().then((res) => {
      // console.log(res);
      this.recommendMVList = res.result;
    });
  },
};
</script>

<style lang="less" scoped>
#home {
  padding-top: 0;
  // padding-right: 1rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .box {
    margin-bottom: 5rem;
  }
}
</style>
