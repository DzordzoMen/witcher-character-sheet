import { getLocalStorageItem } from './index';
import setLocalStorageItem from './setLocalStorageItem';

/**
 * @param {tables} tableName
 * @param {Object} newObject
 * @param {Number} withIndex - optional
 * @returns {Number} object Id in table
 */
function addNewObjectToLocalStorage(tableName, newObject, withIndex = null) {
  const table = getLocalStorageItem(tableName);
  let objectIndex = withIndex;

  if (withIndex !== null) {
    table[withIndex] = newObject;
  } else {
    objectIndex = table.push(newObject) - 1;
  }

  setLocalStorageItem(tableName, table);
  return objectIndex;
}

export default addNewObjectToLocalStorage;
