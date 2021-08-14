/**
 * @param {Object} objectWithKeys - one of tables row type (Types directory)
 * @returns {Ojbect} - returns object with keys and null values
 */
function initState(objectWithKeys) {
  const result = {};
  Object.keys(objectWithKeys).forEach((key) => {
    result[key] = null;
  });
  return result;
}

export default initState;
