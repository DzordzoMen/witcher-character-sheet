<template>
  <loading-screen>
    <template #resolved>
      <v-row dense class="align-self-baseline">
        <v-col cols="12" class="pb-3">
          <base-field v-model="history">
            <template #label>
              Historia postaci
            </template>

            <v-textarea
              v-model="history"
              hide-details
              auto-grow
            />
          </base-field>
        </v-col>

        <v-col cols="12" md="3" class="pb-3">
          <base-field>
            <template #label>
              Tablica ogłoszeń
            </template>

            <div class="board">
              <template v-for="(item, index) in witcherBoard">
                <div :key="index" class="pa-2">
                  <v-checkbox
                    v-model="item.done"
                    @change="(val) => setItemIsDone(index, val)"
                    hide-details
                    class="ma-0 pa-0"
                  >
                    <template #label>
                      <div class="grey--text text--darken-4 body-2 board__item">
                        <span class="board__item__name">
                          {{ item.name }}
                        </span>
                        <span class="board__item__reward">
                          {{ item.reward }}
                        </span>
                      </div>
                    </template>
                  </v-checkbox>
                </div>
              </template>
            </div>
          </base-field>

          <v-col cols="12" class="px-0 pb-0 pt-3">
            <v-row dense align="center">
              <v-col
                cols="5"
                md="12"
                class="pb-md-3"
              >
                <base-field v-model="newItemName">
                  <template #label>
                    Zlecenie
                  </template>
                </base-field>
              </v-col>

              <v-col cols="5" md="8">
                <base-field
                  v-model="newItemReward"
                  inputType="number"
                >
                  <template #label>
                    Nagroda
                  </template>
                </base-field>
              </v-col>

              <v-col cols="2" md="4" class="d-flex justify-end align-center">
                <v-btn
                  color="primary"
                  class="pa-0"
                  text
                  :disabled="!newItemName"
                  @click="addNewBoardItem()"
                  style="min-height: 24px; min-width: 36px;"
                >
                  <plus-icon />
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-col>
        <v-col cols="12" md="9">
          <base-field v-model="witcherNotes">
            <template #label>
              Notatki
            </template>

            <v-textarea
              v-model="witcherNotes"
              hide-details
              rows="28"
              auto-grow
            />
          </base-field>
        </v-col>
      </v-row>
    </template>
  </loading-screen>
</template>

<script>
import LoadingScreen from '../components/LoadingScreen.vue';
import BaseField from '../components/base/Field.vue';
import PlusIcon from '../components/Icons/PlusIcon.vue';

export default {
  name: 'Notes',
  components: {
    LoadingScreen,
    BaseField,
    PlusIcon,
  },
  data: () => ({
    newItemName: null,
    newItemReward: null,
  }),
  computed: {
    history: {
      get() {
        return this.$store.getters['WitcherInfo/WITCHER_HISTORY'];
      },
      set(val) {
        this.$store.dispatch('WitcherInfo/UPDATE_WITCHER_HISTORY', val);
      },
    },
    witcherBoard() {
      return this.$store.getters['NotesModule/WITCHER_BOARD'];
    },
    witcherNotes: {
      get() {
        return this.$store.getters['NotesModule/WITCHER_NOTES'];
      },
      set(val) {
        this.$store.dispatch('NotesModule/UPDATE_WITCHER_NOTES', val);
      },
    },
  },
  methods: {
    addNewBoardItem() {
      this.$store.dispatch('NotesModule/ADD_NEW_BOARD_ITEM', {
        name: this.newItemName,
        reward: this.newItemReward,
      });

      this.newItemName = null;
      this.newItemReward = null;
    },
    setItemIsDone(index, value) {
      this.$store.dispatch('NotesModule/UPDATE_BOARD_ITEM_DONE', {
        itemId: index,
        isDone: value,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.board {
  height: 300px;
  overflow-y: auto;
  margin-top: 14px;
  margin-bottom: 4px;

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &__name {
      flex-grow: 1;
      flex-shrink: 0;
      max-width: 82%;
    }
    &__reward {
      flex-shrink: 1;
      flex-grow: 0;
      max-width: 18%;
    }
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #fff;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #2c3e50;
  }
}

@media (min-width: 1264px) {
  .board {
    &__item {
      &__name {
        max-width: 75%;
      }
      &__reward {
        max-width: 25%;
      }
    }
  }
}
</style>
