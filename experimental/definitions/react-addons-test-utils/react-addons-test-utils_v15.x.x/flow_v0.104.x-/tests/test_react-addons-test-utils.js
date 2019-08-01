// @flow

import {ReactShallowRender, createRenderer} from 'react-addons-test-utils';

(createRenderer(): ReactShallowRender);
// $ExpectError
(createRenderer(): number);
