import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import "./assets/css/global.css";
import store from "./store";
import "./utils/filter_utils";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
