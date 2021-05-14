<template>
  <!-- List -->
  <div id="list">
    <!-- 精品歌单 -->
    <HighQualityCard :hightQuality="topHighQuality" />

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
    <!-- list -->
    <Card :list="list" v-if="list.length > 0"></Card>

    <!-- PLay Bar -->
    <!-- <PlayBar></PlayBar> -->
    <!-- <audio :src="playURL" autoplay controls></audio> -->
  </div>
</template>

<script>
// High Quality Card
import HighQualityCard from "@/components/Card/HighQuality.vue";
// Card
import Card from "@/components/Card/Card.vue";
// Play Bar
import PlayBar from "@/components/PlayBar/PlayBar.vue";

// API
import {
  // 精品歌单卡片
  GetHighQualitySong,
  // 歌单列表
  GetList,
} from "@/network/api.js";

export default {
  data() {
    return {
      // 顶部精品歌单卡片对象
      topHighQuality: {},

      // 歌单列表
      list: [],

      // Tags 全部分类标签
      // 不想全部都要，只留留自己喜欢的
      tags: ["欧美", "ACG", "电子", "轻音乐", "说唱", "全部"],
      // 选中的tag
      tagSelected: "欧美",
      // 播放URL
      playURL: "",
    };
  },
  components: {
    HighQualityCard,
    Card,
  },

  created() {
    // 初始化
    this.init(this.tagSelected);
  },

  methods: {
    // 获取歌单列表 + 顶部精品歌单
    init(cat) {
      // 获取顶部精品歌单卡片
      GetHighQualitySong({
        limit: 1,
        cat: cat,
      }).then((res) => {
        // console.log(res.playlists[0]);
        this.topHighQuality = res.playlists[0];
      });

      // 获取列表
      GetList({
        limit: 10,
        offset: 0,
        cat: cat,
      }).then((res) => {
        // console.log(res);
        // console.log(res.playlists);
        this.list = res.playlists;
      });
    },

    // 点击Tag标签
    clickTag(item) {
      this.tagSelected = item;
      // console.log(item);
      // 调用函数
      this.init(item);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/style/List/List.less";
audio {
  width: 100%;
}
</style>
