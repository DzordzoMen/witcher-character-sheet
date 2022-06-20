<template>
  <div class="sounds-panel" :class="{ 'sounds-panel--show': showContent }">
    <div class="sounds-panel__content primary">
      <v-row no-gutters>
        <v-col cols="12" class="d-flex" style="gap: 8px">
          <v-text-field
            v-model.number="search"
            placeholder="Search a sound..."
            dense
            color="#d2d2d2"
            hide-details
            outlined
            flat
            class="ma-0 pa-0"
          />

          <v-menu bottom left offset-y rounded="sm">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon dark> {{ volume === 0 ? 'mdi-volume-mute' : 'mdi-volume-high' }} </v-icon>
              </v-btn>
            </template>

            <div style="background: #fff; overflow: hidden">
              <v-slider
                vertical
                min="0"
                max="100"
                track-color="primary lighten-3"
                hide-details
                v-model="volume"
              />
            </div>
          </v-menu>
        </v-col>
      </v-row>
    </div>
    <div
      class="sounds-panel__button primary"
      tabindex="0"
      v-ripple
      @click="showContent = !showContent"
      @keypress="showContent = !showContent"
    >
      <v-icon dark size="28">
        mdi-folder-music
      </v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheDmKitSoundsPanel',
  data: () => ({
    showContent: false,
    search: null,
    volume: 100,
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
  top: 170px;
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

  @media (min-width: 960px) {
    & {
      top: 200px;
    }
  }
}
</style>
