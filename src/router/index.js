import { createRouter, createWebHistory } from "vue-router";
import ChromaSphereSystem from "../views/ChromaSphereSystem.vue";
import CNMCollective from "../views/CNMCollective.vue";

const routes = [
  {
    path: "/",
    name: "ChromaSphereSystem",
    component: ChromaSphereSystem,
  },
  {
    path: "/cnmc",
    name: "CNMC",
    component: CNMCollective,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
