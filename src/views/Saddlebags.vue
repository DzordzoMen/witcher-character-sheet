<template>
  <loading>
    <template #resolved>
      <v-row dense class="align-self-baseline">
        <v-col cols="12">
          <v-row dense>
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
        </v-col>
      </v-row>
    </template>
  </loading>
</template>

<script>
import { mapGetters } from 'vuex';

import Loading from '../components/Loading.vue';
import SaddlebagCard from '../components/TheSaddlebagCard.vue';

export default {
  name: 'Saddlebags',
  components: {
    Loading,
    SaddlebagCard,
  },
  computed: {
    ...mapGetters('LargeTables', {
      saddlebags: 'SADDLEBAGS_TABLE',
    }),
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
