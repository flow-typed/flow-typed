/* @flow */

it('should error when chaining a non-existant function', () => {
  // $ExpectError as it doesn't exist
  cy.get('.class')
    .doesntexist();
});

it('should error when chaining a non-existant function', () => {
  // $ExpectError as it doesn't exist
  cy.get('.class')
    .doesntexist();
});
