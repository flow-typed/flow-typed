// @flow
import Cors from "cors";

Cors({ origin: true });

// $FlowExpectedError
Cors({ origin: 1 });
