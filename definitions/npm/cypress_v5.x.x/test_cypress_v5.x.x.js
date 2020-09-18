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

Cypress.$();
Cypress.$.test();

Cypress.Blob();

Cypress.minimatch();

Cypress.moment();

Cypress.Promise((resolve, reject) => {}).then(() => {

});

Cypress.sinon.test();

Cypress.Cookies.debug(true);
Cypress.Cookies.preserveOnce('one', 'two', 'three');
// $FlowExpectedError must be string
Cypress.Cookies.preserveOnce(1, 2, 3);
Cypress.Cookies.defaults({ preserve: '' });
Cypress.Cookies.defaults({ preserve: ['session_id', 'remember_token'] });
Cypress.Cookies.defaults({ preserve: /session|remember/ });
Cypress.Cookies.defaults({ preserve: () => {} });

Cypress.Commands.add('name', { prevSubject: true }, () => {});
Cypress.Commands.add('name', () => {});
Cypress.Commands.overwrite('name', () => {});

(Cypress.dom.isAttached(''): boolean);
(Cypress.dom.isDescendent(''): boolean);
(Cypress.dom.isDetached(''): boolean);
(Cypress.dom.isDocument(''): boolean);
(Cypress.dom.isDom(''): boolean);
(Cypress.dom.isElement(''): boolean);
(Cypress.dom.isFocusable(''): boolean);
(Cypress.dom.isFocused(''): boolean);
(Cypress.dom.isHidden(''): boolean);
(Cypress.dom.isJquery(''): boolean);
(Cypress.dom.isScrollable(''): boolean);
(Cypress.dom.isVisible(''): boolean);
(Cypress.dom.isWindow(''): boolean);
(Cypress.dom.unwrap(''): Array<any>);
(Cypress.dom.wrap(''): any);

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
