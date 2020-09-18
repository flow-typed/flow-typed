// @flow


// cy obj
cy.and('test').click();
cy.and('test', 'value').click();
cy.and('test', 'method', 'value').click();
cy.and(() => {}).click();

cy.as('test').click();

cy.blur().click();

cy.check().click();
cy.check('test').click();
cy.check(['one', 'two', 'three']).click();

cy.children().click();
cy.children('test').click();

cy.clear().click();

cy.clearCookie('test').click();

cy.clearCookies().click();

cy.clearLocalStorage().click();
cy.clearLocalStorage('test').click();
cy.clearLocalStorage(/test/).click();

cy.click().click();
cy.click('test').click();
cy.click(0, 1).click();

cy.clock().click();
cy.clock(0).click();
cy.clock(0, ['one', 'two', 'three']).click();

cy.closest('test').click();

cy.contains('test').click();
cy.contains(0).click();
cy.contains(/test/).click();
cy.contains('test', 'test').click();

cy.dblclick().click();

cy.debug().click();

cy.document().click();

cy.each(() => {}).click();

cy.end().click();

cy.eq(0).click();

cy.exec('test').click();

cy.filter('test').click();

cy.find('test').click();

cy.first().click();

cy.fixture('test').click();
cy.fixture('path', 'encoding').click();

cy.focus().click();

cy.focused().click();

cy.get('test').click();

cy.getCookie('test').click();

cy.getCookies().click();

cy.go('forward').click();
cy.go('back').click();
cy.go(1).click();
// $FlowExpectedError must be enum or number
cy.go('test').click();

cy.hash().click();

cy.invoke('test').click();
cy.invoke(0).click();
cy.invoke('test', 1, 2, 3).click();
cy.invoke(1, () => {}, true).click();



cy.visit('test').click();

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

(Cypress.Cookies.debug(true): void);
(Cypress.Cookies.preserveOnce('one', 'two', 'three'): void);
// $FlowExpectedError must be string
Cypress.Cookies.preserveOnce(1, 2, 3);
(Cypress.Cookies.defaults({ preserve: '' }): void);
(Cypress.Cookies.defaults({ preserve: ['session_id', 'remember_token'] }): void);
(Cypress.Cookies.defaults({ preserve: /session|remember/ }): void);
(Cypress.Cookies.defaults({ preserve: (cookie) => true }): void);

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
