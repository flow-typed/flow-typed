/** @flow */
import { json, raw, text, urlencoded } from "body-parser";
import type { OptionsText, OptionsJson, OptionsUrlencoded } from "body-parser";

json(({ strict: true }: OptionsJson));
text(({ strict: true }: OptionsText));
urlencoded(({ extended: true }: OptionsUrlencoded));

// $FlowExpectedError
json(({ extended: true }: OptionsUrlencoded));

// $FlowExpectedError
text(({ extended: true }: OptionsUrlencoded));

// $FlowExpectedError
urlencoded(({ strict: true }: OptionsJson));
