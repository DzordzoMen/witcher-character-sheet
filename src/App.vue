<template>
  <v-app>
    <the-header
      @onNavIconClick="showDrawer = !showDrawer"
      :show-icon="showNavigationDrawer"
    />

    <v-navigation-drawer
      v-model="showDrawer"
      v-if="showNavigationDrawer"
      app
      clipped
      right
      :permanent="$vuetify.breakpoint.mdAndUp"
      :mini-variant="$vuetify.breakpoint.mdAndUp"
      :class="$vuetify.breakpoint.smAndDown && 'v-navigation-drawer--center'"
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

            <v-list-item-content>
              <v-list-item-title>
                Karta postaci
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            link
            @click="goTo('Saddlebags')"
            :class="isItemActive('Saddlebags') && 'v-list-item--active'"
            :disabled="isItemActive('Saddlebags')"
          >
            <v-tooltip left nudge-left="8px">
              <template #activator="{ on }">
                <v-list-item-icon v-on="on">
                  <saddlebags-icon
                    :width="32"
                    :height="32"
                    color="#fff"
                  />
                </v-list-item-icon>
              </template>

              <span>
                Juki
              </span>
            </v-tooltip>

            <v-list-item-content>
              <v-list-item-title>
                Juki
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            link
            @click="goTo('Notes')"
            :class="isItemActive('Notes') && 'v-list-item--active'"
            :disabled="isItemActive('Notes')"
          >
            <v-tooltip left nudge-left="8px">
              <template #activator="{ on }">
                <v-list-item-icon v-on="on">
                  <notes-icon
                    :width="32"
                    :height="32"
                    color="#fff"
                  />
                </v-list-item-icon>
              </template>

              <span>
                Notatki
              </span>
            </v-tooltip>

            <v-list-item-content>
              <v-list-item-title>
                Notatki
              </v-list-item-title>
            </v-list-item-content>
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

            <v-list-item-content>
              <v-list-item-title>
                Przepisy
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            link
            @click="goTo('Laboratory')"
            :class="isItemActive('Laboratory') && 'v-list-item--active'"
            :disabled="isItemActive('Laboratory')"
          >
            <v-tooltip left nudge-left="8px">
              <template #activator="{ on }">
                <v-list-item-icon v-on="on">
                  <elixir-icon
                    :width="32"
                    :height="32"
                    color="#fff"
                  />
                </v-list-item-icon>
              </template>

              <span>
                Laboratorium
              </span>
            </v-tooltip>

            <v-list-item-content>
              <v-list-item-title>
                Laboratorium
              </v-list-item-title>
            </v-list-item-content>
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
import SaddlebagsIcon from './components/Icons/SaddlebagsIcon.vue';
import ElixirIcon from './components/Icons/ElixirIcon.vue';
import NotesIcon from './components/Icons/NotesIcon.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    NotesIcon,
    ElixirIcon,
    WitcherIcon,
    HerbBookIcon,
    SaddlebagsIcon,
  },
  data: () => ({
    showDrawer: false,
  }),
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

.border-black {
  border: 1px solid black;
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

.v-navigation-drawer--center {
  & > .v-navigation-drawer__content {
    justify-items: center;
    align-items: center;
    display: flex;
  }
}

.sidebar-list {
  width: 100%;

  & .v-list-item__icon {
    margin: 4px 32px 4px 0 !important;
    min-height: 32px;
    min-width: 32px;
  }
}

@media (min-width: 1264px) {
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
}
</style>
