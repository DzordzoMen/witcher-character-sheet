<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" lg="10" class="about-section pb-0">
        <h1 class="text-center pb-5">
          Witaj w wirtualnej Karcie postaci do Wiedzmina
        </h1>
        <p class="body-2">
          Jest to fanowska wersja papierowej gry do Wiedzmina, stworzysz tutaj
          swoją właśna postać, albo przejdziesz do już stworzonej. <br />
          Jeżeli nie chcesz używać wirtualnej wersji możesz pobrać
          papierową i bawić się ze znajomymi.
        </p>

        <v-btn
          class="d-flex mx-auto elevation-0 rounded-b-0"
          @click="showForm = !showForm"
          color="primary"
        >
          Stwórz własną postać
        </v-btn>
      </v-col>

      <v-expand-transition>
        <!-- TODO debug col size on small and extra large -->
        <v-col cols="12" md="10" lg="6" class="pa-0 px-1" v-show="showForm">
          <v-row dense class="justify-center mt-5 mb-2">
            <v-col cols="4">
              <base-field v-model="form.name">
                <template #label>
                  Imię
                </template>
              </base-field>
            </v-col>
            <v-col cols="4">
              <base-field v-model="form.origin">
                <template #label>
                  Pochodzenie
                </template>
              </base-field>
            </v-col>
            <v-col cols="8" md="4" lg="4" :class="$vuetify.breakpoint.smAndDown && 'pt-3'">
              <base-field v-model="form.school">
                <template #label>
                  Szkoła
                </template>
                <base-select
                  v-model="form.school"
                  :items="schools"
                  :removable="false"
                />
              </base-field>
            </v-col>

            <v-col cols="12" v-if="form.school">
              <h3 class="text-center">
                Bonusy ze Szkoły
              </h3>
            </v-col>
            <template v-for="(bonuses, index) in schoolBonuses">
              <v-col cols="12" :key="index">
                <v-radio-group
                  v-model="form.bonuses[index]"
                  hide-details
                  class="pa-0 ma-0"
                  mandatory
                  row
                >
                  <template v-for="(bonus, bonusKey) in bonuses">
                    <v-radio
                      :key="bonusKey"
                      :label="bonus"
                      :value="bonus"
                    />
                  </template>
                </v-radio-group>
                <v-divider class="my-3" />
              </v-col>
            </template>

            <v-col cols="12" class="pt-3">
              <base-field v-model="form.history">
                <template #label>
                  Historia postaci
                </template>

                <v-textarea
                  v-model="form.history"
                  hide-details
                  auto-grow
                />
              </base-field>
            </v-col>

            <v-col cols="4" class="pt-4">
              <v-btn
                color="primary"
                class="mx-auto d-flex"
                :disabled="!form.name || !form.school"
                @click="createWitcher()"
              >
                Stwórz postać
              </v-btn>
            </v-col>

          </v-row>
        </v-col>
      </v-expand-transition>

      <v-col cols="12" lg="10">
        <v-divider class="home-divider" />
      </v-col>

      <v-col cols="12" lg="8">
        <v-container>
          <v-row dense>
            <template v-for="witcher in witchers">
              <v-col cols="6" lg="3" :key="witcher.id">
                <home-card v-bind="witcher" />
              </v-col>
            </template>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HomeCard from '../components/HomeCard.vue';
import BaseField from '../components/base/Field.vue';
import BaseSelect from '../components/base/Select.vue';

// methods
import { availableSchools, schoolBonuses } from '../methods/availableSchools';
import { createNewWitcher } from '../database';

export default {
  name: 'Home',
  components: {
    HomeCard,
    BaseField,
    BaseSelect,
  },
  data: () => ({
    showForm: false,
    form: {
      name: '',
      origin: '',
      level: 1,
      school: '',
      bonuses: [],
      history: '',
    },
    witchers: [
      {
        id: 0,
        name: 'Wojtek',
        level: 1,
        title: '',
        school: 'Cech kota',
      },
      {
        id: 1,
        name: 'Szymek',
        level: 1,
        title: 'Pogromca',
        school: 'Cech wilka',
      },
    ],
  }),
  computed: {
    schools() {
      const witcherSchools = availableSchools();
      return witcherSchools.map((school) => ({ name: school }));
    },
    schoolBonuses() {
      const { form: { school } } = this;
      const bonuses = schoolBonuses(school);
      return bonuses || [];
    },
  },
  methods: {
    async createWitcher() {
      const {
        name,
        origin,
        level,
        school,
        bonuses,
        history,
      } = this.form;
      // TODO promise?
      await createNewWitcher(name, origin, school, history, bonuses, level);
    },
  },
};
</script>

<style lang="scss" scoped>
  .about-section {
    border: 2px solid #2c3e50;
    border-top: none;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .home-divider {
    border-width: medium;
    border-color: rgba(0, 0, 0, 0.67) !important;
    border-radius: 8px;
  }
</style>
