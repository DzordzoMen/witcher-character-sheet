<template>
  <div class="sounds-panel" :class="{ 'sounds-panel--show': showContent }">
    <div class="sounds-panel__content primary">
      Content
    </div>
    <div
      class="sounds-panel__button primary"
      tabindex="0"
      v-ripple
      @click="showContent = !showContent"
      @keypress="showContent = !showContent"
    >
      <v-icon dark size="28" color="">
        mdi-volume-high
      </v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheDmKitSoundsPanel',
  data: () => ({
    showContent: false,
  }),
};
</script>

<style lang="scss" scoped>
.sounds-panel {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: fixed;
  z-index: 6;
  top: 200px;
  left: -350px;
  width: 400px;
  transition: transform .25s cubic-bezier(.4, 0, .2, 1),
    left .25s cubic-bezier(.4, 0, .2, 1),
    right .25s cubic-bezier(.4, 0, .2, 1);

  &--show {
    left: 0px;
  }

  &__button {
    width: 50px;
    max-width: 50px;
    height: 50px;
    max-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    // background: #616161;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &__content {
    width: calc(400px - 50px);
    padding: 16px;
    // background: #616161;
    color: #fff;
    height: 600px;
    max-height: 600px;
    overflow-y: auto;
    border-bottom-right-radius: 8px;
  }
}
</style>
