// @flow

import store from 'react-native-simple-store';

store.get('item');
store.get([['item', 'item2']]);
// $ExpectError
store.get(2);
// $ExpectError
store.get(false);

store.save('hasItem', false);
// $ExpectError
store.save('hasItem');

store.update('hasItem', false);
// $ExpectError
store.update('hasItem');

store.push('items', '1');
// $ExpectError
store.push('items');
