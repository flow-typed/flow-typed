// @flow

import flowBinPath from "flow-bin";

(flowBinPath: string);

// $ExpectError
(flowBinPath: number);
