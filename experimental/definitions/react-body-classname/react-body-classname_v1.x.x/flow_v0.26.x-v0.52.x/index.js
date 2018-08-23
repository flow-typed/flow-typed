declare module "react-body-classname" {
  declare class BodyClassName extends React$Component {
    props: {
      children?: any,
      className: string
    };
    static rewind(): string;
  }
  declare module.exports: typeof BodyClassName;
}
