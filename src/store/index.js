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
    UPDATE_WITCHER_ID: ({ commit, dispatch }, newId) => {
      commit('SET_WITCHER_ID', newId);
      dispatch('WitcherInfo/SET_WITCHER_INFO');
      dispatch('HerbModule/SET_WITCHER_HERBS');
      dispatch('StrengthSkill/SET_WITCHER_STRENGTH_SKILLS');
      dispatch('DexteritySkill/SET_WITCHER_DEXTERITY_SKILLS');
      dispatch('SignSkill/SET_WITCHER_SIGNS_SKILLS');
      dispatch('MindSkill/SET_WITCHER_MIND_SKILLS');
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
