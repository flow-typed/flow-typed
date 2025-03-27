// @flow
import { describe, it } from 'flow-typed-test';
import Counterpart from 'counterpart';
import type {
  NotFoundHandler,
  MissingEntryGenerator,
  LocaleChangeHandler,
  KeyTransformer,
  ErrorHandler,
} from 'counterpart';

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

    it('getSeparator', () => {
      let separator: string = instance.getSeparator();

      // $FlowExpectedError[extra-arg]
      instance.getSeparator('.');
    });

    it('setSeparator', () => {
      instance.setSeparator('*');
    });

    it('getMissingEntryGenerator', () => {
      let generator: MissingEntryGenerator = instance.getMissingEntryGenerator();

      // $FlowExpectedError[extra-arg]
      instance.getMissingEntryGenerator((key: string) => 'MISSING: ' + key);
    });

    it('setMissingEntryGenerator', () => {
      const generator = function(key: string) {
        return 'Ooops! Translation missing for ' + key + '!!!';
      };

      instance.setMissingEntryGenerator(generator);
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

    it('getFallbackLocale', () => {
      let locales: string[] = instance.getFallbackLocale();

      // $FlowExpectedError[extra-arg]
      instance.getFallbackLocale('locale');
    });

    it('setFallbackLocale', () => {
      instance.setFallbackLocale('locale');
      instance.setFallbackLocale(['locale']);
    });

    it('getAvailableLocales', () => {
      let locales: string[] = instance.getAvailableLocales();

      // $FlowExpectedError[extra-arg]
      instance.getAvailableLocales('locale');
    });

    it('setAvailableLocales', () => {
      instance.setAvailableLocales(['locale']);
    });

    it('getKeyTransformer', () => {
      let transformer: KeyTransformer = instance.getKeyTransformer();

      // $FlowExpectedError[extra-arg]
      instance.getKeyTransformer((key: string) => key);
    });

    it('setKeyTransformer', () => {
      const transformer = function(key: string | string[], options?: { ... }) {
        return key;
      };

      instance.setKeyTransformer(transformer);
    });

    it('getInterpolate', () => {
      let interpolate: boolean = instance.getInterpolate();

      // $FlowExpectedError[extra-arg]
      instance.getInterpolate(false);
    });

    it('setInterpolate', () => {
      instance.setInterpolate(false);
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

    it('onError', () => {
      const callback: ErrorHandler = () => {
        // nothing
      };
      instance.onError(callback);

      instance.onError(
        // $FlowExpectedError[incompatible-call]
        (err: Error, entry: number, values: boolean) => {}
      );
    });

    it('withLocale', () => {
      const callback = () => {
        // nothing
      };
      instance.withLocale('foo', callback);
      instance.withLocale('foo', callback, { bar: 'baz' });

      instance.withLocale(
        'foo',
        // $FlowExpectedError[incompatible-call]
        (key: string) => {}
      );
    });

    it('withScope', () => {
      const callback = () => {
        // nothing
      };
      instance.withScope('foo', callback);
      instance.withScope(['foo', 'boo'], callback);
      instance.withScope('foo', callback, { bar: 'baz' });

      instance.withScope(
        'foo',
        // $FlowExpectedError[incompatible-call]
        (key: string) => {}
      );
    });

    it('withSeparator', () => {
      const callback = () => {
        // nothing
      };
      instance.withSeparator('.', callback);
      instance.withSeparator('.', callback, { bar: 'baz' });

      instance.withSeparator(
        '.',
        // $FlowExpectedError[incompatible-call]
        (key: string) => {}
      );
    });
  });
});
