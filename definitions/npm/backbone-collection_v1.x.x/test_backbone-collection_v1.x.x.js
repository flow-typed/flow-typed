// @flow
import { describe, it } from "flow-typed-test";
import Backbone, { Collection } from "backbone-collection";

describe("backbone-collection", () => {
  it("Migrated from old format", () => {
    // $FlowExpectedError
    (Backbone.$: any);

    // $FlowExpectedError
    (Backbone._: any);

    // $FlowExpectedError
    (Backbone.Events.on: Function);

    // Model setup
    class Model {}

    class TasksCollection extends Collection<Model> {
      model: Model;
    }

    const tasks = new TasksCollection();

    // $FlowExpectedError
    tasks.toJSON([]);

    (tasks.length: number);

    // $FlowExpectedError should not allow to be non number
    tasks.length = false;

    (tasks.pluck("name"): Array<any>);

    // $FlowExpectedError
    (task.pluck(2): Array<any>);

    (tasks.forEach: Function);
    (tasks.sync: Function);
  });
});
