export default {
  data: () => ({
    isDarkThemeEnabled: false,
  }),
  computed: {
    darkTheme: {
      get() {
        return this.isDarkThemeEnabled || false;
      },
      set(val) {
        this.$vuetify.theme.dark = val;
        this.isDarkThemeEnabled = val;
        localStorage.setItem('darkTheme', val);
      },
    },
  },
  created() {
    this.isDarkThemeEnabled = localStorage.getItem('darkTheme') === 'true' ?? false;

    if (this.isDarkThemeEnabled) {
      this.darkTheme = this.isDarkThemeEnabled;
    }
  },
};
