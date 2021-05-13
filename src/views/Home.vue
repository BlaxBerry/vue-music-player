<template>
  <div id="home">
    <!-- <Swipe :swipeList="swipeList"></Swipe> -->
  <Swipe :swipeList="swipeList" v-if="swipeList.length>0"></Swipe>
    home
  </div>
</template>

<script>
// @ is an alias to /src
//Top Nav Bar
import Swipe from "@/components/Swipe/Swipe.vue";

// API
import {GetSwipe}from '@/network/api.js'

export default {
  name: "Home",
  data(){
    return {
      // Swipe 轮播
      swipeList:[]
    }
  },
  components: {
    Swipe,
  },
  created(){
    // get Swipe Pics
    GetSwipe().then(res=>{
      console.log(res.banners);
      this.swipeList = res.banners;

    })
  }
};
</script>

<style lang="less" scoped>
#home {
  padding-top: 1rem;
  padding-left: 7rem + 2rem;
  padding-right: 1rem;
}
</style>
