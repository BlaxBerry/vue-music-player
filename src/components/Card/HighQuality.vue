<template>
   <!-- 精品歌单 -->
    <div id="high_quality">
      <div class="pic">
        <img
          :src="hightQuality.coverImgUrl"
          :alt="hightQuality.copywriter"
        />
      </div>
      <div class="desc">
        <!-- <div class="tag">{{hightQuality.tag}}</div> -->
        <div class="content">
          <div class="name">{{hightQuality.name}}</div>
          <p>{{hightQuality.description}}</p>
        </div>
      </div>
      <img :src="hightQuality.coverImgUrl" class="cover"> 
    </div>
</template>

<script>
export default {
props:['hightQuality']
}
</script>

<style lang="less" scoped>
@import "../../assets/style/List/HighQuality.less";
</style>