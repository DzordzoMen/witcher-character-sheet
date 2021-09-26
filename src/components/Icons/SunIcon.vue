<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="`color: ${color}`"
  >
    <circle
      cx="12"
      cy="12"
      r="7"
      fill="currentColor"
    />
    <rect
      x="11.5"
      y="1"
      width="1"
      height="3"
      rx="0.5"
      fill="currentColor"
    />
    <rect
      x="11.5"
      y="20"
      width="1"
      height="3"
      rx="0.5"
      fill="currentColor"
    />
    <rect
      x="1"
      y="13"
      width="1"
      height="3"
      rx="0.5"
      transform="rotate(-90 1 13)"
      fill="currentColor"
    />
    <rect
      x="20"
      y="13"
      width="1"
      height="3"
      rx="0.5"
      transform="rotate(-90 20 13)"
      fill="currentColor"
    />
    <rect
      x="19.5"
      y="3.5"
      width="1"
      height="3"
      rx="0.5"
      transform="rotate(45 19.5 3.5)"
      fill="currentColor"
    />
    <rect
      width="1"
      height="3"
      rx="0.5"
      transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 19.5 20.3284)"
      fill="currentColor"
    />
    <rect
      x="5.5"
      y="17.5"
      width="1"
      height="3"
      rx="0.5"
      transform="rotate(45 5.5 17.5)"
      fill="currentColor"
    />
    <rect
      width="1"
      height="3"
      rx="0.5"
      transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 5.5 6.32843)"
      fill="currentColor"
    />
  </svg>
</template>

<script>
export default {
  name: 'SunIcon',
  props: {
    width: {
      type: [Number, String],
      required: false,
      default: 24,
    },
    height: {
      type: [Number, String],
      required: false,
      default: 24,
    },
    color: {
      type: String,
      required: false,
      default: 'black',
    },
  },
};
</script>

<style lagn="scss" scoped>
</style>
