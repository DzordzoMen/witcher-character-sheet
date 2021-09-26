import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#2c3e50',
        textPrimary: '#2c3e50',
      },
      dark: {
        primary: '#2c3e50',
        textPrimary: '#8ea1b6',
      },
    },
  },
});
