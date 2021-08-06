<template>
  <v-container class="mind-tree rounded-lg">
    <v-row dense>
      <v-col cols="12" class="pb-3 mind-tree__title">
        <v-row no-gutters>
          <v-col class="grow font-weight-bold">
            Umysł
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.mind"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :min="mind"
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
            Wytwarzanie
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.crafting"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.mind"
              :min="crafting"
              disabled
              :disableIncreaseBtn="
                witcher.crafting > witcher.mind ||
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
            Wiedza o potworach
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.monsterKnowledge"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.mind"
              :min="monsterKnowledge"
              disabled
              :disableIncreaseBtn="
                witcher.monsterKnowledge > witcher.mind ||
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
            Wiedza o świecie
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.worldKnowledge"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.mind"
              :min="worldKnowledge"
              disabled
              :disableIncreaseBtn="
                witcher.worldKnowledge > witcher.mind ||
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
            Retoryka
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.rhetoric"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.mind"
              :min="rhetoric"
              disabled
              :disableIncreaseBtn="
                witcher.rhetoric > witcher.mind ||
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
            Wiedźmińskie zmysły
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.witcherSenses"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.mind"
              :min="witcherSenses"
              disabled
              :disableIncreaseBtn="
                witcher.witcherSenses > witcher.mind ||
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
            Odporność magiczna
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.magicResists"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.mind"
              :min="magicResists"
              disabled
              :disableIncreaseBtn="
                witcher.magicResists > witcher.mind ||
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
            Arkana
          </v-col>
          <v-col class="shrink">
            <square-field
              v-model.number="witcher.arcana"
              @onIncreaseClick="decreaseWitcherSkillPoints"
              @onDecreaseClick="increaseWitcherSkillPoints"
              :max="witcher.mind"
              :min="arcana"
              disabled
              :disableIncreaseBtn="
                witcher.arcana > witcher.mind ||
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
  name: 'WitcherCardMindTree',
  components: {
    SquareField,
  },
  data: () => ({
    witcher: {
      mind: 0,
      crafting: 0,
      monsterKnowledge: 0,
      worldKnowledge: 0,
      rhetoric: 0,
      witcherSenses: 0,
      magicResists: 0,
      arcana: 0,
    },
  }),
  computed: {
    ...mapGetters('MindSkill', {
      mind: 'MIND_SKILL',
      crafting: 'CRAFTING_SKILL',
      monsterKnowledge: 'MONSTER_KNOWLEDGE_SKILL',
      worldKnowledge: 'WORLD_KNOWLEDGE_SKILL',
      rhetoric: 'RHETORIC_SKILL',
      witcherSenses: 'WITCHER_SENSES_SKILL',
      magicResists: 'MAGIC_RESISTS_SKILL',
      arcana: 'ARCANA_SKILL',
    }),
    ...mapGetters('WitcherInfo', {
      skillPoints: 'WITCHER_AVA_SKILL_POINTS',
    }),
  },
  // TODO remove?
  watch: {
    mind: 'setValues',
  },
  methods: {
    setValues() {
      const {
        mind,
        crafting,
        monsterKnowledge,
        worldKnowledge,
        rhetoric,
        witcherSenses,
        magicResists,
        arcana,
      } = this;

      this.witcher = {
        mind,
        crafting,
        monsterKnowledge,
        worldKnowledge,
        rhetoric,
        witcherSenses,
        magicResists,
        arcana,
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
.mind-tree {
  border: 1px solid black;
  width: 100%;

  &__title {
    color: #4A1A61;
  }
}
</style>
