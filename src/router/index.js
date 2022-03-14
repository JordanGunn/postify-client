import { createRouter, createWebHistory } from 'vue-router'
import AdminDashboard from "@/views/AdminDashboard";
import Login from "@/views/Login";
import Register from "@/views/Register";
// import store from '@/store/index'


const routes = [
  {
    path: '/',
    component: AdminDashboard,
    meta: { useAuth: true },
  },
  {
    path: '/login',
    component: Login,
    meta: { useAuth: false },
  },
  {
    path: '/register',
    component: Register,
    meta: { useAuth: false },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach(async (to, from, next) => {
//   if (to.meta.useAuth) {
//     let userProfile = store.getters["auth/getUserProfile"];
//     if (userProfile.id === 0) {
//       await store.dispatch("auth/userProfile");
//       userProfile = store.getters["auth/getUserProfile"];
//       if (userProfile.id === 0) {
//         return next({ path: "/login" });
//       } else {
//         return next();
//       }
//     }
//   }
//   return next();
// });

export default router
