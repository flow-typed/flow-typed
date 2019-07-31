declare module "persist-path" {
  declare module.exports: (...args: string[]) => string;
}

// Filename aliases
declare module "persist-path/index" {
  declare module.exports: $Exports<"persist-path">;
}
declare module "persist-path/index.js" {
  declare module.exports: $Exports<"persist-path">;
}
