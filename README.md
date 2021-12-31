Vue3 + vite2 + ArcoDesign template

- 按照官方推荐，vue 文件的标签顺序用

  ```
  <template>...</template>
  <script>/* ... */</script>
  <style>/* ... */</style>
  ```

- 引入静态图片的方式

  - template 中不变

  ```
  <img src="@/assets/img/illustration.png" />
  ```

  - css 中不变

  ```
  background: url(@/assets/img/illustration.png);
  ```

  - js 中动态引入本地图片资源

  ```javascript
  function getSrc(name) {
    const path = `../../assets/icons/${name}.svg`;
    const modules = import.meta.globEager('../../assets/icons/*.svg');
    return modules[path].default;
  }
  ```

- 通过`unplugin-auto-import`和`unplugin-vue-components`2 个包，`<script setup>`标签中可以省去导入`vue`和`vue-router`了，components 下的组件也不需要 import 和注册了，直接可以用

- 为了方便维护的时候快速定位到组件使用的位置，自定义组件命名都用大驼峰，在模板里用的时候也直接用大驼峰的方式，然后根据 vue 的官方建议，用了大驼峰标签，就用自闭和方式，比如 `<LayoutAside />`

- 使用 pinia 代替 vuex，pinia 更适合在 vue3 的组合式 api 中使用。另外，加入了`pinia-plugin-persistedstate`这个包实现了 store 数据本地持久化
