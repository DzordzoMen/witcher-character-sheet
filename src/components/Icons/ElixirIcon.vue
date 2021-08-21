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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.22884 13.0933C1.0793 13.7047 1 14.3441 1 15C1 19.4183 4.58172 23 9 23C13.4183 23 17
        19.4183 17 15C17 14.0888 16.8471 13.2108 16.5657 12.3938L22.7276 6.26726L17.7921
        1.30328L11.6208 7.43912C10.7998 7.15457 9.91795 6.99999 9 6.99999C5.24426 6.99999 2.09404
        9.58734 1.23277 13.0773C1.22938 13.0795 1.22601 13.0817 1.22265 13.084L1.22884
        13.0933ZM2.11611 13.7235C1.34076 17.9317 4.67971 22 9 22C13.0991 22 16.3802 18.3316 15.9629
        14.2752C14.5292 14.8071 11.9065 15.339 8.79693 13.9569C5.72492 12.5916 3.22804 13.1747
        2.11611 13.7235ZM2.45548 12.5109C3.98117 12.0089 6.40403 11.7991 9.20307 13.0431C12.1387
        14.3478 14.5728 13.7575 15.7852 13.2724C15.6865 12.8836 15.5553 12.5078 15.3946
        12.148L21.3134 6.26319L17.788 2.71749L11.8692 8.6023L11.8888 8.622L11.8617 8.60977C10.9881
        8.21794 10.0195 7.99999 9 7.99999C6.0107 7.99999 3.45904 9.87376 2.45548 12.5109Z"
      fill="currentColor"
    />
    <circle
      cx="6"
      cy="15"
      r="1"
      fill="currentColor"
    />
    <circle
      cx="9"
      cy="16"
      r="1"
      fill="currentColor"
    />
    <circle
      cx="6"
      cy="18"
      r="1"
      fill="currentColor"
    />
  </svg>
</template>

<script>
export default {
  name: 'ElixirIcon',
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

<style lang="scss" scoped>
</style>
