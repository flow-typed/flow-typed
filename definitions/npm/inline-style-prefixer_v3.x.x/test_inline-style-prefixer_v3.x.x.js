// @flow
import Prefixer from "inline-style-prefixer";
import prefixAll from "inline-style-prefixer/static";

const styles: Object = prefixAll({});
// $FlowExpectedError
prefixAll();

const prefixer = new Prefixer();
prefixer.prefix({});
