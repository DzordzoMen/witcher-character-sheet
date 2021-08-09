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
                  <witcher-icon
                    :width="32"
                    :height="32"
                    color="#fff"
                  />
                </v-list-item-icon>
              </template>

              <span>
                Karta postaci
              </span>
            </v-tooltip>
          </v-list-item>

          <v-list-item
            link
            @click="goTo('RecipeInfo')"
            :class="isItemActive('RecipeInfo') && 'v-list-item--active'"
            :disabled="isItemActive('RecipeInfo')"
          >
            <v-tooltip left nudge-left="8px">
              <template #activator="{ on }">
                <v-list-item-icon v-on="on">
                  <herb-book-icon
                    :width="32"
                    :height="32"
                    color="#fff"
                  />
                </v-list-item-icon>
              </template>

              <span>
                Przepisy
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
import HerbBookIcon from './components/Icons/HerbBookIcon.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    WitcherIcon,
    HerbBookIcon,
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
  & .v-list-item {
    padding: 0 !important;
    display: flex;
    justify-content: center;
  }
  & .v-list-item__icon {
    margin: 4px 0 !important;
    min-height: 32px;
    min-width: 32px;
  }
}
</style>
