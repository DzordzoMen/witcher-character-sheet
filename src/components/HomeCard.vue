<template>
  <v-card
    elevation="2"
    rounded="lg"
    outlined
    :to="{ name: 'WitcherCard', params: { id } }"
    height="230px"
  >
    <v-card-text class="py-5">
      <home-card-border position="left" />
      <home-card-border position="right" />

      <v-row no-gutters class="flex-column text-center">
        <v-col cols="12" class="title font-weight-regular black--text">
          {{ Name }}
        </v-col>
        <v-col cols="12" class="body-2" v-if="!!Title">
          {{ Title }}
        </v-col>
        <v-col cols="12" class="black--text">
          {{ School }}
        </v-col>
        <v-col cols="12" class="black--text">
          Poziom {{ Level }}
        </v-col>
      </v-row>

      <home-card-border position="bottom-left" />
      <home-card-border position="bottom-right" />
    </v-card-text>
  </v-card>
</template>

<script>
import HomeCardBorder from './HomeCardBorder.vue';

export default {
  name: 'HomeCard',
  components: {
    HomeCardBorder,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Level: {
      type: Number,
      required: true,
    },
    Title: {
      type: String,
      required: true,
      default: '',
    },
    School: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .v-card {
    border: 1px solid rgba(0, 0, 0, 0.67);
    position: relative;
    overflow: hidden;
  }
</style>
