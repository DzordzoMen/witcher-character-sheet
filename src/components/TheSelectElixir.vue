<template>
  <base-select
    v-model="elixirInBelt"
    :items="Elixirs"
    :mouseOverHandler="enterHoverOptionItem"
    :mouseLeaveHandler="leaveHoverOptionItem"
    class="border-black"
    :disableItem="itemIsDisabled"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import BaseSelect from './base/Select.vue';

import Elixirs from '../assets/data/elixirs.json';

export default {
  name: 'TheSelectElixir',
  components: {
    BaseSelect,
  },
  props: {
    value: [String],
    elixirId: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    Elixirs,
  }),
  computed: {
    ...mapGetters('HerbModule', {
      userHerbs: 'HERBS',
    }),
    elixirInBelt: {
      get() {
        return this.value;
      },
      set(name) {
        const { elixirId: id } = this;
        this.$store.dispatch('WitcherInfo/UPDATE_WITCHER_ELIXIR', { id, name });
        this.updateHerbs(name);
      },
    },
  },
  methods: {
    enterHoverOptionItem({ ingredients }) {
      ingredients.filter((component) => {
        const { name, amount } = component;
        const herbAmount = this.getUserHerbAmountByName(name);
        this.setHerbHighlight(name, herbAmount >= amount);
        return component;
      });
    },
    leaveHoverOptionItem({ ingredients }) {
      ingredients.filter((component) => this.clearHerbHighlight(component.name));
    },
    setHerbHighlight(herbName, highlightStatus) {
      const herbElement = document.querySelector(`#${herbName}`);
      if (highlightStatus) {
        herbElement.classList.add('herb__success');
      } else {
        herbElement.classList.add('herb__error');
      }
    },
    clearHerbHighlight(herbName) {
      const herbElement = document.querySelector(`#${herbName}`);
      herbElement.classList.remove('herb__success', 'herb__error');
    },
    getUserHerbAmountByName(herbName) {
      const { userHerbs } = this;
      const herbAmount = userHerbs.reduce((acc, herb) => {
        if (herb.name === herbName) return acc + herb.amount;
        return acc;
      }, 0);
      return herbAmount;
    },
    itemIsDisabled({ ingredients }) {
      const result = ingredients.map((component) => {
        const { name, amount } = component;
        const herbAmount = this.getUserHerbAmountByName(name);
        return herbAmount >= amount;
      });
      return result.includes(false);
    },
    // TODO refactor
    async updateHerbs(elixirName) {
      if (elixirName) {
        const { ingredients } = this.Elixirs.filter((elixir) => elixir.name === elixirName)[0];
        // eslint-disable-next-line
        for (const herb of ingredients) {
          const actualAmount = this.$store.getters[`HerbModule/${herb.name.toUpperCase()}`];
          // eslint-disable-next-line
          await this.$store.dispatch(
            `HerbModule/UPDATE_${herb.name.toUpperCase()}`,
            (actualAmount - herb.amount),
          );
        }
      }
    },
  },
};
</script>
