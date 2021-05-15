<template>
  <div id="swiper">

<div class="pc_swipe">
    <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in swipeList" :key="item.id">
      <img :src="item.imageUrl" alt="" />
    </el-carousel-item>
  </el-carousel>
</div>

<div class="mobile_swipe">
    <el-carousel :interval="4000" height="200px" indicator-position="none">
    <el-carousel-item v-for="item in swipeList" :key="item.id">
      <img :src="item.imageUrl" alt="" />
    </el-carousel-item>
  </el-carousel>
</div>
  </div>
</template>

<script>
export default {
  props: ["swipeList"],
  data() {
    return {};
  },
  created() {
    // console.log(this.swipeList);
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/style/Swipe/Swipe.less";
</style>
