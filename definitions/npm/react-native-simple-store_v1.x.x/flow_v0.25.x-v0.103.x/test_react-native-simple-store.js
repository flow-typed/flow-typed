// @flow

import store from 'react-native-simple-store';

store.get('item');
store.get([['item', 'item2']]);
// $FlowExpectedError
store.get(2);
// $FlowExpectedError
store.get(false);

store.save('hasItem', false);
// $FlowExpectedError
store.save('hasItem');

store.update('hasItem', false);
// $FlowExpectedError
store.update('hasItem');

store.push('items', '1');
// $FlowExpectedError
store.push('items');

store.keys();

store.delete("foo");
store.delete(["foo", "bar"]);
