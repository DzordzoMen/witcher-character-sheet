<template>
  <v-footer class="primary white--text pa-3">
    <router-link :to="{ name: 'GuestLaboratory' }" class="footer-item">
      Laboratorium
    </router-link>
    <router-link :to="{ name: 'GuestRecipeInfo' }" class="footer-item">
      Przepisy
    </router-link>
    <router-link :to="{ name: 'DMKit' }" class="footer-item">
      DM
    </router-link>
    <div
      class="footer-item"
      @click="installer()"
      @keypress="installer()"
      tabindex="0"
      v-if="showInstallButton"
    >
      Zainstaluj
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    showInstallButton: {
      type: Boolean,
      required: false,
      default: false,
    },
    installer: {
      type: Function,
      required: false,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.v-footer {
  display: flex;
  justify-content: space-around;

  .footer-item {
    display: flex;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    position: relative;

    &::before {
      content: ' ';
      border-bottom: 2px solid #fff;
      width: 0;
      bottom: 0;
      position: absolute;
      transition: width ease-in-out 0.46s;

    }

    &:hover {
      &::before {
        width: 100%;
      }
    }
  }
}
</style>
