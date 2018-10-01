// @flow

import type {
  AngularPromise,
  AngularQ,
  JqliteElement,
  AngularHttpService,
  AngularResourceFactory,
  AngularResourceResult,
  AngularResource,
  AngularCompileService
} from "angular";

("use strict");
const angular = require("angular");

function describe(tag, fn) {
  fn();
}

function it(tag, fn) {
  fn();
}

describe("Angular modules", () => {
  it("can be declared", () => {
    const module1 = angular.module("foo", []);
    const module2 = angular.module("foo", ["bazz", "qux"]);
  });

  it("can be retrieved after being declared", () => {
    const module1 = angular.module("foo");
  });

  it("requires a name", () => {
    // $ExpectError undefined. This type is incompatible with string
    const module1 = angular.module();
  });
});

describe("directives", () => {
  it("can be declared", () => {
    angular.module("foo", []).directive("foo", [
      "bar",
      "bazz",
      (bar, bazz) => {
        return {
          restrict: "E",
          templateUrl: "foo.html"
        };
      }
    ]);
  });

  it("requires a directive to be returned", () => {
    angular.module("foo", []).directive("foo", [
      "bar",
      "bazz",
      (bar, bazz) => {
        // $ExpectError string. This type is incompatible with Directive
        return "this is clearly not a directive";
      }
    ]);
  });
});

describe("service", () => {
  it("can be declared", () => {
    angular.module("foo", []).service("foo", [
      "bar",
      "bazz",
      (bar, bazz) => {
        return a => a + 1;
      }
    ]);
  });

  it("requires a return value of a function", () => {
    angular.module("foo", []).service("foo", [
      "bar",
      "bazz",
      (bar, bazz) => {
        // $ExpectError object. This type is incompatible with Function
        return { foo: "bar" };
      }
    ]);
  });
});

describe("factory", () => {
  it("can be declared", () => {
    angular.module("foo", []).factory("foo", [
      "bar",
      "bazz",
      (bar, bazz) => {
        return { a: bar, b: bazz };
      }
    ]);
  });

  it("requires a return value of some kind", () => {
    // $ExpectError undefined. This type is incompatible with
    angular
      .module("foo", [])
      .factory("foo", ["bar", "bazz", (bar, bazz) => undefined]);
  });
});

describe("value", () => {
  it("can be declared", () => {
    angular.module("foo", []).value("foo", [
      "bar",
      "bazz",
      (bar, bazz) => {
        return { a: bar, b: bazz };
      }
    ]);
  });

  it("requires a return value of some kind", () => {
    // $ExpectError undefined. This type is incompatible with
    angular.module("foo", []).value("foo", ["bar", "bazz", (bar, bazz) => {}]);
  });
});

describe("constant", () => {
  it("can be declared", () => {
    angular.module("foo", []).constant("foo", [
      "bar",
      "bazz",
      (bar, bazz) => {
        return { a: bar, b: bazz };
      }
    ]);
  });

  it("requires a return value of some kind", () => {
    // $ExpectError undefined. This type is incompatible with
    angular.module("foo", []).constant("foo", [
      "bar",
      "bazz",
      (bar, bazz) => {
        // intentionally return nothing
      }
    ]);
  });
});

describe("element", () => {
  it("creates a jqlite element from a string", () => {
    const element: JqliteElement = angular.element("<span>foo</span>");
  });

  it("creates a jqlite element from an element", () => {
    const element: JqliteElement = angular.element(window.document.body);
  });

  it("does not accept other types as a parameter", () => {
    // $ExpectError number. This type is incompatible with string
    angular.element(5);
  });
});

describe("copy", () => {
  it("copies preserving the type", () => {
    const foo: number = angular.copy(5);
  });

  it("does not change the type", () => {
    // $ExpectError string. This type is incompatible with number
    const foo: number = angular.copy("5");
  });
});

describe("jqlite", () => {
  it("can remove itself", () => {
    angular.element("foo").remove();
  });

  it("yields nothing on removal", () => {
    // $ExpectError string. This type is incompatible with void
    const removal: string = angular.element("foo").remove();
  });

  it("can retrieve contents as a JqliteElement", () => {
    const contents: JqliteElement = angular.element("foo").contents();
  });

  it("does not yield a string", () => {
    // $ExpectError string. This type is incompatible with JqliteElement
    const contents: string = angular.element("foo").contents("bar");
  });
});

describe("$compile", () => {
  it("is a function that uses a jqlite element", () => {
    angular.mock.inject(($compile: AngularCompileService) => {
      $compile(angular.element("foo"));
    });
  });

  it("returns a compiled jqlite element", () => {
    angular.mock.inject(($compile: AngularCompileService) => {
      const element: JqliteElement = $compile(angular.element("foo"));
    });
  });
});

describe("$resource", () => {
  it("returns a $resource instance when invoked", () => {
    angular.mock.inject(($resource: AngularResourceFactory) => {
      const resource: AngularResource = $resource("/foo");
    });
  });

  describe("instance", () => {
    it("has a get function that returns a special $resource result", () => {
      angular.mock.inject(($resource: AngularResourceFactory) => {
        const resource: AngularResource = $resource("/foo");
        const promise: AngularPromise<*> = resource.get().$promise;
      });
    });
  });
});

describe("$q", () => {
  it("can create a promise that resolves a pre-defined value", () => {
    angular.mock.inject(($q: AngularQ) => {
      const promise: AngularPromise<string> = $q.when("foo");
    });
  });

  it("creates a promise with the type provided the value resolved", () => {
    angular.mock.inject(($q: AngularQ) => {
      // $ExpectError number. This type is incompatible with string
      const promise: AngularPromise<number> = $q.when("foo");
    });
  });

  it("can chain promises between mapped types", () => {
    angular.mock.inject(($q: AngularQ) => {
      const finalPromise: AngularPromise<string> = $q
        .when("foo")
        .then(s => parseInt(s))
        .then(n => n.toString());
    });
  });

  it("catches with errors", () => {
    angular.mock.inject(($q: AngularQ) => {
      $q.when("foo").catch(e => console.log(e.message));
    });
  });

  it("chains rejected promises into resolved promises", () => {
    angular.mock.inject(($q: AngularQ) => {
      const promise: AngularPromise<string> = $q.when("foo").catch(e => "bar");
    });
  });

  it("has both an error and a resolved value potential in finally", () => {
    angular.mock.inject(($q: AngularQ) => {
      $q.when("foo").finally(v => {
        if (typeof v == "string") {
          const s: string = v;
        } else if (v instanceof Error) {
          const e: Error = v;
        }
      });
    });
  });
});

describe("$http", () => {
  it("can POST", () => {
    angular.mock.inject(($http: AngularHttpService) => {
      const promise: AngularPromise<*> = $http.post("/foo", { bar: "bazz" });
    });
  });
});
