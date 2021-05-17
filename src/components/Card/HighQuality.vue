<template>
  <!-- 精品歌单 -->
  <div id="high_quality">
    <div class="pic">
      <img :src="hightQuality.coverImgUrl" :alt="hightQuality.copywriter" />
    </div>
    <div class="desc">
      <!-- <div class="tag">{{hightQuality.tag}}</div> -->
      <div class="content">
        <div class="name">{{ hightQuality.name }}</div>
        <!-- tags -->
        <div class="tags" >
          <span v-for="item,index in hightQuality.tags" :key="index">{{item}}/</span>
        </div>
        <!-- desc -->
        <p>{{ hightQuality.description }}</p>
        <!-- creator info -->
        <!-- <div class="nick">
          {{hightQuality.creator.nickname ? "歌单创建者: "+hightQuality.creator.nickname : ""}}
        </div>
        <div class="sign">
          {{
            hightQuality.creator.signature ? hightQuality.creator.signature : ""
          }}
        </div> -->
      </div>
    </div>
    <img :src="hightQuality.coverImgUrl" class="cover" />
  </div>
</template>

<script>
export default {
  props: ["hightQuality"],
};
</script>

<style lang="less" scoped>
@import "../../assets/style/Category/HighQuality.less";
</style>
