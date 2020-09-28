// @flow
import safe from 'safe-regex';

(safe(/.*/): boolean);
(safe(''): boolean);

// $FlowExpectedError should return boolean
(safe(/.*/): number);
// $FlowExpectedError should return boolean
(safe(''): number);


safe('', { limit: 20 });

// $FlowExpectedError shold pass the limit option
safe('', {});
