<template>
  <div id="home">
    <!-- Home -->
    <Swipe :swipeList="swipeList" v-if="swipeList.length > 0"></Swipe>

    <!-- Recommend MV  -->
    <div class="recommend_mv">
      <h2>Recommend MV</h2>
      <MVCard :list="recommendMVList"></MVCard>
    </div>
    <!-- card List -->
    <div class="recommend_music">
      <h2>Recommend Music</h2>
      <Card :list="recommendList" v-if="swipeList.length > 0" />
    </div>
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

// API
import {
  // 轮播
  GetSwipe,
  // 推荐歌单
  GetRecommendList,
  // 推荐MV
  GetRecommendMV,
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
    };
  },
  components: {
    Swipe,
    Card,
    MVCard,
  },
  created() {
    // get Swipe Pics
    GetSwipe().then((res) => {
      // console.log(res.banners);
      this.swipeList = res.banners;
    });

    // 推荐歌单
    GetRecommendList().then((res) => {
      // console.log(res.result);
      this.recommendList = res.result;
    });

    // 推荐MV
    GetRecommendMV().then((res) => {
      console.log(res);
      this.recommendMVList = res.result;
    });
  },
};
</script>

<style lang="less" scoped>
#home {
  padding-top: 1rem;
  padding-left: 7rem + 2rem;
  padding-right: 1rem;


  h2 {
    margin-bottom: 1rem;
  }

  .recommend_mv {
    margin-bottom: 5rem;
  }
}
</style>
