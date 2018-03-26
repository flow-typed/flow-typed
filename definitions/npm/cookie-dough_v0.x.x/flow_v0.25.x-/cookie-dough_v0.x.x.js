declare module "cookie-dough" {
  declare module.exports: (
    req: ?Object
  ) => {
    set: (name: string, value: string, options: ?Object) => string,

    get: (name: string) => ?string,

    remove: (name: string, options: ?Object) => boolean,

    all: () => Object
  };
}

declare module "cookie-dough/index" {
  declare module.exports: $Exports<"cookie-dough">;
}

declare module "cookie-dough/index.js" {
  declare module.exports: $Exports<"cookie-dough">;
}
