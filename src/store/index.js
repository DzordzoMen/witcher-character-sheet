import Vue from 'vue';
import Vuex from 'vuex';

import WitcherInfo from './witcherInfoModule';
import HerbModule from './herbsModule';
import StrengthSkill from './strengthSkillsModule';
import DexteritySkill from './dexteritySkillsModule';
import SignSkill from './signSkillsModule';
import MindSkill from './mindSkillsModule';
import LargeTables from './largeTablesModule';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedWitcherId: null,
    loading: false,
    skillPoints: 0,
  },
  getters: {
    WITCHER_ID: (state) => state.selectedWitcherId,
    SKILL_POINTS: (state) => state.skillPoints,
  },
  mutations: {
    SET_WITCHER_ID(state, witcherId) {
      state.selectedWitcherId = witcherId;
    },
    CLEAR_WITCHER_ID(state) {
      state.selectedWitcherId = null;
    },
    SET_SKILL_POINTS(state, skillPoints) {
      state.skillPoints = skillPoints;
    },
    SET_LOADING(state, newState) {
      state.loading = newState;
    },
  },
  actions: {
    UPDATE_WITCHER_ID: async ({ commit, getters, dispatch }, newId) => {
      commit('SET_WITCHER_ID', newId);
      await dispatch('WitcherInfo/SET_WITCHER_INFO').then(() => {
        const avaSkillPoints = getters['WitcherInfo/WITCHER_AVA_SKILL_POINTS'];
        commit('SET_SKILL_POINTS', avaSkillPoints);
      });
      await dispatch('HerbModule/SET_WITCHER_HERBS');
      await dispatch('StrengthSkill/SET_WITCHER_STRENGTH_SKILLS');
      await dispatch('DexteritySkill/SET_WITCHER_DEXTERITY_SKILLS');
      await dispatch('SignSkill/SET_WITCHER_SIGNS_SKILLS');
      await dispatch('MindSkill/SET_WITCHER_MIND_SKILLS');
      await dispatch('LargeTables/SET_WITCHER_EQUIPMENT_TABLE');
      await dispatch('LargeTables/SET_WITCHER_SADDLEBAGS_TABLE');
    },
    UPDATE_SKILL_POINTS: ({ commit }, skillPoints) => {
      commit('SET_SKILL_POINTS', skillPoints);
    },
  },
  modules: {
    WitcherInfo,
    HerbModule,
    StrengthSkill,
    DexteritySkill,
    SignSkill,
    MindSkill,
    LargeTables,
  },
});
