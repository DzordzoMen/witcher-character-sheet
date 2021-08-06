<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <loading :width="172" :height="172" />
  </v-container>
</template>

<script>
import Loading from './Icons/Loading.vue';

export default {
  name: 'LoadingScreen',
  components: { Loading },
};
</script>
