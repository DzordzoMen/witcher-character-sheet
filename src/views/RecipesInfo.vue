<template>
  <loading-screen>
    <template #resolved>
      <v-row dense class="align-self-baseline">
        <v-col
          cols="12"
          class="primary--text text-center recipe-title title font-weight-regular"
        >
          Eliksiry
        </v-col>

        <template v-for="(elixir, index) in Elixirs">
          <v-col cols="12" md="6" :key="`elixir-${index}`">
            <the-recipe-card
              :name="elixir.name"
              :recipe="elixir.recipe"
              :properties="elixir.properties"
            />
          </v-col>
        </template>
        <v-col
          cols="12"
          class="primary--text text-center recipe-title title font-weight-regular"
        >
          Oleje
        </v-col>

        <template v-for="(oil, index) in Oils">
          <v-col cols="12" md="6" :key="`oil-${index}`">
            <the-recipe-card
              :name="oil.name"
              :recipe="oil.recipe"
              :properties="oil.properties"
            />
          </v-col>
        </template>
        <v-col
          cols="12"
          class="primary--text text-center recipe-title title font-weight-regular"
        >
          Petardy
        </v-col>

        <template v-for="(bomb, index) in Bombs">
          <v-col cols="12" md="6" :key="`bomb-${index}`">
            <the-recipe-card
              :name="bomb.name"
              :recipe="bomb.recipe"
              :properties="bomb.properties"
            />
          </v-col>
        </template>
      </v-row>
    </template>
  </loading-screen>
</template>

<script>
import LoadingScreen from '../components/LoadingScreen.vue';
import TheRecipeCard from '../components/TheRecipeCard.vue';

import Elixirs from '../assets/data/elixirs.json';
import Bombs from '../assets/data/bombs.json';
import Oils from '../assets/data/oils.json';

export default {
  name: 'RecipesInfo',
  components: {
    LoadingScreen,
    TheRecipeCard,
  },
  data: () => ({
    Elixirs,
    Bombs,
    Oils,
  }),
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
