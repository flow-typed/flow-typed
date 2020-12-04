/* @flow */

import cls from 'continuation-local-storage'

cls.createNamespace('namespaceOne');
var ns = cls.createNamespace('namespaceTwo');

cls.getNamespace('namespaceTwo');

ns.run(function() {});

// $FlowExpectedError number. This type is incompatible with Function
ns.run(3);

function someFunction() {}
ns.bind(someFunction);

var notAFunction = true;

// $FlowExpectedError boolean. This type is incompatible with Function
ns.bind(notAFunction);

// $FlowExpectedError string. This type is incompatible with Namespace
var ns2: string = cls.getNamespace('namespaceTwo')

// $FlowExpectedError number. This type is incompatible with string
cls.destroyNamespace(3);
