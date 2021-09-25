import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Home from '../views/Home.vue';
import WitcherCard from '../views/WitcherCard.vue';
import Saddlebags from '../views/Saddlebags.vue';
import Notes from '../views/Notes.vue';
import RecipesInfo from '../views/RecipesInfo.vue';
import Laboratory from '../views/Laboratory.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/card/:id',
    name: 'WitcherCard',
    props: true,
    meta: { hasId: true },
    component: WitcherCard,
  },
  {
    path: '/card/:id/saddlebags',
    name: 'Saddlebags',
    props: true,
    meta: { hasId: true },
    component: Saddlebags,
  },
  {
    path: '/card/:id/notes',
    name: 'Notes',
    props: true,
    meta: { hasId: true },
    component: Notes,
  },
  {
    path: '/card/:id/recipe',
    name: 'RecipeInfo',
    props: true,
    meta: { hasId: true },
    component: RecipesInfo,
  },
  {
    path: '/card/:id/laboratory',
    name: 'Laboratory',
    props: true,
    meta: { hasId: true },
    component: Laboratory,
  },
  {
    path: '/laboratory',
    name: 'GuestLaboratory',
    component: Laboratory,
  },
  {
    path: '/recipe',
    name: 'GuestRecipeInfo',
    component: RecipesInfo,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta?.hasId && to?.params?.id !== from?.params?.id) {
    store.dispatch('UPDATE_WITCHER_ID', Number(to.params.id));
  }

  next();
});

export default router;
