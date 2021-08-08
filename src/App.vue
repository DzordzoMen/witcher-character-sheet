<template>
  <v-app>
    <the-header />

    <v-navigation-drawer
      v-if="showNavigationDrawer"
      app
      clipped
      right
      mini-variant
      color="primary"
      dark
    >
      <v-list
        dense
        nav
        class="sidebar-list"
      >
        <v-list-item-group>
          <v-list-item
            link
            @click="goTo('WitcherCard')"
            :class="isItemActive('WitcherCard') && 'v-list-item--active'"
            :disabled="isItemActive('WitcherCard')"
          >
            <v-tooltip left nudge-left="8px">
              <template #activator="{ on }">
                <v-list-item-icon v-on="on">
                  <witcher-icon />
                </v-list-item-icon>
              </template>

              <span>
                Karta postaci
              </span>
            </v-tooltip>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

import WitcherIcon from './components/Icons/WitcherIcon.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    WitcherIcon,
  },
  computed: {
    showNavigationDrawer() {
      return this.$route.path.includes('/card/');
    },
  },
  methods: {
    isItemActive(endpointName) {
      const { name } = this.$route;
      return name === endpointName;
    },
    goTo(endpointName) {
      const { id } = this.$route.params;
      this.$router.push({ name: endpointName, params: { id } });
    },
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

.sidebar-list {
  & .v-list-item__icon {
    margin: 8px 0 !important;
  }
}
</style>
