import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('WitcherInfo', {
      skillPoints: 'WITCHER_AVA_SKILL_POINTS',
    }),
  },
  methods: {
    decreaseWitcherSkillPoints() {
      this.$store.dispatch('WitcherInfo/UPDATE_WITCHER_AVA_SKILL_POINTS', this.skillPoints - 1);
    },
    increaseWitcherSkillPoints() {
      this.$store.dispatch('WitcherInfo/UPDATE_WITCHER_AVA_SKILL_POINTS', this.skillPoints + 1);
    },
  },
};
