<template>
  <v-container class="strength-tree rounded-lg">
    <v-row dense>
      <v-col cols="12" class="pb-3 strength-tree__title">
        <v-row no-gutters>
          <v-col class="grow font-weight-bold">
            Siła
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.strength"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :min="strength"
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
            Ciężki pancerz
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.heavyArmor"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.strength"
              :min="heavyArmor"
              disabled
              :disableIncreaseBtn="
                witcher.heavyArmor > witcher.strength ||
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
            Broń ciężka
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.heavyWeapon"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.strength"
              :min="heavyWeapon"
              disabled
              :disableIncreaseBtn="
                witcher.heavyWeapon > witcher.strength ||
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
            Walka na pięści
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.fistFight"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.strength"
              :min="fistFight"
              disabled
              :disableIncreaseBtn="
                witcher.fistFight > witcher.strength ||
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
            Zdrowotność
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.wholesomness"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.strength"
              :min="wholesomness"
              disabled
              :disableIncreaseBtn="
                witcher.wholesomness > witcher.strength ||
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
            Wytrzymałość
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.endurance"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.strength"
              :min="endurance"
              disabled
              :disableIncreaseBtn="
                witcher.endurance > witcher.strength ||
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
            Tolerancja eliksirów
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.elixirTolerance"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.strength"
              :min="elixirTolerance"
              disabled
              :disableIncreaseBtn="
                witcher.elixirTolerance > witcher.strength ||
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
            Zastraszanie
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.bullying"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.strength"
              :min="bullying"
              disabled
              :disableIncreaseBtn="
                witcher.bullying > witcher.strength ||
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
import skillTree from '../mixins/skillTree';

import SquareField from './base/SquareField.vue';

export default {
  name: 'WitcherCardStrengthTree',
  components: {
    SquareField,
  },
  mixins: [skillTree],
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
  created() {
    this.setValues();
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
    saveSkills() {
      // TODO refactor
      const {
        strength,
        heavyArmor,
        heavyWeapon,
        fistFight,
        wholesomness,
        endurance,
        elixirTolerance,
        bullying,
      } = this.witcher;

      this.$store.dispatch('StrengthSkill/UPDATE_STRENGTH_SKILL', strength).then(() => {
        this.$store.dispatch('StrengthSkill/UPDATE_HEAVY_ARMOR_SKILL', heavyArmor).then(() => {
          this.$store.dispatch('StrengthSkill/UPDATE_HEAVY_WEAPON_SKILL', heavyWeapon).then(() => {
            this.$store.dispatch('StrengthSkill/UPDATE_FIST_FIGHT_SKILL', fistFight).then(() => {
              this.$store.dispatch('StrengthSkill/UPDATE_WHOLESOMNESS_SKILL', wholesomness).then(() => {
                this.$store.dispatch('StrengthSkill/UPDATE_ENDURANCE_SKILL', endurance).then(() => {
                  this.$store.dispatch('StrengthSkill/UPDATE_ELIXIR_TOLERANCE_SKILL', elixirTolerance).then(() => {
                    this.$store.dispatch('StrengthSkill/UPDATE_BULLYING_SKILL', bullying);
                  });
                });
              });
            });
          });
        });
      });
    },
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
