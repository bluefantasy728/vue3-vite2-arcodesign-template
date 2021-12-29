import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {},
  }),
  // optional getters
  getters: {},
  // optional actions
  actions: {
    async setUserInfo(userInfo) {
      await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, 100),
      );
      this.userInfo = userInfo;
    },
  },
  persist: true,
});
