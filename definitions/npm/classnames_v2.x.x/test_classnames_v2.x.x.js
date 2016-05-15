// @flow

import classnames from "classnames";

classnames();
classnames('a');
classnames('a', 'b');
classnames({a: true});
classnames({a: true}, {b: true});
classnames('a', {b: true});
classnames({a: true}, 'b');

// $ExpectError
classnames(42);
