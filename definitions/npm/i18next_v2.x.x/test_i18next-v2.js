import i18n from 'i18next';

i18n.init({});
// $ExpectError
i18n.init({
  debug: true,
  preload: true,
  lng: ['en']
});

// $ExpectError Need options for init
i18n.use('Some Module').init();
i18n.use('Some Module').init({});

// $ExpectError
const A: bool = i18n.t('foo');
const B: string = i18n.t('bar');

i18n.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        "key": "hello world"
      }
    }
  }
});

i18n.init({
  lng: 'en',
  // $ExpectError should be string keyed object
  resources: [false, {}],
});
