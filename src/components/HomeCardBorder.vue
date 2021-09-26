<template>
  <div
    class="card-border"
    :class="`card-border-${position}`"
  >
    <div class="card-border__line card-border__line-left" />
    <div class="card-border__line card-border__line-right" />
  </div>
</template>

<script>
export default {
  name: 'HomeCardBorder',
  props: {
    position: {
      type: String,
      required: false,
      validator: (val) => [
        'left',
        'right',
        'bottom-left',
        'bottom-right',
      ].includes(val),
      default: 'left',
    },
  },
};
</script>

<style lang="scss" scoped>
.card-border {
  position: absolute;
  width: 30px;
  height: 30px;

  &-left {
    top: 0;
    left: 0;
    transform: rotate(0deg);
  }

  &-right {
    top: 0;
    right: 0;
    transform: rotate(90deg);
  }

  &-bottom-left {
    bottom: 0;
    left: 0;
    transform: rotate(-90deg);
  }

  &-bottom-right {
    bottom: 0;
    right: 0;
    transform: rotate(-180deg);
  }

  &__line {
    background-color: rgba(0, 0, 0, 0.87);
    width: 80px;
    height: 3px;
    position: absolute;
    top: 55%;
    left: -25px;

    &-left {
      transform: rotate(296deg);
    }
    &-right {
      transform: rotate(140deg);
    }
  }
}

.theme--light {
  .card-border {
    &__line {
      background-color: rgba(0, 0, 0, 0.87);
    }
  }
}
.theme--dark {
  .card-border {
    &__line {
      background-color: rgba(255, 255, 255, 0.47);
    }
  }
}
</style>
