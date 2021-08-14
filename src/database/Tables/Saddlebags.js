import tables from '../../Types/ObjectStoreType';

import {
  checkIfObjectExists,
  setLocalStorageItem,
  patchLocalStorageItem,
  getLocalStorageItem,
  getDataForWitcherId,
} from '../methods';

const tableName = tables.Saddlebags;

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
 * @param {String} newName
 * @param {String} newDescription
 */
async function setParamValue(witcherId, paramKey, newName, newDescription) {
  patchLocalStorageItem(witcherId, tableName, paramKey, {
    name: newName,
    description: newDescription,
  });
}

if (!checkIfObjectExists(tableName)) setWitcherTable();

export default {
  getAll,
  getObjectWithId,
  setParamValue,
};
