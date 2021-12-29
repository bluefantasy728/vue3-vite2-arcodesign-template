<style lang="scss" scoped>
.layout-aside {
  height: 100%;
  .left {
    width: 58px;
    height: 100%;
    flex-direction: column;
  }
  .yellow-line {
    height: 100%;
    width: 2px;
    background: #fcec0c;
  }
  .side-menu-logo {
    height: calc(100% - 58px);
    background: #fff;
    .brand-logo {
      width: 58px;
      height: 58px;
      background: #0404f4;
      color: #fff;
      margin-bottom: 8px;
    }
    .menu-item {
      height: 43px;
      background: #fff;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: 0.2s all;
      &.active {
        border-left: 5px solid #0404f4;
        background: #fcec0c;
        i {
          margin-left: -10px;
        }
      }
    }
  }
  .star-logo {
    width: 58px;
    height: 58px;
    line-height: 58px;
    text-align: center;
    background: #fff;
    padding-left: 10px;
  }
}
</style>

<template>
  <div class="layout-aside clearfix">
    <div class="left fl">
      <div class="side-menu-logo">
        <div class="brand-logo"></div>
        <ul>
          <li
            class="menu-item"
            :class="{active:$route.meta.menuKey===item.turnUrl}"
            v-for="(item,index) in menuList"
            :key="index"
          >
            <img :src="getSrc(item.icon)" />
          </li>
        </ul>
      </div>
      <div class="star-logo">
        <img src="@/assets/icons/star_logo.svg" alt />
      </div>
    </div>
    <div class="yellow-line fr"></div>
  </div>
</template>
<script>
export default {
  name: 'LayoutAside',
};
</script>
<script setup>
const menuList = ref([
  {
    icon: 'nav_home',
    url: 'dashboard', // dashboard
  },
  {
    icon: 'nav_order',
    url: 'order', // 订单
  },
  {
    icon: 'nav_cost',
    url: 'balance', // 费用
  },
  {
    icon: 'nav_payment',
    url: 'settlement', // 结算
  },
  {
    icon: 'nav_account',
    url: 'authorization', // 授权
  },
  {
    icon: 'nav_team',
    url: 'account', // 人员管理
  },
  {
    icon: 'nav_setting',
    url: 'setting', // 设置
  },
  {
    icon: 'nav_log',
    url: 'log', // 日志
  },
]);
function getSrc(name) {
  const path = `../../assets/icons/${name}.svg`;
  const modules = import.meta.globEager('../../assets/icons/*.svg');
  return modules[path].default;
}
</script>
