declare module 'express-subdomain' {
  declare module.exports: (subdomain: string, middleware: Function) => Function
}
