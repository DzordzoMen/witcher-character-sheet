<template>
  <v-card rounded elevation="0">
    <v-card-title class="pa-2 pb-0 subtitle-1">
      <v-row no-gutters class="align-baseline">
        <v-col cols="2">
          #{{ id + 1 }}
        </v-col>
        <v-col cols="10" class="equipment-card-field">
          <v-text-field
            v-model="cardName"
            hide-details
            @blur="changeName"
          />
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text class="pa-2">
      <v-textarea
        v-model="cardDescription"
        hide-details
        class="ma-0 pa-0"
        @blur="changeDescription"
        auto-grow
        rows="2"
      />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TheEquipmentCard',
  props: {
    id: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    cardType: '',
    cardName: '',
    cardDescription: '',
  }),
  created() {
    this.cardType = this.type;
    this.cardName = this.name;
    this.cardDescription = this.description;
  },
  methods: {
    changeName() {
      const { id: rowId, cardName: name } = this;
      this.$store.dispatch('LargeTables/UPDATE_EQUIPMENT_TABLE_NAME', { rowId, name });
    },
    changeDescription() {
      const { id: rowId, cardDescription: desc } = this;
      this.$store.dispatch('LargeTables/UPDATE_EQUIPMENT_TABLE_DESCRIPTION', { rowId, desc });
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  border: 1px solid #2c3e50;
}
.v-card__text {
  min-height: 72px;
}
</style>

<style lang="scss">
.equipment-card-field {
  .v-input {
    border-radius: inherit;
    font-size: 16px;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;

    &--is-disabled {
      color: rgba(84, 84, 84, 0.93) !important;
      & input {
        color: rgba(84, 84, 84, 0.93) !important;
      }
    }

    .v-text-field__slot {
      input {
        text-align: center;
      }
    }

    &:hover {
      outline: none;
      outline-style: none;
      box-shadow: none;
    }
  }
}
</style>
