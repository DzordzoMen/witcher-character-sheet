// types
import mindSkills from '../Types/MindSkill';

import { MindSkill } from '../database';

import initState from './methods/initState';

const mindSkillsModule = {
  namespaced: true,
  state: {
    ...initState(mindSkills),
  },
  getters: {
    MIND_SKILL_INFO: (_state, getters) => ({
      primarySkillLvl: getters.MIND_SKILL,
      subSkills: [
        {
          name: mindSkills.Crafting,
          lvl: getters.CRAFTING_SKILL,
        },
        {
          name: mindSkills.MonsterKnowledge,
          lvl: getters.MONSTER_KNOWLEDGE_SKILL,
        },
        {
          name: mindSkills.WorldKnowledge,
          lvl: getters.WORLD_KNOWLEDGE_SKILL,
        },
        {
          name: mindSkills.Rhetoric,
          lvl: getters.RHETORIC_SKILL,
        },
        {
          name: mindSkills.WitcherSenses,
          lvl: getters.WITCHER_SENSES_SKILL,
        },
        {
          name: mindSkills.MagicResists,
          lvl: getters.MAGIC_RESISTS_SKILL,
        },
        {
          name: mindSkills.Arcana,
          lvl: getters.ARCANA_SKILL,
        },
      ],
    }),
    MIND_SKILL: (state) => state.Mind,
    CRAFTING_SKILL: (state) => state.Crafting,
    MONSTER_KNOWLEDGE_SKILL: (state) => state.MonsterKnowledge,
    WORLD_KNOWLEDGE_SKILL: (state) => state.WorldKnowledge,
    RHETORIC_SKILL: (state) => state.Rhetoric,
    WITCHER_SENSES_SKILL: (state) => state.WitcherSenses,
    MAGIC_RESISTS_SKILL: (state) => state.MagicResists,
    ARCANA_SKILL: (state) => state.Arcana,
  },
  mutations: {
    SET_SKILL_TREE(state, skillTree) {
      Object.keys(skillTree).forEach((key) => {
        state[key] = skillTree[key];
      });
    },
    SET_MIND_SKILL(state, newLevel) {
      state.Mind = newLevel;
    },
    SET_CRAFTING_SKILL(state, newLevel) {
      state.Crafting = newLevel;
    },
    SET_MONSTER_KNOWLEDGE_SKILL(state, newLevel) {
      state.MonsterKnowledge = newLevel;
    },
    SET_WORLD_KNOWLEDGE_SKILL(state, newLevel) {
      state.WorldKnowledge = newLevel;
    },
    SET_RHETORIC_SKILL(state, newLevel) {
      state.Rhetoric = newLevel;
    },
    SET_WITCHER_SENSES_SKILL(state, newLevel) {
      state.WitcherSenses = newLevel;
    },
    SET_MAGIC_RESISTS_SKILL(state, newLevel) {
      state.MagicResists = newLevel;
    },
    SET_ARCANA_SKILL(state, newLevel) {
      state.Arcana = newLevel;
    },
  },
  actions: {
    SET_WITCHER_MIND_SKILLS: ({ commit, rootGetters }) => {
      const witcherId = rootGetters.WITCHER_ID;
      MindSkill.getObjectWithId(witcherId).then((data) => {
        commit('SET_SKILL_TREE', data);
      });
    },
    UPDATE_MIND_SKILL: ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      MindSkill.setParamValue(witcherId, mindSkills.Mind, level);
      commit('SET_MIND_SKILL', level);
    },
    UPDATE_CRAFTING_SKILL: ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      MindSkill.setParamValue(witcherId, mindSkills.Crafting, level);
      commit('SET_CRAFTING_SKILL', level);
    },
    UPDATE_MONSTER_KNOWLEDGE_SKILL: ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      MindSkill.setParamValue(witcherId, mindSkills.MonsterKnowledge, level);
      commit('SET_MONSTER_KNOWLEDGE_SKILL', level);
    },
    UPDATE_WORLD_KNOWLEDGE_SKILL: ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      MindSkill.setParamValue(witcherId, mindSkills.WorldKnowledge, level);
      commit('SET_WORLD_KNOWLEDGE_SKILL', level);
    },
    UPDATE_RHETORIC_SKILL: ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      MindSkill.setParamValue(witcherId, mindSkills.Rhetoric, level);
      commit('SET_RHETORIC_SKILL', level);
    },
    UPDATE_WITCHER_SENSES_SKILL: ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      MindSkill.setParamValue(witcherId, mindSkills.WitcherSenses, level);
      commit('SET_WITCHER_SENSES_SKILL', level);
    },
    UPDATE_MAGIC_RESISTS_SKILL: ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      MindSkill.setParamValue(witcherId, mindSkills.MagicResists, level);
      commit('SET_MAGIC_RESISTS_SKILL', level);
    },
    UPDATE_ARCANA_SKILL: ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      MindSkill.setParamValue(witcherId, mindSkills.Arcana, level);
      commit('SET_ARCANA_SKILL', level);
    },
  },
};

export default mindSkillsModule;
