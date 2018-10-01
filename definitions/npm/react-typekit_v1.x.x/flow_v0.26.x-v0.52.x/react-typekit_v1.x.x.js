declare module "react-typekit" {
  declare class Typekit extends React$Component {
    props: {
      kitId: string
    };
  }

  declare module.exports: typeof Typekit;
}
