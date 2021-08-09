import { Equipment as EquipmentDB } from '../database';

const largeTablesModule = {
  namespaced: true,
  state: {
    Equipment: [],
    Saddlebags: [],
  },
  getters: {
    EQUIPMENT_TABLE: (state) => state.Equipment,
    SADDLEBAGS_TABLE: (state) => state.Saddlebags,
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
    // SET_SADDLEBAG_TABLE_NAME(state, { rowId, name }) {
    //   const { Saddlebags } = state;
    //   const [table] = findTableWithID(Saddlebags, rowId);
    //   table.name = name;
    // },
    // SET_SADDLEBAG_TABLE_DESCRIPTION(state, { rowId, description }) {
    //   const { Saddlebags } = state;
    //   const [table] = findTableWithID(Saddlebags, rowId);
    //   table.description = description;
    // },
  },
  actions: {
    SET_WITCHER_EQUIPMENT_TABLE: async ({ commit, rootGetters }) => {
      const witcherId = rootGetters.WITCHER_ID;
      EquipmentDB.getObjectWithId(witcherId).then((data) => {
        commit('SET_EQUIPMENT_TABLE', data);
      });
    },
    // TODO debug
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
  },
};

export default largeTablesModule;
