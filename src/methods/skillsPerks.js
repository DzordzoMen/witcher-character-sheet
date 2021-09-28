import StrengthSkillType from '../Types/StrengthSkillType';
import DexteritySkillType from '../Types/DexteritySkillType';
import SignsSkillType from '../Types/SignsSkillType';
import MindSkillType from '../Types/MindSkill';
import PerksTypes from '../Types/PerksTypes';

const skillPerksDictionary = new Map([
  [StrengthSkillType.HeavyArmor, [
    PerksTypes.Flawless,
    PerksTypes.OnYourToes,
  ]],
  [StrengthSkillType.HeavyWeapon, [
    PerksTypes.BladeWhirl,
    PerksTypes.Charge,
  ]],
  [StrengthSkillType.FistFight, [
    PerksTypes.Disarm,
    PerksTypes.Combo,
  ]],
  [StrengthSkillType.Wholesomness, [
    PerksTypes.WillToLive,
    PerksTypes.Medic,
  ]],
  [StrengthSkillType.Endurance, [
    PerksTypes.IronLung,
    PerksTypes.DraftHorse,
  ]],
  [StrengthSkillType.ElixirTolerance, [
    PerksTypes.Connoisseur,
    PerksTypes.IronBody,
  ]],
  [StrengthSkillType.Bullying, [
    PerksTypes.AxiiHorror,
    PerksTypes.Provocation,
  ]],
  [DexteritySkillType.LightArmor, [
    PerksTypes.Masking,
    PerksTypes.Mirage,
  ]],
  [DexteritySkillType.LightWeapon, [
    PerksTypes.Stab,
    PerksTypes.Spear,
  ]],
  [DexteritySkillType.Stealth, [
    PerksTypes.SneakAttack,
    PerksTypes.Makeup,
  ]],
  [DexteritySkillType.Initiative, [
    PerksTypes.SixthSense,
    PerksTypes.QuickAction,
  ]],
  [DexteritySkillType.Dodge, [
    PerksTypes.Dancer,
    PerksTypes.Tilt,
  ]],
  [DexteritySkillType.ThrowingWeapon, [
    PerksTypes.BladeDance,
    PerksTypes.DualWeapons,
  ]],
  [DexteritySkillType.RangeWeapon, [
    PerksTypes.Sniper,
    PerksTypes.ShortShot,
  ]],
  [SignsSkillType.Somne, [
    PerksTypes.SleepTrap,
    PerksTypes.SweetDreams,
  ]],
  [SignsSkillType.Heliotrop, [
    PerksTypes.Dissolver,
    PerksTypes.Absorber,
  ]],
  [SignsSkillType.Aard, [
    PerksTypes.PrecisionAard,
    PerksTypes.Rejection,
  ]],
  [SignsSkillType.Igni, [
    PerksTypes.IgniScatter,
    PerksTypes.FlamingWeapon,
  ]],
  [SignsSkillType.Axii, [
    PerksTypes.Forgetting,
    PerksTypes.Enchantment,
  ]],
  [SignsSkillType.Yrden, [
    PerksTypes.Detonator,
    PerksTypes.Kaboom,
  ]],
  [SignsSkillType.Quen, [
    PerksTypes.PortableQuen,
    PerksTypes.MagicSponge,
  ]],
  [MindSkillType.Crafting, [
    PerksTypes.Craftsman,
    PerksTypes.Specialist,
  ]],
  [MindSkillType.MonsterKnowledge, [
    PerksTypes.Hunter,
    PerksTypes.Butcher,
  ]],
  [MindSkillType.WorldKnowledge, [
    PerksTypes.Collector,
    PerksTypes.SecretBazaar,
  ]],
  [MindSkillType.Rhetoric, [
    PerksTypes.Linguist,
    PerksTypes.Saleswoman,
  ]],
  [MindSkillType.WitcherSenses, [
    PerksTypes.Bat,
    PerksTypes.HawkEyesight,
  ]],
  [MindSkillType.MagicResists, [
    PerksTypes.MageApprentice,
    PerksTypes.CurseResistance,
  ]],
  [MindSkillType.Arcana, [
    PerksTypes.Identification,
    PerksTypes.Enchanter,
  ]],
]);

/**
 * @returns {String[]} array of available skills names
 */
export function availableSkills() {
  return [...skillPerksDictionary.keys()];
}
/**
 * @param { StrengthSkillType
 *  | DexteritySkillType
 *  | SignsSkillType
 *  | MindSkillType
 * } key name of skill
 * @returns {String[]} array of objects with names of perks for skill
 */
export function skillPerks(key) {
  return skillPerksDictionary.get(key);
}
