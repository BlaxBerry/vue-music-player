<template>
  <!-- Search -->
  <div id="search">
    <!-- search input -->
    <div class="inputBox">
      <el-input v-model="inputVal" placeholder="请输入内容"></el-input>
      <p>
        本项目仅共个人学习，请勿擅自传播<br />
        请支持购买正版音乐
      </p>
    </div>



    <!-- PLay Bar -->
    <!-- <PlayBar></PlayBar> -->
    <audio
      :src="playURL"
      autoplay
      controls
      style="width:100%; position:fixed; bottom:1rem; left:0; z-index: 9; "
    ></audio>
  </div>
</template>

<script>
// Card
import Card from "@/components/Card/Card.vue";
// Play Bar
import PlayBar from "@/components/PlayBar/PlayBar.vue";

// API
import {

} from "@/network/api.js";

export default {
  data() {
    return {
      // searchValue
      inputVal: "",

      // result list
      tableData: [
        {
          index: 1,
          name: "Venom",
          author: "Eminem",
        },
        {
          index: 1,
          name: "Unstoppa",
          author: "Sia",
        },
        {
          index: 1,
          name: "Venom",
          author: "Eminem",
        },
        {
          index: 1,
          name: "Venom",
          author: "Eminem",
        },
      ],

      //testURL
      playURL: "",
    };
  },
  components: {
    Card,
    PlayBar,
  },
};
</script>

<style lang="less" scoped>
@import "../assets/style/Search/Search.less";
</style>
