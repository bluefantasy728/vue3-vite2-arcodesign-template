<template>
  <div class="page-dashboard">
    <h3>hello vue3</h3>
    <a-input v-model="userInfo.loginName"></a-input>
    <a-input v-model="userInfo.password"></a-input>
    <img src="@/assets/img/illustration.png" />
    <div class="bg-img"></div>
    <a-button class="test-btn" type="primary" @click="test">测试按钮</a-button>
    <a-space direction="vertical">
      <a-space>
        <a-button type="primary" status="success">Primary</a-button>
        <a-button status="success">Default</a-button>
        <a-button type="dashed" status="success">Dashed</a-button>
        <a-button type="outline" status="success">Outline</a-button>
        <a-button type="text" status="success">Text</a-button>
      </a-space>
      <a-space>
        <a-button type="primary" status="warning">Primary</a-button>
        <a-button status="warning">Default</a-button>
        <a-button type="dashed" status="warning">Dashed</a-button>
        <a-button type="outline" status="warning">Outline</a-button>
        <a-button type="text" status="warning">Text</a-button>
      </a-space>
      <a-space>
        <a-button type="primary" status="danger">Primary</a-button>
        <a-button status="danger">Default</a-button>
        <a-button type="dashed" status="danger">Dashed</a-button>
        <a-button type="outline" status="danger">Outline</a-button>
        <a-button type="text" status="danger">Text</a-button>
      </a-space>
    </a-space>

    <p class="font12">test font12</p>
    <p class="font20">test font20</p>
    <p class="font60">test font60</p>
    <p class="font40 bold">test font40 bold</p>
    <p class="font40 bolder">test font40 bolder</p>
  </div>
</template>

<script setup>
/***** 相关引入和定义 *****/
// import { reactive, toRefs, onMounted, computed, getCurrentInstance } from 'vue';
// import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '@/store/user';
const user = useUserStore();
const { userInfo } = user;

const { proxy } = getCurrentInstance();
const router = useRouter();

/***** 响应式数据 *****/
const state = reactive({});

/***** 方法定义 *****/
function test() {
  console.log('testttt');
}

/***** 声明周期和watch *****/
onMounted(async () => {});

const {} = toRefs(state);
</script>

<script>
export default {};
</script>
<style lang="scss" scoped>
.page-dashboard {
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  padding: 20px 20px 30px 20px;
  box-sizing: border-box;
  .bg-img {
    width: 300px;
    height: 250px;
    background: url(@/assets/img/illustration.png);
  }
  .test-btn {
    width: 400px;
  }
}
</style>
