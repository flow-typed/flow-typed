// @flow
import { describe, it } from 'flow-typed-test';
import Counterpart from 'counterpart';
import type { NotFoundHandler, LocaleChangeHandler } from 'counterpart';

describe('counterpart', () => {
  // This matches the readme example.
  it('should be the translate reference from the export', () => {
    const translate = require('counterpart');
    translate('text');
    translate.getLocale();
    translate.setLocale('locale');
  });
  it('should be a callable class from the Instance export', () => {
    const instance = new Counterpart.Instance();
    instance.translate('text');
  });
  it('should be a callable class from the Translator export', () => {
    const instance = new Counterpart.Translator();
    instance.translate('text');
  });
  it('accepts options', () => {
    const instance = new Counterpart.Instance();
    instance.translate('text', {
      bar: 'baz',
    });
    instance.translate('text', {
      count: 1,
    });
    instance.translate('text', {
      fallback: 'default',
    });
  });

  describe('methods', () => {
    const instance = new Counterpart.Instance();

    it('setSeparator', () => {
      instance.setSeparator('*');
    });

    it('registerTranslations', () => {
      instance.registerTranslations('locale', {});

      // $FlowExpectedError[incompatible-call]
      instance.registerTranslations('locale', 'translation');
    });

    it('setLocale', () => {
      instance.setLocale('locale');

      // $FlowExpectedError[incompatible-call]
      instance.setLocale({});
    });

    it('getLocale', () => {
      let locale: string = instance.getLocale();

      // $FlowExpectedError[extra-arg]
      instance.getLocale('locale');
    });

    it('setFallbackLocale', () => {
      instance.setFallbackLocale('locale');
      instance.setFallbackLocale(['locale']);
    });

    it('onTranslationNotFound', () => {
      const callback: NotFoundHandler = (locale, key) => {
        // nothing
      };
      instance.onTranslationNotFound(callback);

      instance.onTranslationNotFound(
        // $FlowExpectedError[incompatible-call]
        (locale: number, key: boolean, fallback: () => void, scope: null) => {}
      );
    });

    it('onLocaleChange', () => {
      const callback: LocaleChangeHandler = () => {
        // nothing
      };
      instance.onLocaleChange(callback);

      instance.onLocaleChange(
        // $FlowExpectedError[incompatible-call]
        (locale: number, key: boolean, fallback: () => void, scope: null) => {}
      );
    });
  });
});
