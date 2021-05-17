<template>
  <div id="mv_card">
    <div
      class="card"
      v-for="item in list"
      :key="item.id"
      @click="goMVDetaill(item.id)"
    >
      <img :src="item.picUrl ? item.picUrl : item.cover" alt="" />
      <div class="name">{{ item.name }}</div>
      <div class="author">{{ item.artistName }}</div>
      <span>{{ "播放次数" + item.playCount }}</span>
      <div class="cover"><i class="el-icon-video-play"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  methods: {
    goMVDetaill(id) {
      // console.log(id);
      this.$router.push(`/detail?id=${id}`);
      
      setTimeout(() => {
            this.$router.go(0)
        }, 500);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/style/Card/MVCard.less";
</style>
