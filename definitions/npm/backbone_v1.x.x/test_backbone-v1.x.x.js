// @flow
import Backbone from 'backbone';
const { Model } = Backbone;

(Backbone.version: string);

(Backbone.$: any);

(Backbone._: any);

(Backbone.Events.on: Function);
interface Fooable extends Model {
  foo(): string;
  view: Backbone.View;
};
const FooModel: Class<Fooable> = Backbone.Model.extend({
  foo(): string {
    return '';
  }
});




const instance = new FooModel();

// $ExpectError
instance.set(10);

// $ExpectError
(instance.foo(): number);
