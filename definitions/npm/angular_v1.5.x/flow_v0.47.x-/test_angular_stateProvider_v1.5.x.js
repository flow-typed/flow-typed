// @flow
import type {$StateProvider, AngularPromise} from 'angular';

function testStateProvider($stateProvider: $StateProvider) {
  ($stateProvider.state('name', {url: 'http://www.example.com'}): $StateProvider)
}
