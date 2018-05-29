// @flow
import Backbone, { Model, Collection, Events } from "backbone";

const otherBackbone: typeof Backbone = Backbone.noConflict();

(otherBackbone.Model: typeof Backbone.Model);

// $ExpectError should be a view type
(otherBackbone.View: void);

(Backbone.version: string);

(Backbone.$: any);

(Backbone._: any);

(Backbone.Events.on: Function);

interface Fooable extends Model {
  foo(): string;
  view: Backbone.View;
}

const TaskModel: Class<Fooable> = Backbone.Model.extend({
  foo(): string {
    return "";
  }
});

const instance = new TaskModel();
instance.fetch({});

class TasksCollection extends Collection<TaskModel> {
  model: TaskModel;
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
// $ExpectError
instance.fetch(null);
// $ExpectError
instance.set(10);

instance.toJSON();

// $ExpectError
(instance.foo(): number);

instance.get("field");
instance.get(null);

instance.isNew();
instance.clone();

class TasksRouter extends Backbone.Router {
  constructor() {
    super();
    this.routes = {
      // $ExpectError
      "10": false
    };
  }
}

const router = new TasksRouter();

router.route("/create", "createRoute");

// $ExpectError
router.route("/create", "delete", null);

// $ExpectError
Backbone.history.start({ root: false });

Backbone.history.start({ pushState: true });

// inherits Events methods
Backbone.history.on('click', () => true);
router.on('click', () => true);
instance.on('click', () => true);
tasks.on('click', () => true);