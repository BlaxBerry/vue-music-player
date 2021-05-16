<template>
  <div id="app" :class="leftMenuClose ? '' : 'left_menu_show'">
    <!-- <router-link to="/about">About</router-link> -->

    <!-- Left Nav Bar -->
    <LeftNavBar />
    <!-- Top Nav -->
    <TopNavBar />
    <!--router-view -->
    <router-view />
  </div>
</template>
<script>
//Top Nav Bar
import TopNavBar from "@/components/TopNavBar/TopNavBar.vue";
// Left Nav Bar
import LeftNavBar from "@/components/LeftNavBar/LeftNavBar.vue";

export default {
  name: "Home",
  data() {
    return {
      leftMenuClose: false,
    };
  },
  components: {
    TopNavBar,
    LeftNavBar,
  },
};
</script>

<style lang="less">
@import "./assets/style/base.less";
@import "./assets/style/App/App.less";
.left_menu_show {
  padding-left: 8rem;
  padding-top: 5rem;
  padding-bottom: 6rem;
}
</style>
