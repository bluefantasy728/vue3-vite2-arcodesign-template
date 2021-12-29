<style lang="scss" scoped>
.layout-header {
  height: 100%;
  padding: 0 20px;
  .el-icon-search {
    color: #4737ff;
    font-size: 18px;
    font-weight: bolder;
  }
  .avatar {
    cursor: pointer;
    .error-icon {
      font-size: 18px;
    }
  }
}
</style>

<template>
  <div class="layout-header flex vcenter between">
    <div class="flex vcenter">{{unitName}}</div>

    <div class="flex vcenter">
      <span class="ml10 mr20">{{userInfo.name}} ({{userInfo.phone}})</span>
      <span class="pointer" @click="logout">退出</span>
    </div>
  </div>
</template>
<script setup>
import { reactive, toRefs } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const state = reactive({
  unitName: '施工单位名称',
  userInfo: {
    name: '用户名名称',
    phone: '15788773645',
  },
});
function logout() {
  router.push({
    name: 'login',
  });
}
const { unitName, userInfo } = toRefs(state);
</script>
