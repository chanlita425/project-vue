import { createRouter, createWebHistory } from "vue-router";
import MainLayout    from "../layouts/MainLayout.vue"; 
import DashboardView from "../views/DashboardView.vue";
import TaskView from "../views/TaskView.vue";
import ProjectView from "../views/ProjectView.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: DashboardView,
      },
      {
        path: "task",
        name: "Task",
        component: TaskView,
      },
      {
        path: "project",
        name: "Project",
        component: ProjectView,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
