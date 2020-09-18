import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from "../views/Tabs.vue";



const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: '/login'
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginPage.vue"),
  },

  {
    path: "/tabs/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: "one",
      },
      {
        path: "one",
        component: () => import("@/views/TabOne.vue"),
        children: [
          {
            path: "one-detail",
            component: () => import("@/views/TabOneDetail.vue"),

          },
        ]
      },

      {
        path: "two",
        component: () => import("@/views/TabTwo.vue"),
      },
    ],
  }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
