<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="`color: ${color}`"
  >
    <path
      d="M2.5 13V13C2.22386 13 2 12.7761 2 12.5V5C2 4.72386 2.22386 4.5 2.5 4.5H21.5C21.7761 4.5 22
        4.72386 22 5V12.5C22 12.7761 21.7761 13 21.5 13V13M2.5 13V20.7C2.5 20.8657 2.63431 21 2.8
        21H21.2C21.3657 21 21.5 20.8657 21.5 20.7V13M2.5 13H5.5M21.5 13H19M7 13H17.5"
      stroke="currentColor"
    />
    <path
      d="M5.5 4.5V17L6.17 17.8933C6.21 17.9467 6.29 17.9467 6.33 17.8933L7 17V4.5"
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0.6"
    />
    <path
      d="M17.5 4.5V17L18.17 17.8933C18.21 17.9467 18.29 17.9467 18.33 17.8933L19 17V4.5"
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0.6"
    />
  </svg>
</template>

<script>
export default {
  name: 'SaddlebagsIcon',
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
