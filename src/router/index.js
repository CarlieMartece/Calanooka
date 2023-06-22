import { createRouter, createWebHistory } from "vue-router";
import ChromaSphereSystem from "../views/ChromaSphereSystem";
import CNMCollective from "../views/CNMCollective.vue";
import DarkStarVale from "../views/DarkStarVale";
import ChromaSphereShow from "../views/ChromaSphereShow";

const routes = [
  {
    path: "/",
    name: "ChromaSphereSystem",
    component: ChromaSphereSystem,
  },
  {
    path: "/chroma/:id",
    component: ChromaSphereShow,
  },
  {
    path: "/cnmc",
    name: "CNMC",
    component: CNMCollective,
  },
  {
    path: "/dsv",
    name: "DarkStarVale",
    component: DarkStarVale,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
