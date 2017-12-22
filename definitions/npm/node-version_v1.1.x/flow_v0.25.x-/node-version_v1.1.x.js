declare module "node-version" {
  declare module.exports: {
    original: string,
    short: string,
    long: string,
    major: string,
    minor: string,
    build: string
  };
}

// Filename aliases
declare module "node-version/index" {
  declare module.exports: $Exports<"node-version">;
}
declare module "node-version/index.js" {
  declare module.exports: $Exports<"node-version">;
}
