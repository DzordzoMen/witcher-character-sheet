// types
import dexSkills from '../Types/DexteritySkillType';

import { DexteritySkill } from '../database';

import initState from './methods/initState';

const dexteritySkillsModule = {
  namespaced: true,
  state: {
    ...initState(dexSkills),
  },
  getters: {
    DEXTERITY_SKILL_INFO: (_state, getters) => ({
      primarySkillLvl: getters.DEXTERITY_SKILL,
      subSkills: [
        {
          name: dexSkills.LightArmor,
          lvl: getters.LIGHT_ARMOR_SKILL,
        },
        {
          name: dexSkills.LightWeapon,
          lvl: getters.LIGHT_WEAPON_SKILL,
        },
        {
          name: dexSkills.Initiative,
          lvl: getters.INITIATIVE_SKILL,
        },
        {
          name: dexSkills.Stealth,
          lvl: getters.STEALTH_SKILL,
        },
        {
          name: dexSkills.Dodge,
          lvl: getters.DODGE_SKILL,
        },
        {
          name: dexSkills.ThrowingWeapon,
          lvl: getters.THROWING_WEAPON_SKILL,
        },
        {
          name: dexSkills.RangeWeapon,
          lvl: getters.RANGE_WEAPON_SKILL,
        },
      ],
    }),
    DEXTERITY_SKILL: (state) => state.Dexterity,
    LIGHT_ARMOR_SKILL: (state) => state.LightArmor,
    LIGHT_WEAPON_SKILL: (state) => state.LightWeapon,
    INITIATIVE_SKILL: (state) => state.Initiative,
    STEALTH_SKILL: (state) => state.Stealth,
    DODGE_SKILL: (state) => state.Dodge,
    THROWING_WEAPON_SKILL: (state) => state.ThrowingWeapon,
    RANGE_WEAPON_SKILL: (state) => state.RangeWeapon,
  },
  mutations: {
    SET_SKILL_TREE(state, skillTree) {
      Object.keys(skillTree).forEach((key) => {
        state[key] = skillTree[key];
      });
    },
    SET_DEXTERITY_SKILL(state, newLevel) {
      state.Dexterity = newLevel;
    },
    SET_LIGHT_ARMOR_SKILL(state, newLevel) {
      state.LightArmor = newLevel;
    },
    SET_LIGHT_WEAPON_SKILL(state, newLevel) {
      state.LightWeapon = newLevel;
    },
    SET_INITIATIVE_SKILL(state, newLevel) {
      state.Initiative = newLevel;
    },
    SET_STEALTH_SKILL(state, newLevel) {
      state.Stealth = newLevel;
    },
    SET_DODGE_SKILL(state, newLevel) {
      state.Dodge = newLevel;
    },
    SET_THROWING_WEAPON_SKILL(state, newLevel) {
      state.ThrowingWeapon = newLevel;
    },
    SET_RANGE_WEAPON_SKILL(state, newLevel) {
      state.RangeWeapon = newLevel;
    },
  },
  actions: {
    SET_WITCHER_DEXTERITY_SKILLS: ({ commit, rootGetters }) => {
      const witcherId = rootGetters.WITCHER_ID;
      DexteritySkill.getObjectWithId(witcherId).then((data) => {
        commit('SET_SKILL_TREE', data);
      });
    },
    UPDATE_DEXTERITY_SKILL: async ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('SET_DEXTERITY_SKILL', level);
      return DexteritySkill.setParamValue(witcherId, dexSkills.Dexterity, level);
    },
    UPDATE_LIGHT_ARMOR_SKILL: async ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('SET_LIGHT_ARMOR_SKILL', level);
      return DexteritySkill.setParamValue(witcherId, dexSkills.LightArmor, level);
    },
    UPDATE_LIGHT_WEAPON_SKILL: async ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('SET_LIGHT_WEAPON_SKILL', level);
      return DexteritySkill.setParamValue(witcherId, dexSkills.LightWeapon, level);
    },
    UPDATE_INITIATIVE_SKILL: async ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('SET_INITIATIVE_SKILL', level);
      return DexteritySkill.setParamValue(witcherId, dexSkills.Initiative, level);
    },
    UPDATE_STEALTH_SKILL: async ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('SET_STEALTH_SKILL', level);
      return DexteritySkill.setParamValue(witcherId, dexSkills.Stealth, level);
    },
    UPDATE_DODGE_SKILL: async ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('SET_DODGE_SKILL', level);
      return DexteritySkill.setParamValue(witcherId, dexSkills.Dodge, level);
    },
    UPDATE_THROWING_WEAPON_SKILL: async ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('SET_THROWING_WEAPON_SKILL', level);
      return DexteritySkill.setParamValue(witcherId, dexSkills.ThrowingWeapon, level);
    },
    UPDATE_RANGE_WEAPON_SKILL: async ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('SET_RANGE_WEAPON_SKILL', level);
      return DexteritySkill.setParamValue(witcherId, dexSkills.RangeWeapon, level);
    },
  },
};

export default dexteritySkillsModule;
