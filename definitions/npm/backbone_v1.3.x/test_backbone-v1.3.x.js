// @flow
import Backbone from 'backbone';
import _ from 'underscore';
(Backbone.version: string);

(Backbone.$: typeof $);

(Backbone._: typeof _);

(Backbone.Events.on: Function);
interface Fooable extends Backbone.Model {
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
