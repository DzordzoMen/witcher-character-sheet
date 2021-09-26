import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#2c3e50',
        textPrimary: '#2c3e50',
        strength: '#710404',
        dexterity: '#0C5818',
        signs: '#123B79',
        mind: '#4A1A61',
      },
      dark: {
        primary: '#2c3e50',
        textPrimary: '#8ea1b6',
        strength: '#ca5a48',
        dexterity: '#61a65f',
        signs: '#6c83ca',
        mind: '#9863af',
      },
    },
  },
});
