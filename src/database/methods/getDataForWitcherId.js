/**
 * @param {Array} array
 * @param {Number} witcherId
 * @returns {Object} return item data or empty object
 */
function getDataForWitcherId(array, witcherId) {
  return array?.filter((item, index) => index === witcherId)[0] || {};
}

export default getDataForWitcherId;
