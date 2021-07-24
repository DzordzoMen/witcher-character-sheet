import DexteritySkillType from '../Types/DexteritySkillType';
import SignsSkillType from '../Types/SignsSkillType';
import StrengthSkillType from '../Types/StrengthSkillType';
import MindSkillType from '../Types/MindSkill';

const schoolBonusesDirectory = new Map([
  ['Cech kota', [
    [DexteritySkillType.Dexterity],
    [DexteritySkillType.Dodge],
    [SignsSkillType.Axii, DexteritySkillType.ThrowingWeapon],
    [DexteritySkillType.LightWeapon, DexteritySkillType.Initiative],
  ]],
  ['Cech wilka', [
    [StrengthSkillType.Strength, DexteritySkillType.Dexterity],
    [SignsSkillType.Signs, MindSkillType.Mind],
    [MindSkillType.Crafting, MindSkillType.MonsterKnowledge],
    [MindSkillType.Rhetoric, StrengthSkillType.Bullying],
  ]],
  ['Cech niedźwiedzia', [
    [StrengthSkillType.Strength],
    [MindSkillType.MagicResists, StrengthSkillType.HeavyArmor],
    [StrengthSkillType.HeavyWeapon, StrengthSkillType.FistFight],
    [StrengthSkillType.Wholesomness],
  ]],
  ['Cech gryfa', [
    [MindSkillType.Mind],
    [SignsSkillType.Signs],
    [
      SignsSkillType.Somme,
      SignsSkillType.Heliotrop,
      SignsSkillType.Aard,
      SignsSkillType.Igni,
      SignsSkillType.Axii,
      SignsSkillType.Yrden,
      SignsSkillType.Quen,
    ],
    [MindSkillType.MonsterKnowledge, MindSkillType.WorldKnowledge],
  ]],
  ['Cech żmiji', [
    [DexteritySkillType.Dexterity],
    [DexteritySkillType.Stelth],
    [StrengthSkillType.Bullying, DexteritySkillType.RangeWeapon],
    [MindSkillType.WorldKnowledge],
  ]],
]);
/**
 * @returns {String[]} array of available schools
 */
export function availableSchools() {
  return [...schoolBonusesDirectory.keys()];
}
/**
 * @param {String} key school name from availableSchools() method
 * @returns {String[]} array of objects with schoolBonuses to skill
 */
export function schoolBonuses(key) {
  return schoolBonusesDirectory.get(key);
}
