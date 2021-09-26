import {
  WitcherInfo,
  StrengthSkill,
  DexteritySkill,
  SignsSkill,
  MindSkill,
  Herbs,
  Equipment,
  Saddlebags,
  Bombs,
  Oils,
  Notes,
} from './index';

/**
 * @param {Number} witcherId
 */
async function exportWitcher(witcherId) {
  const witcher = await WitcherInfo.getObjectWithId(witcherId).then((data) => data);
  const strenght = await StrengthSkill.getObjectWithId(witcherId).then((data) => data);
  const dexterity = await DexteritySkill.getObjectWithId(witcherId).then((data) => data);
  const signs = await SignsSkill.getObjectWithId(witcherId).then((data) => data);
  const mind = await MindSkill.getObjectWithId(witcherId).then((data) => data);
  const herbs = await Herbs.getObjectWithId(witcherId).then((data) => data);
  const equipment = await Equipment.getObjectWithId(witcherId).then((data) => data);
  const saddlebags = await Saddlebags.getObjectWithId(witcherId).then((data) => data);
  const bombs = await Bombs.getObjectWithId(witcherId).then((data) => data);
  const oils = await Oils.getObjectWithId(witcherId).then((data) => data);
  const notes = await Notes.getObjectWithId(witcherId).then((data) => data);

  const fileData = {
    witcher,
    strenght,
    dexterity,
    signs,
    mind,
    herbs,
    equipment,
    saddlebags,
    bombs,
    oils,
    notes,
  };

  return {
    name: witcher?.Name,
    file: JSON.stringify(fileData, null, 2),
  };
}

export default exportWitcher;
