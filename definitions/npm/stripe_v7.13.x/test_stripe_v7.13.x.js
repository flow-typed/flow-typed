// @flow
import { describe, it } from "flow-typed-test";
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_BF573NobVn98OiIsPAv7A04K');

stripe.setApiVersion('2019-05-16');

stripe.setTelemetryEnabled(true);
stripe.getTelemetryEnabled();

stripe.on('request', event => {});
stripe.on('response', event => {});
stripe.once('request', event => {});
stripe.once('response', event => {});
stripe.off('request', event => {});
stripe.off('response', event => {});

describe("Stripe", () => {
    it("should list transactions", () => {
      stripe.balance.listTransactions().then(items => {
        items; // $ExpectType IList<IBalanceTransaction>
      });
      stripe.balance.listTransactions().autoPagingEach(async item => {
        item; // $ExpectType IBalanceTransaction
      });
      stripe.balance
        .listTransactions()
        .autoPagingToArray({ limit: 1 })
        .then(items => {
            items; // $ExpectType IBalanceTransaction[]
        });
    });
});
