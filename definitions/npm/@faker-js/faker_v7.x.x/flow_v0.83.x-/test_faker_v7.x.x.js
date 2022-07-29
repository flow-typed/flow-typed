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

  describe('commerce', () => {
    test('color', () => {
      (faker.commerce.color(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.commerce.color(): number);
      // $FlowExpectedError[extra-arg]
      faker.commerce.color('');
    });

    test('department', () => {
      (faker.commerce.department(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.commerce.department(): number);
      // $FlowExpectedError[extra-arg]
      faker.commerce.department('');
    });

    test('department', () => {
      (faker.commerce.price(): string);
      faker.commerce.price(1);
      faker.commerce.price(1, 2);
      faker.commerce.price(1, 2, 3);
      faker.commerce.price(1, 2, 3, '');

      // $FlowExpectedError[incompatible-cast]
      (faker.commerce.price(): number);
      // $FlowExpectedError[incompatible-call]
      faker.commerce.price('');
      // $FlowExpectedError[incompatible-call]
      faker.commerce.price(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.commerce.price(1, 2, '');
      // $FlowExpectedError[incompatible-call]
      faker.commerce.price(1, 2, 3, 4);
    });

    test('product', () => {
      (faker.commerce.product(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.commerce.product(): number);
      // $FlowExpectedError[extra-arg]
      faker.commerce.product('');
    });

    test('productAdjective', () => {
      (faker.commerce.productAdjective(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.commerce.productAdjective(): number);
      // $FlowExpectedError[extra-arg]
      faker.commerce.productAdjective('');
    });

    test('productDescription', () => {
      (faker.commerce.productDescription(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.commerce.productDescription(): number);
      // $FlowExpectedError[extra-arg]
      faker.commerce.productDescription('');
    });

    test('productMaterial', () => {
      (faker.commerce.productMaterial(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.commerce.productMaterial(): number);
      // $FlowExpectedError[extra-arg]
      faker.commerce.productMaterial('');
    });

    test('productName', () => {
      (faker.commerce.productName(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.commerce.productName(): number);
      // $FlowExpectedError[extra-arg]
      faker.commerce.productName('');
    });
  });

  describe('company', () => {
    test('bs', () => {
      (faker.company.bs(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.company.bs(): number);
      // $FlowExpectedError[extra-arg]
      faker.company.bs('');
    });

    test('bsAdjective', () => {
      (faker.company.bsAdjective(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.company.bsAdjective(): number);
      // $FlowExpectedError[extra-arg]
      faker.company.bsAdjective('');
    });

    test('bsBuzz', () => {
      (faker.company.bsBuzz(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.company.bsBuzz(): number);
      // $FlowExpectedError[extra-arg]
      faker.company.bsBuzz('');
    });

    test('bsNoun', () => {
      (faker.company.bsNoun(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.company.bsNoun(): number);
      // $FlowExpectedError[extra-arg]
      faker.company.bsNoun('');
    });

    test('catchPhrase', () => {
      (faker.company.catchPhrase(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.company.catchPhrase(): number);
      // $FlowExpectedError[extra-arg]
      faker.company.catchPhrase('');
    });

    test('catchPhraseAdjective', () => {
      (faker.company.catchPhraseAdjective(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.company.catchPhraseAdjective(): number);
      // $FlowExpectedError[extra-arg]
      faker.company.catchPhraseAdjective('');
    });

    test('catchPhraseDescriptor', () => {
      (faker.company.catchPhraseDescriptor(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.company.catchPhraseDescriptor(): number);
      // $FlowExpectedError[extra-arg]
      faker.company.catchPhraseDescriptor('');
    });

    test('catchPhraseNoun', () => {
      (faker.company.catchPhraseNoun(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.company.catchPhraseNoun(): number);
      // $FlowExpectedError[extra-arg]
      faker.company.catchPhraseNoun('');
    });

    test('companyName', () => {
      (faker.company.companyName(): string);
      faker.company.companyName(123);

      // $FlowExpectedError[incompatible-cast]
      (faker.company.companyName(): number);
      // $FlowExpectedError[incompatible-call]
      faker.company.companyName('');
    });

    test('companySuffix', () => {
      (faker.company.companySuffix(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.company.companySuffix(): number);
      // $FlowExpectedError[extra-arg]
      faker.company.companySuffix('');
    });

    test('suffixes', () => {
      (faker.company.suffixes(): Array<string>);

      // $FlowExpectedError[incompatible-cast]
      (faker.company.suffixes(): number);
      // $FlowExpectedError[extra-arg]
      faker.company.suffixes('');
    });
  });

  describe('database', () => {
    test('collation', () => {
      (faker.database.collation(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.database.collation(): number);
      // $FlowExpectedError[extra-arg]
      faker.database.collation('');
    });

    test('column', () => {
      (faker.database.column(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.database.column(): number);
      // $FlowExpectedError[extra-arg]
      faker.database.column('');
    });

    test('engine', () => {
      (faker.database.engine(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.database.engine(): number);
      // $FlowExpectedError[extra-arg]
      faker.database.engine('');
    });

    test('mongodbObjectId', () => {
      (faker.database.mongodbObjectId(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.database.mongodbObjectId(): number);
      // $FlowExpectedError[extra-arg]
      faker.database.mongodbObjectId('');
    });

    test('type', () => {
      (faker.database.type(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.database.type(): number);
      // $FlowExpectedError[extra-arg]
      faker.database.type('');
    });
  });

  describe('datatype', () => {
    test('array', () => {
      (faker.datatype.array(): Array<string | number>);
      faker.datatype.array(123);

      // $FlowExpectedError[incompatible-cast]
      (faker.datatype.array(): number);
      // $FlowExpectedError[incompatible-call]
      faker.datatype.array('');
    });

    test('bigInt', () => {
      // Flow does not support BigInt datatype so don't test casting
      faker.datatype.bigInt();
      faker.datatype.bigInt(123);
      faker.datatype.bigInt('');
      faker.datatype.bigInt(true);
      faker.datatype.bigInt({});
      faker.datatype.bigInt({
        max: 123,
        min: 123,
      });
      faker.datatype.bigInt({
        max: '',
        min: '',
      });
      faker.datatype.bigInt({
        max: true,
        min: true,
      });

      // $FlowExpectedError[incompatible-call]
      faker.datatype.bigInt({
        foo: 'bar',
      });
      // $FlowExpectedError[incompatible-call]
      faker.datatype.bigInt({
        max: {},
      });
      // $FlowExpectedError[incompatible-call]
      faker.datatype.bigInt({
        min: {},
      });
    });

    test('boolean', () => {
      (faker.datatype.boolean(): boolean);

      // $FlowExpectedError[incompatible-cast]
      (faker.datatype.boolean(): number);
      // $FlowExpectedError[extra-arg]
      faker.datatype.boolean('');
    });

    test('datetime', () => {
      (faker.datatype.datetime(): Date);
      faker.datatype.datetime(123);
      faker.datatype.datetime({});
      faker.datatype.datetime({
        max: 123,
        min: 123,
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.datatype.datetime(): number);
      // $FlowExpectedError[incompatible-call]
      faker.datatype.datetime('');
      // $FlowExpectedError[incompatible-call]
      faker.datatype.datetime({
        foo: 'bar',
      });
      // $FlowExpectedError[incompatible-call]
      faker.datatype.datetime({
        max: '',
      });
      // $FlowExpectedError[incompatible-call]
      faker.datatype.datetime({
        min: '',
      });
    });

    test('float', () => {
      (faker.datatype.float(): number);
      faker.datatype.float(123);
      faker.datatype.float({});
      faker.datatype.float({
        max: 123,
        min: 123,
      });
      faker.datatype.float({
        max: 123,
        min: 123,
        precision: 123,
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.datatype.float(): string);
      // $FlowExpectedError[incompatible-call]
      faker.datatype.float('');
      // $FlowExpectedError[incompatible-call]
      faker.datatype.float({
        foo: 'bar',
      });
      // $FlowExpectedError[incompatible-call]
      faker.datatype.float({
        max: '',
      });
      // $FlowExpectedError[incompatible-call]
      faker.datatype.float({
        min: '',
      });
      // $FlowExpectedError[incompatible-call]
      faker.datatype.float({
        precision: '',
      });
    });

    test('hexadecimal', () => {
      (faker.datatype.hexadecimal(): string);
      faker.datatype.hexadecimal(123);

      // $FlowExpectedError[incompatible-cast]
      (faker.datatype.hexadecimal(): number);
      // $FlowExpectedError[incompatible-call]
      faker.datatype.hexadecimal('');
    });

    test('json', () => {
      (faker.datatype.json(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.datatype.json(): number);
      // $FlowExpectedError[extra-arg]
      faker.datatype.json('');
    });

    test('number', () => {
      (faker.datatype.number(): number);
      faker.datatype.number(123);
      faker.datatype.number({});
      faker.datatype.number({
        max: 123,
        min: 123,
      });
      faker.datatype.number({
        max: 123,
        min: 123,
        precision: 123,
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.datatype.number(): string);
      // $FlowExpectedError[incompatible-call]
      faker.datatype.number('');
      // $FlowExpectedError[incompatible-call]
      faker.datatype.number({
        foo: 'bar',
      });
      // $FlowExpectedError[incompatible-call]
      faker.datatype.number({
        max: '',
      });
      // $FlowExpectedError[incompatible-call]
      faker.datatype.number({
        min: '',
      });
      // $FlowExpectedError[incompatible-call]
      faker.datatype.number({
        precision: '',
      });
    });

    test('string', () => {
      (faker.datatype.string(): string);
      faker.datatype.string(123);

      // $FlowExpectedError[incompatible-cast]
      (faker.datatype.string(): number);
      // $FlowExpectedError[incompatible-call]
      faker.datatype.string('');
    });

    test('uuid', () => {
      (faker.datatype.uuid(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.datatype.uuid(): number);
      // $FlowExpectedError[extra-arg]
      faker.datatype.uuid('');
    });
  });

  describe('date', () => {
    test('between', () => {
      (faker.date.between(): Date);
      faker.date.between(new Date());
      faker.date.between(123);
      faker.date.between('test');
      faker.date.between(123, new Date());
      faker.date.between(123, 123);
      faker.date.between(123, 'test');

      // $FlowExpectedError[incompatible-cast]
      (faker.date.between(): number);
      // $FlowExpectedError[incompatible-call]
      faker.date.between(true);
      // $FlowExpectedError[incompatible-call]
      faker.date.between(123, true);
    });

    test('betweens', () => {
      (faker.date.betweens(): Array<Date>);
      faker.date.betweens(new Date());
      faker.date.betweens(123);
      faker.date.betweens('test');
      faker.date.betweens(123, new Date());
      faker.date.betweens(123, 123);
      faker.date.betweens(123, 'test');
      faker.date.betweens(123, 'test', 123);

      // $FlowExpectedError[incompatible-cast]
      (faker.date.betweens(): number);
      // $FlowExpectedError[incompatible-call]
      faker.date.betweens(true);
      // $FlowExpectedError[incompatible-call]
      faker.date.betweens(123, true);
      // $FlowExpectedError[incompatible-call]
      faker.date.betweens(123, 123, true);
    });

    test('birthdate', () => {
      (faker.date.birthdate(): Date);
      faker.date.birthdate({});
      faker.date.birthdate({
        max: 123,
        min: 123,
        mode: 'age',
        refDate: new Date,
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.date.birthdate(): number);
      // $FlowExpectedError[incompatible-call]
      faker.date.birthdate('');
      // $FlowExpectedError[prop-missing]
      faker.date.birthdate({
        foo: 'bar',
      });
      faker.date.birthdate({
        // $FlowExpectedError[incompatible-call]
        max: '',
      });
      faker.date.birthdate({
        // $FlowExpectedError[incompatible-call]
        min: '',
      });
      faker.date.birthdate({
        // $FlowExpectedError[incompatible-call]
        mode: 'test',
      });
      faker.date.birthdate({
        // $FlowExpectedError[incompatible-call]
        refDate: true,
      });
    });

    test('future', () => {
      (faker.date.future(): Date);
      faker.date.future(123);
      faker.date.future(123, new Date());
      faker.date.future(123, 123);
      faker.date.future(123, 'test');

      // $FlowExpectedError[incompatible-cast]
      (faker.date.future(): number);
      // $FlowExpectedError[incompatible-call]
      faker.date.future(true);
      // $FlowExpectedError[incompatible-call]
      faker.date.future(123, true);
    });

    test('month', () => {
      (faker.date.month(): string);
      faker.date.month({});
      faker.date.month({
        abbr: true,
        context: true,
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.date.month(): number);
      // $FlowExpectedError[incompatible-call]
      faker.date.month('');
      // $FlowExpectedError[prop-missing]
      faker.date.month({
        foo: 'bar',
      });
      faker.date.month({
        // $FlowExpectedError[incompatible-call]
        abbr: '',
      });
      faker.date.month({
        // $FlowExpectedError[incompatible-call]
        context: '',
      });
    });

    test('past', () => {
      (faker.date.past(): Date);
      faker.date.past(123);
      faker.date.past(123, new Date());
      faker.date.past(123, 123);
      faker.date.past(123, 'test');

      // $FlowExpectedError[incompatible-cast]
      (faker.date.past(): number);
      // $FlowExpectedError[incompatible-call]
      faker.date.past(true);
      // $FlowExpectedError[incompatible-call]
      faker.date.past(123, true);
    });

    test('recent', () => {
      (faker.date.recent(): Date);
      faker.date.recent(123);
      faker.date.recent(123, new Date());
      faker.date.recent(123, 123);
      faker.date.recent(123, 'test');

      // $FlowExpectedError[incompatible-cast]
      (faker.date.recent(): number);
      // $FlowExpectedError[incompatible-call]
      faker.date.recent(true);
      // $FlowExpectedError[incompatible-call]
      faker.date.recent(123, true);
    });

    test('soon', () => {
      (faker.date.soon(): Date);
      faker.date.soon(123);
      faker.date.soon(123, new Date());
      faker.date.soon(123, 123);
      faker.date.soon(123, 'test');

      // $FlowExpectedError[incompatible-cast]
      (faker.date.soon(): number);
      // $FlowExpectedError[incompatible-call]
      faker.date.soon(true);
      // $FlowExpectedError[incompatible-call]
      faker.date.soon(123, true);
    });

    test('weekday', () => {
      (faker.date.weekday(): string);
      faker.date.weekday({});
      faker.date.weekday({
        abbr: true,
        context: true,
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.date.weekday(): number);
      // $FlowExpectedError[incompatible-call]
      faker.date.weekday('');
      // $FlowExpectedError[prop-missing]
      faker.date.weekday({
        foo: 'bar',
      });
      faker.date.weekday({
        // $FlowExpectedError[incompatible-call]
        abbr: '',
      });
      faker.date.weekday({
        // $FlowExpectedError[incompatible-call]
        context: '',
      });
    });
  });

  describe('fake', () => {
    test('fake', () => {
      (faker.fake(''): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.fake(''): number);
      // $FlowExpectedError[incompatible-call]
      faker.fake();
    });
  });

  describe('finance', () => {
    test('account', () => {
      (faker.finance.account(): string);
      faker.finance.account(123);

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.account(): number);
      // $FlowExpectedError[incompatible-call]
      faker.finance.account('');
    });

    test('accountName', () => {
      (faker.finance.accountName(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.accountName(): number);
      // $FlowExpectedError[extra-arg]
      faker.finance.accountName('');
    });

    test('amount', () => {
      (faker.finance.amount(): string);
      faker.finance.amount(1);
      faker.finance.amount(1, 2);
      faker.finance.amount(1, 2, 3);
      faker.finance.amount(1, 2, 3, '');
      faker.finance.amount(1, 2, 3, '', true);

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.amount(): number);
      // $FlowExpectedError[incompatible-call]
      faker.finance.amount('');
      // $FlowExpectedError[incompatible-call]
      faker.finance.amount(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.finance.amount(1, 2, '');
      // $FlowExpectedError[incompatible-call]
      faker.finance.amount(1, 2, 3, 4);
      // $FlowExpectedError[incompatible-call]
      faker.finance.amount(1, 2, 3, '', '');
    });

    test('bic', () => {
      (faker.finance.bic(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.bic(): number);
      // $FlowExpectedError[extra-arg]
      faker.finance.bic('');
    });

    test('bitcoinAddress', () => {
      (faker.finance.bitcoinAddress(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.bitcoinAddress(): number);
      // $FlowExpectedError[extra-arg]
      faker.finance.bitcoinAddress('');
    });

    test('creditCardCVV', () => {
      (faker.finance.creditCardCVV(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.creditCardCVV(): number);
      // $FlowExpectedError[extra-arg]
      faker.finance.creditCardCVV('');
    });

    test('creditCardIssuer', () => {
      (faker.finance.creditCardIssuer(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.creditCardIssuer(): number);
      // $FlowExpectedError[extra-arg]
      faker.finance.creditCardIssuer('');
    });

    test('creditCardNumber', () => {
      (faker.finance.creditCardNumber(): string);
      faker.finance.creditCardNumber('');

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.creditCardNumber(): number);
      // $FlowExpectedError[incompatible-call]
      faker.finance.creditCardNumber(123);
    });

    test('currencyCode', () => {
      (faker.finance.currencyCode(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.currencyCode(): number);
      // $FlowExpectedError[extra-arg]
      faker.finance.currencyCode('');
    });

    test('currencyName', () => {
      (faker.finance.currencyName(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.currencyName(): number);
      // $FlowExpectedError[extra-arg]
      faker.finance.currencyName('');
    });

    test('currencySymbol', () => {
      (faker.finance.currencySymbol(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.currencySymbol(): number);
      // $FlowExpectedError[extra-arg]
      faker.finance.currencySymbol('');
    });

    test('ethereumAddress', () => {
      (faker.finance.ethereumAddress(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.ethereumAddress(): number);
      // $FlowExpectedError[extra-arg]
      faker.finance.ethereumAddress('');
    });

    test('iban', () => {
      (faker.finance.iban(): string);
      faker.finance.iban(true);
      faker.finance.iban(true, '');

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.iban(): number);
      // $FlowExpectedError[incompatible-call]
      faker.finance.iban('');
      // $FlowExpectedError[incompatible-call]
      faker.finance.iban(true, true);
    });

    test('litecoinAddress', () => {
      (faker.finance.litecoinAddress(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.litecoinAddress(): number);
      // $FlowExpectedError[extra-arg]
      faker.finance.litecoinAddress('');
    });

    test('mask', () => {
      (faker.finance.mask(): string);
      faker.finance.mask(1);
      faker.finance.mask(1, true, true);

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.mask(): number);
      // $FlowExpectedError[incompatible-call]
      faker.finance.mask('');
      // $FlowExpectedError[incompatible-call]
      faker.finance.mask(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.finance.mask(1, true, '');
    });

    test('pin', () => {
      (faker.finance.pin(): string);
      faker.finance.pin(1);

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.pin(): number);
      // $FlowExpectedError[incompatible-call]
      faker.finance.pin('');
    });

    test('routingNumber', () => {
      (faker.finance.routingNumber(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.routingNumber(): number);
      // $FlowExpectedError[extra-arg]
      faker.finance.routingNumber('');
    });

    test('transactionDescription', () => {
      (faker.finance.transactionDescription(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.transactionDescription(): number);
      // $FlowExpectedError[extra-arg]
      faker.finance.transactionDescription('');
    });

    test('transactionType', () => {
      (faker.finance.transactionType(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.finance.transactionType(): number);
      // $FlowExpectedError[extra-arg]
      faker.finance.transactionType('');
    });
  });

  describe('git', () => {
    test('branch', () => {
      (faker.git.branch(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.git.branch(): number);
      // $FlowExpectedError[extra-arg]
      faker.git.branch('');
    });

    test('commitEntry', () => {
      (faker.git.commitEntry(): string);
      faker.git.commitEntry({});
      faker.git.commitEntry({
        eol: 'CRLF',
        merge: true,
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.git.commitEntry(): number);
      // $FlowExpectedError[incompatible-call]
      faker.git.commitEntry('');
      // $FlowExpectedError[prop-missing]
      faker.git.commitEntry({
        foo: 'bar',
      });
      faker.git.commitEntry({
        // $FlowExpectedError[incompatible-call]
        eol: 'crlf',
      });
      faker.git.commitEntry({
        // $FlowExpectedError[incompatible-call]
        merge: '',
      });
    });

    test('commitMessage', () => {
      (faker.git.commitMessage(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.git.commitMessage(): number);
      // $FlowExpectedError[extra-arg]
      faker.git.commitMessage('');
    });

    test('commitSha', () => {
      (faker.git.commitSha(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.git.commitSha(): number);
      // $FlowExpectedError[extra-arg]
      faker.git.commitSha('');
    });

    test('shortSha', () => {
      (faker.git.shortSha(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.git.shortSha(): number);
      // $FlowExpectedError[extra-arg]
      faker.git.shortSha('');
    });
  });

  describe('hacker', () => {
    test('abbreviation', () => {
      (faker.hacker.abbreviation(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.hacker.abbreviation(): number);
      // $FlowExpectedError[extra-arg]
      faker.hacker.abbreviation('');
    });

    test('adjective', () => {
      (faker.hacker.adjective(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.hacker.adjective(): number);
      // $FlowExpectedError[extra-arg]
      faker.hacker.adjective('');
    });

    test('ingverb', () => {
      (faker.hacker.ingverb(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.hacker.ingverb(): number);
      // $FlowExpectedError[extra-arg]
      faker.hacker.ingverb('');
    });

    test('noun', () => {
      (faker.hacker.noun(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.hacker.noun(): number);
      // $FlowExpectedError[extra-arg]
      faker.hacker.noun('');
    });

    test('phrase', () => {
      (faker.hacker.phrase(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.hacker.phrase(): number);
      // $FlowExpectedError[extra-arg]
      faker.hacker.phrase('');
    });

    test('verb', () => {
      (faker.hacker.verb(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.hacker.verb(): number);
      // $FlowExpectedError[extra-arg]
      faker.hacker.verb('');
    });
  });

  describe('helpers', () => {
    test('arrayElement', () => {
      faker.helpers.arrayElement();
      (faker.helpers.arrayElement<string>(): string);
      faker.helpers.arrayElement<string>(['']);

      // $FlowExpectedError[incompatible-cast]
      (faker.helpers.arrayElement<string>(): number);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.arrayElement<string>([123]);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.arrayElement<string>(['', 123]);
    });

    test('arrayElements', () => {
      faker.helpers.arrayElements();
      (faker.helpers.arrayElements<string>(): Array<string>);
      faker.helpers.arrayElements<string>(['']);
      faker.helpers.arrayElements([''], 1);

      // $FlowExpectedError[incompatible-cast]
      (faker.helpers.arrayElements<string>(): number);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.arrayElements<string>([123]);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.arrayElements<string>(['', 123]);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.arrayElements([1], '');
    });

    test('maybe', () => {
      (faker.helpers.maybe<string>(() => ''): string);
      faker.helpers.maybe(() => '', { probability: 1 });

      // $FlowExpectedError[incompatible-cast]
      (faker.helpers.maybe<string>(() => ''): number);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.maybe<string>(() => 1);
      // $FlowExpectedError[prop-missing]
      faker.helpers.maybe<string>(() => '', { foo: 'bar' });
      // $FlowExpectedError[incompatible-call]
      faker.helpers.maybe<string>(() => '', { probability: '' });
    });

    test('mustache', () => {
      (faker.helpers.mustache(): string);
      faker.helpers.mustache('I found {{count}} instances of "{{word}}".', {
        count: () => `${faker.datatype.number()}`,
        word: "this word",
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.helpers.mustache(): number);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.mustache(123);
      faker.helpers.mustache('', {
        // $FlowExpectedError[incompatible-call]
        count: 123,
      });
    });

    test('objectKey', () => {
      (faker.helpers.objectKey({ a: 'b' }): string | void);

      // $FlowExpectedError[incompatible-call]
      faker.helpers.objectKey('');
    });

    test('objectValue', () => {
      (faker.helpers.objectValue({ a: 'b' }): string | void);
      faker.helpers.objectValue<number>({ a: 1 });

      // $FlowExpectedError[incompatible-call]
      faker.helpers.objectValue('');
      // $FlowExpectedError[incompatible-call]
      faker.helpers.objectValue<number>({ a: '' });
    });

    test('regexpStyleStringParse', () => {
      (faker.helpers.regexpStyleStringParse(): string);
      faker.helpers.regexpStyleStringParse('');

      // $FlowExpectedError[incompatible-cast]
      (faker.helpers.regexpStyleStringParse(): number);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.regexpStyleStringParse(123);
    });

    test('repeatString', () => {
      (faker.helpers.repeatString(): string);
      faker.helpers.repeatString('');
      faker.helpers.repeatString('', 1);

      // $FlowExpectedError[incompatible-cast]
      (faker.helpers.repeatString(): number);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.repeatString(123);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.repeatString('', '');
    });

    test('replaceCreditCardSymbols', () => {
      (faker.helpers.replaceCreditCardSymbols(): string);
      faker.helpers.replaceCreditCardSymbols('');
      faker.helpers.replaceCreditCardSymbols('', '');

      // $FlowExpectedError[incompatible-cast]
      (faker.helpers.replaceCreditCardSymbols(): number);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.replaceCreditCardSymbols(123);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.replaceCreditCardSymbols('', 123);
    });

    test('replaceSymbolWithNumber', () => {
      (faker.helpers.replaceSymbolWithNumber(): string);
      faker.helpers.replaceSymbolWithNumber('');
      faker.helpers.replaceSymbolWithNumber('', '');

      // $FlowExpectedError[incompatible-cast]
      (faker.helpers.replaceSymbolWithNumber(): number);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.replaceSymbolWithNumber(123);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.replaceSymbolWithNumber('', 123);
    });

    test('replaceSymbols', () => {
      (faker.helpers.replaceSymbols(): string);
      faker.helpers.replaceSymbols('');

      // $FlowExpectedError[incompatible-cast]
      (faker.helpers.replaceSymbols(): number);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.replaceSymbols(123);
    });

    test('shuffle', () => {
      faker.helpers.shuffle();
      (faker.helpers.shuffle<string>(): Array<string>);
      faker.helpers.shuffle<string>(['']);

      // $FlowExpectedError[incompatible-cast]
      (faker.helpers.shuffle<string>(): number);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.shuffle<string>([123]);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.shuffle<string>(['', 123]);
    });

    test('slugify', () => {
      (faker.helpers.slugify(): string);
      faker.helpers.slugify('');

      // $FlowExpectedError[incompatible-cast]
      (faker.helpers.slugify(): number);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.slugify(123);
    });

    test('uniqueArray', () => {
      (faker.helpers.uniqueArray<string>(): Array<string>);
      faker.helpers.uniqueArray(faker.random.word);
      faker.helpers.uniqueArray(faker.random.word, 50);
      faker.helpers.uniqueArray(["Hello", "World", "Goodbye"], 2);

      // $FlowExpectedError[incompatible-cast]
      (faker.helpers.uniqueArray<string>(): string);
      // $FlowExpectedError[incompatible-call]
      faker.helpers.uniqueArray('');
      // $FlowExpectedError[incompatible-call]
      faker.helpers.uniqueArray(faker.random.word, '');
    });
  });

  describe('image', () => {
    test('abstract', () => {
      (faker.image.abstract(): string);
      faker.image.abstract(1);
      faker.image.abstract(1, 2);
      faker.image.abstract(1, 2, true);

      // $FlowExpectedError[incompatible-cast]
      (faker.image.abstract(): number);
      // $FlowExpectedError[incompatible-call]
      faker.image.abstract('');
      // $FlowExpectedError[incompatible-call]
      faker.image.abstract(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.image.abstract(1, 2, '');
    });

    test('animals', () => {
      (faker.image.animals(): string);
      faker.image.animals(1);
      faker.image.animals(1, 2);
      faker.image.animals(1, 2, true);

      // $FlowExpectedError[incompatible-cast]
      (faker.image.animals(): number);
      // $FlowExpectedError[incompatible-call]
      faker.image.animals('');
      // $FlowExpectedError[incompatible-call]
      faker.image.animals(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.image.animals(1, 2, '');
    });

    test('avatar', () => {
      (faker.image.avatar(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.image.avatar(): number);
      // $FlowExpectedError[extra-arg]
      faker.image.avatar('');
    });

    test('business', () => {
      (faker.image.business(): string);
      faker.image.business(1);
      faker.image.business(1, 2);
      faker.image.business(1, 2, true);

      // $FlowExpectedError[incompatible-cast]
      (faker.image.business(): number);
      // $FlowExpectedError[incompatible-call]
      faker.image.business('');
      // $FlowExpectedError[incompatible-call]
      faker.image.business(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.image.business(1, 2, '');
    });

    test('cats', () => {
      (faker.image.cats(): string);
      faker.image.cats(1);
      faker.image.cats(1, 2);
      faker.image.cats(1, 2, true);

      // $FlowExpectedError[incompatible-cast]
      (faker.image.cats(): number);
      // $FlowExpectedError[incompatible-call]
      faker.image.cats('');
      // $FlowExpectedError[incompatible-call]
      faker.image.cats(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.image.cats(1, 2, '');
    });

    test('city', () => {
      (faker.image.city(): string);
      faker.image.city(1);
      faker.image.city(1, 2);
      faker.image.city(1, 2, true);

      // $FlowExpectedError[incompatible-cast]
      (faker.image.city(): number);
      // $FlowExpectedError[incompatible-call]
      faker.image.city('');
      // $FlowExpectedError[incompatible-call]
      faker.image.city(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.image.city(1, 2, '');
    });

    test('dataUri', () => {
      (faker.image.dataUri(): string);
      faker.image.dataUri(1);
      faker.image.dataUri(1, 2);
      faker.image.dataUri(1, 2, '');

      // $FlowExpectedError[incompatible-cast]
      (faker.image.dataUri(): number);
      // $FlowExpectedError[incompatible-call]
      faker.image.dataUri('');
      // $FlowExpectedError[incompatible-call]
      faker.image.dataUri(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.image.dataUri(1, 2, true);
    });

    test('fashion', () => {
      (faker.image.fashion(): string);
      faker.image.fashion(1);
      faker.image.fashion(1, 2);
      faker.image.fashion(1, 2, true);

      // $FlowExpectedError[incompatible-cast]
      (faker.image.fashion(): number);
      // $FlowExpectedError[incompatible-call]
      faker.image.fashion('');
      // $FlowExpectedError[incompatible-call]
      faker.image.fashion(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.image.fashion(1, 2, '');
    });

    test('food', () => {
      (faker.image.food(): string);
      faker.image.food(1);
      faker.image.food(1, 2);
      faker.image.food(1, 2, true);

      // $FlowExpectedError[incompatible-cast]
      (faker.image.food(): number);
      // $FlowExpectedError[incompatible-call]
      faker.image.food('');
      // $FlowExpectedError[incompatible-call]
      faker.image.food(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.image.food(1, 2, '');
    });

    test('image', () => {
      (faker.image.image(): string);
      faker.image.image(1);
      faker.image.image(1, 2);
      faker.image.image(1, 2, true);

      // $FlowExpectedError[incompatible-cast]
      (faker.image.image(): number);
      // $FlowExpectedError[incompatible-call]
      faker.image.image('');
      // $FlowExpectedError[incompatible-call]
      faker.image.image(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.image.image(1, 2, '');
    });

    test('imageUrl', () => {
      (faker.image.imageUrl(): string);
      faker.image.imageUrl(1);
      faker.image.imageUrl(1, 2);
      faker.image.imageUrl(1, 2, '');

      // $FlowExpectedError[incompatible-cast]
      (faker.image.imageUrl(): number);
      // $FlowExpectedError[incompatible-call]
      faker.image.imageUrl('');
      // $FlowExpectedError[incompatible-call]
      faker.image.imageUrl(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.image.imageUrl(1, 2, true);
    });

    test('nature', () => {
      (faker.image.nature(): string);
      faker.image.nature(1);
      faker.image.nature(1, 2);
      faker.image.nature(1, 2, true);

      // $FlowExpectedError[incompatible-cast]
      (faker.image.nature(): number);
      // $FlowExpectedError[incompatible-call]
      faker.image.nature('');
      // $FlowExpectedError[incompatible-call]
      faker.image.nature(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.image.nature(1, 2, '');
    });

    test('nightlife', () => {
      (faker.image.nightlife(): string);
      faker.image.nightlife(1);
      faker.image.nightlife(1, 2);
      faker.image.nightlife(1, 2, true);

      // $FlowExpectedError[incompatible-cast]
      (faker.image.nightlife(): number);
      // $FlowExpectedError[incompatible-call]
      faker.image.nightlife('');
      // $FlowExpectedError[incompatible-call]
      faker.image.nightlife(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.image.nightlife(1, 2, '');
    });

    test('people', () => {
      (faker.image.people(): string);
      faker.image.people(1);
      faker.image.people(1, 2);
      faker.image.people(1, 2, true);

      // $FlowExpectedError[incompatible-cast]
      (faker.image.people(): number);
      // $FlowExpectedError[incompatible-call]
      faker.image.people('');
      // $FlowExpectedError[incompatible-call]
      faker.image.people(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.image.people(1, 2, '');
    });

    test('sports', () => {
      (faker.image.sports(): string);
      faker.image.sports(1);
      faker.image.sports(1, 2);
      faker.image.sports(1, 2, true);

      // $FlowExpectedError[incompatible-cast]
      (faker.image.sports(): number);
      // $FlowExpectedError[incompatible-call]
      faker.image.sports('');
      // $FlowExpectedError[incompatible-call]
      faker.image.sports(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.image.sports(1, 2, '');
    });

    test('technics', () => {
      (faker.image.technics(): string);
      faker.image.technics(1);
      faker.image.technics(1, 2);
      faker.image.technics(1, 2, true);

      // $FlowExpectedError[incompatible-cast]
      (faker.image.technics(): number);
      // $FlowExpectedError[incompatible-call]
      faker.image.technics('');
      // $FlowExpectedError[incompatible-call]
      faker.image.technics(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.image.technics(1, 2, '');
    });

    test('transport', () => {
      (faker.image.transport(): string);
      faker.image.transport(1);
      faker.image.transport(1, 2);
      faker.image.transport(1, 2, true);

      // $FlowExpectedError[incompatible-cast]
      (faker.image.transport(): number);
      // $FlowExpectedError[incompatible-call]
      faker.image.transport('');
      // $FlowExpectedError[incompatible-call]
      faker.image.transport(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.image.transport(1, 2, '');
    });
  });

  describe('internet', () => {
    test('avatar', () => {
      (faker.internet.avatar(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.avatar(): number);
      // $FlowExpectedError[extra-arg]
      faker.internet.avatar('');
    });

    test('color', () => {
      (faker.internet.color(): string);
      faker.internet.color(1);
      faker.internet.color(1, 2);
      faker.internet.color(1, 2, 3);

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.color(): number);
      // $FlowExpectedError[incompatible-call]
      faker.internet.color('');
      // $FlowExpectedError[incompatible-call]
      faker.internet.color(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.internet.color(1, 2, '');
    });

    test('domainName', () => {
      (faker.internet.domainName(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.domainName(): number);
      // $FlowExpectedError[extra-arg]
      faker.internet.domainName('');
    });

    test('domainSuffix', () => {
      (faker.internet.domainSuffix(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.domainSuffix(): number);
      // $FlowExpectedError[extra-arg]
      faker.internet.domainSuffix('');
    });

    test('domainWord', () => {
      (faker.internet.domainWord(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.domainWord(): number);
      // $FlowExpectedError[extra-arg]
      faker.internet.domainWord('');
    });

    test('email', () => {
      (faker.internet.email(): string);
      faker.internet.email('');
      faker.internet.email('', '');
      faker.internet.email('', '', '');
      faker.internet.email('', '', '', {});
      faker.internet.email('', '', '', {
        allowSpecialCharacters: true,
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.email(): number);
      // $FlowExpectedError[incompatible-call]
      faker.internet.email(1);
      // $FlowExpectedError[incompatible-call]
      faker.internet.email('', 2);
      // $FlowExpectedError[incompatible-call]
      faker.internet.email('', '', 3);
      // $FlowExpectedError[incompatible-call]
      faker.internet.email('', '', '', '');
      // $FlowExpectedError[prop-missing]
      faker.internet.email('', '', '', {
        foo: 'bar',
      });
      faker.internet.email('', '', '', {
        // $FlowExpectedError[incompatible-call]
        allowSpecialCharacters: 'bar',
      });
    });

    test('emoji', () => {
      (faker.internet.emoji(): string);
      faker.internet.emoji({});
      faker.internet.emoji({
        types: ['smiley'],
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.emoji(): number);
      // $FlowExpectedError[incompatible-call]
      faker.internet.emoji('');
      // $FlowExpectedError[prop-missing]
      faker.internet.emoji({
        foo: 'bar',
      });
      faker.internet.emoji({
        // $FlowExpectedError[incompatible-call]
        types: 'smiley',
      });
    });

    test('exampleEmail', () => {
      (faker.internet.exampleEmail(): string);
      faker.internet.exampleEmail('');
      faker.internet.exampleEmail('', '');
      faker.internet.exampleEmail('', '', {});
      faker.internet.exampleEmail('', '', {
        allowSpecialCharacters: true,
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.exampleEmail(): number);
      // $FlowExpectedError[incompatible-call]
      faker.internet.exampleEmail(1);
      // $FlowExpectedError[incompatible-call]
      faker.internet.exampleEmail('', 2);
      // $FlowExpectedError[incompatible-call]
      faker.internet.exampleEmail('', '', 3);
      // $FlowExpectedError[prop-missing]
      faker.internet.exampleEmail('', '', {
        foo: 'bar',
      });
      faker.internet.exampleEmail('', '', {
        // $FlowExpectedError[incompatible-call]
        allowSpecialCharacters: 'bar',
      });
    });

    test('httpMethod', () => {
      (faker.internet.httpMethod(): 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH');

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.httpMethod(): number);
      // $FlowExpectedError[extra-arg]
      faker.internet.httpMethod('');
    });

    test('httpStatusCode', () => {
      (faker.internet.httpStatusCode(): number);
      faker.internet.httpStatusCode({});
      faker.internet.httpStatusCode({
        types: ['informational'],
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.httpStatusCode(): string);
      // $FlowExpectedError[incompatible-call]
      faker.internet.httpStatusCode('');
      // $FlowExpectedError[prop-missing]
      faker.internet.httpStatusCode({
        foo: 'bar',
      });
      faker.internet.httpStatusCode({
        // $FlowExpectedError[incompatible-call]
        types: 'informational',
      });
    });

    test('ip', () => {
      (faker.internet.ip(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.ip(): number);
      // $FlowExpectedError[extra-arg]
      faker.internet.ip('');
    });

    test('ipv4', () => {
      (faker.internet.ipv4(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.ipv4(): number);
      // $FlowExpectedError[extra-arg]
      faker.internet.ipv4('');
    });

    test('ipv6', () => {
      (faker.internet.ipv6(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.ipv6(): number);
      // $FlowExpectedError[extra-arg]
      faker.internet.ipv6('');
    });

    test('mac', () => {
      (faker.internet.mac(): string);
      faker.internet.mac('');

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.mac(): number);
      // $FlowExpectedError[incompatible-call]
      faker.internet.mac(123);
    });

    test('password', () => {
      (faker.internet.password(): string);
      faker.internet.password(1);
      faker.internet.password(1, true);
      faker.internet.password(1, true, / /);
      faker.internet.password(1, true, / /, '');

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.password(): number);
      // $FlowExpectedError[incompatible-call]
      faker.internet.password('');
      // $FlowExpectedError[incompatible-call]
      faker.internet.password(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.internet.password(1, true, '');
      // $FlowExpectedError[incompatible-call]
      faker.internet.password(1, true, / /, 1);
    });

    test('port', () => {
      (faker.internet.port(): number);

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.port(): string);
      // $FlowExpectedError[extra-arg]
      faker.internet.port('');
    });

    test('protocol', () => {
      (faker.internet.protocol(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.protocol(): number);
      // $FlowExpectedError[extra-arg]
      faker.internet.protocol('');
    });

    test('url', () => {
      (faker.internet.url(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.url(): number);
      // $FlowExpectedError[extra-arg]
      faker.internet.url('');
    });

    test('userAgent', () => {
      (faker.internet.userAgent(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.userAgent(): number);
      // $FlowExpectedError[extra-arg]
      faker.internet.userAgent('');
    });

    test('userName', () => {
      (faker.internet.userName(): string);
      faker.internet.userName('');
      faker.internet.userName('', '');

      // $FlowExpectedError[incompatible-cast]
      (faker.internet.userName(): number);
      // $FlowExpectedError[incompatible-call]
      faker.internet.userName(1);
      // $FlowExpectedError[incompatible-call]
      faker.internet.userName('', 1);
    });
  });

  describe('lorem', () => {
    test('lines', () => {
      (faker.lorem.lines(): string);
      faker.lorem.lines(1);

      // $FlowExpectedError[incompatible-cast]
      (faker.lorem.lines(): number);
      // $FlowExpectedError[incompatible-call]
      faker.lorem.lines('');
    });

    test('paragraph', () => {
      (faker.lorem.paragraph(): string);
      faker.lorem.paragraph(1);

      // $FlowExpectedError[incompatible-cast]
      (faker.lorem.paragraph(): number);
      // $FlowExpectedError[incompatible-call]
      faker.lorem.paragraph('');
    });

    test('paragraphs', () => {
      (faker.lorem.paragraphs(): string);
      faker.lorem.paragraphs(1);
      faker.lorem.paragraphs(1, '');

      // $FlowExpectedError[incompatible-cast]
      (faker.lorem.paragraphs(): number);
      // $FlowExpectedError[incompatible-call]
      faker.lorem.paragraphs('');
      // $FlowExpectedError[incompatible-call]
      faker.lorem.paragraphs(1, 1);
    });

    test('sentence', () => {
      (faker.lorem.sentence(): string);
      faker.lorem.sentence(1);

      // $FlowExpectedError[incompatible-cast]
      (faker.lorem.sentence(): number);
      // $FlowExpectedError[incompatible-call]
      faker.lorem.sentence('');
    });

    test('sentences', () => {
      (faker.lorem.sentences(): string);
      faker.lorem.sentences(1);
      faker.lorem.sentences(1, '');

      // $FlowExpectedError[incompatible-cast]
      (faker.lorem.sentences(): number);
      // $FlowExpectedError[incompatible-call]
      faker.lorem.sentences('');
      // $FlowExpectedError[incompatible-call]
      faker.lorem.sentences(1, 1);
    });

    test('slug', () => {
      (faker.lorem.slug(): string);
      faker.lorem.slug(1);

      // $FlowExpectedError[incompatible-cast]
      (faker.lorem.slug(): number);
      // $FlowExpectedError[incompatible-call]
      faker.lorem.slug('');
    });

    test('text', () => {
      (faker.lorem.text(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.lorem.text(): number);
      // $FlowExpectedError[extra-arg]
      faker.lorem.text('');
    });

    test('word', () => {
      (faker.lorem.word(): string);
      faker.lorem.word(1);

      // $FlowExpectedError[incompatible-cast]
      (faker.lorem.word(): number);
      // $FlowExpectedError[incompatible-call]
      faker.lorem.word('');
    });

    test('words', () => {
      (faker.lorem.words(): string);
      faker.lorem.words(1);

      // $FlowExpectedError[incompatible-cast]
      (faker.lorem.words(): number);
      // $FlowExpectedError[incompatible-call]
      faker.lorem.words('');
    });
  });

  describe('mersenne', () => {
    test('rand', () => {
      (faker.mersenne.rand(): number);
      faker.mersenne.rand(1);
      faker.mersenne.rand(1, 2);

      // $FlowExpectedError[incompatible-cast]
      (faker.mersenne.rand(): string);
      // $FlowExpectedError[incompatible-call]
      faker.mersenne.rand('');
      // $FlowExpectedError[incompatible-call]
      faker.mersenne.rand(1, '');
    });

    test('seed', () => {
      (faker.mersenne.seed(1): void);

      // $FlowExpectedError[incompatible-cast]
      (faker.mersenne.seed(1): string);
      // $FlowExpectedError[incompatible-call]
      faker.mersenne.seed('');
    });

    test('seed_array', () => {
      (faker.mersenne.seed_array([1]): void);

      // $FlowExpectedError[incompatible-cast]
      (faker.mersenne.seed_array([1]): string);
      // $FlowExpectedError[incompatible-call]
      faker.mersenne.seed_array('');
      // $FlowExpectedError[incompatible-call]
      faker.mersenne.seed_array(['']);
    });
  });

  describe('music', () => {
    test('genre', () => {
      (faker.music.genre(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.music.genre(): number);
      // $FlowExpectedError[extra-arg]
      faker.music.genre('');
    });

    test('songName', () => {
      (faker.music.songName(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.music.songName(): number);
      // $FlowExpectedError[extra-arg]
      faker.music.songName('');
    });
  });

  describe('name', () => {
    test('findName', () => {
      (faker.name.findName(): string);
      faker.name.findName('');
      faker.name.findName('', '');
      faker.name.findName('', '', 'male');

      // $FlowExpectedError[incompatible-cast]
      (faker.name.findName(): number);
      // $FlowExpectedError[incompatible-call]
      faker.name.findName(1, '');
      // $FlowExpectedError[incompatible-call]
      faker.name.findName('', 1);
      // $FlowExpectedError[incompatible-call]
      faker.name.findName('', '', 'test');
    });

    test('firstName', () => {
      (faker.name.firstName(): string);
      faker.name.firstName('male');

      // $FlowExpectedError[incompatible-cast]
      (faker.name.firstName(): number);
      // $FlowExpectedError[incompatible-call]
      faker.name.firstName('test');
    });

    test('gender', () => {
      (faker.name.gender(): string);
      faker.name.gender(true);

      // $FlowExpectedError[incompatible-cast]
      (faker.name.gender(): number);
      // $FlowExpectedError[incompatible-call]
      faker.name.gender('test');
    });

    test('jobArea', () => {
      (faker.name.jobArea(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.name.jobArea(): number);
      // $FlowExpectedError[extra-arg]
      faker.name.jobArea('');
    });

    test('jobDescriptor', () => {
      (faker.name.jobDescriptor(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.name.jobDescriptor(): number);
      // $FlowExpectedError[extra-arg]
      faker.name.jobDescriptor('');
    });

    test('jobTitle', () => {
      (faker.name.jobTitle(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.name.jobTitle(): number);
      // $FlowExpectedError[extra-arg]
      faker.name.jobTitle('');
    });

    test('jobType', () => {
      (faker.name.jobType(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.name.jobType(): number);
      // $FlowExpectedError[extra-arg]
      faker.name.jobType('');
    });

    test('lastName', () => {
      (faker.name.lastName(): string);
      faker.name.lastName('male');

      // $FlowExpectedError[incompatible-cast]
      (faker.name.lastName(): number);
      // $FlowExpectedError[incompatible-call]
      faker.name.lastName('test');
    });

    test('middleName', () => {
      (faker.name.middleName(): string);
      faker.name.middleName('male');

      // $FlowExpectedError[incompatible-cast]
      (faker.name.middleName(): number);
      // $FlowExpectedError[incompatible-call]
      faker.name.middleName('test');
    });

    test('prefix', () => {
      (faker.name.prefix(): string);
      faker.name.prefix('male');

      // $FlowExpectedError[incompatible-cast]
      (faker.name.prefix(): number);
      // $FlowExpectedError[incompatible-call]
      faker.name.prefix('test');
    });

    test('suffix', () => {
      (faker.name.suffix(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.name.suffix(): number);
      // $FlowExpectedError[extra-arg]
      faker.name.suffix('');
    });
  });

  describe('phone', () => {
    test('imei', () => {
      (faker.phone.imei(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.phone.imei(): number);
      // $FlowExpectedError[extra-arg]
      faker.phone.imei('');
    });

    test('number', () => {
      (faker.phone.number(): string);
      faker.phone.number('');

      // $FlowExpectedError[incompatible-cast]
      (faker.phone.number(): number);
      // $FlowExpectedError[incompatible-call]
      faker.phone.number(1);
    });

    test('phoneFormats', () => {
      (faker.phone.phoneFormats(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.phone.phoneFormats(): number);
      // $FlowExpectedError[extra-arg]
      faker.phone.phoneFormats('');
    });

    test('phoneNumber', () => {
      (faker.phone.phoneNumber(): string);
      faker.phone.phoneNumber('');

      // $FlowExpectedError[incompatible-cast]
      (faker.phone.phoneNumber(): number);
      // $FlowExpectedError[incompatible-call]
      faker.phone.phoneNumber(1);
    });

    test('phoneNumberFormat', () => {
      (faker.phone.phoneNumberFormat(): string);
      faker.phone.phoneNumberFormat(1);

      // $FlowExpectedError[incompatible-cast]
      (faker.phone.phoneNumberFormat(): number);
      // $FlowExpectedError[incompatible-call]
      faker.phone.phoneNumberFormat('');
    });
  });

  describe('random', () => {
    test('alpha', () => {
      (faker.random.alpha(): string);
      faker.random.alpha(1);
      faker.random.alpha({});
      faker.random.alpha({
        bannedChars: 'a',
        casing: 'upper',
        count: 1,
        upcase: true,
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.random.alpha(): number);
      // $FlowExpectedError[incompatible-call]
      faker.random.alpha('');
      // $FlowExpectedError[incompatible-call]
      faker.random.alpha({
        foo: 'bar',
      });
      // $FlowExpectedError[incompatible-call]
      faker.random.alpha({
        bannedChars: '1',
      });
      // $FlowExpectedError[incompatible-call]
      faker.random.alpha({
        casing: 'test',
      });
      // $FlowExpectedError[incompatible-call]
      faker.random.alpha({
        count: '',
      });
      // $FlowExpectedError[incompatible-call]
      faker.random.alpha({
        upcase: '',
      });
    });

    test('alphaNumeric', () => {
      (faker.random.alphaNumeric(): string);
      faker.random.alphaNumeric(1);
      faker.random.alphaNumeric(1, {});
      faker.random.alphaNumeric(1, {
        bannedChars: '1',
        casing: 'upper',
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.random.alphaNumeric(): number);
      // $FlowExpectedError[incompatible-call]
      faker.random.alphaNumeric('');
      // $FlowExpectedError[prop-missing]
      faker.random.alphaNumeric(1, {
        foo: 'bar',
      });
      faker.random.alphaNumeric(1, {
        // $FlowExpectedError[incompatible-call]
        bannedChars: 'as',
      });
      faker.random.alphaNumeric(1, {
        // $FlowExpectedError[incompatible-call]
        casing: 'test',
      });
    });

    test('locale', () => {
      (faker.random.locale(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.random.locale(): number);
      // $FlowExpectedError[extra-arg]
      faker.random.locale('');
    });

    test('numeric', () => {
      (faker.random.numeric(): string);
      faker.random.numeric(1);
      faker.random.numeric(1, {});
      faker.random.numeric(1, {
        allowLeadingZeros: true,
        bannedDigits: '1',
      });

      // $FlowExpectedError[incompatible-cast]
      (faker.random.numeric(): number);
      // $FlowExpectedError[incompatible-call]
      faker.random.numeric('');
      // $FlowExpectedError[prop-missing]
      faker.random.numeric(1, {
        foo: 'bar',
      });
      faker.random.numeric(1, {
        // $FlowExpectedError[incompatible-call]
        allowLeadingZeros: 'as',
      });
      faker.random.numeric(1, {
        // $FlowExpectedError[incompatible-call]
        bannedDigits: 'test',
      });
    });

    test('word', () => {
      (faker.random.word(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.random.word(): number);
      // $FlowExpectedError[extra-arg]
      faker.random.word('');
    });

    test('words', () => {
      (faker.random.words(): string);
      faker.random.words(1);

      // $FlowExpectedError[incompatible-cast]
      (faker.random.words(): number);
      // $FlowExpectedError[incompatible-call]
      faker.random.words('');
    });
  });

  describe('science', () => {
    test('chemicalElement', () => {
      (faker.science.chemicalElement(): {|
        symbol: string,
        name: string,
        atomicNumber: number,
      |});

      // $FlowExpectedError[incompatible-cast]
      (faker.science.chemicalElement(): number);
      // $FlowExpectedError[extra-arg]
      faker.science.chemicalElement('');
    });

    test('unit', () => {
      (faker.science.unit(): {|
        symbol: string,
        name: string,
      |});

      // $FlowExpectedError[incompatible-cast]
      (faker.science.unit(): number);
      // $FlowExpectedError[extra-arg]
      faker.science.unit('');
    });
  });

  describe('system', () => {
    test('commonFileExt', () => {
      (faker.system.commonFileExt(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.system.commonFileExt(): number);
      // $FlowExpectedError[extra-arg]
      faker.system.commonFileExt('');
    });

    test('commonFileName', () => {
      (faker.system.commonFileName(): string);
      faker.system.commonFileName('');

      // $FlowExpectedError[incompatible-cast]
      (faker.system.commonFileName(): number);
      // $FlowExpectedError[incompatible-call]
      faker.system.commonFileName(1);
    });

    test('commonFileType', () => {
      (faker.system.commonFileType(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.system.commonFileType(): number);
      // $FlowExpectedError[extra-arg]
      faker.system.commonFileType('');
    });

    test('directoryPath', () => {
      (faker.system.directoryPath(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.system.directoryPath(): number);
      // $FlowExpectedError[extra-arg]
      faker.system.directoryPath('');
    });

    test('fileExt', () => {
      (faker.system.fileExt(): string);
      faker.system.fileExt('');

      // $FlowExpectedError[incompatible-cast]
      (faker.system.fileExt(): number);
      // $FlowExpectedError[incompatible-call]
      faker.system.fileExt(1);
    });

    test('fileName', () => {
      (faker.system.fileName(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.system.fileName(): number);
      // $FlowExpectedError[extra-arg]
      faker.system.fileName('');
    });

    test('filePath', () => {
      (faker.system.filePath(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.system.filePath(): number);
      // $FlowExpectedError[extra-arg]
      faker.system.filePath('');
    });

    test('fileType', () => {
      (faker.system.fileType(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.system.fileType(): number);
      // $FlowExpectedError[extra-arg]
      faker.system.fileType('');
    });

    test('mimeType', () => {
      (faker.system.mimeType(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.system.mimeType(): number);
      // $FlowExpectedError[extra-arg]
      faker.system.mimeType('');
    });

    test('semver', () => {
      (faker.system.semver(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.system.semver(): number);
      // $FlowExpectedError[extra-arg]
      faker.system.semver('');
    });
  });

  describe('vehicle', () => {
    test('bicycle', () => {
      (faker.vehicle.bicycle(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.vehicle.bicycle(): number);
      // $FlowExpectedError[extra-arg]
      faker.vehicle.bicycle('');
    });

    test('color', () => {
      (faker.vehicle.color(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.vehicle.color(): number);
      // $FlowExpectedError[extra-arg]
      faker.vehicle.color('');
    });

    test('fuel', () => {
      (faker.vehicle.fuel(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.vehicle.fuel(): number);
      // $FlowExpectedError[extra-arg]
      faker.vehicle.fuel('');
    });

    test('manufacturer', () => {
      (faker.vehicle.manufacturer(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.vehicle.manufacturer(): number);
      // $FlowExpectedError[extra-arg]
      faker.vehicle.manufacturer('');
    });

    test('model', () => {
      (faker.vehicle.model(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.vehicle.model(): number);
      // $FlowExpectedError[extra-arg]
      faker.vehicle.model('');
    });

    test('type', () => {
      (faker.vehicle.type(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.vehicle.type(): number);
      // $FlowExpectedError[extra-arg]
      faker.vehicle.type('');
    });

    test('vehicle', () => {
      (faker.vehicle.vehicle(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.vehicle.vehicle(): number);
      // $FlowExpectedError[extra-arg]
      faker.vehicle.vehicle('');
    });

    test('vin', () => {
      (faker.vehicle.vin(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.vehicle.vin(): number);
      // $FlowExpectedError[extra-arg]
      faker.vehicle.vin('');
    });

    test('vrm', () => {
      (faker.vehicle.vrm(): string);

      // $FlowExpectedError[incompatible-cast]
      (faker.vehicle.vrm(): number);
      // $FlowExpectedError[extra-arg]
      faker.vehicle.vrm('');
    });
  });
});
