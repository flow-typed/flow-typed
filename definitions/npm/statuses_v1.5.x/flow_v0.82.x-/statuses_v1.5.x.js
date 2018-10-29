declare module "statuses" {
  declare module.exports: {
    (string | number): number,
    [string | number]: ?(string | number),
    redirect: { [number]: ?boolean },
    empty: { [number]: ?boolean },
    retry: { [number]: ?boolean }
  };
}
