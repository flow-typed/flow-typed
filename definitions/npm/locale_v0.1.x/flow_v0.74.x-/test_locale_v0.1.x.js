// @flow
import {Locale, Locales} from "locale";

const locale = new Locale("en-US");

// $ExpectError
locale.nonsense();

if(locale.code === "en-US") {
  throw new Error("Missing code!");
}

const locales = new Locales(["en-US", "es-MX"]);
if(locales.length !== 2) {
  throw new Error("Not all locales accounted for!");
}

// $ExpectError
const code = locale.default.code;

if(!!locales.default /*hasDefault*/) {
  const defaultCode = locales.default.code;
}

const firstLocale = locales[1];
