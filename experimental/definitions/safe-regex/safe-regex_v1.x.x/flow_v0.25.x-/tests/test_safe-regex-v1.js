// @flow
import safe from 'safe-regex';

(safe(/.*/): boolean);
(safe(''): boolean);

// $ExpectError should return boolean
(safe(/.*/): number);
// $ExpectError should return boolean
(safe(''): number);


safe('', { limit: 20 });

// $ExpectError shold pass the limit option
safe('', {});
