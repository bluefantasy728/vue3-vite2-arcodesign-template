<style lang="scss" scoped>
.page {
  width: 100vw;
  height: 100%;
  background: #0404f4;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
}
.page-left {
  width: 35%;
  flex-shrink: 0;
  img {
    width: 260px;
    height: 250px;
    left: 30%;
    top: 50%;
    margin-top: -220px;
  }
}
.page-middle {
  width: 20%;
  flex-shrink: 0;
  .title {
    font-size: 36px;
    color: #f8f8f8;
    top: 40%;
    &:before {
      content: 'beta 0.1';
      color: #f8f8f8;
      font-size: 12px;
      position: absolute;
      bottom: -15px;
      right: 0;
    }
    &:after {
      content: '';
      display: block;
      width: 145px;
      height: 3px;
      background: #fcec0c;
      position: absolute;
      bottom: -10px;
      left: 0;
    }
  }
}
.page-right {
  flex: 1;
  .login-box {
    width: 445px;
    height: 500px;
    border: 2px solid rgba(71, 55, 255, 1);
    background: #ffffff;
    border-radius: 5px;
    top: 50%;
    margin-top: -250px;
    padding: 50px 50px 40px 50px;
    box-sizing: border-box;
    margin-left: 10%;
    text-align: left;
  }
  .qrcode {
    width: 100%;
    height: 300px;
    img {
      height: 100%;
    }
  }
  .login-title {
    font-size: 24px;
    color: #0404f4;
    margin-bottom: 43px;
  }
  :deep(.el-input) {
    border: 2px solid #4737ff;
    input {
      background: #f5f4ff;
      color: #4737ff;
    }
  }
}

.update-pwd {
  width: 530px;
  .randinput {
    display: inline-block;
    width: 95px;
    :deep(.el-input__inner) {
      margin-top: 4px;
    }
  }
  .code {
    display: inline-block;
    margin: 0 10px;
    width: 72px;
    height: 40px;
    background: rgba(216, 216, 216, 1);
    opacity: 1;
    border-radius: 3px;
  }
  .pinput {
    width: 200px;
  }
  .send-code {
    width: 115px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: rgba(4, 4, 244, 0.1);
    border: 1px solid rgba(4, 4, 244, 1);
    border-radius: 3px;
    font-size: 12px;
    color: #0404f4;
    cursor: pointer;
  }
}
</style>
<template>
  <div class="page">
    <div class="page-left posr">
      <img class="posa" src="@/assets/icons/logo.svg" alt />
    </div>
    <div class="page-middle posr">
      <div class="title posa">工单管理系统</div>
    </div>
    <div class="page-right posr">
      <div class="login-box posa">
        <h5 class="login-title">用户登录</h5>
        <p class="mb5" style="color:#4737FF">手机号码</p>
        <a-input
          v-model="postData.loginName"
          type="text"
          autofocus
          placeholder="登录名"
          class="email-input mb20"
        />
        <p class="mb5" style="color:#4737FF">登录密码</p>
        <a-input
          v-model="postData.password"
          type="password"
          placeholder="密码"
          class="password-input mb100"
          @keyup.enter.native="loginFn"
        />
        <a-button class="mb20" type="primary" style="width:100%" @click="loginFn">登录</a-button>
        <p class="pointer" style="text-align:right;color:#0404f4" @click="$refs.dialog.open()">忘记密码</p>
      </div>
    </div>
  </div>
</template>
<script setup>
// import { getCurrentInstance, reactive, toRefs } from 'vue';
// import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '@/store/user';
const { proxy } = getCurrentInstance();
const router = useRouter();
const user = useUserStore();

const postData = reactive({
  loginName: '',
  password: '',
});

async function loginFn() {
  await user.setUserInfo(postData);
  router.push({
    name: 'home',
  });
}

// const { postData } = toRefs(postData);
</script>
