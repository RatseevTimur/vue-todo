import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/all", component: App },
  { path: "/active", component: App },
  { path: "/completed", component: App }
];

const router = new VueRouter({
  routes
});

router.replace({ path: '/all' })//Возвращает '/all' для "vue-router" при обновлении стриницы

Vue.config.productionTip = false;

new Vue({
  router,
  el: "#app",
  components: { App },
  template: "<App/>"
});
