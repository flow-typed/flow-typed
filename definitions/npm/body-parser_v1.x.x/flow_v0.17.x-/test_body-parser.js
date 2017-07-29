/** @flow */
import {
    json,
    raw,
    text,
    urlencoded,
} from 'body-parser';
import type {
    OptionsText,
    OptionsJson,
    OptionsUrlencoded
} from 'body-parser';

json(({ strict: true }: OptionsJson))
text(({ strict: true }: OptionsText))
urlencoded(({ extended: true }: OptionsUrlencoded))


// $ExpectError
json(({ extended: true } : OptionsUrlencoded));

// $ExpectError
text(({ extended: true } : OptionsUrlencoded));

// $ExpectError
urlencoded(({ strict: true }: OptionsJson));
