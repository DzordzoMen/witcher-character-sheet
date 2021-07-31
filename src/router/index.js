import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Home from '../views/Home.vue';
import WitcherCard from '../views/WitcherCard.vue';

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
      store.dispatch('UPDATE_WITCHER_ID', Number(to.params.id)).then(() => {
        // TODO loading
        next();
      });
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
