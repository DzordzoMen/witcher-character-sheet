<template>
  <loading-screen>
    <template #resolved>
      <v-row dense class="align-self-baseline">
        <v-col cols="12" md="3">
          <v-row dense class="flex-column">
            <v-col cols="12" class="primary--text text-center">
              Oleje
            </v-col>
            <v-col cols="12">
              <v-row dense>
                <template v-for="(oil, index) in oils">
                  <v-col cols="12" :key="oil.id">
                    <the-select-oil
                      v-model="oil.name"
                      :row-id="index"
                    />
                  </v-col>
                </template>
              </v-row>
            </v-col>
            <v-col cols="12" class="primary--text text-center">
              Petardy
            </v-col>

            <v-col cols="12">
              <v-row dense>
                <template v-for="(bomb, index) in bombs">
                  <v-col cols="12" :key="bomb.id">
                    <the-select-bomb
                      v-model="bomb.name"
                      :row-id="index"
                    />
                  </v-col>
                </template>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="9">
          <v-row dense>
            <v-col cols="12" class="primary--text text-center">
              Ekwipunek na koniu
            </v-col>
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
  </loading-screen>
</template>

<script>
import { mapGetters } from 'vuex';

import LoadingScreen from '../components/LoadingScreen.vue';
import SaddlebagCard from '../components/TheSaddlebagCard.vue';
import TheSelectOil from '../components/TheSelectOil.vue';
import TheSelectBomb from '../components/TheSelectBomb.vue';

export default {
  name: 'Saddlebags',
  components: {
    LoadingScreen,
    TheSelectOil,
    TheSelectBomb,
    SaddlebagCard,
  },
  computed: {
    ...mapGetters('LargeTables', {
      saddlebags: 'SADDLEBAGS_TABLE',
      bombs: 'BOMBS_TABLE',
      oils: 'OILS_TABLE',
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
