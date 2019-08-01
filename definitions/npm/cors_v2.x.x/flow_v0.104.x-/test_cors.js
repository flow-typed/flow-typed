// @flow
import Cors from "cors";

Cors({ origin: true });

// $ExpectError
Cors({ origin: 1 });
