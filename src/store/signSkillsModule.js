// types
import sgnSkills from '../Types/SignsSkillType';

import { SignsSkill } from '../database';

import initState from './methods/initState';

const signSkillsModule = {
  namespaced: true,
  state: {
    ...initState(sgnSkills),
  },
  getters: {
    SIGN_SKILL_INFO: (_state, getters) => ({
      primarySkillLvl: getters.SIGNS_SKILL,
      subSkills: [
        {
          name: sgnSkills.Somne,
          lvl: getters.SOMNE_SKILL,
        },
        {
          name: sgnSkills.Heliotrop,
          lvl: getters.HELIOTROP_SKILL,
        },
        {
          name: sgnSkills.Aard,
          lvl: getters.AARD_SKILL,
        },
        {
          name: sgnSkills.Igni,
          lvl: getters.IGNI_SKILL,
        },
        {
          name: sgnSkills.Axii,
          lvl: getters.AXII_SKILL,
        },
        {
          name: sgnSkills.Yrden,
          lvl: getters.YRDEN_SKILL,
        },
        {
          name: sgnSkills.Quen,
          lvl: getters.QUEN_SKILL,
        },
      ],
    }),
    SIGNS_SKILL: (state) => state.Signs,
    SOMNE_SKILL: (state) => state.Somne,
    HELIOTROP_SKILL: (state) => state.Heliotrop,
    AARD_SKILL: (state) => state.Aard,
    IGNI_SKILL: (state) => state.Igni,
    AXII_SKILL: (state) => state.Axii,
    YRDEN_SKILL: (state) => state.Yrden,
    QUEN_SKILL: (state) => state.Quen,
  },
  mutations: {
    SET_SKILL_TREE(state, skillTree) {
      Object.keys(skillTree).forEach((key) => {
        state[key] = skillTree[key];
      });
    },
    SET_SIGNS_SKILL(state, newLevel) {
      state.Signs = newLevel;
    },
    SET_SOMNE_SKILL(state, newLevel) {
      state.Somne = newLevel;
    },
    SET_HELIOTROP_SKILL(state, newLevel) {
      state.Heliotrop = newLevel;
    },
    SET_AARD_SKILL(state, newLevel) {
      state.Aard = newLevel;
    },
    SET_IGNI_SKILL(state, newLevel) {
      state.Igni = newLevel;
    },
    SET_AXII_SKILL(state, newLevel) {
      state.Axii = newLevel;
    },
    SET_YRDEN_SKILL(state, newLevel) {
      state.Yrden = newLevel;
    },
    SET_QUEN_SKILL(state, newLevel) {
      state.Quen = newLevel;
    },
  },
  actions: {
    SET_WITCHER_SIGNS_SKILLS: ({ commit, rootGetters }) => {
      const witcherId = rootGetters.WITCHER_ID;
      SignsSkill.getObjectWithId(witcherId).then((data) => {
        commit('SET_SKILL_TREE', data);
      });
    },
    UPDATE_SIGNS_SKILL_SKILL: async ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('SET_SIGNS_SKILL', level);
      return SignsSkill.setParamValue(witcherId, sgnSkills.Signs, level);
    },
    UPDATE_SOMNE_SKILL: async ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('SET_SOMNE_SKILL', level);
      return SignsSkill.setParamValue(witcherId, sgnSkills.Somne, level);
    },
    UPDATE_HELIOTROP_SKILL: async ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('SET_HELIOTROP_SKILL', level);
      return SignsSkill.setParamValue(witcherId, sgnSkills.Heliotrop, level);
    },
    UPDATE_AARD_SKILL: async ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('SET_AARD_SKILL', level);
      return SignsSkill.setParamValue(witcherId, sgnSkills.Aard, level);
    },
    UPDATE_IGNI_SKILL: async ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('SET_IGNI_SKILL', level);
      return SignsSkill.setParamValue(witcherId, sgnSkills.Igni, level);
    },
    UPDATE_AXII_SKILL: async ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('SET_AXII_SKILL', level);
      return SignsSkill.setParamValue(witcherId, sgnSkills.Axii, level);
    },
    UPDATE_YRDEN_SKILL: async ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('SET_YRDEN_SKILL', level);
      return SignsSkill.setParamValue(witcherId, sgnSkills.Yrden, level);
    },
    UPDATE_QUEN_SKILL: async ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('SET_QUEN_SKILL', level);
      return SignsSkill.setParamValue(witcherId, sgnSkills.Quen, level);
    },
  },
};
export default signSkillsModule;
