// @flow

import classnames from "classnames";

classnames();
classnames('a');
classnames('a', 'b');
classnames({a: true});
classnames({a: true}, {b: true});
classnames('a', {b: true});
classnames({a: true}, 'b');
classnames({a: null, b: undefined});
classnames(undefined);
classnames(null);

// $ExpectError
classnames(42);
