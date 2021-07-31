<template>
  <div class="herbs-area rounded-lg primary--text">
    <template v-for="(herb, index) in userHerbs">
      <v-row no-gutters :key="index" class="pa-2" :id="herb.name">
        <v-col class="grow">
          {{ herb.name }}
        </v-col>
        <v-col class="shrink">
          <square-field
            v-model.number="herb.amount"
            @input="(amount) => onInputEvent(amount, herb.name)"
          />
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import SquareField from './base/SquareField.vue';

export default {
  name: 'WitcherCardHerbs',
  components: {
    SquareField,
  },
  computed: {
    ...mapGetters('HerbModule', {
      userHerbs: 'HERBS',
    }),
  },
  methods: {
    onInputEvent(val, name) {
      this.$store.dispatch(`HerbModule/UPDATE_${name.toUpperCase()}`, val);
    },
  },
};
</script>

<style lang="scss" scoped>
.herbs-area {
  border: 1px solid black;

  .row:not(:last-child) {
    border-bottom: 1px solid black;
  }
  // TODO recactor to --success --error and elixirs
  // TODO refactor contrast
  .herb__success {
    background-color: #A5D6A7;
    color: #388E3C; // TODO ask team about this
    // TODO idea without text color change

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }
  }
  .herb__error {
    background-color: #EF9A9A;
    color: #D32F2F; // TODO ask team about this
    // TODO idea without text color change

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }
  }
}
</style>
