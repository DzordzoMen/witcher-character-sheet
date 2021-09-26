<template>
  <v-container class="signs-tree rounded-lg">
    <v-row dense>
      <v-col cols="12" class="pb-3 signs--text">
        <v-row no-gutters>
          <v-col class="grow font-weight-bold">
            Znaki
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.signs"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :min="signs"
              :disableIncreaseBtn="
                witcher.signs === witcherLevel ||
                skillPoints === 0
              "
              disabled
              showBtns
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col class="grow">
            Somne
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.somne"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.signs"
              :min="somne"
              disabled
              :disableIncreaseBtn="
                witcher.somne > witcher.signs ||
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
            Heliotrop
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.heliotrop"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.signs"
              :min="heliotrop"
              disabled
              :disableIncreaseBtn="
                witcher.heliotrop > witcher.signs ||
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
            Aard
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.aard"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.signs"
              :min="aard"
              disabled
              :disableIncreaseBtn="
                witcher.aard > witcher.signs ||
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
            Igni
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.igni"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.signs"
              :min="igni"
              disabled
              :disableIncreaseBtn="
                witcher.igni > witcher.signs ||
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
            Axii
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.axii"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.signs"
              :min="axii"
              disabled
              :disableIncreaseBtn="
                witcher.axii > witcher.signs ||
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
            Yrden
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.yrden"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.signs"
              :min="yrden"
              disabled
              :disableIncreaseBtn="
                witcher.yrden > witcher.signs ||
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
            Quen
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.quen"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.signs"
              :min="quen"
              disabled
              :disableIncreaseBtn="
                witcher.quen > witcher.signs ||
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
  name: 'WitcherCardSignsTree',
  components: {
    SquareField,
  },
  mixins: [skillTree],
  data: () => ({
    wticher: {
      signs: 0,
      somne: 0,
      heliotrop: 0,
      aard: 0,
      igni: 0,
      axii: 0,
      yrden: 0,
      quen: 0,
    },
  }),
  computed: {
    ...mapGetters('SignSkill', {
      signs: 'SIGNS_SKILL',
      somne: 'SOMNE_SKILL',
      heliotrop: 'HELIOTROP_SKILL',
      aard: 'AARD_SKILL',
      igni: 'IGNI_SKILL',
      axii: 'AXII_SKILL',
      yrden: 'YRDEN_SKILL',
      quen: 'QUEN_SKILL',
    }),
  },
  created() {
    this.setValues();
  },
  methods: {
    setValues() {
      const {
        signs,
        somne,
        heliotrop,
        aard,
        igni,
        axii,
        yrden,
        quen,
      } = this;

      this.witcher = {
        signs,
        somne,
        heliotrop,
        aard,
        igni,
        axii,
        yrden,
        quen,
      };
    },
    saveSkills() {
      const {
        signs,
        somne,
        heliotrop,
        aard,
        igni,
        axii,
        yrden,
        quen,
      } = this.witcher;

      this.$store.dispatch('SignSkill/UPDATE_SIGNS_SKILL_SKILL', signs).then(() => {
        this.$store.dispatch('SignSkill/UPDATE_SOMNE_SKILL', somne).then(() => {
          this.$store.dispatch('SignSkill/UPDATE_HELIOTROP_SKILL', heliotrop).then(() => {
            this.$store.dispatch('SignSkill/UPDATE_AARD_SKILL', aard).then(() => {
              this.$store.dispatch('SignSkill/UPDATE_IGNI_SKILL', igni).then(() => {
                this.$store.dispatch('SignSkill/UPDATE_AXII_SKILL', axii).then(() => {
                  this.$store.dispatch('SignSkill/UPDATE_YRDEN_SKILL', yrden).then(() => {
                    this.$store.dispatch('SignSkill/UPDATE_QUEN_SKILL', quen);
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
</script>

<style lang="scss" scoped>
.signs-tree {
  border: 1px solid var(--primary-color);
  width: 100%;
}
</style>
