<template>
  <v-container class="dexterity-tree rounded-lg">
    <v-row dense>
      <v-col cols="12" class="pb-3 dexterity-tree__title">
        <v-row no-gutters>
          <v-col class="grow font-weight-bold">
            Zręczność
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.dexterity"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :min="dexterity"
              :disableIncreaseBtn="skillPoints === 0"
              disabled
              showBtns
            />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12">
        <v-row no-gutters>
          <v-col class="grow">
            Lekki pancerz
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.lightArmor"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.dexterity"
              :min="lightArmor"
              disabled
              :disableIncreaseBtn="
                witcher.lightArmor > witcher.dexterity ||
                skillPoints === 0
              "
              showBtns
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col class="grow">
            Broń lekka
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.lightWeapon"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.dexterity"
              :min="lightWeapon"
              disabled
              :disableIncreaseBtn="
                witcher.lightWeapon > witcher.dexterity ||
                skillPoints === 0
              "
              showBtns
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col class="grow">
            Inicjatywa
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.initiative"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.dexterity"
              :min="initiative"
              disabled
              :disableIncreaseBtn="
                witcher.initiative > witcher.dexterity ||
                skillPoints === 0
              "
              showBtns
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col class="grow">
            Skradanie się
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.stelth"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.dexterity"
              :min="stelth"
              disabled
              :disableIncreaseBtn="
                witcher.stelth > witcher.dexterity ||
                skillPoints === 0
              "
              showBtns
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col class="grow">
            Uniki
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.dodge"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.dexterity"
              :min="dodge"
              disabled
              :disableIncreaseBtn="
                witcher.dodge > witcher.dexterity ||
                skillPoints === 0
              "
              showBtns
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col class="grow">
            Broń miotana
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.throwingWeapon"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.dexterity"
              :min="throwingWeapon"
              disabled
              :disableIncreaseBtn="
                witcher.throwingWeapon > witcher.dexterity ||
                skillPoints === 0
              "
              showBtns
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col class="grow">
            Broń dystansowa
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.rangeWeapon"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.dexterity"
              :min="rangeWeapon"
              disabled
              :disableIncreaseBtn="
                witcher.rangeWeapon > witcher.dexterity ||
                skillPoints === 0
              "
              showBtns
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

import SquareField from './base/SquareField.vue';

export default {
  name: 'WitcherCardDexterityTree',
  components: {
    SquareField,
  },
  data: () => ({
    witcher: {
      dexterity: 0,
      lightArmor: 0,
      lightWeapon: 0,
      initiative: 0,
      stelth: 0,
      dodge: 0,
      throwingWeapon: 0,
      rangeWeapon: 0,
    },
  }),
  computed: {
    ...mapGetters('DexteritySkill', {
      dexterity: 'DEXTERITY_SKILL',
      lightArmor: 'LIGHT_ARMOR_SKILL',
      lightWeapon: 'LIGHT_WEAPON_SKILL',
      initiative: 'INITIATIVE_SKILL',
      stelth: 'STELTH_SKILL',
      dodge: 'DODGE_SKILL',
      throwingWeapon: 'THROWING_WEAPON_SKILL',
      rangeWeapon: 'RANGE_WEAPON_SKILL',
    }),
    ...mapGetters('WitcherInfo', {
      skillPoints: 'WITCHER_AVA_SKILL_POINTS',
    }),
  },
  // TODO remove?
  watch: {
    dexterity: 'setValues',
  },
  methods: {
    setValues() {
      const {
        dexterity,
        lightArmor,
        lightWeapon,
        initiative,
        stelth,
        dodge,
        throwingWeapon,
        rangeWeapon,
      } = this;

      this.witcher = {
        dexterity,
        lightArmor,
        lightWeapon,
        initiative,
        stelth,
        dodge,
        throwingWeapon,
        rangeWeapon,
      };
    },
    decreaseWitcherSkillPoints() {
      this.$store.dispatch('WitcherInfo/UPDATE_WITCHER_AVA_SKILL_POINTS', this.skillPoints - 1);
    },
    increaseWitcherSkillPoints() {
      this.$store.dispatch('WitcherInfo/UPDATE_WITCHER_AVA_SKILL_POINTS', this.skillPoints + 1);
    },
  },
  created() {
    this.setValues();
  },
};
</script>

<style lang="scss" scoped>
.dexterity-tree {
  border: 1px solid black;
  width: 100%;

  &__title {
    color: #0C5818;
  }
}
</style>
