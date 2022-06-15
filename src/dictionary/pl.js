import Dexterity from '../Types/DexteritySkillType';
import Signs from '../Types/SignsSkillType';
import Strength from '../Types/StrengthSkillType';
import Mind from '../Types/MindSkill';

const polishDictionary = new Map([
  [Strength.Strength, 'Siła'],
  [Strength.HeavyWeapon, 'Broń ciężka'],
  [Strength.HeavyArmor, 'Ciężki pancerz'],
  [Strength.FistFight, 'Walka na pięści'],
  [Strength.Wholesomness, 'Zdrowotność'],
  [Strength.Endurance, 'Wytrzymałość'],
  [Strength.ElixirTolerance, 'Tolerancja eliksirów'],
  [Strength.Bullying, 'Zastraszanie'],
  [Dexterity.Dexterity, 'Zręczność'],
  [Dexterity.LightWeapon, 'Broń lekka'],
  [Dexterity.LightArmor, 'Lekki pancerz'],
  [Dexterity.Initiative, 'Inicjatywa'],
  [Dexterity.Stealth, 'Skradanie się'],
  [Dexterity.Dodge, 'Uniki'],
  [Dexterity.ThrowingWeapon, 'Broń miotana'],
  [Dexterity.RangeWeapon, 'Broń dystansowa'],
  [Signs.Signs, 'Znaki'],
  [Signs.Somne, 'Somne'],
  [Signs.Heliotrop, 'Heliotrop'],
  [Signs.Aard, 'Aard'],
  [Signs.Igni, 'Igni'],
  [Signs.Axii, 'Axii'],
  [Signs.Yrden, 'Yrden'],
  [Signs.Quen, 'Quen'],
  [Mind.Mind, 'Umysł'],
  [Mind.Crafting, 'Wytwarzanie'],
  [Mind.MonsterKnowledge, 'Wiedza o potworach'],
  [Mind.WorldKnowledge, 'Wiedza o świecie'],
  [Mind.Rhetoric, 'Retoryka'],
  [Mind.WitcherSenses, 'Wiedźmińskie zmysły'],
  [Mind.MagicResists, 'Odporność magiczna'],
  [Mind.Arcana, 'Arkana'],
]);

/**
 * Return translation in polish language
 * @param {Strength | Dexterity | Signs | Mind} key
 * @returns {String}
 */
function takeTranslate(key) {
  return polishDictionary?.get(key) || key;
}

export default takeTranslate;
