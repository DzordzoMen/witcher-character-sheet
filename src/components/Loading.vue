<template>
  <v-container class="fill-height">
    <slot name="pending" v-if="loading">
      <loading-screen />
    </slot>
    <slot name="resolved" v-else />
  </v-container>
</template>

<script>
import LoadingScreen from './LoadingScreen.vue';

export default {
  name: 'Loading',
  components: {
    LoadingScreen,
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
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
