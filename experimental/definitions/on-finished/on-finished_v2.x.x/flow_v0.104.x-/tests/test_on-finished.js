// @flow
import { IncomingMessage, ServerResponse } from 'http';
import { describe, it } from 'flow-typed-test';
import onFinished from 'on-finished';


describe('onFinished', () => {
  // $ExpectError: wrong arguments
  onFinished()

  it('should listen req', () => {
    const req: IncomingMessage = ({}: any)
    onFinished(req, (err: Error | null, msg: IncomingMessage) => {})
  });

  it('should listen res', () => {
    const res: ServerResponse = ({}: any)
    onFinished(res, (err: Error | null, msg: ServerResponse) => {})
  });

});
