module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/witcher-character-sheet/' : '/',
  pwa: {
    manifestCrossorigin: 'use-credentials',
    iconPaths: {
      favicon16: './img/icons/witcher_logo_16x16.png',
      favicon32: './img/icons/witcher_logo_32x32.png',
      appleTouchIcon: './img/icons/witcher_logo_32x32.png',
      maskIcon: './img/icons/witcher_logo_32x32.png',
      mstTileImage: './img/icons/witcher_logo_32x32.png',
    },
    backgroundColor: '#ffffff',
    name: 'Witcher Card',
    orientation: 'portrait-primary',
    display: 'standalone',
    startUrl: '/witcher-character-sheet/',
  },
};
