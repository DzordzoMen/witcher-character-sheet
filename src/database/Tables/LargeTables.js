// TODO refactor move all large tables to separate table

import tables from '../../Types/ObjectStoreType';

import {
  checkIfObjectExists,
  setLocalStorageItem,
  patchLocalStorageItem,
  getLocalStorageItem,
  getDataForWitcherId,
} from '../methods';

const tableName = tables.LargeTables;

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
 * @param {*} paramName
 */
function getParamValue(witcherId, paramName) {
  const parsedObject = getObjectWithId(witcherId);
  return parsedObject[paramName];
}

/**
 * @param {Number} witcherId
 * @param {*} paramKey
 * @param {*} paramValue
 */
async function setParamValue(witcherId, paramKey, paramValue) {
  patchLocalStorageItem(witcherId, tableName, paramKey, paramValue);
}

if (!checkIfObjectExists(tableName)) setWitcherTable();

export default {
  getAll,
  getObjectWithId,
  getParamValue,
  setParamValue,
};
