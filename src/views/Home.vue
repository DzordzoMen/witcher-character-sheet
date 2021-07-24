<template>
  <v-container>
    <v-row>
      <template v-for="witcher in witchers">
        <v-col cols="6" lg="2" :key="witcher.id">
          <home-card v-bind="witcher" />
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import HomeCard from '../components/HomeCard.vue';

export default {
  name: 'Home',
  components: {
    HomeCard,
  },
  data: () => ({
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
