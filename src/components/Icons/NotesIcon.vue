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
      d="M16.2826 3C14.913 3.41667 12.0565 6.375 11.587 14.875C15.813 7.375 16.4783 3.83333 16.2826
        3Z"
      fill="currentColor"
    />
    <path
      d="M11.587 14.875C12.0565 6.375 14.913 3.41667 16.2826 3C16.4783 3.83333 15.813 7.375 11.587
        14.875ZM11.587 14.875L11.0205 17.2878C11.0088 17.3375 11.0363 17.3879 11.0844
        17.4049L12.1766 17.7926C12.5572 17.9277 12.9698 17.9444 13.36 17.8405L14.5942
        17.512C14.9313 17.4222 15.2861 17.4222 15.6232 17.512L17.0098 17.8811C17.3037 17.9593
        17.6116 17.9695 17.9101 17.9108L19.5621 17.5861C19.8505 17.5294 20.1478 17.537 20.433
        17.6082L22 18"
        stroke="currentColor"
      />
    <path
      d="M3 10C2.44772 10 2 10.4477 2 11C2 11.5523 2.44772 12 3 12C2.44772 12 2 12.4477 2 13V17C2
        17.5523 2.44772 18 3 18H7C7.55228 18 8 17.5523 8 17V13C8 12.4477 7.55228 12 7 12C7.55228
        12 8 11.5523 8 11C8 10.4477 7.55228 10 7 10H3Z"
      fill="currentColor"
    />
  </svg>
</template>

<script>
export default {
  name: 'NotesIcon',
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
