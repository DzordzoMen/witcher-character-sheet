// import tables from '../../Types/ObjectStoreType';

/**
 * @param {tables} key - table name
 * @param {*} value - localStorage value parsed to json
 */
function setLocalStorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export default setLocalStorageItem;
