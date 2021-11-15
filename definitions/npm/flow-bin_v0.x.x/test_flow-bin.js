// @flow

import flowBinPath from "flow-bin";

(flowBinPath: string);

// $FlowExpectedError[incompatible-cast]
(flowBinPath: number);
