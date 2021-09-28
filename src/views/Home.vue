<template>
  <v-container>
    <v-row class="justify-center align-self-baseline">
      <v-col cols="12" lg="10" class="about-section pb-0">
        <h1 class="text-center pb-5">
          Witaj w wirtualnej Karcie postaci do Wiedźmina
        </h1>
        <p class="body-2">
          Jest to fanowska wersja papierowej gry do Wiedźmina, stworzysz tutaj
          swoją własną postać, albo przejdziesz do już stworzonej. <br />
          Jeżeli nie chcesz używać wirtualnej wersji możesz pobrać
          <a
            href="/character-sheet.pdf"
            class="textPrimary--text"
            download="character-sheet"
          >
            papierową wersje
          </a>
          i bawić się ze znajomymi.
        </p>

        <v-btn
          class="d-flex mx-auto elevation-0 rounded-b-0"
          @click="showForm = !showForm"
          color="primary"
        >
          Stwórz własną postać
        </v-btn>
      </v-col>

      <v-expand-transition>
        <v-col cols="12" md="10" lg="7" class="pa-0 px-1" v-show="showForm">
          <v-row dense class="justify-center mt-5 mb-2">
            <v-col cols="5" md="4">
              <base-field
                v-model="form.name"
                style="min-height: 100%"
              >
                <template #label>
                  Imię
                </template>
              </base-field>
            </v-col>
            <v-col cols="5" md="4">
              <base-field
                v-model="form.origin"
                style="min-height: 100%"
              >
                <template #label>
                  Pochodzenie
                </template>
              </base-field>
            </v-col>
            <v-col cols="10" md="4" lg="4" :class="$vuetify.breakpoint.smAndDown && 'pt-3'">
              <base-field v-model="form.school">
                <template #label>
                  Szkoła
                </template>
                <base-select
                  v-model="form.school"
                  :items="schools"
                  :removable="false"
                />
              </base-field>
            </v-col>

            <v-col cols="12" v-if="form.school">
              <h3 class="text-center">
                Bonusy ze Szkoły
              </h3>
            </v-col>
            <template v-for="(bonuses, index) in schoolBonuses">
              <v-col cols="12" :key="index">
                <v-radio-group
                  v-model="form.bonuses[index]"
                  hide-details
                  class="pa-0 ma-0"
                  mandatory
                  :column="$vuetify.breakpoint.smAndDown"
                  :row="!$vuetify.breakpoint.smAndDown"
                >
                  <template v-for="(bonus, bonusKey) in bonuses">
                    <v-radio
                      :key="bonusKey"
                      :label="bonus"
                      :value="bonus"
                    >
                    <template #label>
                      {{ takeTranslate(bonus) }}
                    </template>
                    </v-radio>
                  </template>
                </v-radio-group>
                <v-divider class="my-3" />
              </v-col>
            </template>

            <v-col cols="12" class="pt-3">
              <base-field v-model="form.history">
                <template #label>
                  Historia postaci
                </template>

                <v-textarea
                  v-model="form.history"
                  hide-details
                  auto-grow
                />
              </base-field>
            </v-col>

            <v-col
              cols="12"
              class="textPrimary--text text-center"
              style="text-decoration: underline; cursor: pointer;"
              @click="showAdvancedSettings()"
            >
              Zaawansowane tworzenie postaci
            </v-col>

            <v-expand-transition>
              <v-col cols="12" v-show="showAdvanced" class="pa-0">
                <v-row no-gutters>
                  <v-col cols="12" md="6" class="pa-2">
                    <v-row dense class="pa-2 rounded-lg border-primary">
                      <v-col cols="12" v-for="type in types.Strength" :key="type">
                        <v-row no-gutters>
                          <v-col
                            class="grow"
                            :class="type === 'Strength' && 'strength--text font-weight-bold pb-3'"
                          >
                            {{ takeTranslate(type) }}
                          </v-col>
                          <v-col class="shrink">
                            <square-field
                              v-model.number="advancedForm[type]"
                              :min="-10"
                              :max="10"
                            />
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>

                  <v-col cols="12" md="6" class="pa-2">
                    <v-row dense class="pa-2 rounded-lg border-primary">
                      <v-col cols="12" v-for="type in types.Dexterity" :key="type">
                        <v-row no-gutters>
                          <v-col
                            class="grow"
                            :class="type === 'Dexterity' && 'dexterity--text font-weight-bold pb-3'"
                          >
                            {{ takeTranslate(type) }}
                          </v-col>
                          <v-col class="shrink">
                            <square-field
                              v-model.number="advancedForm[type]"
                              :min="-10"
                              :max="10"
                            />
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>

                  <v-col cols="12" md="6" class="pa-2">
                    <v-row dense class="pa-2 rounded-lg border-primary">
                      <v-col cols="12" v-for="type in types.Signs" :key="type">
                        <v-row no-gutters>
                          <v-col
                            class="grow"
                            :class="type === 'Signs' && 'signs--text font-weight-bold pb-3'"
                          >
                            {{ takeTranslate(type) }}
                          </v-col>
                          <v-col class="shrink">
                            <square-field
                              v-model.number="advancedForm[type]"
                              :min="-10"
                              :max="10"
                            />
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>

                  <v-col cols="12" md="6" class="pa-2">
                    <v-row dense class="pa-2 rounded-lg border-primary">
                      <v-col cols="12" v-for="type in types.Mind" :key="type">
                        <v-row no-gutters>
                          <v-col
                            class="grow"
                            :class="type === 'Mind' && 'mind--text font-weight-bold pb-3'"
                          >
                            {{ takeTranslate(type) }}
                          </v-col>
                          <v-col class="shrink">
                            <square-field
                              v-model.number="advancedForm[type]"
                              :min="-10"
                              :max="10"
                            />
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-expand-transition>

            <v-col cols="10" md="8" class="pt-4 d-flex align-center">
              <v-btn
                color="primary"
                block
                class="mx-auto d-flex"
                :disabled="!form.name || !form.school"
                @click="createWitcher()"
              >
                Stwórz postać
              </v-btn>

              <loading
                v-if="creatingWitcher"
                :width="36"
                :height="36"
                :color="$vuetify.theme.dark ? 'rgba(255, 255, 255, .87)' : 'rgba(0, 0, 0, .87)'"
              />
            </v-col>

            <v-col cols="10" md="8">
              <v-divider class="my-5" />
            </v-col>

            <v-col cols="10" md="8" class="d-flex align-center">
              <v-btn
                block
                color="textPrimary"
                class="relative"
                text
              >
                <v-icon class="mr-2">
                  mdi-tray-arrow-down
                </v-icon>
                Importuj karte
                <v-file-input
                  prepend-icon=""
                  accept=".json"
                  @change="(file) => importWitcher(file)"
                  hide-details
                  class="absolute pa-0 ma-0 import-witcher-input"
                />
              </v-btn>
            </v-col>

            <v-col
              cols="10"
              md="8"
              class="error--text text--darken-1"
              v-if="showImportErrors"
            >
              Wygląda na to, że Twoja karta zawiera niepoprawne dane
            </v-col>
          </v-row>
        </v-col>
      </v-expand-transition>

      <v-col cols="12" lg="10">
        <v-divider class="home-divider" />
      </v-col>

      <v-col cols="12" lg="10">
        <h2 class="text-center">
          Twoje karty postaci
        </h2>
      </v-col>

      <v-col cols="12" lg="8">
        <v-container>
          <v-row dense>
            <template v-for="(witcher, index) in witchers">
              <v-col cols="6" lg="3" :key="index">
                <!-- TODO debug id -->
                <home-card
                  v-bind="witcher"
                  :id="index"
                />
              </v-col>
            </template>

            <v-col
              cols="12"
              class="body-1 text-center secondary--text"
              :class="$vuetify.theme.dark && 'text--lighten-4'"
              v-if="!witchers.length"
            >
              Wygląda na to, że nie masz jeszcze stworzonej postaci
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HomeCard from '../components/HomeCard.vue';
import BaseField from '../components/base/Field.vue';
import BaseSelect from '../components/base/Select.vue';
import Loading from '../components/Icons/Loading.vue';
import SquareField from '../components/base/SquareField.vue';

// types
import Strength from '../Types/StrengthSkillType';
import Dexterity from '../Types/DexteritySkillType';
import Signs from '../Types/SignsSkillType';
import Mind from '../Types/MindSkill';

// methods
import { availableSchools, schoolBonuses } from '../methods/availableSchools';
import { createNewWitcher, WitcherInfo, importWitcher } from '../database';
import takeTranslate from '../dictionary/pl';

export default {
  name: 'Home',
  components: {
    Loading,
    HomeCard,
    BaseField,
    BaseSelect,
    SquareField,
  },
  data: () => {
    const advancedForm = {};

    Object.keys({
      ...Strength,
      ...Dexterity,
      ...Signs,
      ...Mind,
    }).forEach((key) => {
      advancedForm[key] = 0;
    });

    return ({
      showForm: false,
      creatingWitcher: false,
      showAdvanced: false,
      showImportErrors: false,
      form: {
        name: '',
        origin: '',
        level: 1,
        school: '',
        bonuses: [],
        history: '',
      },
      advancedForm,
      witchers: [],
      types: {
        Strength,
        Dexterity,
        Signs,
        Mind,
      },
    });
  },
  computed: {
    schools() {
      const witcherSchools = availableSchools();
      return witcherSchools.map((school) => ({ name: school }));
    },
    schoolBonuses() {
      const { form: { school } } = this;
      const bonuses = schoolBonuses(school);
      return bonuses || [];
    },
  },
  created() {
    this.getAllWitchers();
  },
  methods: {
    takeTranslate,
    getAllWitchers() {
      WitcherInfo.getAll().then((data) => {
        this.witchers = data;
      });
    },
    showAdvancedSettings() {
      this.showAdvanced = !this.showAdvanced;
    },
    createWitcher() {
      this.creatingWitcher = true;
      const {
        form: {
          name,
          origin,
          level,
          school,
          bonuses,
          history,
        },
        advancedForm,
      } = this;

      setTimeout(() => {
        createNewWitcher(
          name,
          origin,
          school,
          history,
          advancedForm,
          bonuses,
          level,
        ).then((witcherId) => {
          this.$router.push({ name: 'WitcherCard', params: { id: witcherId } });
        });
      }, 0);
    },
    importWitcher(file) {
      if (file) {
        const reader = new FileReader();

        reader.onload = ({ target: { result } }) => {
          try {
            const card = JSON.parse(result);
            if (
              card?.witcher
              && card?.strenght
              && card?.dexterity
              && card?.signs
              && card?.mind
              && card?.herbs
              && card?.equipment
              && card?.saddlebags
              && card?.bombs
              && card?.oils
              && card?.notes
            ) {
              this.importWitcherFromFile(card);
            } else {
              throw new Error('Wrong file structure');
            }
          } catch (error) {
            console.error(error);
            this.showImportErrors = true;
          }
        };
        reader.readAsText(file);
      }
    },
    async importWitcherFromFile(witcherCard) {
      importWitcher(witcherCard).then(() => {
        Object.assign(this.$data, this.$options.data());

        this.getAllWitchers();
      });
    },
  },
};
</script>

<style lang="scss">
.import-witcher-input {
  opacity: 0;
  width: 100%;
  cursor: pointer;

  .v-file-input__text {
    cursor: pointer !important;
  }
}
</style>

<style lang="scss" scoped>
.about-section {
  border: 2px solid #2c3e50;
  border-top: none;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}
.home-divider {
  border-width: medium;
  border-radius: 8px;
}

.theme--light {
  .home-divider {
    border-color: rgba(0, 0, 0, 0.67) !important;
  }
}
.theme--dark {
  .home-divider {
    border-color: rgba(255, 255, 255, 0.37) !important;
  }
}
</style>
