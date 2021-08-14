import isEqual from 'lodash.isequal';
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
  if (withIndex !== null) {
    table[withIndex] = newObject;
  } else {
    table.push(newObject);
  }
  setLocalStorageItem(tableName, table);

  const objectIndex = table.findIndex((item) => isEqual(item, newObject));
  return objectIndex;
}

export default addNewObjectToLocalStorage;
