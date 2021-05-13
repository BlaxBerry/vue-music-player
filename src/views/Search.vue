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

    <!-- new song -->
    <Card :list="newSongList"></Card>

    <!--result list -->
    <!-- <el-table class="result_list" :data="tableData" style="width: 100%">
      <el-table-column prop="index" width="40"> </el-table-column>
      <el-table-column prop="name" label="Title"> </el-table-column>
      <el-table-column
        prop="author"
        label="Author"
        width="100"
      ></el-table-column>
    </el-table> -->
  </div>
</template>

<script>
// Card
import Card from "@/components/Card/Card.vue";

// API
import {
  // new songs
  GetnewSong
} from "@/network/api.js";


export default {
  data() {
    return {
      // searchValue
      inputVal: "",

      // new song list
      newSongList:[],


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
    };
  },
  components:{
    Card
  },
  mounted(){
    // get new Songs
    GetnewSong().then(res=>{
      // console.log(res.result);
      this.newSongList = res.result;
    })
  }
};
</script>

<style lang="less" scoped>
@import "../assets/style/Search/Search.less";
</style>
