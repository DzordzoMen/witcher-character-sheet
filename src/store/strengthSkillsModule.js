// types
import strSkills from '../Types/StrengthSkillType';

import { StrengthSkill } from '../database';

const strengthSkillsModule = {
  namespaced: true,
  state: {},
  getters: {
    STRENGTH_SKILL_INFO: (_state, getters) => ({
      primarySkillLvl: getters.STRENGTH_SKILL,
      subSkills: [
        {
          name: strSkills.HeavyArmor,
          lvl: getters.HEAVY_ARMOR_SKILL,
        },
        {
          name: strSkills.HeavyWeapon,
          lvl: getters.HEAVY_WEAPON_SKILL,
        },
        {
          name: strSkills.FistFight,
          lvl: getters.FIST_FIGHT,
        },
        {
          name: strSkills.Wholesomness,
          lvl: getters.WHOLESOMNESS_SKILL,
        },
        {
          name: strSkills.Endurance,
          lvl: getters.ENDURANCE_SKILL,
        },
        {
          name: strSkills.ElixirTolerance,
          lvl: getters.ELIXIR_TOLERANCE_SKILL,
        },
        {
          name: strSkills.Bullying,
          lvl: getters.BULLYING_SKILL,
        },
      ],
    }),
    STRENGTH_SKILL: (state) => state.Strength,
    HEAVY_ARMOR_SKILL: (state) => state.HeavyArmor,
    HEAVY_WEAPON_SKILL: (state) => state.HeavyWeapon,
    FIST_FIGHT_SKILL: (state) => state.FistFight,
    WHOLESOMNESS_SKILL: (state) => state.Wholesomness,
    ENDURANCE_SKILL: (state) => state.Endurance,
    ELIXIR_TOLERANCE_SKILL: (state) => state.ElixirTolerance,
    BULLYING_SKILL: (state) => state.Bullying,
  },
  mutations: {
    SET_SKILL_TREE(state, skillTree) {
      Object.keys(skillTree).forEach((key) => {
        state[key] = skillTree[key];
      });
    },
    SET_STRENGTH_SKILL(state, newLevel) {
      state.Strength = newLevel;
    },
    SET_HEAVY_ARMOR_SKILL(state, newLevel) {
      state.HeavyArmor = newLevel;
    },
    SET_HEAVY_WEAPON_SKILL(state, newLevel) {
      state.HeavyWeapon = newLevel;
    },
    SET_FIST_FIGHT_SKILL(state, newLevel) {
      state.FistFight = newLevel;
    },
    SET_WHOLESOMNESS_SKILL(state, newLevel) {
      state.Wholesomness = newLevel;
    },
    SET_ENDURANCE_SKILL(state, newLevel) {
      state.Endurance = newLevel;
    },
    SET_ELIXIR_TOLERANCE_SKILL(state, newLevel) {
      state.ElixirTolerance = newLevel;
    },
    SET_BULLYING_SKILL(state, newLevel) {
      state.Bullying = newLevel;
    },
  },
  actions: {
    SET_WITCHER_STRENGTH_SKILLS: ({ commit, rootGetters }) => {
      const witcherId = rootGetters.WITCHER_ID;
      StrengthSkill.getObjectWithId(witcherId).then((data) => {
        commit('SET_SKILL_TREE', data);
      });
    },
    UPDATE_STRENGTH_SKILL: ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      StrengthSkill.setParamValue(witcherId, strSkills.Strength, level);
      commit('SET_STRENGTH_SKILL', level);
    },
    UPDATE_HEAVY_ARMOR_SKILL: ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      StrengthSkill.setParamValue(witcherId, strSkills.HeavyArmor, level);
      commit('SET_HEAVY_ARMOR_SKILL', level);
    },
    UPDATE_HEAVY_WEAPON_SKILL: ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      StrengthSkill.setParamValue(witcherId, strSkills.HeavyWeapon, level);
      commit('SET_HEAVY_WEAPON_SKILL', level);
    },
    UPDATE_FIST_FIGHT_SKILL: ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      StrengthSkill.setParamValue(witcherId, strSkills.FistFight, level);
      commit('SET_FIST_FIGHT_SKILL', level);
    },
    UPDATE_WHOLESOMNESS_SKILL: ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      StrengthSkill.setParamValue(witcherId, strSkills.Wholesomness, level);
      commit('SET_WHOLESOMNESS_SKILL', level);
    },
    UPDATE_ENDURANCE_SKILL: ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      StrengthSkill.setParamValue(witcherId, strSkills.Endurance, level);
      commit('SET_ENDURANCE_SKILL', level);
    },
    UPDATE_ELIXIR_TOLERANCE_SKILL: ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      StrengthSkill.setParamValue(witcherId, strSkills.ElixirTolerance, level);
      commit('SET_ELIXIR_TOLERANCE_SKILL', level);
    },
    UPDATE_BULLYING_SKILL: ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      StrengthSkill.setParamValue(witcherId, strSkills.Bullying, level);
      commit('SET_BULLYING_SKILL', level);
    },
  },
};

export default strengthSkillsModule;
