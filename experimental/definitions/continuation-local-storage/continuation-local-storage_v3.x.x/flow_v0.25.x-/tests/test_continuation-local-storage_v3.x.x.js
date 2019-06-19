/* @flow */

import cls from 'continuation-local-storage'

cls.createNamespace('namespaceOne');
var ns = cls.createNamespace('namespaceTwo');

cls.getNamespace('namespaceTwo');

ns.run(function() {});

// $ExpectError number. This type is incompatible with Function
ns.run(3);

function someFunction() {}
ns.bind(someFunction);

var notAFunction = true;

// $ExpectError boolean. This type is incompatible with Function
ns.bind(notAFunction);

// $ExpectError string. This type is incompatible with Namespace
var ns2: string = cls.getNamespace('namespaceTwo')

// $ExpectError number. This type is incompatible with string
cls.destroyNamespace(3);
