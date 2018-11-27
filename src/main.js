import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import currencyFilter from "./filters/currency";

import "bootstrap";
import axios from "axios";
import VueAxios from "vue-axios";
import VeeValidate from "vee-validate";
import zhTWValidate from "vee-validate/dist/locale/zh_TW";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Vuex from "vuex";

axios.defaults.withCredentials = true;
Vue.config.productionTip = false;
Vue.filter("currency", currencyFilter);
Vue.component("Loading", Loading);

Vue.use(VueAxios, axios);
Vue.use(VeeValidate);
VeeValidate.Validator.localize("zh_TW", zhTWValidate);
Vue.use(Vuex);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
