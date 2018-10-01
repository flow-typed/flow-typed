declare module 'react-css-collapse' {
  declare module.exports: React$ComponentType<{
    isOpen?: boolean,
    children?: React$Node,
    onRest?: () => void,
    className?: string
  }>;
}
