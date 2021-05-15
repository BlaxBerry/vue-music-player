<template>
  <!-- LeftNavBar -->
  <div id="left_nav_bar">
    <!-- show menu -->
    <i
      class="el-icon-s-grid"
      style="fontSize:2rem; position:fixed; top:2.5rem; left:2.5rem"
      @click="toShow"
    ></i>
    <!-- menu -->
    <el-menu
      v-if="isShow"
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#161a1d"
      active-text-color="#e5383b"
      router
    >
      <!-- close -->
      <el-menu-item index="" @click="toClose">
        <i class="el-icon-close"></i>
        <span slot="title">显示/隐藏</span>
      </el-menu-item>
      <!-- Catergory-->
      <el-menu-item index="/category">
        <i class="el-icon-menu"></i>
        <span slot="title">分类</span>
      </el-menu-item>

      <!-- search -->
      <el-menu-item index="/search">
        <i class="el-icon-search"></i>
        <span slot="title">搜索</span>
      </el-menu-item>

      <!-- List-->
      <el-menu-item index="/list">
        <i class="el-icon-tickets"></i>
        <span slot="title">歌单</span>
      </el-menu-item>

      <!-- MV -->
      <el-menu-item index="/mv">
        <i class="el-icon-film"></i>
        <span slot="title">MV</span>
      </el-menu-item>

      <!-- Home-->
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">主页</span>
      </el-menu-item>

      <!-- ？ -->
      <el-menu-item index="3" disabled>
        <i class="el-icon-lock"></i>
        <span slot="title">开发中</span>
      </el-menu-item>
      <!-- ？ -->
      <el-menu-item index="3" disabled>
        <i class="el-icon-lock"></i>
        <span slot="title">开发中</span>
      </el-menu-item>

      <!-- setting -->
      <el-menu-item index="">
        <i class="el-icon-setting"></i>
        <span slot="title">管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,

      isShow: true,
    };
  },
  methods: {
    toClose() {
      // console.log(111);
      this.isShow = false;
      this.$parent.leftMenuClose = true;
    },
    toShow() {
      this.isShow = true;
      this.$parent.leftMenuClose = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/style/base.less";
@import "../../assets/style/LeftNavBar/LeftNavBar.less";
</style>
