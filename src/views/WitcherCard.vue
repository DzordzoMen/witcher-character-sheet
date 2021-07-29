<template>
  <v-container>
    <v-row dense>

      <v-col cols="3">
        <base-field
          v-model.number="witcherLevel"
          disabled
          :min="1"
          :disable-decrease-btn="availableSkillPoints < 6"
          show-btns
        >
          <template #label>
            Poziom
          </template>
        </base-field>
      </v-col>
      <v-col cols="3">
        <base-field
          v-model="name"
          disabled
        >
          <template #label>
            Imię
          </template>
        </base-field>
      </v-col>
      <v-col cols="3">
        <base-field
          v-model="witcherTitle"
        >
          <template #label>
            Tytuł
          </template>
        </base-field>
      </v-col>
      <v-col cols="3">
        <base-field
          v-model="origin"
          disabled
        >
          <template #label>
            Pochodzenie
          </template>
        </base-field>
      </v-col>

      <v-col cols="3">
        <base-field
          v-model.number="availableSkillPoints"
          disabled
        >
          <template #label>
            Dostępne pkt. um.
          </template>
        </base-field>
      </v-col>
      <v-col cols="3">
        <v-row dense>
          <v-col cols="6">
            <base-field
              v-model.number="healthPoints"
              disabled
            >
              <template #label>
                Życie
              </template>
            </base-field>
          </v-col>
          <v-col cols="6">
            <base-field
              v-model.number="manaPoints"
              disabled
            >
              <template #label>
                Mana
              </template>
            </base-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3">
        <base-field
          v-model.number="witcherGold"
          inputType="number"
        >
          <template #label>
            Złoto
          </template>
        </base-field>
      </v-col>
      <v-col cols="3">
        <base-field
          v-model="school"
          disabled
        >
          <template #label>
            Szkoła
          </template>
        </base-field>
      </v-col>

      <v-col cols="3">
        <v-btn color="primary" block depressed disabled>
          Rozdaj
        </v-btn>
      </v-col>
      <v-col cols="3">
        <base-field
          v-model.number="baseLightArmor"
          disabled
        >
          <template #label>
            Lekki pancerz
          </template>
        </base-field>
      </v-col>
      <v-col cols="3">
        <base-field
          v-model.number="baseHeavyArmor"
          disabled
        >
          <template #label>
            Ciężki pancerz
          </template>
        </base-field>
      </v-col>
      <v-col cols="3">
        <base-field
          v-model.number="baseMagicResists"
          disabled
        >
          <template #label>
            Odporność magiczna
          </template>
        </base-field>
      </v-col>

      <v-col cols="3">
        <base-field
          v-model.number="reputation"
          inputType="number"
        >
          <template #label>
            Reputacja
          </template>
        </base-field>
      </v-col>

      <v-col cols="12"></v-col>

      <v-col cols="3">
        <v-row dense class="flex-column">
          <v-col cols="12" class="primary--text text-center">
            Pas na eliksiry
          </v-col>

          <template v-for="elixir in elixirs">
            <v-col
              cols="12"
              :key="elixir.id"
            >
              <the-select-elixir
                v-model="elixir.name"
                :elixir-id="elixir.id"
              />
            </v-col>
          </template>
        </v-row>
      </v-col>
      <!-- skills -->
      <v-col cols="9"></v-col>

    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

import BaseField from '../components/base/Field.vue';
import TheSelectElixir from '../components/TheSelectElixir.vue';

export default {
  name: 'WitcherCard',
  components: {
    BaseField,
    TheSelectElixir,
  },
  data: () => ({
    placeholder: '',
  }),
  computed: {
    ...mapGetters('WitcherInfo', {
      name: 'WITCHER_NAME',
      title: 'WITCHER_TITLE',
      school: 'WITCHER_SCHOOL',
      origin: 'WITCHER_ORIGIN',
      gold: 'WITCHER_GOLD',
      level: 'WITCHER_LEVEL',
      availableSkillPoints: 'WITCHER_AVA_SKILL_POINTS',
      reputation: 'WITCHER_REPUTATION',
      history: 'WITCHER_HISTORY',
      elixirs: 'WITCHER_ELIXIRS',
    }),
    ...mapGetters('StrengthSkill', {
      strength: 'STRENGTH_SKILL',
      heavyArmor: 'HEAVY_ARMOR_SKILL',
      heavyWeapon: 'HEAVY_WEAPON_SKILL',
      fistFight: 'FIST_FIGHT_SKILL',
      wholesomness: 'WHOLESOMNESS_SKILL',
      endurance: 'ENDURANCE_SKILL',
      elixirTolerance: 'ELIXIR_TOLERANCE_SKILL',
      bullying: 'BULLYING_SKILL',
    }),
    ...mapGetters('DexteritySkill', {
      dexterity: 'DEXTERITY_SKILL',
      lightArmor: 'LIGHT_ARMOR_SKILL',
      lightWeapon: 'LIGHT_WEAPON_SKILL',
      initiative: 'INITIATIVE_SKILL',
      stealth: 'STELTH_SKILL',
      dodge: 'DODGE_SKILL',
      throwingWeapon: 'THROWING_WEAPON_SKILL',
      rangeWeapon: 'RANGE_WEAPON_SKILL',
    }),
    ...mapGetters('SignSkill', {
      signs: 'SIGNS_SKILL',
      somme: 'SOMME_SKILL',
      heliotrop: 'HELIOTROP_SKILL',
      aard: 'AARD_SKILL',
      igni: 'IGNI_SKILL',
      axii: 'AXII_SKILL',
      yrden: 'YRDEN_SKILL',
      quen: 'QUEN_SKILL',
    }),
    ...mapGetters('MindSkill', {
      mind: 'MIND_SKILL',
      crafting: 'CRAFTING_SKILL',
      monsterKnowledge: 'MONSTER_KNOWLEDGE_SKILL',
      worldKnowledge: 'WORLD_KNOWLEDGE_SKILL',
      rhetoric: 'RHETORIC_SKILL',
      witcherSenses: 'WITCHER_SENSES_SKILL',
      magicResists: 'MAGIC_RESISTS_SKILL',
      magicPower: 'MAGIC_POWER_SKILL',
    }),
    // TODO herbs in another component?
    healthPoints() {
      const baseHealth = 8;
      const { level, wholesomness } = this;
      return baseHealth + (level * 3) + (wholesomness * 2);
    },
    manaPoints() {
      const baseMana = 1;
      const { magicPower } = this;
      return baseMana + magicPower;
    },
    baseMagicResists() {
      const baseRess = 0;
      const { magicResists } = this;
      return baseRess + (magicResists * 1);
    },
    baseHeavyArmor() {
      const baseArmor = 0;
      const { heavyArmor } = this;
      return baseArmor + (heavyArmor * 1);
    },
    baseLightArmor() {
      const baseArmor = 0;
      const { lightArmor } = this;
      return baseArmor + (lightArmor * 1);
    },
    witcherTitle: {
      get() {
        return this.title;
      },
      set(val) {
        this.$store.dispatch('WitcherInfo/UPDATE_WITCHER_TITLE', val);
      },
    },
    witcherGold: {
      get() {
        return this.gold;
      },
      set(val) {
        this.$store.dispatch('WitcherInfo/UPDATE_WITCHER_GOLD', Number(val));
      },
    },
    witcherLevel: {
      get() {
        return this.level;
      },
      set(val) {
        if (this.level > val) {
          this.$store.dispatch('WitcherInfo/DECREASE_WITCHER_LEVEL', Number(val));
        } else {
          this.$store.dispatch('WitcherInfo/INCREASE_WITCHER_LEVEL', Number(val));
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  @media (min-width: 1264px) {
    .container {
      // max-width: 800px;
      max-width: 900px;
    }
  }

  .row--dense > .col, .row--dense > [class*=col-] {
    padding: 5px;
  }
</style>
