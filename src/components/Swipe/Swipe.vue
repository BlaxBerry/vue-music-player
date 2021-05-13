<template>
  <div id="swiper">
    <el-carousel indicator-position="outside" type="" class="swipe_normal">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-carousel indicator-position="outside" type="card" class="swipe_card">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../../assets/style/Swipe/Swipe.less";
</style>
