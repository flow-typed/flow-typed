// @flow
import type { $Scope } from "angular";

function testScope$new($scope: $Scope<{ myVar: boolean }>) {
  //$ExpectError first argument needs to be boolean
  $scope.$new(123, $scope);
  //$ExpectError second argument needs to be scope
  $scope.$new(true, {});

  const newScope = $scope.$new(true, $scope);
  (newScope.myVar: boolean);
}

function testScope$watch($scope: $Scope<{ myVar: boolean }>) {
  // takes string as first argument
  $scope.$watch("my.prop", () => {});
  //$ExpectError does not accept other than watch funcion or string as first argument
  $scope.$watch(123, () => {});
  // is ok with callback as first argument
  $scope.$watch(() => {}, () => {});
  // watcher function gets current scope
  $scope.$watch(
    scope => {
      (scope.myVar: boolean);
    },
    () => {}
  );
  // watch callback gets current scope as third param
  $scope.$watch("prop", (var1, var2, scope) => {
    (scope.myVar: boolean);
  });

  // watch accepts object equality boolean as last param
  $scope.$watch("prop", () => {}, true);

  //$ExpectError watch does not accept other types as third param
  $scope.$watch("prop", () => {}, "");

  //watch accepts listener callback also as first argument
  $scope.$watch((var1, var2, scope) => {
    (scope.myVar: boolean);
  });

  // takes object equality as second argument
  $scope.$watch(() => {}, true);
  //$ExpectError watch does not accept other types as second param
  $scope.$watch(() => {}, "");
}

function testScope$watchGroup($scope: $Scope<{ myVar: boolean }>) {
  // takes array strings as first argument
  $scope.$watchGroup(["first", "second"], () => {});
  // takes array of watch functions as first argument
  $scope.$watchGroup(
    [
      scope => {
        (scope.myVar: boolean);
      }
    ],
    () => {}
  );
  //$ExpectError does not take anything else as array arguments
  $scope.$watchGroup([123], () => {});

  //listener gets current scope
  $scope.$watchGroup(["prop"], (var1, var2, scope) => {
    (scope.myVar: boolean);
  });
  //$ExpectError listener fails when trying to access scope as wrong type
  $scope.$watchGroup(["prop"], (var1, var2, scope: boolean) => scope);

  //returns function
  const ret = $scope.$watchGroup(["first"], () => {});
  ret();

  //$ExpectError returned function does not take arguments
  const ret2 = $scope.$watchGroup(["first"], () => {});
  ret2(123);
}

function testScope$watchCollection($scope: $Scope<{ myVar: boolean }>) {
  // takes string as first argument
  $scope.$watchCollection("prop", () => {});
  // takes watch function as first argument
  $scope.$watchCollection(
    scope => {
      (scope.myVar: boolean);
    },
    () => {}
  );
  //$ExpectError does not take any other type
  $scope.$watchCollection(123, () => {});

  //listener gets current scope
  $scope.$watchCollection("prop", (var1, var2, scope) => {
    (scope.myVar: boolean);
  });
  //$ExpectError listener fails when trying to access scope as wrong type
  $scope.$watchCollection("prop", (var1, var2, scope: boolean) => scope);

  //returns function
  const ret = $scope.$watchCollection("first", () => {});
  ret();

  //$ExpectError returned function does not take arguments
  const ret2 = $scope.$watchCollection("first", () => {});
  ret2(123);
}

function testScope$Digest($scope: $Scope<{ myVar: boolean }>) {
  // is callable
  $scope.$digest();
  //$ExpectError does not take arguments
  $scope.$digest(123);
}

function testScope$Destroy($scope: $Scope<{ myVar: boolean }>) {
  // is callable
  $scope.$digest();
  //$ExpectError does not take arguments
  $scope.$digest(123);
}

function testScope$Eval($scope: $Scope<{ myVar: boolean }>) {
  // takes string as first argument
  $scope.$eval("str");
  // takes function as first argument
  $scope.$eval(() => {});
  //$ExpectError function does not get arguments
  $scope.$eval((arg: number) => {});
  // takes optional object as second argument
  $scope.$eval(() => {}, {});
  //$ExpectError does not take other types as second argument
  $scope.$eval(() => {}, 123);
}

function testScope$EvalAsync($scope: $Scope<{ myVar: boolean }>) {
  // takes string as first argument
  $scope.$evalAsync("str");
  // takes function as first argument
  $scope.$evalAsync(() => {});
  //$ExpectError function does not get arguments
  $scope.$evalAsync((arg: number) => {});
  // takes optional object as second argument
  $scope.$eval(() => {}, {});
  //$ExpectError does not take other types as second argument
  $scope.$evalAsync(() => {}, 123);
}

function testScope$apply($scope: $Scope<{ myVar: boolean }>) {
  // takes string as first argument
  $scope.$apply("str");
  // takes function as first argument
  $scope.$apply(() => {});
  //$ExpectError function does not get arguments
  $scope.$apply((arg: number) => {});
}

function testScope$applyAsync($scope: $Scope<{ myVar: boolean }>) {
  // takes string as first argument
  $scope.$applyAsync("str");
  // takes function as first argument
  $scope.$applyAsync(() => {});
  //$ExpectError function does not get arguments
  $scope.$applyAsync((arg: number) => {});
}

function testScope$on($scope: $Scope<{ myVar: boolean }>) {
  // takes string as first argument
  $scope.$on("str", () => {});
  //$ExpectError does not take other types as first argument
  $scope.$on(123, () => {});
  // callback takes arbitrary amount of args
  $scope.$on("str", (a, b, c, d, e) => {});
  //$ExpectError does not take other types as second argument
  $scope.$on("str", "str");
  //returns deregistration callback
  const cb = $scope.$on("str", () => {});
  cb();
  //$ExpectError callback deos not take arguments
  const cb2 = $scope.$on("str", () => {});
  cb2(123);
}

function testScope$emit($scope: $Scope<{ myVar: boolean }>) {
  // takes string as first argument
  $scope.$emit("str", () => {});
  //$ExpectError does not take other types as first argument
  $scope.$emit(123, () => {});
  // takes arbitrary second argument
  $scope.$emit("str", 123);
  $scope.$emit("str", "abc");
  // takes arbitrary amount of arguments
  $scope.$emit("str", 123, 321, 123);
  $scope.$emit("str", "abc", "abc", "abc", "abc");
}

function testScope$broadcast($scope: $Scope<{ myVar: boolean }>) {
  // takes string as first argument
  $scope.$broadcast("str", () => {});
  //$ExpectError does not take other types as first argument
  $scope.$broadcast(123, () => {});
  // takes arbitrary second argument
  $scope.$broadcast("str", 123);
  $scope.$broadcast("str", "abc");
  // takes arbitrary amount of arguments
  $scope.$broadcast("str", 123, 321, 123);
  $scope.$broadcast("str", "abc", "abc", "abc", "abc");
}

function testScope$$postDigest($scope: $Scope<{ myVar: boolean }>) {
  // takes callback
  $scope.$$postDigest(() => {});
  //$ExpectError does not take other types
  $scope.$$postDigest(123);
  //$ExpectError does not take more arguments
  $scope.$$postDigest(() => {}, 123);
}

function testScope$id($scope: $Scope<{ myVar: boolean }>) {
  // is string
  ($scope.$id: string);
}

function testScope$parent($scope: $Scope<{ myVar: boolean }>) {
  // is scope
  ($scope.$parent: $Scope<*>);
}

function testScope$root($scope: $Scope<{ myVar: boolean }>) {
  // is scope
  ($scope.$root: $Scope<*>);
}

function testScopeExtraProps($scope: $Scope<{ myVar: boolean }>) {
  $scope.myVar;
}
