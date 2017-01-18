declare module 'checkstyle-formatter' {
  declare type CheckstyleMessage = {
    line: number,
    column: number,
    severity: 'error' | 'warning',
    message: string,
  }

  declare type CheckstyleFileResult = {
    filename: string,
    messages: Array<CheckstyleMessage>,
  }

  declare type CheckstyleResult = Array<CheckstyleFileResult>

  declare module.exports: (result: CheckstyleResult) => string
}
