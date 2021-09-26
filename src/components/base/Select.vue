<template>
  <div class="select primary--text" role="tree">
    <div class="select__clear" @click="clearSelected()" v-if="selected && removable">
      <svg class="icon-inherit" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
      </svg>
    </div>
    <div class="select__selected" @click="showOptions()">
      <slot name="selected" :selected="selected">
        {{ selected }}
      </slot>
    </div>
    <slot name="icon">
      <div
        class="select__icon"
        @click="showOptions()"
        :class="optionsMenu && 'select__icon-animation'"
      >
        <svg
          class="icon-inherit"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
          />
        </svg>
      </div>
    </slot>
    <div class="options" role="presentation" v-if="optionsMenu">
      <template v-for="(item, index) in items">
        <div
          :key="index"
          class="options__item"
          role="treeitem"
          @click="selectItem(item)"
          @mouseover="mouseOverHandler(item)"
          @mouseleave="mouseLeaveHandler(item)"
          @touchstart="mouseOverHandler(item)"
          @touchend="mouseLeaveHandler(item)"
          :aria-disabled="disableItem(item)"
          :class="{
            'options__item-selected': itemIsSelected(item.name),
            'options__item-disabled': disableItem(item)
          }"
        >
          <slot name="item" :item="item">
            {{ item.name }}
          </slot>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    value: {
      type: String,
    },
    items: {
      type: Array,
      required: true,
    },
    removable: {
      type: Boolean,
      required: false,
      default: true,
    },
    closeOnClickOutside: {
      type: Boolean,
      required: false,
      default: true,
    },
    mouseOverHandler: {
      type: Function,
      required: false,
      default: () => null,
    },
    mouseLeaveHandler: {
      type: Function,
      required: false,
      default: () => null,
    },
    disableItem: {
      type: Function,
      required: false,
      default: () => null,
    },
  },
  data() {
    return {
      selected: this.value,
      optionsMenu: false,
    };
  },
  computed: {
    selectedItem: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  mounted() {
    if (this.closeOnClickOutside) {
      document.addEventListener('click', this.clickOutsideHandler);
    }
  },
  beforeDestroy() {
    document.removeEventListener('click', this.clickOutsideHandler);
  },
  methods: {
    clickOutsideHandler(event) {
      const { target } = event;
      const { $el } = this;

      if (!$el.contains(target)) this.optionsMenu = false;
    },
    showOptions() {
      this.optionsMenu = !this.optionsMenu;
    },
    selectItem(item) {
      this.selected = item.name;
      this.selectedItem = item.name;
      this.showOptions();
      this.mouseLeaveHandler(item);
    },
    itemIsSelected(item) {
      const { selected } = this;
      return selected === item;
    },
    clearSelected() {
      this.selected = '';
      this.selectedItem = '';
    },
  },
};
</script>

<style scoped>
@media (min-width: 1264px) {
  .options__item {
    line-height: 25px !important;
  }
}

.select {
  display: flex;
  height: 100%;
  min-height: 42px;
  padding: 8px;
  text-align: center;
  flex-direction: row;
  flex-grow: 1;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  user-select: none;
}
.select__selected {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  cursor: pointer;
  min-height: 20px;
  height: 100%;
  max-width: 80%;
}
.select__icon, .select__clear {
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  height: 20px;
  width: 20px;
  transition: all 0.33s ease-in-out;
}
.select__icon-animation {
  transform: rotate(-90deg);
}
.select__clear:hover, .select__icon:hover {
  cursor: pointer;
}
.icon-inherit {
  width: inherit;
  height: inherit;
}
.options {
  background-color: #fff;
  width: 90%;
  /* overflow: hidden; */
  border: 1px solid #2c3e50;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  position: absolute;
  top: 100%;
  left: 5%;
  right: 0;
  z-index: 5;
  animation: shake-it 0.33s ease-in-out;
}
.options__item {
  line-height: 40px;
  padding: 2px 4px;
}
.options__item:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}
.options__item:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.17);
}
.options__item-disabled {
  background-color: rgba(0, 0, 0, 0.12);
}
.options__item-disabled:hover {
  cursor: not-allowed;
}
.options__item-selected {
  background-color: rgba(0, 0, 0, 0.17);
}
.options__item-selected:hover {
  cursor: default;
}

.options .options__item:nth-child(n) {
  border-bottom: 1px solid black;
}
.options .options__item:last-child {
  border: none;
}

/* TODO fix */
@keyframes show-list {
  from {
    opacity: 0;
     visibility: hidden;
     pointer-events: none;
  }
  to {
    opacity: 1;
     visibility: visible;
     pointer-events: all;
  }
}
</style>
