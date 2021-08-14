import {
  Equipment as EquipmentDB,
  Saddlebags as SaddlebagsDB,
  Bombs as BombsDB,
  Oils as OilsDB,
} from '../database';

const largeTablesModule = {
  namespaced: true,
  state: {
    Equipment: [],
    Saddlebags: [],
    Bombs: [],
    Oils: [],
  },
  getters: {
    EQUIPMENT_TABLE: (state) => state.Equipment,
    SADDLEBAGS_TABLE: (state) => state.Saddlebags,
    BOMBS_TABLE: (state) => state.Bombs,
    OILS_TABLE: (state) => state.Oils,
  },
  mutations: {
    SET_EQUIPMENT_TABLE(state, newEqTable) {
      state.Equipment = newEqTable;
    },
    SET_EQUIPMENT_TABLE_TYPE(state, { rowId, type }) {
      const { Equipment } = state;
      const row = Equipment[rowId];
      row.type = type;
    },
    SET_EQUIPMENT_TABLE_NAME(state, { rowId, name }) {
      const { Equipment } = state;
      const row = Equipment[rowId];
      row.name = name;
    },
    SET_EQUIPMENT_TABLE_DESCRIPTION(state, { rowId, description }) {
      const { Equipment } = state;
      const row = Equipment[rowId];
      row.description = description;
    },
    SET_SADDLEBAGS_TABLE(state, newSaddlebagsTable) {
      state.Saddlebags = newSaddlebagsTable;
    },
    SET_SADDLEBAGS_TABLE_NAME(state, { rowId, name }) {
      const { Saddlebags } = state;
      const table = Saddlebags[rowId];
      table.name = name;
    },
    SET_SADDLEBAGS_TABLE_DESCRIPTION(state, { rowId, description }) {
      const { Saddlebags } = state;
      const table = Saddlebags[rowId];
      table.description = description;
    },
    SET_BOMBS_TABLE(state, newBombs) {
      state.Bombs = newBombs;
    },
    SET_BOMBS_TABLE_NAME(state, { rowId, newName }) {
      const { Bombs } = state;
      const table = Bombs[rowId];
      table.name = newName;
    },
    SET_OILS_TABLE(state, newOils) {
      state.Oils = newOils;
    },
    SET_OILS_TABLE_NAME(state, { rowId, newName }) {
      const { Oils } = state;
      const table = Oils[rowId];
      table.name = newName;
    },
  },
  actions: {
    SET_WITCHER_EQUIPMENT_TABLE: async ({ commit, rootGetters }) => {
      const witcherId = rootGetters.WITCHER_ID;
      EquipmentDB.getObjectWithId(witcherId).then((data) => {
        commit('SET_EQUIPMENT_TABLE', data);
      });
    },
    UPDATE_EQUIPMENT_TABLE_TYPE: ({ commit, getters, rootGetters }, { rowId, type }) => {
      commit('SET_EQUIPMENT_TABLE_TYPE', { rowId, type });
      const witcherId = rootGetters.WITCHER_ID;
      const eqTable = getters.EQUIPMENT_TABLE;
      const row = eqTable[rowId];
      row.type = type;
      EquipmentDB.setParamValue(witcherId, rowId, row.type, row.name, row.description);
    },
    UPDATE_EQUIPMENT_TABLE_NAME: ({ commit, getters, rootGetters }, { rowId, name }) => {
      commit('SET_EQUIPMENT_TABLE_NAME', { rowId, name });
      const witcherId = rootGetters.WITCHER_ID;
      const eqTable = getters.EQUIPMENT_TABLE;
      const row = eqTable[rowId];
      row.name = name;
      EquipmentDB.setParamValue(witcherId, rowId, row.type, row.name, row.description);
    },
    UPDATE_EQUIPMENT_TABLE_DESCRIPTION: ({ commit, getters, rootGetters }, { rowId, desc }) => {
      commit('SET_EQUIPMENT_TABLE_DESCRIPTION', { rowId, desc });
      const witcherId = rootGetters.WITCHER_ID;
      const eqTable = getters.EQUIPMENT_TABLE;
      const row = eqTable[rowId];
      row.description = desc;
      EquipmentDB.setParamValue(witcherId, rowId, row.type, row.name, row.description);
    },
    SET_WITCHER_SADDLEBAGS_TABLE: async ({ commit, rootGetters }) => {
      const witcherId = rootGetters.WITCHER_ID;
      SaddlebagsDB.getObjectWithId(witcherId).then((data) => {
        commit('SET_SADDLEBAGS_TABLE', data);
      });
    },
    UPDATE_SADDLEBAGS_NAME: ({ commit, getters, rootGetters }, { rowId, name }) => {
      commit('SET_SADDLEBAGS_TABLE_NAME', { rowId, name });
      const witcherId = rootGetters.WITCHER_ID;
      const saddlebagsTable = getters.SADDLEBAGS_TABLE;
      const row = saddlebagsTable[rowId];
      row.name = name;
      SaddlebagsDB.setParamValue(witcherId, rowId, row.name, row.description);
    },
    UPDATE_SADDLEBAGS_DESCRIPTION: ({ commit, getters, rootGetters }, { rowId, desc }) => {
      commit('SET_SADDLEBAGS_TABLE_DESCRIPTION', { rowId, desc });
      const witcherId = rootGetters.WITCHER_ID;
      const saddlebagsTable = getters.SADDLEBAGS_TABLE;
      const row = saddlebagsTable[rowId];
      row.description = desc;
      SaddlebagsDB.setParamValue(witcherId, rowId, row.name, row.description);
    },
    SET_WITCHER_BOMBS_TABLE: async ({ commit, rootGetters }) => {
      const witcherId = rootGetters.WITCHER_ID;
      BombsDB.getObjectWithId(witcherId).then((data) => {
        commit('SET_BOMBS_TABLE', data);
      });
    },
    UPDATE_BOMBS_NAME: ({ commit, getters, rootGetters }, { rowId, name }) => {
      commit('SET_BOMBS_TABLE_NAME', { rowId, name });
      const witcherId = rootGetters.WITCHER_ID;
      const bombsTable = getters.BOMBS_TABLE;
      const row = bombsTable[rowId];
      row.name = name;
      BombsDB.setParamValue(witcherId, rowId, row.id, row.name);
    },
    SET_WITCHER_OILS_TABLE: async ({ commit, rootGetters }) => {
      const witcherId = rootGetters.WITCHER_ID;
      OilsDB.getObjectWithId(witcherId).then((data) => {
        commit('SET_OILS_TABLE', data);
      });
    },
    UPDATE_OILS_NAME: ({ commit, getters, rootGetters }, { rowId, name }) => {
      commit('SET_OILS_TABLE_NAME', { rowId, name });
      const witcherId = rootGetters.WITCHER_ID;
      const oilsTable = getters.OILS_TABLE;
      const row = oilsTable[rowId];
      row.name = name;
      OilsDB.setParamValue(witcherId, rowId, row.id, row.name);
    },
  },
};

export default largeTablesModule;
