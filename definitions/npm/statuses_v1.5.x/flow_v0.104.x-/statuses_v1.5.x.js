declare module "statuses" {
  declare module.exports: {
    [string | number]: ?(string | number),
    (string | number): number,
    redirect: { [number]: ?boolean, ... },
    empty: { [number]: ?boolean, ... },
    retry: { [number]: ?boolean, ... },
    ...
  };
}
