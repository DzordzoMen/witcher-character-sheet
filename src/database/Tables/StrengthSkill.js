import tables from '../../Types/ObjectStoreType';
// import strengthSkill from './Types/StrengthSkillType';

import {
  checkIfObjectExists,
  setLocalStorageItem,
  patchLocalStorageItem,
  getLocalStorageItem,
  getDataForWitcherId,
} from '../methods';

const tableName = tables.StrengthSkills;

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
  const witchers = getAll();

  return getDataForWitcherId(witchers, witcherId);
}

/**
 * @param {Number} witcherId
 * @param {strengthSkill} paramName
 */
function getParamValue(witcherId, paramName) {
  const parsedObject = getObjectWithId(witcherId);
  return parsedObject[paramName];
}

/**
 * @param {Number} witcherId
 * @param {strengthSkill} paramKey
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
