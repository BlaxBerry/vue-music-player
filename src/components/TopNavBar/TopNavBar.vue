<template>
  <!-- TopNavBar -->
  <div id="top_nav_bar">
    <el-row>
     <i class="el-icon-d-arrow-left" @click="$router.go(-1)"></i>
      <i class="el-icon-d-arrow-right" @click="$router.go(1)"></i>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../../assets/style/TopNavBar/TopNavBar.less";
</style>
