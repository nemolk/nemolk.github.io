import Vue from "vue";
// 手动全局注册
// import MusicHeader from "../components/common/MusicHeader.vue";
// import MusicFooter from "../components/common/MusicFooter.vue";
// Vue.component("MusicHeader", MusicHeader);
// Vue.component("MusicFooter", MusicFooter);

// 自动化全局注册
const requireComponent = require.context(
  // 其组件目录的相对路径
  "../components/common",
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Music[A-Z]\w+\.(vue)$/
);

requireComponent.keys().forEach((fileName) => {
  //   console.log(fileName);
  //   console.log(fileName.split("/").pop().replace(/\.\w+$/, ''));
  // 1. 拿组件名称
  var componentName = fileName
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");

  // 2. 获取组件配置
  const componentConfig = requireComponent(fileName);

  // 3. 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  );
});
