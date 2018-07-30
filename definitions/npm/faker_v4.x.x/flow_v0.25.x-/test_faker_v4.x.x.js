import { describe, it } from "flow-typed-test";
import faker from "faker";

describe("address", () => {
  faker.address.zipCode();
  faker.address.zipCode("localeFormat");
  faker.address.city();
  faker.address.city("mustacheTemplate");
  faker.address.cityPrefix();
  faker.address.citySuffix();
  faker.address.streetName();
  faker.address.streetAddress();
  faker.address.streetAddress(true);
  faker.address.streetAddress(false);
  faker.address.streetSuffix();
  faker.address.streetPrefix();
  faker.address.secondaryAddress();
  faker.address.county();
  faker.address.country();
  faker.address.countryCode();
  faker.address.state();
  faker.address.state(true);
  faker.address.state(false);
  faker.address.stateAbbr();
  faker.address.latitude();
  faker.address.longitude();
});

describe("commerce", () => {
  faker.commerce.color();
  faker.commerce.department();
  faker.commerce.productName();
  faker.commerce.price();
  faker.commerce.price(1);
  faker.commerce.price(1, 2);
  faker.commerce.price(1, 2, 3);
  faker.commerce.price(1, 2, 3, "$");
  faker.commerce.productAdjective();
  faker.commerce.productMaterial();
  faker.commerce.product();
});

describe("company", () => {
  faker.company.suffixes();
  faker.company.companyName();
  faker.company.companyName("mustacheTemplate");
  faker.company.companySuffix();
  faker.company.catchPhrase();
  faker.company.bs();
  faker.company.catchPhraseAdjective();
  faker.company.catchPhraseDescriptor();
  faker.company.catchPhraseNoun();
  faker.company.bsAdjective();
  faker.company.bsBuzz();
  faker.company.bsNoun();
});

describe("database", () => {
  faker.database.column();
  faker.database.type();
  faker.database.collation();
  faker.database.engine();
});

describe("date", () => {
  faker.date.past();
  faker.date.past(2);
  faker.date.past(2, new Date());
  faker.date.future();
  faker.date.future(2);
  faker.date.future(2, new Date());
  faker.date.between(new Date(), new Date());
  faker.date.recent();
  faker.date.recent(2);
  faker.date.soon();
  faker.date.month();
  faker.date.month({ abbr: true });
  faker.date.month({ context: "wide" });
  faker.date.month({ abbr: true, context: "wide" });
  // $ExpectError
  faker.date.month({ context: "bad" });
  // $ExpectError
  faker.date.month({ abbr: 1 });
  // $ExpectError
  faker.date.month({ bad: true });
  faker.date.weekday();
  faker.date.weekday({ abbr: true });
  faker.date.weekday({ context: "wide" });
  faker.date.weekday({ abbr: true, context: "wide" });
  // $ExpectError
  faker.date.weekday({ context: "bad" });
  // $ExpectError
  faker.date.weekday({ abbr: 1 });
  // $ExpectError
  faker.date.weekday({ bad: true });
});

describe("fake", () => {
  faker.fake("mustacheTemplate");
});

describe("finance", () => {
  faker.finance.account();
  faker.finance.account(1);
  faker.finance.accountName();
  faker.finance.mask();
  faker.finance.mask(1);
  faker.finance.mask(1, true);
  faker.finance.mask(1, false);
  faker.finance.mask(1, true, true);
  faker.finance.mask(1, true, false);
  faker.finance.amount();
  faker.finance.amount(1);
  faker.finance.amount(1, 2);
  faker.finance.amount(1, 2, 3);
  faker.finance.amount(1, 2, 3, "$");
  faker.finance.transactionType();
  faker.finance.currencyCode();
  faker.finance.currencyName();
  faker.finance.currencySymbol();
  faker.finance.bitcoinAddress();
  faker.finance.ethereumAddress();
  faker.finance.iban();
  faker.finance.bic();
});

describe("hacker", () => {
  faker.hacker.abbreviation();
  faker.hacker.adjective();
  faker.hacker.noun();
  faker.hacker.verb();
  faker.hacker.ingverb();
  faker.hacker.phrase();
});

describe("helpers", () => {
  faker.helpers.randomize([]);
  faker.helpers.slugify("string");
  faker.helpers.replaceSymbolWithNumber("string");
  faker.helpers.replaceSymbolWithNumber("string", "symbol");
  faker.helpers.replaceSymbols("string");
  faker.helpers.shuffle([]);
  faker.helpers.mustache("template", {});
  faker.helpers.createCard();
  faker.helpers.contextualCard();
  faker.helpers.userCard();
  faker.helpers.createTransaction();
});

describe("image", () => {
  faker.image.image();
  faker.image.image(1);
  faker.image.image(1, 1);
  faker.image.image(1, 1, true);
  faker.image.image(1, 1, false);
  faker.image.avatar();
  faker.image.avatar(1);
  faker.image.avatar(1, 1);
  faker.image.avatar(1, 1, true);
  faker.image.avatar(1, 1, false);
  faker.image.imageUrl();
  faker.image.imageUrl(1);
  faker.image.imageUrl(1, 1);
  faker.image.imageUrl(1, 1, "category");
  faker.image.imageUrl(1, 1, "category", true);
  faker.image.imageUrl(1, 1, "category", false);
  faker.image.abstract();
  faker.image.abstract(1);
  faker.image.abstract(1, 1);
  faker.image.abstract(1, 1, true);
  faker.image.abstract(1, 1, false);
  faker.image.animals();
  faker.image.animals(1);
  faker.image.animals(1, 1);
  faker.image.animals(1, 1, true);
  faker.image.animals(1, 1, false);
  faker.image.business();
  faker.image.business(1);
  faker.image.business(1, 1);
  faker.image.business(1, 1, true);
  faker.image.business(1, 1, false);
  faker.image.cats();
  faker.image.cats(1);
  faker.image.cats(1, 1);
  faker.image.cats(1, 1, true);
  faker.image.cats(1, 1, false);
  faker.image.city();
  faker.image.city(1);
  faker.image.city(1, 1);
  faker.image.city(1, 1, true);
  faker.image.city(1, 1, false);
  faker.image.food();
  faker.image.food(1);
  faker.image.food(1, 1);
  faker.image.food(1, 1, true);
  faker.image.food(1, 1, false);
  faker.image.nightlife();
  faker.image.nightlife(1);
  faker.image.nightlife(1, 1);
  faker.image.nightlife(1, 1, true);
  faker.image.nightlife(1, 1, false);
  faker.image.fashion();
  faker.image.fashion(1);
  faker.image.fashion(1, 1);
  faker.image.fashion(1, 1, true);
  faker.image.fashion(1, 1, false);
  faker.image.people();
  faker.image.people(1);
  faker.image.people(1, 1);
  faker.image.people(1, 1, true);
  faker.image.people(1, 1, false);
  faker.image.nature();
  faker.image.nature(1);
  faker.image.nature(1, 1);
  faker.image.nature(1, 1, true);
  faker.image.nature(1, 1, false);
  faker.image.sports();
  faker.image.sports(1);
  faker.image.sports(1, 1);
  faker.image.sports(1, 1, true);
  faker.image.sports(1, 1, false);
  faker.image.technics();
  faker.image.technics(1);
  faker.image.technics(1, 1);
  faker.image.technics(1, 1, true);
  faker.image.technics(1, 1, false);
  faker.image.transport();
  faker.image.transport(1);
  faker.image.transport(1, 1);
  faker.image.transport(1, 1, true);
  faker.image.transport(1, 1, false);
});

describe("internet", () => {
  faker.internet.avatar();
  faker.internet.email();
  faker.internet.email("firstName");
  faker.internet.email("firstName", "lastName");
  faker.internet.email("firstName", "lastName", "provider");
  faker.internet.exampleEmail();
  faker.internet.exampleEmail("firstName", "lastName");
  faker.internet.userName();
  faker.internet.userName("firstName");
  faker.internet.userName("firstName", "lastName");
  faker.internet.protocol();
  faker.internet.url();
  faker.internet.domainName();
  faker.internet.domainSuffix();
  faker.internet.domainWord();
  faker.internet.ip();
  faker.internet.ipv6();
  faker.internet.userAgent();
  faker.internet.color();
  faker.internet.color(255);
  faker.internet.color(255, 255);
  faker.internet.color(255, 255, 255);
  faker.internet.mac();
  faker.internet.password();
  faker.internet.password(8);
  faker.internet.password(8, true);
  faker.internet.password(8, true, "pattern");
  faker.internet.password(8, true, "pattern", "prefix");
});

describe("lorem", () => {
  faker.lorem.word();
  faker.lorem.word(1);
  faker.lorem.words();
  faker.lorem.words(1);
  faker.lorem.sentences();
  faker.lorem.sentences(1);
  faker.lorem.sentences(1, "separator");
  faker.lorem.slug();
  faker.lorem.slug(1);
  faker.lorem.sentence();
  faker.lorem.sentence(1);
  faker.lorem.sentence(1, 1);
  faker.lorem.paragraph();
  faker.lorem.paragraph(1);
  faker.lorem.paragraphs();
  faker.lorem.paragraphs(1);
  faker.lorem.paragraphs(1, "separator");
  faker.lorem.text();
  faker.lorem.text(1);
  faker.lorem.lines();
  faker.lorem.lines(1);
});

describe("name", () => {
  faker.name.firstName();
  faker.name.firstName("M");
  faker.name.lastName();
  faker.name.lastName("F");
  faker.name.findName();
  faker.name.findName("firstName");
  faker.name.findName("firstName", "lastName");
  faker.name.findName("firstName", "lastName", "F");
  faker.name.jobTitle();
  faker.name.prefix();
  faker.name.suffix();
  faker.name.title();
  faker.name.jobDescriptor();
  faker.name.jobArea();
  faker.name.jobType();
});

describe("phone", () => {
  faker.phone.phoneNumber();
  faker.phone.phoneNumber("XXX-XXX-XXXX");
  faker.phone.phoneNumberFormat();
  faker.phone.phoneNumberFormat(1);
  faker.phone.phoneFormats();
});

describe("random", () => {
  faker.random.number();
  faker.random.number(1);
  faker.random.number({ min: 0 });
  faker.random.number({ max: 0 });
  faker.random.number({ precision: 1 });
  faker.random.number({ precision: 1, min: 0, max: 0 });
  // $ExpectError
  faker.random.number({ precision: 1, min: 0, max: 0, bad: true });
  // $ExpectError
  faker.random.number({ bad: true });
  faker.random.arrayElement([1]);
  faker.random.objectElement({ a: true }, "a");
  faker.random.objectElement({ a: true }, "b");
  faker.random.uuid();
  faker.random.boolean();
  faker.random.word();
  faker.random.word("type");
  faker.random.words();
  faker.random.words(1);
  faker.random.image();
  faker.random.locale();
  faker.random.alphaNumeric();
  faker.random.alphaNumeric(1);
  faker.random.hexaDecimal();
});

describe("system", () => {
  faker.system.fileName();
  faker.system.fileName("ext");
  faker.system.fileName("ext", "type");
  faker.system.commonFileName();
  faker.system.mimeType();
  faker.system.commonFileType();
  faker.system.commonFileType("ext");
  faker.system.commonFileType("ext", "type");
  faker.system.commonFileExt();
  faker.system.commonFileExt("type");
  faker.system.fileType();
  faker.system.fileExt();
  faker.system.fileExt("mimeType");
  faker.system.directoryPath();
  faker.system.filePath();
  faker.system.semver();
});
