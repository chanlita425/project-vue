import { createRouter, createWebHistory } from "vue-router";
import MainLayout    from "../layouts/MainLayout.vue"; 
import DashboardView from "../views/DashboardView.vue";
import TaskView from "../views/Tasks/TaskView.vue";
import TaskFormView from "../views/Tasks/TaskFormView.vue";
import ProjectView from "../views/Projects/ProjectView.vue";
// import ProjectForm from "../views/Projects/ProjectFormView.vue";

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
      {
        path: "taskForm",
        name: "TaskForm",
        component: TaskFormView,
      },

    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
