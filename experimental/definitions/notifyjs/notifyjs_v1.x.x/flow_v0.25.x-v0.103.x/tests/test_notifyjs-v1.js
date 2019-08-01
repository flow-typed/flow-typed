// @flow
import Notify from 'notifyjs';

(Notify.isSupported(): bool);
// $ExpectError
(Notify.show(): void);
// $ExpectError
(Notify('notification'): Notify);
(Notify('notification', {}).show(): void);
(Notify('notification', { body: 'foo' }).show(): void);
