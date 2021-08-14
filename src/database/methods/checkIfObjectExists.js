// import tables from '../../Types/ObjectStoreType';
/**
 * @param {tables} objectKey - table name
 * @returns {Boolean}
 */
function checkIfObjectExists(objectKey) {
  const val = localStorage[objectKey];

  return !!val;
}

export default checkIfObjectExists;
