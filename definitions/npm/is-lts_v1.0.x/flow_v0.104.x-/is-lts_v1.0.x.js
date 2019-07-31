declare module "is-lts" {
  declare module.exports: () => boolean;
}

// Filename aliases
declare module "is-lts/index" {
  declare module.exports: $Exports<"is-lts">;
}
declare module "is-lts/index.js" {
  declare module.exports: $Exports<"is-lts">;
}
