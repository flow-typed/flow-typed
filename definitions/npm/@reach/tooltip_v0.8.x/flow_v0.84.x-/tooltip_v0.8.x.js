// @flow

declare module '@reach/tooltip' {
    declare export default React$ComponentType<{
      label: string,
      ariaLabel?: string,
      children: React$Node,
      ...
    }>;
}
  
declare module '@reach/tooltip/styles.css' {
    declare export default void;
}
  