<template>
  <v-container class="fill-height">
    <slot name="pending" v-if="loading">
      <v-container class="fill-height d-flex align-center justify-center">
        <loading
          :width="172"
          :height="172"
          :color="$vuetify.theme.dark ? 'rgba(255, 255, 255, .87)' : 'rgba(0, 0, 0, .87)'"
        />
      </v-container>
    </slot>
    <slot name="resolved" v-else />
  </v-container>
</template>

<script>
import Loading from './Icons/Loading.vue';

export default {
  name: 'LoadingScreen',
  components: {
    Loading,
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
