import Vue from "vue";

// 首字母大写过滤器
Vue.filter("upperCase", function(value) {
  if (!value) return "";
  return value.toString().toUpperCase();
});
