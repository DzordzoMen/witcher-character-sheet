import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      skillPoints: 'SKIll_POINTS',
    }),
  },
  methods: {
    decreaseWitcherSkillPoints() {
      this.$store.dispatch('UPDATE_SKILL_POINTS', this.skillPoints - 1);
    },
    increaseWitcherSkillPoints() {
      this.$store.dispatch('UPDATE_SKILL_POINTS', this.skillPoints + 1);
    },
  },
};
