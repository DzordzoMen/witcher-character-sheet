<template>
  <div class="base-field rounded-lg relative">
    <div class="absolute field-label textPrimary--text">
      <slot name="label" />
    </div>
    <slot name="default">
      <v-row no-gutters class="align-center">
        <v-col class="shrink" v-if="showBtns">
          <v-btn
            @click="decreaseValue"
            elevation="0"
            text
            :disabled="disableDecreaseBtn || +fieldValue === min"
          >
            <minus-icon />
          </v-btn>
        </v-col>
        <v-col class="grow">
          <v-text-field
            v-model="fieldValue"
            hide-details
            :disabled="disabled"
          />
        </v-col>
        <v-col class="shrink" v-if="showBtns">
          <v-btn
            @click="increaseValue"
            elevation="0"
            text
          >
            <plus-icon />
          </v-btn>
        </v-col>
      </v-row>
    </slot>
  </div>
</template>

<script>
import PlusIcon from '../Icons/PlusIcon.vue';
import MinusIcon from '../Icons/MinusIcon.vue';

export default {
  name: 'Field',
  components: {
    PlusIcon,
    MinusIcon,
  },
  props: {
    value: {
      type: [String, Number],
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    inputType: {
      required: false,
      type: String,
      default: 'text',
      validator: (prop) => ['number', 'text'].includes(prop),
    },
    showBtns: {
      required: false,
      type: Boolean,
      default: false,
    },
    min: {
      required: false,
      type: Number,
      default: 0,
    },
    disableDecreaseBtn: {
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
        if (this.inputType === 'number') {
          const formatedVal = Number(value);
          this.$emit('input', formatedVal);
        }
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
.base-field {
  border: 1px solid var(--primary-color);
  position: relative;
  background: inherit;

  .v-input {
    border-radius: inherit;
    font-size: 16px;
    margin: 0;
    padding: 6px 0 0 ;
    width: 100%;
    height: 100%;

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
      padding: 0 12px; // TODO how it works with character skill inputs

      input {
        text-align: center;
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
    margin: 4px;

    &--disabled {
      background-color: transparent !important;
    }
  }

  .theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
    background-color: transparent !important;
  }

  .field-label {
    background: #fff;
    top: -10px;
    left: 12px;
    padding: 0 4px;
  }
}

.theme--light {
  .field-label {
    background: #fff;
  }
}
.theme--dark {
  .field-label {
    background: #121212;
  }
}
</style>
