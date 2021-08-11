import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Home from '../views/Home.vue';
import WitcherCard from '../views/WitcherCard.vue';
import Saddlebags from '../views/Saddlebags.vue';

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
    component: WitcherCard,
    beforeEnter: (to, from, next) => {
      store.commit('SET_LOADING', true);
      store.dispatch('UPDATE_WITCHER_ID', Number(to.params.id)).then(() => {
        store.commit('SET_LOADING', false);
        next();
      });
    },
  },
  {
    path: '/card/:id/saddlebags',
    name: 'Saddlebags',
    props: true,
    component: Saddlebags,
  },
  {
    path: '/card/:id/recipe',
    name: 'RecipeInfo',
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
