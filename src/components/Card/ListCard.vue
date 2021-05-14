<template>
  <!-- List Card -->
  <div id="list_card">
    <div
      class="card"
      v-for="(item, index) in list"
      :key="item.id"
      @click="clickToPlay(item)"
    >
      <div class="index">{{ index + 1 }}</div>
      <div class="pic">
        <img :src="item.album.picUrl" :alt="item.album.name" />
      </div>
      <div class="content">
        <div class="name">{{ item.album.name }}</div>
        <div class="author">{{ item.album.artists[0].name }}</div>
        <!-- <div class="company">{{ item.album.company }}</div> -->
        <div class="time">{{ item.duration | timeHandle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  // time filter
  filters: {
    timeHandle: function(val) {
      // 339539毫秒
      val / 1000; // 总秒
      let m = parseInt(val / 1000 / 60);
      let s = parseInt((val / 1000) % 60);
      m = m >= 10 ? m : "0" + m;
      s = s >= 10 ? s : "0" + s;
      return m + ":" + s;
    },
  },
  methods: {
    // click to paly
    clickToPlay(item) {
      // 点击获取 play URL
      // console.log(item);
      // console.log(item.mp3Url);
      this.$parent.playURL = item.mp3Url;
      // 提示版权
      this.$message({
        showClose: true,
        message: "请支持购买正版音乐",
        type: "warning",
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../assets/style/Card/ListCard.less";
</style>
