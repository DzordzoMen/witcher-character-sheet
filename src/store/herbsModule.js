// types
import herbT from '../Types/HerbType';

import { Herbs } from '../database';

import initState from './methods/initState';

const herbsModule = {
  namespaced: true,
  state: {
    ...initState(herbT),
  },
  getters: {
    HERBS: (_state, getters) => [
      {
        name: 'Vitriol',
        amount: getters.VITRIOL,
      },
      {
        name: 'Rebis',
        amount: getters.REBIS,
      },
      {
        name: 'Aether',
        amount: getters.AETHER,
      },
      {
        name: 'Quebrith',
        amount: getters.QUEBRITH,
      },
      {
        name: 'Hydragenum',
        amount: getters.HYDRAGENUM,
      },
      {
        name: 'Vermilion',
        amount: getters.VERMILION,
      },
    ],
    VITRIOL: (state) => state.Vitriol,
    REBIS: (state) => state.Rebis,
    AETHER: (state) => state.Aether,
    QUEBRITH: (state) => state.Quebrith,
    HYDRAGENUM: (state) => state.Hydragenum,
    VERMILION: (state) => state.Vermilion,
  },
  mutations: {
    SET_HERBS(state, newHerbs) {
      Object.keys(newHerbs).forEach((key) => {
        state[key] = newHerbs[key];
      });
    },
    SET_VITRIOL(state, newAmount) {
      state.Vitriol = newAmount;
    },
    SET_REBIS(state, newAmount) {
      state.Rebis = newAmount;
    },
    SET_AETHER(state, newAmount) {
      state.Aether = newAmount;
    },
    SET_QUEBRITH(state, newAmount) {
      state.Quebrith = newAmount;
    },
    SET_HYDRAGENUM(state, newAmount) {
      state.Hydragenum = newAmount;
    },
    SET_VERMILION(state, newAmount) {
      state.Vermilion = newAmount;
    },
  },
  actions: {
    SET_WITCHER_HERBS: async ({ commit, rootGetters }) => {
      const witcherId = rootGetters.WITCHER_ID;
      Herbs.getObjectWithId(witcherId).then((data) => {
        commit('SET_HERBS', data);
      });
    },
    UPDATE_VITRIOL: async ({ commit, rootGetters }, amount) => {
      const witcherId = rootGetters.WITCHER_ID;
      Herbs.setParamValue(witcherId, herbT.Vitriol, amount);
      commit('SET_VITRIOL', amount);
    },
    UPDATE_REBIS: async ({ commit, rootGetters }, amount) => {
      const witcherId = rootGetters.WITCHER_ID;
      Herbs.setParamValue(witcherId, herbT.Rebis, amount);
      commit('SET_REBIS', amount);
    },
    UPDATE_AETHER: async ({ commit, rootGetters }, amount) => {
      const witcherId = rootGetters.WITCHER_ID;
      Herbs.setParamValue(witcherId, herbT.Aether, amount);
      commit('SET_AETHER', amount);
    },
    UPDATE_QUEBRITH: async ({ commit, rootGetters }, amount) => {
      const witcherId = rootGetters.WITCHER_ID;
      Herbs.setParamValue(witcherId, herbT.Quebrith, amount);
      commit('SET_QUEBRITH', amount);
    },
    UPDATE_HYDRAGENUM: async ({ commit, rootGetters }, amount) => {
      const witcherId = rootGetters.WITCHER_ID;
      Herbs.setParamValue(witcherId, herbT.Hydragenum, amount);
      commit('SET_HYDRAGENUM', amount);
    },
    UPDATE_VERMILION: async ({ commit, rootGetters }, amount) => {
      const witcherId = rootGetters.WITCHER_ID;
      Herbs.setParamValue(witcherId, herbT.Vermilion, amount);
      commit('SET_VERMILION', amount);
    },
  },
};

export default herbsModule;
