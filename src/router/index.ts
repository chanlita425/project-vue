import { createRouter, createWebHistory } from "vue-router";
import MainLayout    from "../layouts/MainLayout.vue"; 
import DashboardView from "../views/Dashboard/DashboardView.vue";
import EmployeesView from "../views/Employees/EmployeeView.vue";


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
        path: "employees",
        name: "Employees",
        component: EmployeesView,
      },
      
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
