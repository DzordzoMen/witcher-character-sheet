<template>
  <v-row
    no-gutters
    class="align-center square-field flex-nowrap"
    :style="`--size: ${size}px`"
  >
    <v-col class="shrink" v-if="showBtns">
      <v-btn
        :class="showBtnBorder && 'v-btn__left'"
        elevation="0"
        text
        :tile="showBtnBorder"
        @click="decreaseValue"
        :disabled="disableDecreaseBtn || +fieldValue === min"
      >
        <minus-icon />
      </v-btn>
    </v-col>
    <v-col class="rounded shrink square-field__border">
      <v-text-field
        v-model.number="fieldValue"
        hide-details
        pattern="[0-9]*"
        inputmode="numeric"
        type="number"
        :min="min"
        :max="max"
        :disabled="disabled"
      />
    </v-col>
    <v-col class="shrink" v-if="showBtns">
      <v-btn
        :class="showBtnBorder && 'v-btn__right'"
        elevation="0"
        text
        :tile="showBtnBorder"
        @click="increaseValue"
        :disabled="disableIncreaseBtn || +fieldValue === max"
      >
        <plus-icon />
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import PlusIcon from '../Icons/PlusIcon.vue';
import MinusIcon from '../Icons/MinusIcon.vue';

export default {
  name: 'SquareField',
  components: {
    PlusIcon,
    MinusIcon,
  },
  props: {
    value: {
      type: [Number, String],
    },
    size: {
      type: [Number, String],
      required: false,
      default: 24,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    showBtns: {
      required: false,
      type: Boolean,
      default: false,
    },
    showBtnBorder: {
      required: false,
      type: Boolean,
      default: false,
    },
    min: {
      required: false,
      type: Number,
      default: 0,
    },
    max: {
      required: false,
      type: Number,
      default: 100,
    },
    disableDecreaseBtn: {
      required: false,
      type: Boolean,
      default: false,
    },
    disableIncreaseBtn: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  computed: {
    fieldValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    increaseValue() {
      const val = this.fieldValue;
      this.fieldValue = (+val) + 1;
      this.$emit('onIncreaseClick');
    },
    decreaseValue() {
      const val = this.fieldValue;
      this.fieldValue = (+val) - 1;
      this.$emit('onDecreaseClick');
    },
  },
};
</script>

<style lang="scss">
.square-field {
  --size: 24px;

  &__border {
    border: 1px solid var(--primary-color);
  }

  .v-input {
    border-radius: inherit;
    font-size: 16px;
    margin: 0;
    padding: 0;
    width: var(--size);
    height: var(--size);
    place-items: center;
    display: grid;

    &--is-disabled {
      color: rgba(84, 84, 84, 0.93) !important;
      & input {
        color: rgba(84, 84, 84, 0.93) !important;
      }
    }

    &__slot:after, &__slot:before {
      content: none !important;
    }

    .v-text-field__slot {
      padding: 0; // TODO how it works with character skill inputs

      input, input[type=number] {
        -moz-appearance: textfield !important;
        appearance: textfield !important;
        -webkit-appearance: none;
        text-align: center;
        padding: 2px 0;
      }

      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
      }
    }

    &:hover {
      outline: none;
      outline-style: none;
      box-shadow: none;
    }
  }

  .v-btn {
    height: unset !important;
    min-width: unset !important;
    padding: unset !important;
    background: transparent !important;
    background-color: transparent !important;
    display: flex;
    margin: 0px;

    &__left, &__right {
      border: 1px solid #2c3e50;
    }

    &__left {
      border-right: none;
      margin-right: -2px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &__right {
      border-left: none;
      margin-left: -2px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    &--disabled {
      background-color: transparent !important;
    }
  }

  .theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
    background-color: transparent !important;
  }
}

</style>
