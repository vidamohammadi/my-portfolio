// plugins/vuetify.ts
import {createVuetify, type ThemeDefinition} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const myCustomTheme: ThemeDefinition = {
  colors: {
    primary: '#69F0AE',
    light_black: '#1F1F1F91'
  }
};
export default defineNuxtPlugin(app => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    theme: {
      defaultTheme: 'myCustomTheme',
      themes: {
        myCustomTheme
      }
    }
  });

  app.vueApp.use(vuetify);
});
