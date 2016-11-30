declare module 'intl-messageformat' {
  declare type FormatsObject = {
    [type: string]: {
      [style: string]: {
        [options: string]: string
      }
    }
  };

  declare class IntlMessageFormat {
    constructor(message: string, locales: string | Array<string>, formats?: ?FormatsObject): IntlMessageFormat;

    /**
     * This method returns an object with the options values that were resolved during instance creation. It currently only contains a locale property.
     */
    resolvedOptions(): {| locale: string |};

    /**
     * Once the message is created, formatting the message is done by calling the format() method on the instance and passing a collection of values.
     */
    format(values: { [key: string]: any }): string;
  }

  declare module.exports: Class<IntlMessageFormat>;
}
