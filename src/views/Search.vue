<template>
  <!-- Search -->
  <div id="search">
    <!-- search input -->
    <div class="inputBox">
      <el-input
        v-model="inputVal"
        placeholder="请输入内容"
        @input="search"
      ></el-input>
      <h4>
        本项目仅共个人学习，请勿擅自传播<br />
        请支持购买正版音乐
      </h4>
      <!-- Result list -->
      <h2 v-if="inputVal != ''">
        Found : <span>{{ this.resultCount }} </span> results
      </h2>
    </div>

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
    </div>

    <!-- list card -->
    <!-- songs -->
    <div class="lists">
      <div v-if="type == 1">
        <ListCard :list="resultList" v-if="type == 1"></ListCard>
      </div>
      <!-- mv -->
      <div v-if="type == 1004">
        <MVCard :list="resultList" v-if="type == 1004"></MVCard>
      </div>
      <!-- album -->
      <div v-if="type == 1000">
        <Card :list="resultList" v-if="type == 1000"></Card>
      </div>
    </div>

    <!-- empty -->
    <div v-if="inputVal != '' && resultList.length == 0">
      <p>No Such Thing...</p>
      <p>Change Another Name Please</p>
    </div>

    <!-- PLay Bar -->
    <!-- <PlayBar></PlayBar> -->
    <audio
      :src="playURL"
      autoplay
      controls
      style="width:100%; position:fixed; bottom:1rem; left:0; z-index: 9; "
      loop
    ></audio>
  </div>
</template>

<script>
// Play Bar
import PlayBar from "@/components/PlayBar/PlayBar.vue";
// List Card
import ListCard from "@/components/Card/ListCard.vue";
// Card
import Card from "@/components/Card/Card.vue";
// List Card
import MVCard from "@/components/Card/MVCard.vue";
// Empty
import Empty from "@/components/Empty/Empty.vue";

// API
import {
  // search
  SearchMusic,
} from "@/network/api.js";

export default {
  data() {
    return {
      // searchValue
      inputVal: "",

      // result
      resultList: [],
      resultCount: 0,

      //testURL
      playURL: "",

      // tags
      tags: ["单曲", "MV", "合集"],
      tagSelected: "单曲",
      // 列表类型
      type: 1,
    };
  },
  components: {
    Card,
    PlayBar,
    ListCard,
    MVCard,
    Empty,
  },
  methods: {
    // 封装搜歌函数
    init(type) {
      SearchMusic({
        keywords: this.inputVal,
        // music：1， mv：1004
        type: type,
        // 返回数量
        limit: 10,
      }).then((res) => {
        // console.log(res.result);
        if (type == 1) {
          this.resultList = res.result.songs;
          this.resultCount = res.result.songCount;
          // console.log(this.resultList);
        } else if (type == 1004) {
          this.resultList = res.result.mvs;
          this.resultCount = res.result.mvCount;
          // console.log(this.resultList);
        } else if (type == 1000) {
          console.log(res.result);
          this.resultList = res.result.playlists;
          this.resultCount = res.result.playlistCount;
          // console.log(this.resultList);
        }
      });
    },

    search() {
      // console.log(this.inputVal);
      // 默认搜的是 单曲
      if (this.inputVal.length > 0) {
        this.init(this.type);
      }
    },

    // Tags
    clickTag(item) {
      this.tagSelected = item;

      switch (item) {
        case "单曲":
          this.type = 1;
          break;
        case "MV":
          this.type = 1004;
          break;
        case "合集":
          this.type = 1000;
          break;
        default:
          break;
      }

      // console.log(this.type);

      if (this.inputVal != "") {
        this.init(this.type);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/style/Search/Search.less";


  .tags {
    ul {
      display: flex;
      li {
        padding: 1rem;
        font-size: 1.8rem;
        cursor: pointer;
      }
      .active {
        color: red;
      }
    }
  }

</style>
