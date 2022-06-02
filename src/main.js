import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{ path: "/", component: App }];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  el: "#app",
  components: { App },
  template: "<App/>"
});
