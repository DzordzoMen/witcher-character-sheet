import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      skillPoints: 'SKILL_POINTS',
    }),
    ...mapGetters('WitcherInfo', {
      witcherLevel: 'WITCHER_LEVEL',
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
