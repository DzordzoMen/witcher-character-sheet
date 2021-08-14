// import tables from '../../Types/ObjectStoreType';

/**
 * @param {tables} key - table name
 * @returns parsed JSON object
 */
function getLocalStorageItem(key) {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
}

export default getLocalStorageItem;
