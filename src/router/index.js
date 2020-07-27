import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    redirect: '/home',
    component: () => import('@/Layout'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
