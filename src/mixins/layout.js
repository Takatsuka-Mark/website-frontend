import config from '../config';

export default {
  data: () => ({
    appConfig: {
      colors: config.colors,
    },
  }),
  methods: {
    decodeHtml(html) {
      const txt = document.createElement('textarea');
      txt.innerHTML = html;
      return txt.value;
    },
  },
};
