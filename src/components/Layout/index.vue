<style lang="scss" scoped>
.el-header {
  color: #333;
  text-align: center;
  background: #eee;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  overflow: hidden;
}
:deep(.el-container) {
  height: 100%;
}
.el-main {
  padding: 0;
  overflow-y: auto;
}
</style>

<template>
  <el-container>
    <el-aside width="60px">
      <LayoutAside />
    </el-aside>
    <el-container>
      <el-header height="58px">
        <LayoutHeader />
      </el-header>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Layout',
};
</script>
