<template>
  <!-- Card -->
  <div id="card">
    <div
      class="card"
      v-for="item,index in list"
      :key="item.id"
      @click="clickToPlay(item.id,index)"
    >
      <img :src="item.picUrl ? item.picUrl : item.coverImgUrl" alt="" />
      <div :class="select==index?'desc show':'desc'">
        <div class="name">{{ item.song ? item.song.album.name : "" }}</div>
        <div class="info">{{ item.copywriter ? item.copywriter : "" }}</div>
        <div class="author">
          {{ item.song ? item.song.artists[0].name : "" }}
        </div>
        <div class="playcount">
          {{ item.playCount ? "播放次数：" + item.playCount : "" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// API
import {
  // play URL
  GetPlaySongUrl,
} from "@/network/api.js";

export default {
  props: ["list"],
  data() {
    return {
      // song Play URL
      playURL: "",

      // cover is show
      select:''
    };
  },
  created() {},
  methods: {
    // 点击播放
    clickToPlay(id,index) {
      // 获得 该卡片的id
      // console.log("itemID",id);

      // 判断能获取URL的是歌曲，直接传递给父组件的audio播放
      // 不能获得URL的是专辑，null，父组件不会播放

      // 获取匹配 ID 的URL地址
      GetPlaySongUrl(id).then((res) => {
        // console.log(res);
        this.playURL = res.data[0].url;
        // 将获得的URL直接赋值给父组件的 data
        this.$parent.playURL = this.playURL;
        // console.log(this.$parent.playURL,this.playURL);
      });

      // cover show
      this.select = index
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/style/Card/Card.less";
</style>
