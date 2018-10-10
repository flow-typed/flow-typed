// @flow
import { describe, it } from 'flow-typed-test';
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

  it("requires proper restrict when defined", () => {
    // $ExpectError
    angular.module("foo", []).directive("foo", [
      "bar",
      "bazz",
      (bar, bazz) => {
        return {
          restrict: "fails to this",
          templateUrl: "foo.html"
        };
      }
    ]);
  });

  it("does not accept random properties", () => {
    angular.module("foo", []).directive("foo", [
      "bar",
      "bazz",
      (bar, bazz) => {
        // $ExpectError
        return {
          random: "prop which is not allowed",
          templateUrl: "foo.html"
        };
      }
    ]);
  });

  it("all bells and whistles for directive", () => {
    angular.module("foo", []).directive("foo", [
      "bar",
      "bazz",
      (bar, bazz) => {
        return {
          bindToController: true,
          controllerAs: "ctrl",
          templateUrl: "foo.html",
          scope: {
            prop: "<"
          },
          controller: () => {}
        };
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

  it("can return object", () => {
    angular.module("foo", []).service("foo", [
      "bar",
      "bazz",
      (bar, bazz) => {
        return { foo: "bar" };
      }
    ]);
  });

  it("can return function", () => {
    angular.module("foo", []).service("foo", [
      "bar",
      "bazz",
      (bar, bazz) => {
        return () => {};
      }
    ]);
  });

  it("cant return other types", () => {
    angular.module("foo", []).service("foo", [
      "bar",
      "bazz",
      (bar, bazz) => {
        //$ExpectError
        return 123;
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
    angular
      .module("foo", [])
      // $ExpectError undefined. This type is incompatible with
      .factory("foo", ["bar", "bazz", (bar, bazz) => undefined]);
  });
});

describe("controller", () => {
  it("can be declared", () => {
    angular
      .module("foo", [])
      .controller("foo", ["bar", "bazz", (bar, bazz) => {}]);
  });
});

describe("config", () => {
  it("can be declared", () => {
    angular.module("foo", []).config(["bar", "bazz", (bar, bazz) => {}]);
  });
});

describe("filter", () => {
  it("can be declared", () => {
    angular.module("foo", []).filter("foo", [
      "bar",
      "bazz",
      (bar, bazz) => {
        return () => {};
      }
    ]);
  });

  it("requires a return value of some kind", () => {
    // $ExpectError cant return object
    angular.module("foo", []).filter("foo", ["bar", "bazz", () => ({})]);
  });
});

describe("filter", () => {
  it("can be declared", () => {
    angular.module("foo", []).run(["bar", "bazz", (bar, bazz) => {}]);
  });
});

describe("value", () => {
  it("can be declared to any value", () => {
    angular.module("foo", []).value("foo", 123);
    angular.module("foo", []).value("foo", "str");
    angular.module("foo", []).value("foo", {});
  });
});

describe("constant", () => {
  it("can be declared to any value", () => {
    angular.module("foo", []).constant("foo", 123);
    angular.module("foo", []).constant("foo", "str");
    angular.module("foo", []).constant("foo", {});
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

describe("mock", () => {
  describe("module", () => {
    it("takes strings, functions and objects", () => {
      angular.mock.module("string", () => {}, {});
    });

    it("does not accept numbers", () => {
      //$ExpectError
      angular.mock.module(123);
    });

    it("returns a function", () => {
      angular.mock.module("string", {})();
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
