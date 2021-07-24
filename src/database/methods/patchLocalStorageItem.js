// import tables from '../../Types/ObjectStoreType';
import { getLocalStorageItem, setLocalStorageItem } from './index';

/**
 * @param {Number} witcherId
 * @param {tables} key - table name
 * @param {*} paramKey
 * @param {*} paramValue
 */
async function patchLocalStorageItem(witcherId, key, paramKey, paramValue) {
  const arrayOfItems = await getLocalStorageItem(key);

  arrayOfItems.map((item, index) => {
    if (index === witcherId) item[paramKey] = paramValue;
    return item;
  });

  setLocalStorageItem(key, arrayOfItems);
}

export default patchLocalStorageItem;
