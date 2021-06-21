import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { authGuard } from "../auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: authGuard,
    meta: {
      roles: ["create:tools", "delete:tools"],
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
