import tables from '../Types/ObjectStoreType';

import { addNewObjectToLocalStorage } from './methods';

/**
 * @param {Object} importedFile - witcher object
 */
async function importWitcher(importedFile) {
  const witcherId = addNewObjectToLocalStorage(tables.WitcherInfo, importedFile.witcher);
  // skills
  addNewObjectToLocalStorage(tables.StrengthSkills, importedFile.strenght, witcherId);
  addNewObjectToLocalStorage(tables.DexteritySkills, importedFile.dexterity, witcherId);
  addNewObjectToLocalStorage(tables.SignsSkills, importedFile.signs, witcherId);
  addNewObjectToLocalStorage(tables.MindSkills, importedFile.mind, witcherId);
  // equipment
  addNewObjectToLocalStorage(tables.Herbs, importedFile.herbs, witcherId);
  addNewObjectToLocalStorage(tables.Notes, importedFile.notes, witcherId);
  addNewObjectToLocalStorage(tables.Equipment, importedFile.equipment, witcherId);
  addNewObjectToLocalStorage(tables.Saddlebags, importedFile.saddlebags, witcherId);
  addNewObjectToLocalStorage(tables.Bombs, importedFile.bombs, witcherId);
  addNewObjectToLocalStorage(tables.Oils, importedFile.oils, witcherId);

  return true;
}

export default importWitcher;
