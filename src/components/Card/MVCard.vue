<template>
  <div id="mv_card">
    <div class="card" v-for="item in list" :key="item.id">
      <img :src="item.picUrl" :alt="item.name" />
      <div class="name">{{ item.name }}</div>
      <div class="author">{{ item.artistName }}</div>
      <span>{{ "播放次数" + item.playCount}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style lang="less" scoped>
@import "../../assets/style/Card/MVCard.less";
</style>
