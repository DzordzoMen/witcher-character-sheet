<template>
  <v-container class="strength-tree rounded-lg">
    <v-row dense>
      <v-col
        cols="12"
        class="pb-3 strength-tree__title"
      >
        <v-row no-gutters>
          <v-col class="grow">
            Siła
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.strength"
              disabled
              showBtns
            />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12">
        <v-row no-gutters>
          <v-col class="grow">
            Ciężki pancerz
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.heavyArmor"
              :max="witcher.strength"
              :min="heavyArmor"
              disabled
              :disableIncreaseBtn="witcher.heavyArmor > witcher.strength"
              showBtns
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col class="grow">
            Broń ciężka
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.heavyWeapon"
              :max="witcher.strength"
              :min="heavyWeapon"
              disabled
              :disableIncreaseBtn="witcher.heavyWeapon > witcher.strength"
              showBtns
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col class="grow">
            Walka na pięści
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.fistFight"
              :max="witcher.strength"
              :min="fistFight"
              disabled
              :disableIncreaseBtn="witcher.fistFight > witcher.strength"
              showBtns
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col class="grow">
            Zdrowotność
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.wholesomness"
              :max="witcher.strength"
              :min="wholesomness"
              disabled
              :disableIncreaseBtn="witcher.wholesomness > witcher.strength"
              showBtns
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col class="grow">
            Wytrzymałość
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.endurance"
              :max="witcher.strength"
              :min="endurance"
              disabled
              :disableIncreaseBtn="witcher.endurance > witcher.strength"
              showBtns
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col class="grow">
            Tolerancja eliksirów
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.elixirTolerance"
              :max="witcher.strength"
              :min="elixirTolerance"
              disabled
              :disableIncreaseBtn="witcher.elixirTolerance > witcher.strength"
              showBtns
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col class="grow">
            Zastraszanie
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.bullying"
              :max="witcher.strength"
              :min="bullying"
              disabled
              :disableIncreaseBtn="witcher.bullying > witcher.strength"
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
  name: 'WitcherCardStrengthTree',
  components: {
    SquareField,
  },
  data: () => ({
    witcher: {
      strength: 0,
      heavyArmor: 0,
      heavyWeapon: 0,
      fistFight: 0,
      wholesomness: 0,
      endurance: 0,
      elixirTolerance: 0,
      bullying: 0,
    },
  }),
  computed: {
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
  },
  // TODO remove?
  // debug user switching
  watch: {
    strength: 'setValues',
  },
  methods: {
    setValues() {
      const {
        strength,
        heavyArmor,
        heavyWeapon,
        fistFight,
        wholesomness,
        endurance,
        elixirTolerance,
        bullying,
      } = this;

      this.witcher = {
        strength,
        heavyArmor,
        heavyWeapon,
        fistFight,
        wholesomness,
        endurance,
        elixirTolerance,
        bullying,
      };
    },
  },
  created() {
    this.setValues();
  },
};

// create method save that save all data to localStorage
// add event handler for increase and decrease and then change witcher ava points
</script>

<style lang="scss" scoped>
.strength-tree {
  border: 1px solid black;
  width: 100%;

  &__title {
    color: #710404;
  }
}
</style>
