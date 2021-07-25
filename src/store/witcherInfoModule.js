// types
import witcherInfoType from '../Types/WitcherInfoType';

import { WitcherInfo } from '../database';

const witcherInfoModule = {
  namespaced: true,
  state: {},
  getters: {
    WITCHER_NAME: (state) => state.Name,
    WITCHER_TITLE: (state) => state.Title,
    WITCHER_SCHOOL: (state) => state.School,
    WITCHER_ORIGIN: (state) => state.Origin,
    WITCHER_GOLD: (state) => state.Gold,
    WITCHER_LEVEL: (state) => state.Level,
    WITCHER_AVA_SKILL_POINTS: (state) => state.AvailableSkillPoints,
    WITCHER_REPUTATION: (state) => state.Reputation,
    WITCHER_HISTORY: (state) => state.History,
    WITCHER_ELIXIRS: (state) => state.Elixirs,
  },
  mutations: {
    SET_WITCHER_INFO(state, skillTree) {
      Object.keys(skillTree).forEach((key) => {
        state[key] = skillTree[key];
      });
    },
    SET_WITCHER_NAME(state, newName) {
      state.Name = newName;
    },
    SET_WITCHER_TITLE(state, newTitle) {
      state.Title = newTitle;
    },
    SET_WITCHER_SCHOOL(state, newSchool) {
      state.School = newSchool;
    },
    SET_WITCHER_ORIGIN(state, newOrigin) {
      state.Origin = newOrigin;
    },
    SET_WITCHER_GOLD(state, newGold) {
      state.Gold = newGold;
    },
    SET_WITCHER_LEVEL(state, newLevel) {
      state.Level = newLevel;
    },
    SET_WITCHER_AVA_SKILL_POINTS(state, newSkillPoints) {
      // TODO debug
      state.AvailableSkillPoints += newSkillPoints;
    },
    SET_WITCHER_REPUTATION(state, newReputation) {
      state.Reputation = newReputation;
    },
    SET_WITCHER_HISTORY(state, newHistory) {
      state.History = newHistory;
    },
    SET_WITCHER_ELIXIR(state, { id, name }) {
      // TODO rename
      const { Elixirs } = state;
      state.Elixirs = Elixirs.filter((elx) => {
        if (elx.id === id) {
          return {
            id: elx.id,
            name,
          };
        }
        return elx;
      });
    },
  },
  actions: {
    SET_WITCHER_INFO: ({ commit, rootGetters }) => {
      const witcherId = rootGetters.WITCHER_ID;
      WitcherInfo.getObjectWithId(witcherId).then((data) => {
        commit('SET_WITCHER_INFO', data);
      });
    },
    UPDATE_WITCHER_NAME: ({ commit, rootGetters }, name) => {
      const witcherId = rootGetters.WITCHER_ID;
      WitcherInfo.setParam(witcherId, witcherInfoType.Name, name);
      commit('SET_WITCHER_NAME', name);
    },
    UPDATE_WITCHER_TITLE: ({ commit, rootGetters }, title) => {
      const witcherId = rootGetters.WITCHER_ID;
      WitcherInfo.setParam(witcherId, witcherInfoType.Title, title);
      commit('SET_WITCHER_TITLE', title);
    },
    UPDATE_WITCHER_SCHOOL: ({ commit, rootGetters }, school) => {
      const witcherId = rootGetters.WITCHER_ID;
      WitcherInfo.setParam(witcherId, witcherInfoType.School, school);
      commit('SET_WITCHER_SCHOOL', school);
    },
    UPDATE_WITCHER_ORIGIN: ({ commit, rootGetters }, origin) => {
      const witcherId = rootGetters.WITCHER_ID;
      WitcherInfo.setParam(witcherId, witcherInfoType.Origin, origin);
      commit('SET_WITCHER_ORIGIN', origin);
    },
    UPDATE_WITCHER_GOLD: ({ commit, rootGetters }, gold) => {
      const witcherId = rootGetters.WITCHER_ID;
      WitcherInfo.setParam(witcherId, witcherInfoType.Gold, gold);
      commit('SET_WITCHER_GOLD', gold);
    },
    UPDATE_WITCHER_LEVEL: ({ commit, rootGetters }, level) => {
      const witcherId = rootGetters.WITCHER_ID;
      WitcherInfo.setParam(witcherId, witcherInfoType.Level, level);
      commit('SET_WITCHER_LEVEL', level);
    },
    UPDATE_WITCHER_AVA_SKILL_POINTS: ({ commit, rootGetters }, skillPoints) => {
      // TODO refactor this should be emited from
      // update lvl and take old skillPoints and increase by 6
      const witcherId = rootGetters.WITCHER_ID;
      WitcherInfo.setParam(witcherId, witcherInfoType.AvailableSkillPoints, skillPoints);
      commit('SET_WITCHER_AVA_SKILL_POINTS', skillPoints);
    },
    UPDATE_WITCHER_REPUTATION: ({ commit, rootGetters }, reputation) => {
      const witcherId = rootGetters.WITCHER_ID;
      WitcherInfo.setParam(witcherId, witcherInfoType.Reputation, reputation);
      commit('SET_WITCHER_REPUTATION', reputation);
    },
    UPDATE_WITCHER_HISTORY: ({ commit, rootGetters }, history) => {
      const witcherId = rootGetters.WITCHER_ID;
      WitcherInfo.setParam(witcherId, witcherInfoType.History, history);
      commit('SET_WITCHER_HISTORY', history);
    },
    UPDATE_WITCHER_ELIXIR: ({ commit, getters, rootGetters }, { id, name }) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('SET_WITCHER_ELIXIR', { id, name });
      // TODO debug
      const elixirs = getters.WITCHER_ELIXIRS;
      WitcherInfo.setParam(witcherId, witcherInfoType.Elixirs, elixirs);
    },
  },
};

export default witcherInfoModule;
