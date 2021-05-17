<template>
  <div id="detail">
    <!-- video -->
    <video :src="mvPlayURL" controls autoplay></video>
    <!-- desc -->
    <div class="mv_detail">
      <!-- MV name -->
      <h2 class="name">《{{ MVDetail.name }}》</h2>
      <!-- author -->
      <h3 class="author">
        {{ MVDetail.artistName }} ( {{ artistDetail.trans }} )
      </h3>
      <!-- publishTime -->
      <h4 class="publish_time">{{ MVDetail.publishTime }}</h4>
      <!-- author detail-->
      <h4 class="author_detail">
        {{ artistDetail.briefDesc }}
      </h4>
    </div>

    <!-- 推荐MV -->
    <h1 >推荐MV</h1>
    <MVCard :list="mvList" />
  </div>
</template>

<script>
// List Card
import MVCard from "@/components/Card/MVCard.vue";

// API
import {
  // MV play URL
  GetMVPlayURL,
  // 相关mv
  GetSameMV,
  // MV详细信息
  GetMVDetail,
  // 歌手信息
  GetMVAuthorDetail,
} from "@/network/api.js";

export default {
  data() {
    return {
      // url
      mvPlayURL: "",

      // 相关MV
      mvList: "",

      // MV detail
      MVDetail: {
        // name:
        // artistName:
        // publishTime:
        // cover:
      },
      //// artistId
      artistID: "",
      artistDetail: "",
    };
  },
  components: {
    MVCard,
  },
  created() {
    // get MV play URL
    GetMVPlayURL({
      id: this.$route.query.id,
    }).then((res) => {
      // console.log(res.data);
      this.mvPlayURL = res.data.url;
    });

    // get 相关mv list
    GetSameMV({
      mvid: this.$route.query.id,
    }).then((res) => {
      // console.log(res)
      // 只获取前四个
      this.mvList = res.mvs.slice(0,4);

    });

    // MV详细信息
    GetMVDetail({
      mvid: this.$route.query.id,
    }).then((res) => {
      // console.log("detail", res);
      this.MVDetail = res.data;
      // console.log(this.MVDetail);
      this.artistID = res.data.artistId;
      // 歌手信息
      GetMVAuthorDetail({
        id: this.artistID,
      }).then((res) => {
        // 歌手相关信息
        // console.log(res);
        this.artistDetail = res.artist;
        // console.log(this.artistDetail);
      });
    });
  },
};
</script>

<style lang="less" scoped>
@import "../assets/style/MV/MVDetail.less";
</style>
