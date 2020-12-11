import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeDefault from "@/layout/default.vue";
import Home from "@/pages/home.vue";

var routes = [
  {
    path: "/",
    component: HomeDefault,
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: Home,
      },
    ],
  },
];

export default new VueRouter({
  routes,
});
