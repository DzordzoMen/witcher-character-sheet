import tables from '../../Types/ObjectStoreType';

import {
  checkIfObjectExists,
  setLocalStorageItem,
  patchLocalStorageItem,
  getLocalStorageItem,
  getDataForWitcherId,
} from '../methods';

const tableName = tables.Bombs;

function setWitcherTable() {
  setLocalStorageItem(tableName, []);
}

async function getAll() {
  return getLocalStorageItem(tableName);
}
/**
 * @param {Number} witcherId
 */
async function getObjectWithId(witcherId) {
  return getAll().then((data) => getDataForWitcherId(data, witcherId));
}

/**
 * @param {Number} witcherId
 * @param {Number} paramKey - row id
 * @param {Number} id
 * @param {String} newName
 */
async function setParamValue(witcherId, paramKey, id, newName) {
  patchLocalStorageItem(witcherId, tableName, paramKey, {
    id,
    name: newName,
  });
}

if (!checkIfObjectExists(tableName)) setWitcherTable();

export default {
  getAll,
  getObjectWithId,
  setParamValue,
};
