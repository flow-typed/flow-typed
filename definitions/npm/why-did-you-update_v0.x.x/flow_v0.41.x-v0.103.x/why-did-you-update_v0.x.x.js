import * as React from "react";

declare module "why-did-you-update" {
  declare export function whyDidYouUpdate(
    React: {
      Component: typeof React$Component
    },
    options?: Object
  ): void;
}
