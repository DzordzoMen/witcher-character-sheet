<template>
  <v-app>
    <the-header
      @onNavIconClick="showDrawer = !showDrawer"
      :show-icon="isUserInCard"
    />

    <v-navigation-drawer
      v-model="showDrawer"
      v-if="isUserInCard"
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

      <template #append>
        <v-list
          dense
          nav
          flat
          class="sidebar-list"
        >
          <v-list-item-group>
            <v-list-item @click="darkTheme = !darkTheme">
              <v-tooltip left nudge-left="8px">
                <template #activator="{ on }">
                  <v-list-item-icon v-on="on">
                    <sun-icon
                      v-if="!darkTheme"
                      :width="32"
                      :height="32"
                      color="#fff"
                    />

                    <moon-icon
                      v-else
                      :width="32"
                      :height="32"
                      color="#fff"
                    />
                  </v-list-item-icon>
                </template>

                <span>
                  {{ darkTheme ? 'Tryb nocny' : 'Tryb dzienny' }}
                </span>
              </v-tooltip>
              <v-list-item-content>
                <v-list-item-title>
                  {{ darkTheme ? 'Tryb nocny' : 'Tryb dzienny' }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item @click="exportCard()">
              <v-tooltip left nudge-left="8px">
                <template #activator="{ on }">
                  <v-list-item-icon v-on="on">
                    <v-icon size="32">
                      mdi-tray-arrow-up
                    </v-icon>
                  </v-list-item-icon>
                </template>

                <span>
                  Eksportuj kartę
                </span>
              </v-tooltip>
              <v-list-item-content>
                <v-list-item-title>
                  Eksportuj kartę
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item @click="installer()" v-if="showInstallButton">
              <v-tooltip left nudge-left="8px">
                <template #activator="{ on }">
                  <v-list-item-icon v-on="on">
                    <v-icon size="32">
                      mdi-cellphone-arrow-down
                    </v-icon>
                  </v-list-item-icon>
                </template>

                <span>
                  Zainstaluj
                </span>
              </v-tooltip>
              <v-list-item-content>
                <v-list-item-title>
                  Zainstaluj
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>

    <the-footer
      v-if="!isUserInCard"
      :installer="installer"
      :showInstallButton="showInstallButton"
    />
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

import WitcherIcon from './components/Icons/WitcherIcon.vue';
import HerbBookIcon from './components/Icons/HerbBookIcon.vue';
import SaddlebagsIcon from './components/Icons/SaddlebagsIcon.vue';
import ElixirIcon from './components/Icons/ElixirIcon.vue';
import NotesIcon from './components/Icons/NotesIcon.vue';
import SunIcon from './components/Icons/SunIcon.vue';
import MoonIcon from './components/Icons/MoonIcon.vue';

import isUserInCard from './mixins/isUserInCard';
import darkTheme from './mixins/darkTheme';

import { exportWitcher } from './database';

export default {
  name: 'App',
  components: {
    SunIcon,
    MoonIcon,
    TheHeader,
    TheFooter,
    NotesIcon,
    ElixirIcon,
    WitcherIcon,
    HerbBookIcon,
    SaddlebagsIcon,
  },
  mixins: [
    darkTheme,
    isUserInCard,
  ],
  data: () => ({
    showDrawer: false,
    showInstallButton: false,
  }),
  created() {
    let installPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      installPrompt = e;
      this.showInstallButton = true;
    });

    this.installer = () => {
      this.showInstallButton = false;
      installPrompt.prompt();
      installPrompt.userChoice.then((restult) => {
        if (restult.outcome === 'accepted') installPrompt = null;
      });
    };
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
    exportCard() {
      const witcherId = this.$store.getters.WITCHER_ID;
      exportWitcher(witcherId).then((data) => {
        const fileUrl = `data:text/json;charset=utf-8,${encodeURIComponent(data.file)}`;

        const link = document.createElement('a');
        link.setAttribute('href', fileUrl);
        link.setAttribute('download', `${data.name}.json`);
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
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

.border-primary {
  border: 1px solid var(--primary-color);
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
.theme--light {
  --primary-color: #2c3e50;
}
.theme--dark {
  // --primary-color: #8ea1b6;
  --primary-color: #2c3e50;

  input, textarea {
    caret-color: #fff;
  }
}
</style>
