<template>
  <!-- Card -->
  <div id="card">
    <el-card class="card" v-for="item in list" :key="item.id">
      <img :src="item.picUrl" class="image" />
      <div>
        <!-- 专辑名 / 新歌卡片 歌曲名 -->
        <span>{{ item.name }}</span>
        <!-- 专辑评价  -->
        <div class="info">{{ item.copywriter?item.copywriter:'' }}</div>
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
export default {
  props: ["list"],
  created() {
    //   console.log(this.list);
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/style/Card/Card.less";
</style>
