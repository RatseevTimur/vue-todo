import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import Register from "./Register";
import Todo from "./Todo";

Vue.use(VueRouter);

const routes = [
  { path: "/register", component: Register },
  { path: "/all", component: Todo },
  { path: "/completed", component: Todo },
  { path: "/active", component: Todo },
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router,
  el: "#app",
  components: { App },
  template: "<App/>"
});
