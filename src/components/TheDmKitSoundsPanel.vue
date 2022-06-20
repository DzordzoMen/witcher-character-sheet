<template>
  <div class="sounds-panel" :class="{ 'sounds-panel--show': showContent }">
    <div class="sounds-panel__content primary">
      <v-row no-gutters class="flex-column">
        <v-col cols="12" class="d-flex" style="gap: 8px">
          <v-text-field
            v-model.number="search"
            placeholder="Search a sound..."
            dense
            dark
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

        <v-col cols="12" class="pt-4">
          <v-row no-gutters>
            <v-col cols="12" v-for="sound in filteredSoundsList" :key="sound.id">
              <the-dm-kit-sounds-panel-item
                :item="sound"
                :isPlaying="isPlaying"
                :isSelected="selectedSoundsId === sound.id"
                @play="(val) => playSound(val)"
                @stop="isPlaying = false"
              />
            </v-col>
          </v-row>
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
import TheDmKitSoundsPanelItem from './TheDmKitSoundsPanelItem.vue';

export default {
  name: 'TheDmKitSoundsPanel',
  components: {
    TheDmKitSoundsPanelItem,
  },
  data: () => ({
    showContent: false,
    search: null,
    volume: 100,
    isPlaying: false,
    selectedSoundsId: null,
    soundsList: [
      {
        id: 1,
        name: 'Opening doors with creaking',
        path: '/assets/sounds/creaking_doors.mp3',
      },
      {
        id: 2,
        name: 'Knocking',
        path: '/assets/sounds/knocking.mp3',
      },
      {
        id: 3,
        name: 'Bats',
        path: '/assets/sounds/bats.mp3',
      },
      {
        id: 4,
        name: 'Horse laugh',
        path: '/assets/sounds/horse_laugh.mp3',
      },
      {
        id: 5,
        name: 'Walking horse',
        path: '/assets/sounds/horse_walk.mp3',
      },
      {
        id: 6,
        name: 'Dragon wings - fast',
        path: '/assets/sounds/dragon_fast_wings_flap.mp3',
      },
      {
        id: 7,
        name: 'Dragon wings - slow',
        path: '/assets/sounds/dragon_slow_wings_flap.mp3',
      },
      {
        id: 8,
        name: 'Doorbell',
        path: '/assets/sounds/doorbell.mp3',
      },
      {
        id: 9,
        name: 'Knocking on doors',
        path: '/assets/sounds/knocking_on_doors.mp3',
      },
      {
        id: 10,
        name: 'Room search',
        path: '/assets/sounds/room_seach.mp3',
      },
      {
        id: 11,
        name: 'Doors opening',
        path: '/assets/sounds/opening_doors.mp3',
      },
      {
        id: 12,
        name: 'Destroying an object',
        path: '/assets/sounds/object_destroying.mp3',
      },
      {
        id: 13,
        name: 'Steam machine',
        path: '/assets/sounds/steam_machine.mp3',
      },
      {
        id: 14,
        name: 'Writing on paper - Fast',
        path: '/assets/sounds/paper_writing_fast.mp3',
      },
      {
        id: 15,
        name: 'Writing on paper - Slow',
        path: '/assets/sounds/paper_writing_slow.mp3',
      },
      {
        id: 16,
        name: 'Torch flame',
        path: '/assets/sounds/torch_flame.mp3',
      },
      {
        id: 17,
        name: 'Scratching with stone',
        path: '/assets/sounds/stone_scratching.mp3',
      },
      {
        id: 18,
        name: 'Lighter',
        path: '/assets/sounds/lighter.mp3',
      },
      {
        id: 19,
        name: 'Table scratching',
        path: '/assets/sounds/table_scratching.mp3',
      },
      {
        id: 20,
        name: 'Dragon roar',
        path: '/assets/sounds/dragon_roar.mp3',
      },
    ],
  }),
  computed: {
    filteredSoundsList() {
      const { search, soundsList } = this;

      if (search) {
        return soundsList
          .filter((item) => item.name.toLowerCase().includes(search.toLowerCase())) || [];
      }
      return soundsList;
    },
  },
  methods: {
    playSound(soundId) {
      this.selectedSoundsId = soundId;
      this.isPlaying = true;
    },
  },
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

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border: 2px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      border-radius: 14px;
      background-color: #C4C4C4;
    }
  }

  @media (min-width: 960px) {
    & {
      top: 200px;
    }
  }
}
</style>
