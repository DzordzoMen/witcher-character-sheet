<template>
  <v-card
    rounded
    elevation="0"
    class="textPrimary--text"
    :class="expanded && 'fill-height'"
  >
    <v-card-title
      class="subtitle-1 font-weight-bold justify-center pa-3"
      @click="expanded = !expanded"
    >
      {{ name }}
    </v-card-title>

    <v-expand-transition>
      <v-card-text class="text-center pa-0" v-show="expanded">
        <v-row no-gutters class="px-4 pb-4">
          <v-col cols="8" class="text-left">
            <div class="body-1">
              Właściwości
            </div>
            <v-list class="body-2">
              <template v-for="(property, index) in properties">
                <v-list-item :key="`property-${index}`" class="pa-0">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ property }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-col>
          <v-col cols="4" class="text-right">
            <div class="body-1">
              Składniki
            </div>
            <v-list class="body-2">
              <template v-for="(ingredient, index) in ingredients">
                <v-list-item :key="`ingredient-${index}`" class="pa-0">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ ingredient.amount }}x {{ ingredient.name }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-col>
        </v-row>
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'TheRecipeCard',
  props: {
    name: {
      type: String,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    properties: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    expanded: false,
  }),
};
</script>

<style lang="scss" scoped>
.v-card {
  border: 1px solid var(--primary-color);

  &__title {
    cursor: pointer;
  }
}
.v-list-item {
  min-height: 30px;

  &__content {
    padding: 6px 0;
  }

  &__title {
    overflow: hidden;
    text-overflow: unset;
    white-space: normal;
    font-size: inherit;
  }
}
</style>
