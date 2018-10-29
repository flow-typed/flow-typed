declare module "statuses" {
  declare module.exports: {
    (string | number): number,
    [number]: ?string,
    [string]: ?number,
    redirect: { [number]: ?boolean },
    empty: { [number]: ?boolean },
    retry: { [number]: ?boolean }
  };
}
