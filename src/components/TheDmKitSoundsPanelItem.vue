<template>
  <div
    class="sounds-panel-item"
    :class="{ 'sounds-panel-item--selected': (isPlaying && isSelected) }"
  >
    <div class="sounds-panel-item__title">
      {{ item.name }}
    </div>
    <v-icon
      dark
      @click="$emit(isPlaying && isSelected ? 'stop' : 'play', item.id)"
    >
      {{ isPlaying && isSelected ? 'mdi-pause' : 'mdi-volume-high' }}
    </v-icon>
  </div>
</template>

<script>
export default {
  name: 'TheDmKitSoundsPanelItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
    isSelected: {
      type: Boolean,
      required: false,
      default: null,
    },
    isPlaying: {
      type: Boolean,
      required: false,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.sounds-panel-item {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 12px;
  padding: 8px;
  border-radius: 2px;
  align-content: center;
  color: inherit;

  &__title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 80%;
  }

  &--selected, &:hover {
    background-color: rgba(97, 97, 97, 24%);
  }
}
</style>
