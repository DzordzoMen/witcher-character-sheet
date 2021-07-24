<template>
  <div class="base-field rounded-lg relative">
    <div class="absolute field-label primary--text">
      <slot name="label" />
    </div>
    <slot name="default">
      <v-text-field
        v-model="fieldValue"
        hide-details
        :disabled="disabled"
      />
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Field',
  props: {
    value: {
      type: [String, Number],
      required: true,
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
};
</script>

<style lang="scss">
  .base-field {
    border: 1px solid black;

    .v-input {
      border-radius: inherit;
      font-size: 14px;
      margin: 0;
      padding: 6px 0 0 ;
      width: 100%;
      height: 100%;

      &--is-disabled {
        color: rgba(0, 0, 0, 0.87) !important;
        & input {
          color: rgba(0, 0, 0, 0.87) !important;
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
    .field-label {
      background: #fff;
      top: -10px;
      left: 12px;
      padding: 0 4px;
    }
  }
</style>
