<template>
  <v-col
    cols="12"
    class="primary--text text-center recipe-title title font-weight-regular"
  >
    <slot />
  </v-col>
</template>

<script>
export default {
  name: 'RecipeTitle',
};
</script>

<style lang="scss" scoped>
.recipe-title {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:first-child) {
    padding-top: 24px;
  }

  &::before, &::after {
    content: ' ';
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.47);
    border-radius: 8px;
    width: 38%;
    height: 5px;
  }
}
</style>
