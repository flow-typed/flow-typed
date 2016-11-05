// @flow
import colors from "colors/safe";

export class CliError extends Error {
  description: ?string;

  constructor(message: string, description?: string) {
    super(message);
    this.name = "CliError";
    this.message = message;
    this.description = description;

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
}

export function printCliError(error: CliError) {
  console.log(
    colors.bold(colors.red("✖ " + error.message)) +
    (error.description ? "\n " + error.description : "")
  );
}
