<style lang="scss" scoped>
.arco-layout {
  height: 100%;
  &.container {
    height: 100vh;
  }
}
.arco-layout-header {
  color: #333;
  text-align: center;
  background: #eee;
}
.arco-layout-sider {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  overflow: hidden;
  :deep(.arco-layout-sider-children) {
    overflow: hidden;
  }
}
.main {
  padding: 0;
  overflow-y: auto;
}
</style>

<template>
  <a-layout class="container">
    <a-layout-sider style="width: 60px;">
      <LayoutAside />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="height: 58px;">
        <LayoutHeader />
      </a-layout-header>
      <a-layout-content class="main">
        <slot></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: 'Layout',
};
</script>
