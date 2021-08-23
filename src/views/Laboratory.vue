<template>
  <loading-screen>
    <template #resolved>
      <v-row dense class="align-self-baseline">
        <v-col cols="12" class="primary--text title font-weight-regular">
          Laboratorium
        </v-col>
        <v-col cols="12" class="secondary--text body-2 pt-0 px-3">
          Sprawdź tutaj swoje możliwości alchemiczne
        </v-col>

        <v-col cols="12" class="primary--text text-center py-4 subtitle-1 font-weight-bold">
          Wybierz rodzaj alchemii
        </v-col>

        <v-col cols="12">
          <v-row dense>
            <template v-for="type in alchemyTypes">
              <v-col cols="6" md="4" class="py-2" :key="type.id">
                <v-checkbox
                  v-model="alchemyType"
                  :value="type.value"
                  hide-details
                  class="ma-0 pa-0"
                >
                  <template #label>
                    <div class="grey--text text--darken-4">
                      {{ type.name }}
                    </div>
                  </template>
                </v-checkbox>
              </v-col>
            </template>
          </v-row>
        </v-col>

        <v-col cols="12" class="primary--text text-center py-4 subtitle-1 font-weight-bold">
          Ustaw składniki
        </v-col>

        <v-col cols="12">
          <v-row dense>
            <template v-for="(ingredient, index) in Object.keys(ingredients)">
              <v-col cols="12" md="6" :key="index" class="pa-2 px-md-4">
                <v-row no-gutters class="align-center">
                  <v-col class="grow subtitle-1">
                    {{ ingredient }}
                  </v-col>
                  <v-col class="shrink">
                    <square-field
                      v-model.number="ingredients[ingredient]"
                      :size="30"
                    />
                  </v-col>
                </v-row>
              </v-col>
            </template>
          </v-row>
        </v-col>

        <v-col cols="12" md="6" class="pt-4 px-4 pt-md-8" >
          <v-btn
            block
            depressed
            text
            color="primary"
            @click="setIngredientsFromUserCard()"
          >
            Użyj składników z karty
          </v-btn>
        </v-col>

        <v-col cols="12" md="6" class="pt-4 px-4 pt-md-8">
          <v-btn
            block
            depressed
            :disabled="!alchemyType.length"
            color="primary"
            @click="sendDataToApi()"
          >
            Wyślij
          </v-btn>
        </v-col>

        <v-col cols="12" class="pa-2 justify-center d-flex align-center">
          <loading
            v-if="loading"
            :height="64"
            :width="64"
            class="pt-4"
            color="rgba(0, 0, 0, .87)"
          />
        </v-col>

        <recipe-title v-if="result.potions.length">
          Eliksiry
        </recipe-title>
        <template v-for="(potion, index) in result.potions">
          <v-col cols="12" md="6" :key="`potion-${index}`">
            <the-recipe-card
              :name="potion.name"
              :ingredients="potion.ingredients"
              :properties="potion.properties"
            />
          </v-col>
        </template>

        <recipe-title v-if="result.oils.length">
          Oleje
        </recipe-title>
        <template v-for="(oil, index) in result.oils">
          <v-col cols="12" md="6" :key="`oil-${index}`">
            <the-recipe-card
              :name="oil.name"
              :ingredients="oil.ingredients"
              :properties="oil.properties"
            />
          </v-col>
        </template>

        <recipe-title v-if="result.bombs.length">
          Petardy
        </recipe-title>
        <template v-for="(bomb, index) in result.bombs">
          <v-col cols="12" md="6" :key="`bomb-${index}`">
            <the-recipe-card
              :name="bomb.name"
              :ingredients="bomb.ingredients"
              :properties="bomb.properties"
            />
          </v-col>
        </template>
      </v-row>
    </template>
  </loading-screen>
</template>

<script>
import TheRecipeCard from '../components/TheRecipeCard.vue';
import LoadingScreen from '../components/LoadingScreen.vue';
import SquareField from '../components/base/SquareField.vue';
import RecipeTitle from '../components/RecipeTitle.vue';
import Loading from '../components/Icons/Loading.vue';

import herbs from '../Types/HerbType';
import Api from '../axios/Api';

import Elixirs from '../assets/data/elixirs.json';
import Bombs from '../assets/data/bombs.json';
import Oils from '../assets/data/oils.json';

export default {
  name: 'Laboratory',
  components: {
    TheRecipeCard,
    LoadingScreen,
    SquareField,
    RecipeTitle,
    Loading,
  },
  data: () => {
    const ingredients = Object.keys(herbs).reduce((acc, herb) => {
      acc[herb] = 0;
      return acc;
    }, {});

    return ({
      loading: false,
      result: {
        potions: [],
        bombs: [],
        oils: [],
      },
      alchemyType: ['Potion'],
      alchemyTypes: [
        {
          id: 1,
          name: 'Eliksiry',
          value: 'Potion',
        },
        {
          id: 2,
          name: 'Oleje',
          value: 'Oil',
        },
        {
          id: 3,
          name: 'Petardy',
          value: 'Bomb',
        },
      ],
      ingredients,
    });
  },
  methods: {
    setIngredientsFromUserCard() {
      const userIngredients = Object.keys(this.ingredients).reduce((acc, ingredient) => {
        acc[ingredient] = this.$store.getters[`HerbModule/${ingredient.toUpperCase()}`];

        return acc;
      }, {});

      this.ingredients = userIngredients;
    },
    takeObjectFromArrayByName(array, nameToFind) {
      return array.filter((item) => item?.name === nameToFind)[0] || null;
    },
    sendDataToApi() {
      // set loading and clear previous result
      this.loading = true;
      this.result = {
        potions: [],
        bombs: [],
        oils: [],
      };
      // set query params for request
      const { alchemyType, ingredients } = this;
      const params = {
        alchemyProductType: alchemyType,
      };
      Object.keys(ingredients).forEach((ingredient) => {
        params[ingredient] = ingredients[ingredient];
      });
      // set request
      Api.get('/alchemy', {
        params,
      }).then(({ data }) => {
        data.forEach((item) => {
          // set data based on type
          if (item.type === 'Potion') this.result.potions.push(this.takeObjectFromArrayByName(Elixirs, item.name));
          if (item.type === 'Bomb') this.result.bombs.push(this.takeObjectFromArrayByName(Bombs, item.name));
          if (item.type === 'Oil') this.result.oils.push(this.takeObjectFromArrayByName(Oils, item.name));
        });
      }).catch((e) => {
        console.error(e);
      }).finally(() => {
        // find first recipe-title component
        const firstRecipeTtitle = this.$el.querySelector('.recipe-title');
        // if exist scroll page
        if (firstRecipeTtitle) {
          document.querySelector('html').scrollTo({
            top: this.$el.offsetHeight - firstRecipeTtitle.offsetHeight,
            left: 0,
            behavior: 'smooth',
          });
        }
        // remove loading
        this.loading = false;
      });
    },
  },
};
</script>

<style>

</style>
