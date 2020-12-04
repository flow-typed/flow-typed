/** @flow */
import tnrp from 'totally-not-real-pkg';

// $FlowExpectedError
tnrp.zip([{x:1}], [{x:2,y:1}])[0][2];
