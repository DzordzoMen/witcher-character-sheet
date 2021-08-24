<template>
  <loading-screen>
    <template #resolved>
      <v-row dense class="align-self-baseline">
        <v-col cols="12" class="pb-3">
          <base-field v-model="history">
            <template #label>
              Historia postaci
            </template>

            <v-textarea
              v-model="history"
              hide-details
              auto-grow
            />
          </base-field>
        </v-col>

        <v-col cols="12" md="3">
          Tablica
        </v-col>
        <v-col cols="12" md="9">
          <base-field v-model="notates">
            <template #label>
              Notatki
            </template>

            <v-textarea
              v-model="notates"
              hide-details
              rows="28"
              auto-grow
            />
          </base-field>
        </v-col>
      </v-row>
    </template>
  </loading-screen>
</template>

<script>
import LoadingScreen from '../components/LoadingScreen.vue';
import BaseField from '../components/base/Field.vue';

export default {
  name: 'Notes',
  components: {
    LoadingScreen,
    BaseField,
  },
  data: () => ({
    notates: '',
  }),
  computed: {
    history: {
      get() {
        return this.$store.getters['WitcherInfo/WITCHER_HISTORY'];
      },
      set(val) {
        this.$store.dispatch('WitcherInfo/UPDATE_WITCHER_HISTORY', val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
