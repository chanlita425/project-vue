import { createRouter, createWebHistory } from "vue-router";
import FormEmployee from "../views/FormEmployee.vue";
import Dashboard from "../layouts/Dashboard.vue";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    component: Dashboard,
    children: [
      {
        path: "FormEmployee",
        name: "FormEmployee",
        component: FormEmployee,
      },
      {
        path: "HomePage",
        name: "HomePage",
        component: HomePage,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
