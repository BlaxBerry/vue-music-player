<template>
  <!-- Card -->
  <div id="card">
    <el-card class="card" v-for="item in list" :key="item.id">
      <img :src="item.picUrl?item.picUrl:item.coverImgUrl" class="image" @click="clickToPlay(item.id)" />
      <div>
        <!-- 专辑名 / 新歌卡片 歌曲名 -->
        <span>{{ item.name }}</span>
        <!-- 专辑评价  -->
        <div class="info">{{ item.copywriter ? item.copywriter : "" }}</div>
        <!-- 新歌卡片 歌名 -->
        <div class="info">{{ item.song ? item.song.album.name : "" }}</div>
        <div class="bottom clearfix">
          <!-- 播放次数 -->
          <span>{{ item.playCount ? "播放次数：" + item.playCount : "" }}</span>
          <!-- 新歌卡片 歌手 -->
          <div class="author">
            {{ item.song ? item.song.artists[0].name : "" }}
          </div>
        </div>
      </div>
    </el-card>
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
    };
  },
  created() {
    // console.log(this.list);
  },
  methods: {
    // 点击播放
    clickToPlay(id) {
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
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/style/Card/Card.less";
</style>
