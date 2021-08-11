<template>
  <v-container class="fill-height">
    <loading-screen v-if="loading" />

    <v-row dense class="align-self-baseline" v-else>
      <template v-for="(bag, id) in saddlebags">
        <v-col cols="6" md="4" :key="id">
          <saddlebag-card
            :id="id"
            :name="bag.name"
            :description="bag.description"
          />
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

import LoadingScreen from '../components/LoadingScreen.vue';
import SaddlebagCard from '../components/TheSaddlebagCard.vue';

export default {
  name: 'Saddlebags',
  components: {
    LoadingScreen,
    SaddlebagCard,
  },
  computed: {
    ...mapGetters('LargeTables', {
      saddlebags: 'SADDLEBAGS_TABLE',
    }),
    loading() {
      return this.$store.state.loading;
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
</style>
