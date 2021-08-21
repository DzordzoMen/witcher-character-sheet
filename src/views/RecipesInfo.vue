<template>
  <loading-screen>
    <template #resolved>
      <v-row dense class="align-self-baseline">
        <recipe-title>
          Eliksiry
        </recipe-title>

        <template v-for="(elixir, index) in Elixirs">
          <v-col cols="12" md="6" :key="`elixir-${index}`">
            <the-recipe-card
              :name="elixir.name"
              :recipe="elixir.recipe"
              :properties="elixir.properties"
            />
          </v-col>
        </template>
        <recipe-title>
          Oleje
        </recipe-title>

        <template v-for="(oil, index) in Oils">
          <v-col cols="12" md="6" :key="`oil-${index}`">
            <the-recipe-card
              :name="oil.name"
              :recipe="oil.recipe"
              :properties="oil.properties"
            />
          </v-col>
        </template>
        <recipe-title>
          Petardy
        </recipe-title>

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
import RecipeTitle from '../components/RecipeTitle.vue';

import Elixirs from '../assets/data/elixirs.json';
import Bombs from '../assets/data/bombs.json';
import Oils from '../assets/data/oils.json';

export default {
  name: 'RecipesInfo',
  components: {
    LoadingScreen,
    TheRecipeCard,
    RecipeTitle,
  },
  data: () => ({
    Elixirs,
    Bombs,
    Oils,
  }),
};
</script>
