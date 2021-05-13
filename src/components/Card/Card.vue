<template>
<!-- Card -->
  <div id="card">
    <el-card class="card" v-for="item in list" :key="item.id">
      <img
        :src="item.picUrl"
        class="image"
      />
      <div >
        <span>{{item.name}}</span>
        <div class="info">{{item.copywriter}}</div>
        <div class="bottom clearfix">
          <span>播放次数：{{item.playCount}}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ["list"],
  created(){
    //   console.log(this.list);
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/style/Card/Card.less";
</style>
