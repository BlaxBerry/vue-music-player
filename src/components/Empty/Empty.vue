<template>
  <div id="empty">
    <div class="empty">
      <h2>请稍作等待，尝或试刷新页面</h2>
      <i class="el-icon-loading"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "empty",
};
</script>

<style lang="less" scoped>
.empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  i {
      margin-top: 1rem;
      &::before {
          font-size: 4rem;
      }
  }
}
</style>
