<template>
  <!-- list -->
  <div id="list">
    <audio :src="playURL" autoplay controls></audio>

    <!-- tags -->
    <div class="tags">
      <ul>
        <li
          v-for="(item, index) in tags"
          :key="index"
          :class="tagSelected == item ? 'active ' : ''"
          @click="clickTag(item)"
        >
          {{ item }}
        </li>
      </ul>

      <!-- empty -->
      <div class="empty" v-if="list.length == 0">
        <i class="el-icon-loading"></i>
        暂时为空，尝试刷新页面
      </div>
    </div>

    <!-- list card -->
    <ListCard :list="list" v-if="list.length > 0" />

    <!-- empty -->
    <!-- empty -->
    <div class="empty" v-if="list.length == 0">
      <i class="el-icon-loading"></i>
      暂时为空，尝试刷新页面
    </div>
  </div>
</template>

<script>
// List Card
import ListCard from "@/components/Card/ListCard.vue";

// API
import {
  // 歌单列表
  GetList,
} from "@/network/api.js";

export default {
  data() {
    return {
      // 歌曲列表
      list: [],
      // URL
      playURL: "",

      // tags
      tags:["欧美","日本","韩国","全部"]
    };
  },
  components: {
    ListCard,
  },
  created() {
    // 获取列表
    GetList({
      type: 96,
    }).then((res) => {
      // console.log(res.data);
      this.list = res.data;
    });
  },
};
</script>

<style lang="less" scoped>
@import "../assets/style/List/List.less";
</style>
