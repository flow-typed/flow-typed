// @flow
import angular from 'angular';

//all bells and whistles
angular.module('foo', []).component('foo', {
  bindings: {
    prop: '<'
  },
  template: '<div></div>',
  controllerAs: 'ctrl',
  controller: ['foo', 'bar', () => {}],
  transclude: false
});

//bindings can have strings
angular.module('foo', []).component('foo', {
  bindings: {
    prop: '<'
  },
});

//$ExpectError bindings cant have any other types
angular.module('foo', []).component('foo', {
  bindings: {
    prop: 123
  },
});

// template is string
angular.module('foo', []).component('foo', {
  template: '<div></div>',
});

//$ExpectError template does snot accept other types
angular.module('foo', []).component('foo', {
  template: 123,
});

//controllerAs is string
angular.module('foo', []).component('foo', {
  controllerAs: 'ctrl',
});

//$ExpectError controllerAs does snot accept other types
angular.module('foo', []).component('foo', {
  controllerAs: 123,
});

// transclude is boolean
angular.module('foo', []).component('foo', {
  transclude: true,
});

//$ExpectError transclude does snot accept other types
angular.module('foo', []).component('foo', {
  transclude: 123,
});

// templateUrl is string
angular.module('foo', []).component('foo', {
  templateUrl: 'path/to/template.html',
});

//$ExpectError template doe snot accept other types
angular.module('foo', []).component('foo', {
  templateUrl: 123,
});

//controller accpets class
angular.module('foo', []).component('foo', {
  controller: ['foo', 'bar', class Ctrl {}]
});

//controller accpets controller function
angular.module('foo', []).component('foo', {
  controller: ['foo', 'bar', () => {}]
});

//$ExpectError does not accept object as controller
angular.module('foo', []).component('foo', {
  controller: ['foo', 'bar', {}]
});

//$ExpectError does not accept arbitrary properties
angular.module('foo', []).component('foo', {
  random: 'prop'
});
