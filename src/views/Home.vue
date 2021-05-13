<template>
  <div id="home">
    <!-- <Swipe :swipeList="swipeList"></Swipe> -->
    <Swipe :swipeList="swipeList" v-if="swipeList.length > 0"></Swipe>
    home

    <!-- card List -->
      <Card :list="recommendList" v-if="swipeList.length > 0"/>
  </div>
</template>

<script>
// @ is an alias to /src
//Top Nav Bar
import Swipe from "@/components/Swipe/Swipe.vue";
// Card
import Card from "@/components/Card/Card.vue";

// API
import {
  // 轮播
  GetSwipe,
  // 推荐歌单
  GetRecommendList,
} from "@/network/api.js";

export default {
  name: "Home",
  data() {
    return {
      // Swipe 轮播
      swipeList: [],
      // 推荐歌单
      recommendList: [],
    };
  },
  components: {
    Swipe,
    Card,
  },
  created() {
    // get Swipe Pics
    GetSwipe().then((res) => {
      // console.log(res.banners);
      this.swipeList = res.banners;
    });

    // 推荐歌单
    GetRecommendList().then((res) => {
      console.log(res.result);
      this.recommendList = res.result;
    });
  },
};
</script>

<style lang="less" scoped>
#home {
  padding-top: 1rem;
  padding-left: 7rem + 2rem;
  padding-right: 1rem;
}
</style>
