<template>
  <!-- list -->
  <div id="list" >
    <audio
      :src="playURL"
      autoplay
      controls
      style="width:100%; position:fixed; bottom:0; left:0; z-index: 9; "
    ></audio>

    <img 
    :src="backgrouondImgURL" alt="" class="background_mg">

    <!-- tags -->
    <div class="tags">
      <ul>
        <li
          v-for="(item, index) in tags"
          :key="index"
          :class="tagSelected == item ? 'active' : ''"
          @click="clickTag(item)"
        >
          {{ item }}
        </li>
      </ul>
      <!-- list card -->
      <ListCard :list="list" v-if="list.length > 0" />

      <!-- empty -->
      <Empty v-if="list.length == 0"></Empty>
    </div>
  </div>
</template>

<script>
// List Card
import ListCard from "@/components/Card/ListCard.vue";
// Empty
import Empty from "@/components/Empty/Empty.vue";

// API
import {
  // 歌单列表
  GetList,
} from "@/network/api.js";

export default {
  name:'List',
  data() {
    return {
      // 歌曲列表
      list: [],
      // URL
      playURL: "",

      // tags
      tags: ["欧美", "日本", "韩国", "全部"],
      // 选中的 tag
      tagSelected: "欧美",

      // background Pic
      backgrouondImgURL:''      
    };
  },
  components: {
    ListCard,
    Empty,
  },
  created() {
    // 初始化
    // 显示欧美list
    this.init(96);
  },
  methods: {
    // 获取列表
    init(type) {
      GetList({
        type: type,
      }).then((res) => {
        // console.log(res.data);
        this.list = res.data;
      });
    },

    // 点击Tag标签
    clickTag(item) {
      // console.log(this.tagSelected);
      this.tagSelected = item;
      let type;
      if (item == "欧美") {
        type = 96;
      } else if (item == "日本") {
        type = 8;
      } else if (item == "韩国") {
        type = 16;
      } else {
        type = 0;
      }
      // 调用函数
      this.init(type);
    },

    //点击获得 play URL
  },
};
</script>

<style lang="less" scoped>
@import "../assets/style/List/List.less";
</style>
