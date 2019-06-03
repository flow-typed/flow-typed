declare module 'redux-starter-kit' {
  declare export type PayloadAction<P: any, T: string = string> = {
    type: T,
    payload: P,
    ...
  }
}
