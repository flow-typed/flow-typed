declare module "react-typekit" {
  declare class Typekit extends React$Component<{
    kitId: string
  }> {}

  declare module.exports: typeof Typekit;
}
