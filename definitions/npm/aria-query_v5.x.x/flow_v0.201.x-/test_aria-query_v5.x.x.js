// @flow
import { describe, test } from 'flow-typed-test';
import {
  aria,
  dom,
  elementRoles,
  roles,
  roleElements,
  type ARIARoleRelationConcept,
  type ARIARoleDefintionKey,
  type ARIARoleDefinition,
} from 'aria-query';

describe('aria-query', () => {
  test('aria', () => {
    const value = aria.get('aria-activedescendant');
    if (value) {
      value.type.toLowerCase();
      if (value.values) {
        (value.values[0]: string | boolean);
      }
    }

    // $FlowExpectedError[incompatible-call]
    aria.get('foo');
  });

  test('dom', () => {
    const value = dom.get('test');
    if (value) {
      (value.reserved: boolean | void);
      (value.interactive: boolean | void);
    }

    // $FlowExpectedError[incompatible-use]
    value.reserved
    // $FlowExpectedError[incompatible-use]
    value.interactive
  });

  test('elementRoles', () => {
    const selectElement: ARIARoleRelationConcept = {
      name: '',
      attributes: [
        {
          name: '',
          value: 1,
          constraints: ['unset'],
        }
      ],
      constraints: [
        'direct descendant of document',
        'direct descendant of ol, ul or menu',
        'direct descendant of details element with the open attribute defined',
        'descendant of table',
      ],
    };
    const elementRole = elementRoles.get(selectElement);

    if (elementRole) {
      const value = [...elementRole.values()][0];
      value.toLowerCase();
      // $FlowExpectedError[prop-missing]
      value.toFixed();
    }

    // $FlowExpectedError[incompatible-call]
    elementRoles.get('foo');
  });

  test('roles', () => {
    const roleNames: Array<ARIARoleDefintionKey> = roles.keys();
    const roleDefinitions: Array<ARIARoleDefinition> = roles.values();

    roles.get('doc-toc');

    // $FlowExpectedError[incompatible-call]
    roles.get('foo');
    // $FlowExpectedError[incompatible-cast]
    (roles.keys(): Array<string>);
  });

  test('roleElements', () => {
    roleElements.get('combobox');

    const roleElement = roleElements.get('math');

    if (roleElement) {
      const value = [...roleElement.values()][0];
      value.name.toLowerCase();
      if (value.attributes) {
        value.attributes[0].name.toLowerCase();
      }
      if (value.constraints) {
        value.constraints[0].toLowerCase();
      }

      // $FlowExpectedError[prop-missing]
      value.foo();
      // $FlowExpectedError[prop-missing]
      value.name.toFixed();
      // $FlowExpectedError[incompatible-use]
      value.attributes[0].name.toLowerCase();
      // $FlowExpectedError[incompatible-use]
      value.constraints[0].toLowerCase();
    }

    // $FlowExpectedError[incompatible-call]
    roleElements.get('foo');
    // $FlowExpectedError[incompatible-cast]
    (roleElements.keys(): Array<string>);
  });
});
