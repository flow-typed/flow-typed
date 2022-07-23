import { describe, test } from 'flow-typed-test';
import { faker } from '@faker-js/faker';

describe('@faker-js/faker', () => {
  describe('address', () => {
    test('buildingNumber', () => {
      (faker.address.buildingNumber(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.buildingNumber(): number);
      // $FlowExpectedError[extra-arg]
      faker.address.buildingNumber('');
    });

    test('cardinalDirection', () => {
      (faker.address.cardinalDirection(): string);
      faker.address.cardinalDirection(true);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.cardinalDirection(): number);
      // $FlowExpectedError[incompatible-call]
      faker.address.cardinalDirection('');
    });

    test('city', () => {
      (faker.address.city(): string);
      faker.address.city('');
      faker.address.city(123);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.city(): number);
    });

    test('cityName', () => {
      (faker.address.cityName(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.cityName(): number);
      // $FlowExpectedError[extra-arg]
      faker.address.cityName('');
    });

    test('cityPrefix', () => {
      (faker.address.cityPrefix(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.cityPrefix(): number);
      // $FlowExpectedError[extra-arg]
      faker.address.cityPrefix('');
    });

    test('citySuffix', () => {
      (faker.address.citySuffix(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.citySuffix(): number);
      // $FlowExpectedError[extra-arg]
      faker.address.citySuffix('');
    });

    test('country', () => {
      (faker.address.country(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.country(): number);
      // $FlowExpectedError[extra-arg]
      faker.address.country('');
    });

    test('countryCode', () => {
      (faker.address.countryCode(): string);
      faker.address.countryCode('alpha-2');
      faker.address.countryCode('alpha-3');

      // $FlowExpectedError[incompatible-cast]
      (faker.address.countryCode(): number);
      // $FlowExpectedError[incompatible-call]
      faker.address.countryCode('alpha-1');
    });

    test('county', () => {
      (faker.address.county(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.county(): number);
      // $FlowExpectedError[extra-arg]
      faker.address.county('');
    });

    test('direction', () => {
      (faker.address.direction(): string);
      faker.address.direction(true);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.direction(): number);
      // $FlowExpectedError[incompatible-call]
      faker.address.direction('');
    });

    test('latitude', () => {
      (faker.address.latitude(): string);
      faker.address.latitude(1);
      faker.address.latitude(1, 2);
      faker.address.latitude(1, 2, 3);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.latitude(): number);
      // $FlowExpectedError[incompatible-call]
      faker.address.latitude('');
      // $FlowExpectedError[incompatible-call]
      faker.address.latitude(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.address.latitude(1, 2, '');
      // $FlowExpectedError[extra-arg]
      faker.address.latitude(1, 2, 3, 4);
    });

    test('longitude', () => {
      (faker.address.longitude(): string);
      faker.address.longitude(1);
      faker.address.longitude(1, 2);
      faker.address.longitude(1, 2, 3);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.longitude(): number);
      // $FlowExpectedError[incompatible-call]
      faker.address.longitude('');
      // $FlowExpectedError[incompatible-call]
      faker.address.longitude(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.address.longitude(1, 2, '');
      // $FlowExpectedError[extra-arg]
      faker.address.longitude(1, 2, 3, 4);
    });

    test('nearbyGPSCoordinate', () => {
      (faker.address.nearbyGPSCoordinate(): [string, string]);
      faker.address.nearbyGPSCoordinate([1, 2]);
      faker.address.nearbyGPSCoordinate([1, 2], 1);
      faker.address.nearbyGPSCoordinate([1, 2], 1, true);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.nearbyGPSCoordinate(): number);
      // $FlowExpectedError[incompatible-call]
      faker.address.nearbyGPSCoordinate('');
      // $FlowExpectedError[incompatible-call]
      faker.address.nearbyGPSCoordinate([1, 2], '');
      // $FlowExpectedError[incompatible-call]
      faker.address.nearbyGPSCoordinate([1, 2], 1, '');
    });

    test('ordinalDirection', () => {
      (faker.address.ordinalDirection(): string);
      faker.address.ordinalDirection(true);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.ordinalDirection(): number);
      // $FlowExpectedError[incompatible-call]
      faker.address.ordinalDirection('');
    });

    test('secondaryAddress', () => {
      (faker.address.secondaryAddress(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.secondaryAddress(): number);
      // $FlowExpectedError[extra-arg]
      faker.address.secondaryAddress('');
    });

    test('state', () => {
      (faker.address.state(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.state(): number);
      // $FlowExpectedError[extra-arg]
      faker.address.state('');
    });

    test('stateAbbr', () => {
      (faker.address.stateAbbr(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.stateAbbr(): number);
      // $FlowExpectedError[extra-arg]
      faker.address.stateAbbr('');
    });

    test('street', () => {
      (faker.address.street(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.street(): number);
      // $FlowExpectedError[extra-arg]
      faker.address.street('');
    });

    test('streetAddress', () => {
      (faker.address.streetAddress(): string);
      faker.address.streetAddress(true);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.streetAddress(): number);
      // $FlowExpectedError[incompatible-call]
      faker.address.streetAddress('');
    });

    test('streetName', () => {
      (faker.address.streetName(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.streetName(): number);
      // $FlowExpectedError[extra-arg]
      faker.address.streetName('');
    });

    test('streetPrefix', () => {
      (faker.address.streetPrefix(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.streetPrefix(): number);
      // $FlowExpectedError[extra-arg]
      faker.address.streetPrefix('');
    });

    test('streetSuffix', () => {
      (faker.address.streetSuffix(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.streetSuffix(): number);
      // $FlowExpectedError[extra-arg]
      faker.address.streetSuffix('');
    });

    test('timeZone', () => {
      (faker.address.timeZone(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.address.timeZone(): number);
      // $FlowExpectedError[extra-arg]
      faker.address.timeZone('');
    });

    test('zipCode', () => {
      (faker.address.zipCode(): string);
      faker.address.zipCode('');

      // $FlowExpectedError[incompatible-cast]
      (faker.address.zipCode(): number);
      // $FlowExpectedError[incompatible-call]
      faker.address.zipCode(123);
    });

    test('zipCodeByState', () => {
      (faker.address.zipCodeByState(): string);
      faker.address.zipCodeByState('');

      // $FlowExpectedError[incompatible-cast]
      (faker.address.zipCodeByState(): number);
      // $FlowExpectedError[incompatible-call]
      faker.address.zipCodeByState(123);
    });
  });

  describe('animal', () => {
    test('bear', () => {
      (faker.animal.bear(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.animal.bear(): number);
      // $FlowExpectedError[extra-arg]
      faker.animal.bear('');
    });

    test('bird', () => {
      (faker.animal.bird(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.animal.bird(): number);
      // $FlowExpectedError[extra-arg]
      faker.animal.bird('');
    });

    test('cat', () => {
      (faker.animal.cat(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.animal.cat(): number);
      // $FlowExpectedError[extra-arg]
      faker.animal.cat('');
    });

    test('cetacean', () => {
      (faker.animal.cetacean(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.animal.cetacean(): number);
      // $FlowExpectedError[extra-arg]
      faker.animal.cetacean('');
    });

    test('cow', () => {
      (faker.animal.cow(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.animal.cow(): number);
      // $FlowExpectedError[extra-arg]
      faker.animal.cow('');
    });

    test('crocodilia', () => {
      (faker.animal.crocodilia(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.animal.crocodilia(): number);
      // $FlowExpectedError[extra-arg]
      faker.animal.crocodilia('');
    });

    test('dog', () => {
      (faker.animal.dog(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.animal.dog(): number);
      // $FlowExpectedError[extra-arg]
      faker.animal.dog('');
    });

    test('fish', () => {
      (faker.animal.fish(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.animal.fish(): number);
      // $FlowExpectedError[extra-arg]
      faker.animal.fish('');
    });

    test('horse', () => {
      (faker.animal.horse(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.animal.horse(): number);
      // $FlowExpectedError[extra-arg]
      faker.animal.horse('');
    });

    test('insect', () => {
      (faker.animal.insect(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.animal.insect(): number);
      // $FlowExpectedError[extra-arg]
      faker.animal.insect('');
    });

    test('lion', () => {
      (faker.animal.lion(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.animal.lion(): number);
      // $FlowExpectedError[extra-arg]
      faker.animal.lion('');
    });

    test('rabbit', () => {
      (faker.animal.rabbit(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.animal.rabbit(): number);
      // $FlowExpectedError[extra-arg]
      faker.animal.rabbit('');
    });

    test('snake', () => {
      (faker.animal.snake(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.animal.snake(): number);
      // $FlowExpectedError[extra-arg]
      faker.animal.snake('');
    });

    test('type', () => {
      (faker.animal.type(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.animal.type(): number);
      // $FlowExpectedError[extra-arg]
      faker.animal.type('');
    });
  });

  describe('color', () => {
    test('cmyk', () => {
      (faker.color.cmyk(): string | Array<number>);
      faker.color.cmyk({});
      faker.color.cmyk({
        format: 'css',
      });
      faker.color.cmyk({
        format: 'decimal',
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.color.cmyk(): string);
      // $FlowExpectedError[incompatible-cast]
      (faker.color.cmyk(): boolean);
      // $FlowExpectedError[prop-missing]
      faker.color.cmyk({
        foo: 'bar',
      });
      faker.color.cmyk({
        // $FlowExpectedError[incompatible-call]
        format: 'test',
      });
    });

    test('colorByCSSColorSpace', () => {
      (faker.color.colorByCSSColorSpace(): string | Array<number>);
      faker.color.colorByCSSColorSpace({});
      faker.color.colorByCSSColorSpace({
        format: 'css',
      });
      faker.color.colorByCSSColorSpace({
        format: 'decimal',
      });
      faker.color.colorByCSSColorSpace({
        format: 'decimal',
        space: 'a98-rgb',
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.color.colorByCSSColorSpace(): string);
      // $FlowExpectedError[incompatible-cast]
      (faker.color.colorByCSSColorSpace(): boolean);
      // $FlowExpectedError[prop-missing]
      faker.color.colorByCSSColorSpace({
        foo: 'bar',
      });
      faker.color.colorByCSSColorSpace({
        // $FlowExpectedError[incompatible-call]
        format: 'test',
      });
      faker.color.colorByCSSColorSpace({
        format: 'decimal',
        // $FlowExpectedError[incompatible-call]
        space: 'a98-rgba',
      });
    });

    test('cssSupportedFunction', () => {
      (faker.color.cssSupportedFunction(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.color.cssSupportedFunction(): number);
      // $FlowExpectedError[extra-arg]
      faker.color.cssSupportedFunction('');
    });

    test('cssSupportedSpace', () => {
      (faker.color.cssSupportedSpace(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.color.cssSupportedSpace(): number);
      // $FlowExpectedError[extra-arg]
      faker.color.cssSupportedSpace('');
    });

    test('hsl', () => {
      (faker.color.hsl(): string | Array<number>);
      faker.color.hsl({});
      faker.color.hsl({
        format: 'css',
      });
      faker.color.hsl({
        format: 'decimal',
      });
      faker.color.hsl({
        format: 'decimal',
        includeAlpha: true,
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.color.hsl(): string);
      // $FlowExpectedError[incompatible-cast]
      (faker.color.hsl(): boolean);
      // $FlowExpectedError[prop-missing]
      faker.color.hsl({
        foo: 'bar',
      });
      faker.color.hsl({
        // $FlowExpectedError[incompatible-call]
        format: 'test',
      });
      faker.color.hsl({
        format: 'decimal',
        // $FlowExpectedError[incompatible-call]
        includeAlpha: 'a98-rgba',
      });
    });

    test('human', () => {
      (faker.color.human(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.color.human(): number);
      // $FlowExpectedError[extra-arg]
      faker.color.human('');
    });

    test('hwb', () => {
      (faker.color.hwb(): string | Array<number>);
      faker.color.hwb({});
      faker.color.hwb({
        format: 'css',
      });
      faker.color.hwb({
        format: 'decimal',
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.color.hwb(): string);
      // $FlowExpectedError[incompatible-cast]
      (faker.color.hwb(): boolean);
      // $FlowExpectedError[prop-missing]
      faker.color.hwb({
        foo: 'bar',
      });
      faker.color.hwb({
        // $FlowExpectedError[incompatible-call]
        format: 'test',
      });
    });

    test('lab', () => {
      (faker.color.lab(): string | Array<number>);
      faker.color.lab({});
      faker.color.lab({
        format: 'css',
      });
      faker.color.lab({
        format: 'decimal',
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.color.lab(): string);
      // $FlowExpectedError[incompatible-cast]
      (faker.color.lab(): boolean);
      // $FlowExpectedError[prop-missing]
      faker.color.lab({
        foo: 'bar',
      });
      faker.color.lab({
        // $FlowExpectedError[incompatible-call]
        format: 'test',
      });
    });

    test('lch', () => {
      (faker.color.lch(): string | Array<number>);
      faker.color.lch({});
      faker.color.lch({
        format: 'css',
      });
      faker.color.lch({
        format: 'decimal',
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.color.lch(): string);
      // $FlowExpectedError[incompatible-cast]
      (faker.color.lch(): boolean);
      // $FlowExpectedError[prop-missing]
      faker.color.lch({
        foo: 'bar',
      });
      faker.color.lch({
        // $FlowExpectedError[incompatible-call]
        format: 'test',
      });
    });

    test('rgb', () => {
      (faker.color.rgb(): string | Array<number>);
      faker.color.rgb({});
      faker.color.rgb({
        format: 'css',
      });
      faker.color.rgb({
        format: 'decimal',
      });
      faker.color.rgb({
        format: 'decimal',
        casing: 'lower',
      });
      faker.color.rgb({
        format: 'decimal',
        casing: 'lower',
        includeAlpha: true,
      });
      faker.color.rgb({
        format: 'decimal',
        casing: 'lower',
        includeAlpha: true,
        prefix: '',
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.color.rgb(): string);
      // $FlowExpectedError[incompatible-cast]
      (faker.color.rgb(): boolean);
      // $FlowExpectedError[prop-missing]
      faker.color.rgb({
        foo: 'bar',
      });
      faker.color.rgb({
        // $FlowExpectedError[incompatible-call]
        format: 'test',
      });
      faker.color.rgb({
        format: 'decimal',
        // $FlowExpectedError[incompatible-call]
        includeAlpha: 'a98-rgba',
      });
      faker.color.rgb({
        format: 'decimal',
        // $FlowExpectedError[incompatible-call]
        casing: 'a98-rgba',
      });
      faker.color.rgb({
        format: 'decimal',
        // $FlowExpectedError[incompatible-call]
        prefix: 123,
      });
    });

    test('space', () => {
      (faker.color.space(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.color.space(): number);
      // $FlowExpectedError[extra-arg]
      faker.color.space('');
    });
  });
});
