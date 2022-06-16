<template>
  <v-container>
    <v-row dense class="pt-16">
      <v-col cols="12" class="dm-kit__toolbar">
        <v-row no-gutters class="d-flex align-center justify-space-between">
          <v-col cols="12" md="4" class="dm-kit__title">
            Round {{ round }}

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  color="textPrimary"
                  dark
                  size="30"
                  v-bind="attrs"
                  v-on="on"
                  @click="setNextItem()"
                >
                  mdi-arrow-right-thick
                </v-icon>
              </template>
              <span>Next</span>
            </v-tooltip>
          </v-col>

          <v-col cols="12" md="2" class="d-flex justify-end" style="gap: 20px">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  color="textPrimary"
                  dark
                  size="28"
                  v-bind="attrs"
                  v-on="on"
                  @click="addNewColumn()"
                >
                  mdi-plus-thick
                </v-icon>
              </template>
              <span>Add new row</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  color="textPrimary"
                  dark
                  size="28"
                  v-bind="attrs"
                  v-on="on"
                  @click="sortColumns()"
                >
                  mdi-sort-numeric-ascending
                </v-icon>
              </template>
              <span>Sort rows</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  color="textPrimary"
                  dark
                  size="28"
                  v-bind="attrs"
                  v-on="on"
                  @click="refreshRounds()"
                >
                  mdi-autorenew
                </v-icon>
              </template>
              <span>Refresh rounds</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  color="textPrimary"
                  dark
                  size="28"
                  v-bind="attrs"
                  v-on="on"
                  @click="clearColumns()"
                >
                  mdi-delete
                </v-icon>
              </template>
              <span>Clear all</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="items"
          no-data-text="No data, to add a new row click the button below"
          hide-default-footer
          :items-per-page="9999"
          fixed-header
        >
          <template #body="{ items, isMobile }" v-if="items.length">
            <tbody>
              <tr
                :class="{
                  'v-data-table__mobile-table-row': isMobile,
                  'active-row': currentItemId === index,
                }"
                v-for="(item, index) in items"
                :key="index"
              >
                <td>
                  <v-text-field
                    v-model.number="item.initiative"
                    type="number"
                    step="1"
                    placeholder="0"
                    hide-details
                    solo
                    flat
                    class="ma-0 pa-0"
                  />
                </td>
                <td>
                  <v-text-field
                    v-model.number="item.name"
                    hide-details
                    placeholder="Name"
                    solo
                    flat
                    class="ma-0 pa-0"
                  />
                </td>
                <td>
                  <v-text-field
                    v-model.number="item.health"
                    type="number"
                    placeholder="Health"
                    step="1"
                    hide-details
                    solo
                    flat
                    class="ma-0 pa-0"
                  />
                </td>
                <td>
                  <v-text-field
                    v-model.number="item.armor"
                    type="number"
                    step="1"
                    placeholder="Armor"
                    hide-details
                    solo
                    flat
                    class="ma-0 pa-0"
                  />
                </td>
                <td class="text-end">
                  <v-icon
                    color="strength"
                    dark
                    size="28"
                    @click="deleteItem(item)"
                  >
                    mdi-delete
                  </v-icon>
                </td>
              </tr>
            </tbody>
          </template>

          <template #footer>
            <div class="dm-kit__table-footer">
              <v-btn width="220px" color="primary" depressed @click="addNewColumn()">
                + Add new row
              </v-btn>
            </div>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'DmKit',
  data: () => ({
    round: 1,
    currentItemId: 0,
    headers: [
      {
        text: 'Initiative',
        align: 'start',
        sortable: false,
        value: 'initiative',
        width: '20%',
      },
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name',
        width: '40%',
      },
      {
        text: 'HP',
        align: 'start',
        sortable: false,
        value: 'health',
        width: '16%',
      },
      {
        text: 'AC',
        align: 'start',
        sortable: false,
        value: 'armor',
        width: '16%',
      },
      {
        text: '',
        align: 'end',
        sortable: false,
        value: 'actions',
      },
    ],
    items: [
      {
        name: 'Test',
        initiative: 10,
        armor: 5,
        health: 100,
      },
      {
        name: 'Test2',
        initiative: 12,
        armor: 5,
        health: 100,
      },
    ],
  }),
  methods: {
    addNewColumn() {
      this.items.push({
        name: '',
        initiative: null,
        armor: null,
        health: null,
      });
    },
    setNextItem() {
      const { items: { length }, currentItemId } = this;
      if (!length) return;

      if ((currentItemId + 1) > length) {
        this.currentItemId = 0;
      } else if (length === (currentItemId + 1)) {
        this.round += 1;
        this.currentItemId = 0;
      } else {
        this.currentItemId += 1;
      }
    },
    sortColumns() {
      this.items.sort((a, b) => (b.initiative - a.initiative));
    },
    refreshRounds() {
      this.round = 1;
      this.currentItemId = 0;
    },
    clearColumns() {
      this.items = [];
      for (let i = 0; i < 3; i += 1) {
        this.addNewColumn();
      }
    },
    deleteItem(item) {
      const itemIndex = this.items.indexOf(item);
      this.items.splice(itemIndex, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.dm-kit {
  &__title {
    font-size: 32px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__toolbar {
    position: sticky;
    top: 56px;
    z-index: 4;
    padding-bottom: 8px;
  }

  @media (min-width: 960px) {
    &__toolbar {
      position: sticky;
      top: 64px;
      z-index: 4;
      padding-bottom: 4px;
    }
  }

  &__table-footer {
    width: 100%;
    padding: 8px 16px;
    border-top: thin solid rgba(255, 255, 255, 0.12);
  }
}

.theme--light {
  .dm-kit {
    &__toolbar {
      background-color: #fff;
    }

    &__table-footer {
      border-color: rgba(0, 0, 0, 0.12);
    }
  }

  .active-row {
    background-color: #ccc;
  }
}

.theme--dark {
  .dm-kit {
    &__toolbar {
      background-color: #121212;
    }

    &__table-footer {
      border-color: rgba(255, 255, 255, 0.12);
    }
  }

  .active-row {
    background-color: #616161;
  }
}
</style>

<style lang="scss">
.v-data-table {
  & th {
    font-size: 1rem !important;
  }

  & tbody > tr {
    &:hover {
      background: inherit !important;
    }

    & .v-input__slot {
      transition-duration: 0s;
      padding: 0 !important;
      background: inherit !important;
    }
  }

  input, input[type=number] {
    -moz-appearance: textfield !important;
    appearance: textfield !important;
    -webkit-appearance: none;
    padding: 2px 0;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
  }
}
</style>
