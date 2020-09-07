// @flow
import Notify from 'notifyjs';

(Notify.isSupported(): bool);
// $FlowExpectedError
(Notify.show(): void);
// $FlowExpectedError
(Notify('notification'): Notify);
(Notify('notification', {}).show(): void);
(Notify('notification', { body: 'foo' }).show(): void);
