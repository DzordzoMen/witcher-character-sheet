import tables from '../Types/ObjectStoreType';
import witcherInfo from '../Types/WitcherInfoType';
import herb from '../Types/HerbType';
import strengthSkill from '../Types/StrengthSkillType';
import dexteritySkill from '../Types/DexteritySkillType';
import signsSkill from '../Types/SignsSkillType';
import mindSkill from '../Types/MindSkill';

import { addNewObjectToLocalStorage } from './methods';

/**
 * @param {Object} objectWithKeys
 * @param {String|Number} defaultValue
 * @returns {Object} - returns object with new keys and values
 */
function createObjectWithKeys(objectWithKeys, defaultValue = '') {
  const newObj = {};
  Object.keys(objectWithKeys).forEach((type) => {
    newObj[type] = defaultValue;
  });
  return newObj;
}

/**
 * @param {Object} skillTree
 * @param {Array} bonuses
 * @returns {Object} - returns skillTree with increased skill points
 */
function setWitcherBonuses(skillTree, bonuses) {
  bonuses.filter((item) => {
    if (skillTree[item] !== undefined) skillTree[item] = 1;
    return item;
  });

  return skillTree;
}

/**
 * @param {String} name
 * @param {String} origin
 * @param {String} school
 * @param {String} history
 * @param {Array} schoolBonuses
 * @param {Number} level
 * @returns {Number} created witcher id
 */
async function createNewWitcher(name, origin, school, history, schoolBonuses = [], level = 1) {
  const newWitcher = createObjectWithKeys(witcherInfo, '');
  newWitcher[witcherInfo.Level] = level;
  newWitcher[witcherInfo.Name] = name;
  newWitcher[witcherInfo.Origin] = origin;
  newWitcher[witcherInfo.School] = school;
  newWitcher[witcherInfo.History] = history;
  newWitcher[witcherInfo.AvailableSkillPoints] = level * 6;
  newWitcher[witcherInfo.Reputation] = 0;
  newWitcher[witcherInfo.Gold] = 0;
  newWitcher[witcherInfo.Elixirs] = [
    { id: 1, name: '' },
    { id: 2, name: '' },
    { id: 3, name: '' },
    { id: 4, name: '' },
    { id: 5, name: '' },
  ];
  const witcherId = addNewObjectToLocalStorage(tables.WitcherInfo, newWitcher);

  const witcherHerbs = createObjectWithKeys(herb, 0);
  addNewObjectToLocalStorage(tables.Herbs, witcherHerbs, witcherId);

  let witcherStrengthSkills = createObjectWithKeys(strengthSkill, 0);
  witcherStrengthSkills = setWitcherBonuses(witcherStrengthSkills, schoolBonuses);
  addNewObjectToLocalStorage(tables.StrengthSkills, witcherStrengthSkills, witcherId);

  let witcherDexteritySkills = createObjectWithKeys(dexteritySkill, 0);
  witcherDexteritySkills = setWitcherBonuses(witcherDexteritySkills, schoolBonuses);
  addNewObjectToLocalStorage(tables.DexteritySkills, witcherDexteritySkills, witcherId);

  let witcherSignsSkills = createObjectWithKeys(signsSkill, 0);
  witcherSignsSkills = setWitcherBonuses(witcherSignsSkills, schoolBonuses);
  addNewObjectToLocalStorage(tables.SignsSkills, witcherSignsSkills, witcherId);

  let witcherMindSkills = createObjectWithKeys(mindSkill, 0);
  witcherMindSkills = setWitcherBonuses(witcherMindSkills, schoolBonuses);
  addNewObjectToLocalStorage(tables.MindSkills, witcherMindSkills, witcherId);

  // TODO large tables

  return witcherId;
}

export default createNewWitcher;
