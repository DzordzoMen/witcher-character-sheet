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
          Stwórz sobie postać
        </v-btn>
      </v-col>

      <v-expand-transition>
        <!-- TODO debug col size on small and extra large -->
        <v-col cols="12" md="10" lg="6" class="pa-0" v-show="showForm">
          <v-row dense class="justify-center mt-3 mb-2">
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
            <v-col cols="4">
              <base-field v-model="form.school">
                <template #label>
                  Szkoła
                </template>
              </base-field>
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

export default {
  name: 'Home',
  components: {
    HomeCard,
    BaseField,
  },
  data: () => ({
    showForm: false,
    form: {
      name: '',
      origin: '',
      level: 1,
      school: '',
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
};
</script>

<style lang="scss" scoped>
  .about-section {
    border: 1px solid rgba(0, 0, 0, 0.87);
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
