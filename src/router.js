import { createRouter, createWebHistory } from "vue-router";
import PhotoApp from "./components/PhotoApp.vue";
import PhotoView from "./components/PhotoView.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "root",
      path: "/",
      component: PhotoApp,
      children: [
        {
          name: "photos",
          path: "albums/:id",
          component: PhotoView,
        },
      ],
    },
  ],
});
