<template>
  <v-app-bar app dark color="primary" clipped-right>
    <v-row no-gutters class="align-center">
      <v-col class="shrink">
        <router-link :to="{ name: 'Home' }">
          <v-img
            alt="Witcher logo"
            src="../assets/logo.png"
            contain
            width="120"
          />
        </router-link>
      </v-col>
      <h2 class="pl-5 hidden-sm-and-down">Witcher character sheet</h2>
    </v-row>

    <div
      class="theme-icon pa-1"
      @click="darkTheme = !darkTheme"
      v-if="!showIcon"
      v-ripple
    >
      <sun-icon
        v-if="!darkTheme"
        :height="32"
        :width="32"
        color="#fff"
      />

      <moon-icon
        v-else
        :height="32"
        :width="32"
        color="#fff"
      />
    </div>

    <v-app-bar-nav-icon
      @click="$emit('onNavIconClick')"
      v-if="showIcon && $vuetify.breakpoint.smAndDown"
    />
  </v-app-bar>
</template>

<script>
import SunIcon from './Icons/SunIcon.vue';
import MoonIcon from './Icons/MoonIcon.vue';

import darkTheme from '../mixins/darkTheme';

export default {
  name: 'TheHeader',
  components: {
    SunIcon,
    MoonIcon,
  },
  mixins: [
    darkTheme,
  ],
  props: {
    showIcon: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.theme-icon {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
</style>
