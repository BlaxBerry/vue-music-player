<template>
  <!-- LeftNavBar -->
  <div id="left_nav_bar">
    <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      router
    >
      <el-submenu index="1">
        <!-- list -->
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">音乐分类</span>
          <el-menu-item index="/list">选项1</el-menu-item>
          <el-menu-item index="/list">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="/list">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="/list">
          <span slot="title">选项4</span>
          <el-menu-item index="/list">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
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
