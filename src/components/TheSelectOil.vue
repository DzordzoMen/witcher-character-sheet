<template>
  <base-select
    v-model="selectedOil"
    :items="Oils"
    class="border-primary"
  />
</template>

<script>
import BaseSelect from './base/Select.vue';

import Oils from '../assets/data/oils.json';

export default {
  name: 'TheSelectOil',
  components: {
    BaseSelect,
  },
  props: {
    value: [String],
    rowId: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    Oils,
  }),
  computed: {
    selectedOil: {
      get() {
        return this.value;
      },
      set(name) {
        const { rowId } = this;
        this.$store.dispatch('LargeTables/UPDATE_OILS_NAME', { rowId, name });
      },
    },
  },
};
</script>
