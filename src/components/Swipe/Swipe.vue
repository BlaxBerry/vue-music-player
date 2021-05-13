<template>
  <div id="swiper">
      <el-carousel indicator-position="outside" type="" class="swipe_normal" >
      <el-carousel-item v-for="item,index in swipeList" :key="index">
        <img :src="item.imageUrl" alt="">
      </el-carousel-item>
    </el-carousel>
    <el-carousel indicator-position="outside" type="card" class="swipe_card">
      <el-carousel-item v-for="item,index in swipeList" :key="index">
        <img :src="item.imageUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props:["swipeList"],
  data(){
    return {}
  },
  created(){
    // console.log(this.swipeList);
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/style/Swipe/Swipe.less";
</style>
