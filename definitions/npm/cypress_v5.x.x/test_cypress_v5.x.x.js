// @flow


// cy obj
cy.visit('test');

// ---

// Cypress obj

(Cypress.addChildCommand('name', () => {}): void);

(Cypress.addDualCommand('name', () => {}): void);

(Cypress.addParentCommand('name', () => {}): void);

Cypress.config();
Cypress.config('test');
(Cypress.config('test', 'value'): void);
(Cypress.config({}): void);

Cypress.env();

Cypress._.debounce();

Cypress.$.test();

Cypress.Blob();

Cypress.minimatch();

Cypress.moment();

Cypress.Promise((resolve, reject) => {}).then(() => {

});

Cypress.sinon.test();

Cypress.Cookies.debug(true);
Cypress.Cookies.preserveOnce('one', 'two', 'three');
// $ExpectError must be string
Cypress.Cookies.preserveOnce(1, 2, 3);
Cypress.Cookies.defaults();

Cypress.Commands.add('name', { prevSubject: true }, () => {});
Cypress.Commands.add('name', () => {});
Cypress.Commands.overwrite('name', () => {});

(Cypress.isAttached(''): boolean);
(Cypress.isDescendent(''): boolean);
(Cypress.isDetached(''): boolean);
(Cypress.isDocument(''): boolean);
(Cypress.isDom(''): boolean);
(Cypress.isElement(''): boolean);
(Cypress.isFocusable(''): boolean);
(Cypress.isFocused(''): boolean);
(Cypress.isHidden(''): boolean);
(Cypress.isJquery(''): boolean);
(Cypress.isScrollable(''): boolean);
(Cypress.isVisible(''): boolean);
(Cypress.isWindow(''): boolean);
(Cypress.unwrap(''): Array<any>);
(Cypress.wrap(''): any);

(Cypress.on(
  'name',
  (
    err: { message: string, ... },
    runnable,
  ): boolean | void => {},
): void);

(Cypress.Server.defaults({}): void);

// ---

expect('this to run');
