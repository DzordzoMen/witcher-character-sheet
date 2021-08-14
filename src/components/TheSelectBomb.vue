<template>
  <base-select
    v-model="selectedBomb"
    :items="Bombs"
    class="border-black"
  />
</template>

<script>
import BaseSelect from './base/Select.vue';

import Bombs from '../assets/data/bombs.json';

export default {
  name: 'TheSelectBomb',
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
    Bombs,
  }),
  computed: {
    selectedBomb: {
      get() {
        return this.value;
      },
      set(name) {
        const { rowId } = this;
        this.$store.dispatch('LargeTables/UPDATE_BOMBS_NAME', { rowId, name });
      },
    },
  },
};
</script>
