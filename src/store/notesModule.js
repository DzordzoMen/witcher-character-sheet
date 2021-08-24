import { Notes as NotesT } from '../database';

const notesModule = {
  namespaced: true,
  state: {
    Notes: null,
    Board: [],
  },
  getters: {
    WITCHER_NOTES: (state) => state.Notes,
    WITCHER_BOARD: (state) => state.Board,
  },
  mutations: {
    SET_WITCHER_NOTES(state, newNotes) {
      state.Notes = newNotes;
    },
    SET_WITCHER_BOARD(state, newBoard) {
      state.Board = newBoard;
    },
    ADD_NEW_ITEM_TO_BOARD(state, newItem) {
      state.Board.push(newItem);
    },
    SET_BOARD_ITEM_DONE(state, { itemId, isDone }) {
      const { Board } = state;
      const bordItem = Board[itemId];
      bordItem.done = isDone;
    },
  },
  actions: {
    SET_WITCHER_NOTES_TABLE: async ({ commit, rootGetters }) => {
      const witcherId = rootGetters.WITCHER_ID;
      NotesT.getObjectWithId(witcherId).then((data) => {
        commit('SET_WITCHER_NOTES', data?.notes);
        commit('SET_WITCHER_BOARD', data?.board);
      });
    },
    UPDATE_WITCHER_NOTES: ({ commit, rootGetters }, notes) => {
      const witcherId = rootGetters.WITCHER_ID;
      NotesT.setParamValue(witcherId, 'notes', notes);
      commit('SET_WITCHER_NOTES', notes);
    },
    ADD_NEW_BOARD_ITEM: ({ commit, getters, rootGetters }, { name, price, isDone = false }) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('ADD_NEW_ITEM_TO_BOARD', { name, price, isDone });
      const boardElements = getters.WITCHER_BOARD;
      NotesT.setParamValue(witcherId, 'board', boardElements);
    },
    UPDATE_BOARD_ITEM_DONE: ({ commit, getters, rootGetters }, { itemId, isDone = true }) => {
      const witcherId = rootGetters.WITCHER_ID;
      commit('SET_BOARD_ITEM_DONE', { itemId, isDone });
      const boardElements = getters.WITCHER_BOARD;
      NotesT.setParamValue(witcherId, 'board', boardElements);
    },
  },
};

export default notesModule;
