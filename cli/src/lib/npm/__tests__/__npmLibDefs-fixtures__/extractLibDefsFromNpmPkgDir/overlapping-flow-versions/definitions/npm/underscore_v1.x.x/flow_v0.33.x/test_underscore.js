/** @flow */
import _ from 'underscore';

// $FlowExpectedError
_.zip([{x:1}], [{x:2,y:1}])[0][2]
