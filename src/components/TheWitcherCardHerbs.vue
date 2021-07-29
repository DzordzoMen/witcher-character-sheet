<template>
  <div class="herbs-area rounded-lg primary--text">
    <template v-for="(herb, index) in userHerbs">
      <v-row no-gutters :key="index" class="pa-2" :id="herb.name">
        <v-col class="grow">
          {{ herb.name }}
        </v-col>
        <v-col class="shrink">
          {{ herb.amount }}
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'WitcherCardHerbs',
  computed: {
    ...mapGetters('HerbModule', {
      userHerbs: 'HERBS',
    }),
  },
};
</script>

<style lang="scss" scoped>
.herbs-area {
  border: 1px solid black;

  .row:not(:last-child) {
    border-bottom: 1px solid black;
  }

  .herb__success {
    background-color: #A5D6A7;
    color: #388E3C;

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
    color: #D32F2F;

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
