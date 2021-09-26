<template>
  <div class="herbs-area rounded-lg textPrimary--text">
    <template v-for="(herb, index) in userHerbs">
      <v-row no-gutters :key="index" class="pa-2" :id="herb.name">
        <v-col class="grow">
          {{ herb.name }}
        </v-col>
        <v-col class="shrink">
          <square-field
            v-model.number="herb.amount"
            :min="-10"
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
  border: 1px solid #2c3e50;

  .row:not(:last-child) {
    border-bottom: 1px solid #2c3e50;
  }

  .herb__success {
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

.theme--light {
  .herb {
    &__success {
      background-color: #A5D6A7;
      color: #388E3C;
    }
    &__error {
      background-color: #EF9A9A;
      color: #D32F2F;
    }
  }
}
.theme--dark {
  .herb {
    &__success {
      color: #A5D6A7;
      background-color: rgba(56, 142, 60, 0.37);
    }
    &__error {
      color: #EF9A9A;
      background-color: rgba(211, 47, 47, 0.37);
    }
  }
}
</style>
