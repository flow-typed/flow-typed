// @flow
import Backbone, { Model } from "backbone-model";
import type { Backbone$Attrs } from "backbone-model";

// $FlowExpectedError
(Backbone.$: any);

// $FlowExpectedError
(Backbone._: any);

// $FlowExpectedError
(Backbone.Events.on: Function);

interface Fooable extends Model {
  foo(): string;
  // $FlowExpectedError
  view: Backbone.View;
}

const TaskModel: Class<Fooable> = Backbone.Model.extend({
  foo(): string {
    return "";
  }
});

const instance = new TaskModel();
instance.fetch({});

instance.get("field");
instance.get(null);

instance.isNew();
instance.clone();

export default class Entity extends Backbone.Model {
  constructor(attrs: Backbone$Attrs = {}, options: Object = {}): void {
    super(attrs, options);
  }
}
