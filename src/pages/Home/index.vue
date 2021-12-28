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
}
</style>
<template>
  <div class="page-dashboard">
    <h3>hello vue3</h3>
    <img src="@/assets/img/illustration.png" />
    <div class="bg-img"></div>
  </div>
</template>

<script setup>
/***** 相关引入和定义 *****/
// import { reactive, toRefs, onMounted, computed, getCurrentInstance } from 'vue';
// import { useRouter, useRoute } from 'vue-router';

const { proxy } = getCurrentInstance();
const router = useRouter();

/***** 响应式数据 *****/
const state = reactive({});

/***** 方法定义 *****/

/***** 声明周期和watch *****/
onMounted(async () => {});

const {} = toRefs(state);
</script>

<script>
export default {};
</script>
