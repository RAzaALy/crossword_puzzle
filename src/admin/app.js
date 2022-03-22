import AuthLogo from './extensions/logo.png';
import MenuLogo from './extensions/logo.png';
import favicon from './extensions/logo.png';
export default {
  config: {
    head: {
      favicon: favicon,
    },
    auth: {
      logo: AuthLogo,
      title: "Title"
    },
    menu: {
      logo: MenuLogo,
    },  
      // Override or extend the theme
      theme: {
        colors: {
          primary100: '#f6ecfc',
          primary200: '#e0c1f4',
          primary500: '#ac73e6',
          primary600: '#9736e8',
          primary700: '#8312d1',
          danger700: '#b72b1a'
        },
      },
    locales: [
      'ar',
      'fr',
      'cs',
      'de',
      'dk',
      'es',
      'he',
      'id',
      'it',
      'ja',
      'ko',
      'ms',
      'nl',
      'no',
      'pl',
      'pt-BR',
      'pt',
      'ru',
      'sk',
      'sv',
      'th',
      'tr',
      'uk',
      'vi',
      'zh-Hans',
      'zh',
    ],
   // Disable video tutorials
    tutorials: false,
     // Disable notifications about new Strapi releases
     notifications: { release: false },
  },
  bootstrap(app) {
    console.log(app);
  },
};
