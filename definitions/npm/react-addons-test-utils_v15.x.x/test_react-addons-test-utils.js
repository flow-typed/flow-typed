// @flow

import {ReactShallowRender, createRenderer} from 'react-addons-test-utils';

(createRenderer(): ReactShallowRender);
// $FlowExpectedError[incompatible-cast]
(createRenderer(): number);
