// @flow

import angular, {type JqliteElement} from 'angular'

function testElement() {
  //accepts string
  angular.element('str');
  // accepts document
  angular.element(document);
  // returns JqLite object
  (angular.element(document): JqliteElement);
}

function testCopy() {
  //returns given type
  (angular.copy('str'): string);
  (angular.copy(123): number);
  (angular.copy({a: 123}).a: number);
}

function testExtend() {
  // extends object type
  (angular.extend({a: 1}, {b: 2}): {a: number, b: number});
  (angular.extend({a: 1}, {b: 2}, {c: 'str', d: 123}): {a: number, b: number, c: string, d: number});
}

function testForEach() {
  //accepts object
  angular.forEach({}, () => {});
  // accepts array
  angular.forEach([], () => {});
  //$ExpectError does not accept anything else
  angular.forEach(123, () => {});

  // callback gets array stuff in
  angular.forEach([1,2,3], (val) => {
    (val: number)
  });

  // key is number if array
  angular.forEach([1,2,3], (val, key) => {
    (key: number)
  });

  // key is  string if object
  angular.forEach({a: 123}, (val, key) => {
    (key: string)
  });
}

function testFromJson() {
  // accepts string
  angular.fromJson('')
  //$ExpectError does not take in other types
  angular.fromJson(123)
}

function testToJson() {
  // returns string
  (angular.toJson({}): string)
  // takes boolean as second argument
  angular.toJson({}, true)
  // takes number as second argument
  angular.toJson({}, 123)
  //$ExpectError does not take anything else as second argument
  angular.toJson({}, '')
  //$ExpectError cannot be called without parameters
  angular.toJson()
}
