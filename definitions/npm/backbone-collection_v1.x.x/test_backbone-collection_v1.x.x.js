// @flow
import Backbone, { Collection } from "backbone-collection";

// $ExpectError
(Backbone.$: any);

// $ExpectError
(Backbone._: any);

// $ExpectError
(Backbone.Events.on: Function);

// Model setup
class Model {}

class TasksCollection extends Collection<Model> {
  model: Model;
}

const tasks = new TasksCollection();

// $ExpectError
tasks.toJSON([]);

(tasks.length: number);

// $ExpectError should not allow to be non number
tasks.length = false;

(tasks.pluck("name"): Array<any>);

// $ExpectError
(task.pluck(2): Array<any>);

(tasks.forEach: Function);
(tasks.sync(): Function);
