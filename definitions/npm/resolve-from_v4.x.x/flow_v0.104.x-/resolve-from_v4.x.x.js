declare module "resolve-from" {
  declare class ResolveFrom {
    (fromDir: string, moduleId: string): string,
    silent(fromDir: string, moduleId: string): string | null
  }

  declare module.exports: ResolveFrom;
}
