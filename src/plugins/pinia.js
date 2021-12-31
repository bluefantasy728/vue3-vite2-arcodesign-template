import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export default {
  install(app) {
    const pinia = createPinia();
    pinia.use(piniaPluginPersistedstate);
    app.use(pinia);
    // app.config.globalProperties.$router = router;
    // app.config.globalProperties.$route = useRoute();
  },
};
