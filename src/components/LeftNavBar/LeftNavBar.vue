<template>
  <!-- LeftNavBar -->
  <div id="left_nav_bar">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      router
    >
      <!-- List-->
      <el-menu-item index="/list">
        <i class="el-icon-menu"></i>
        <span slot="title">列表</span>
      </el-menu-item>
      <!-- search -->
      <el-menu-item index="/search">
        <i class="el-icon-search"></i>
        <span slot="title">搜索</span>
      </el-menu-item>
      <!-- ？ -->
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <!-- setting -->
      <el-menu-item index="">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/style/LeftNavBar/LeftNavBar.less";
</style>
