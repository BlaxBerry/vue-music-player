<template>
  <!-- List Card -->
  <div id="list_card">
    <div
      :class="select == index ? 'card selected' : 'card'"
      v-for="(item, index) in list"
      :key="item.id"
      @click="clickToPlay(item, index)"
    >
      <div class="index">{{ index + 1 }}</div>
      <div class="pic">
        <img
          :src="
            item.album.picUrl ? item.album.picUrl : item.artists[0].img1v1Url
          "
          :alt="item.album.name"
          v-if="item.album"
        />
        <img :src="item.al.picUrl" alt="" v-if="item.al" />
      </div>
      <div class="content">
        <div class="name">{{ item.album ? item.album.name : item.name }}</div>
        <div class="author" v-if="item.album">
          {{
            item.album.artists
              ? item.album.artists[0].name
              : item.artists[0].name
          }}
        </div>
        <div class="author" v-if="item.ar">
          {{ item.ar[0].name }}
        </div>
        <!-- <div class="company">{{ item.album.company }}</div> -->
        <div class="time" v-if="item.duration">{{ item.duration | timeHandle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  // play URL
  GetPlaySongUrl,
} from "@/network/api.js";

export default {
  data() {
    return {
      // selected style
      select: "",
    };
  },
  props: ["list"],
  // time filter
  filters: {
    timeHandle: function(val) {
      // console.log(val);
      // 339539毫秒
      val / 1000; // 总秒
      let m = parseInt(val / 1000 / 60);
      let s = parseInt((val / 1000) % 60);
      m = m >= 10 ? m : "0" + m;
      s = s >= 10 ? s : "0" + s;
      return m + ":" + s;
    },
  },
  methods: {
    // // click to paly
    clickToPlay(item, index) {
      //   // 点击获取 play URL
      // console.log(item);
      //   // console.log(item.mp3Url);
      //
      //

      GetPlaySongUrl(item.id).then((res) => {
        // console.log(res.data[0].url);
        this.$parent.playURL = res.data[0].url;
        //  提示版权
        this.$message({
          showClose: true,
          message: "本项目仅共个人学习，请勿擅自传播，请支持购买正版音乐",
          type: "warning",
        });
      });
      // selected style
      this.select = index;

      // backgound Image
      if (item.album) {
        this.$parent.backgrouondImgURL = item.album.picUrl;
        // console.log(this.$parent.backgrouondImgURL);
      }
    },
  },
  created() {
    // send background pic
  },
};
</script>
<style lang="less" scoped>
@import "../../assets/style/Card/ListCard.less";
</style>
