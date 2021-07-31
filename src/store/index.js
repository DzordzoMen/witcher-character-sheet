import Vue from 'vue';
import Vuex from 'vuex';

import WitcherInfo from './witcherInfoModule';
import HerbModule from './herbsModule';
import StrengthSkill from './strengthSkillsModule';
import DexteritySkill from './dexteritySkillsModule';
import SignSkill from './signSkillsModule';
import MindSkill from './mindSkillsModule';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedWitcherId: null,
  },
  getters: {
    WITCHER_ID: (state) => state.selectedWitcherId,
  },
  mutations: {
    SET_WITCHER_ID(state, witcherId) {
      state.selectedWitcherId = witcherId;
    },
    CLEAR_WITCHER_ID(state) {
      state.selectedWitcherId = null;
    },
  },
  actions: {
    UPDATE_WITCHER_ID: async ({ commit, dispatch }, newId) => {
      commit('SET_WITCHER_ID', newId);
      await dispatch('WitcherInfo/SET_WITCHER_INFO');
      await dispatch('HerbModule/SET_WITCHER_HERBS');
      await dispatch('StrengthSkill/SET_WITCHER_STRENGTH_SKILLS');
      await dispatch('DexteritySkill/SET_WITCHER_DEXTERITY_SKILLS');
      await dispatch('SignSkill/SET_WITCHER_SIGNS_SKILLS');
      await dispatch('MindSkill/SET_WITCHER_MIND_SKILLS');
    },
  },
  modules: {
    WitcherInfo,
    HerbModule,
    StrengthSkill,
    DexteritySkill,
    SignSkill,
    MindSkill,
  },
});
