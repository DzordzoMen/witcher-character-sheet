export default {
  computed: {
    isUserInCard() {
      return this.$route.path.includes('/card/');
    },
  },
};
