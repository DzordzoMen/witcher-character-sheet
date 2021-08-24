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
          <base-field v-model="witcherNotes">
            <template #label>
              Notatki
            </template>

            <v-textarea
              v-model="witcherNotes"
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
  computed: {
    history: {
      get() {
        return this.$store.getters['WitcherInfo/WITCHER_HISTORY'];
      },
      set(val) {
        this.$store.dispatch('WitcherInfo/UPDATE_WITCHER_HISTORY', val);
      },
    },
    witcherNotes: {
      get() {
        return this.$store.getters['NotesModule/WITCHER_NOTES'];
      },
      set(val) {
        this.$store.dispatch('NotesModule/UPDATE_WITCHER_NOTES', val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
