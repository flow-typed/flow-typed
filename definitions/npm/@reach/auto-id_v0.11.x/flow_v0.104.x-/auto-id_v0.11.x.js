declare module '@reach/auto-id' {
  /**
   * useId
   *
   * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
   *
   * Note: The returned ID will initially be `null` and will update after a
   * component mounts. Users may need to supply their own ID if they need
   * consistent values for SSR.
   *
   * @see Docs https://reach.tech/auto-id
   */
  declare export function useId(idFromProps?: string | null): string | void;
}
