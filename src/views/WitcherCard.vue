<template>
  <v-container class="fill-height">
    <loading-screen v-if="loading" />

    <v-row dense class="align-self-baseline" v-else>

      <v-col cols="6" md="3" order-md="1" order="3">
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
      <v-col cols="6" md="3" order-md="2" order="1">
        <base-field
          v-model="name"
          disabled
        >
          <template #label>
            Imię
          </template>
        </base-field>
      </v-col>
      <v-col cols="6" md="3" order-md="3" order="2">
        <base-field
          v-model="witcherTitle"
        >
          <template #label>
            Tytuł
          </template>
        </base-field>
      </v-col>
      <v-col cols="6" md="3" order-md="4" order="7">
        <base-field
          v-model="origin"
          disabled
        >
          <template #label>
            Pochodzenie
          </template>
        </base-field>
      </v-col>

      <v-col
        cols="6"
        md="3"
        order="4"
        v-if="$vuetify.breakpoint.smAndDown"
      >
        <base-field
          v-model.number="reputation"
          inputType="number"
        >
          <template #label>
            Reputacja
          </template>
        </base-field>
      </v-col>

      <v-col cols="6" md="3" order-md="5" order="5">
        <base-field
          v-model.number="availableSkillPoints"
          disabled
        >
          <template #label>
            Dostępne pkt. um.
          </template>
        </base-field>
      </v-col>
      <v-col cols="6" md="3" order-md="6" order="10">
        <v-row dense>
          <v-col cols="6">
            <base-field
              v-model.number="healthPoints"
              disabled
            >
              <template #label>
                PŻ
              </template>
            </base-field>
          </v-col>
          <v-col cols="6">
            <base-field
              v-model.number="manaPoints"
              disabled
            >
              <template #label>
                PM
              </template>
            </base-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" md="3" order-md="7" order="11">
        <base-field
          v-model.number="witcherGold"
          inputType="number"
        >
          <template #label>
            Złoto
          </template>
        </base-field>
      </v-col>
      <v-col cols="6" md="3" order-md="8" order="8">
        <base-field
          v-model="school"
          disabled
        >
          <template #label>
            Szkoła
          </template>
        </base-field>
      </v-col>

      <v-col
        cols="12"
        order="9"
        class="pa-2"
        v-if="$vuetify.breakpoint.smAndDown"
      />

      <v-col cols="6" md="3" order-md="9" order="6">
        <v-btn color="primary" block depressed disabled>
          Rozdaj
        </v-btn>
      </v-col>
      <v-col cols="6" md="3" order-md="10" order="12">
        <base-field
          v-model.number="baseLightArmor"
          disabled
        >
          <template #label>
            Lekki pancerz
          </template>
        </base-field>
      </v-col>
      <v-col cols="6" md="3" order-md="11" order="13">
        <base-field
          v-model.number="baseHeavyArmor"
          disabled
        >
          <template #label>
            Ciężki pancerz
          </template>
        </base-field>
      </v-col>
      <v-col cols="12" md="3" order-md="12" order="14">
        <base-field
          v-model.number="baseMagicResists"
          disabled
        >
          <template #label>
            Odporność magiczna
          </template>
        </base-field>
      </v-col>

      <v-col cols="12" order-md="13" order="15" />

      <v-col cols="12" md="3" order-md="14" order="16">
        <v-row
          dense
          :class="!$vuetify.breakpoint.smAndDown && 'flex-column'"
        >
          <!-- TODO remove spend btn and set this field here? -->
          <v-col cols="6" md="12" order-md="1" v-if="!$vuetify.breakpoint.smAndDown">
            <base-field
              v-model.number="reputation"
              inputType="number"
            >
              <template #label>
                Reputacja
              </template>
            </base-field>
          </v-col>

          <v-col cols="6" md="12" class="primary--text text-center" order="1" order-md="2">
            Pas na eliksiry
          </v-col>

          <v-col cols="6" md="12" order="3" order-md="3">
            <v-row dense>
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

          <v-col cols="6" md="12" class="primary--text text-center" order="2" order-md="4">
            Składniki
          </v-col>
          <v-col cols="6" md="12" order="4" order-md="5">
            <the-witcher-card-herbs />
          </v-col>
        </v-row>
      </v-col>
      <!-- skills -->
      <v-col cols="12" md="9" order-md="15" order="17">
        <v-row dense>
          <v-col cols="12" md="6">
            <the-witcher-card-strength-tree />
          </v-col>
          <v-col cols="12" md="6">
            <the-witcher-card-dexterity-tree />
          </v-col>
          <v-col cols="12" md="6">
            <the-witcher-card-signs-tree />
          </v-col>
          <v-col cols="12" md="6">
            <the-witcher-card-mind-tree />
          </v-col>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

import LoadingScreen from '../components/LoadingScreen.vue';
import BaseField from '../components/base/Field.vue';
import TheSelectElixir from '../components/TheSelectElixir.vue';
import TheWitcherCardHerbs from '../components/TheWitcherCardHerbs.vue';
import TheWitcherCardStrengthTree from '../components/TheWitcherCardStrengthTree.vue';
import TheWitcherCardDexterityTree from '../components/TheWitcherCardDexterityTree.vue';
import TheWitcherCardSignsTree from '../components/TheWitcherCardSignsTree.vue';
import TheWitcherCardMindTree from '../components/TheWitcherCardMindTree.vue';

export default {
  name: 'WitcherCard',
  components: {
    BaseField,
    LoadingScreen,
    TheSelectElixir,
    TheWitcherCardHerbs,
    TheWitcherCardMindTree,
    TheWitcherCardSignsTree,
    TheWitcherCardStrengthTree,
    TheWitcherCardDexterityTree,
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
      heavyArmor: 'HEAVY_ARMOR_SKILL',
      wholesomness: 'WHOLESOMNESS_SKILL',
    }),
    ...mapGetters('DexteritySkill', {
      lightArmor: 'LIGHT_ARMOR_SKILL',
    }),
    ...mapGetters('SignSkill', {
      signs: 'SIGNS_SKILL',
    }),
    ...mapGetters('MindSkill', {
      magicResists: 'MAGIC_RESISTS_SKILL',
    }),
    loading() {
      return this.$store.state.loading;
    },
    healthPoints() {
      const baseHealth = 8;
      const { level, wholesomness } = this;
      return baseHealth + (level * 3) + (wholesomness * 2);
    },
    manaPoints() {
      const baseMana = 1;
      const { signs } = this;
      return baseMana + signs;
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
