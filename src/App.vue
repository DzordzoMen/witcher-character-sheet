<template>
  <v-app>
    <the-header />

    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
.absolute {
  position: absolute
}

.relative {
  position: relative;
}

@media (min-width: 960px) {
  .v-application .order-md-13 {
    order: 13 !important
  }
  .v-application .order-md-14 {
    order: 14 !important
  }
  .v-application .order-md-15 {
    order: 15 !important
  }
}

.v-application .order-13 {
  order: 13 !important
}
.v-application .order-14 {
  order: 14 !important
}
.v-application .order-15 {
  order: 15 !important
}
.v-application .order-16 {
  order: 16 !important
}
.v-application .order-17 {
  order: 17 !important
}

</style>
