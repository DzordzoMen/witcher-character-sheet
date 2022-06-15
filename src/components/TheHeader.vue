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
      @keypress="darkTheme = !darkTheme"
      tabindex="0"
      v-if="!showIcon"
      v-ripple
    >
      <v-icon size="32" color="#fff">
        {{ darkTheme ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}
      </v-icon>
    </div>

    <v-app-bar-nav-icon
      @click="$emit('onNavIconClick')"
      v-if="showIcon && $vuetify.breakpoint.smAndDown"
    />
  </v-app-bar>
</template>

<script>
import darkTheme from '../mixins/darkTheme';

export default {
  name: 'TheHeader',
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
