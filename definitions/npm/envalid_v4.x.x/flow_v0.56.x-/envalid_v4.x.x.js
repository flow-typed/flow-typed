declare module "envalid" {

  declare interface Spec<T> {
    /**
     * An Array that lists the admissable parsed values for the env var.
     */
    choices?: T[];
    /**
     * A fallback value, which will be used if the env var wasn't specified. Providing a default effectively makes the env var optional.
     */
    default?: T;
    /**
     * A fallback value to use only when NODE_ENV is not 'production'.
     * This is handy for env vars that are required for production environments, but optional for development and testing.
     */
    devDefault?: T;
    /**
     * A string that describes the env var.
     */
    desc?: string;
    /**
     * An example value for the env var.
     */
    example?: string;
    /**
     * A url that leads to more detailed documentation about the env var.
     */
    docs?: string;
  }

  declare interface ValidatorSpec<T> extends Spec<T> {
    type: string;
    _parse: (input: string) => T;
  }

  declare type CleanEnv = {
    /** true if NODE_ENV === 'development' */
    isDevelopment: boolean;
    isDev: boolean;

    /** true if NODE_ENV === 'test' */
    isTest: boolean;

    /** true if NODE_ENV === 'production' */
    isProduction: boolean;
    isProd: boolean;
  }

  declare interface CleanOptions {
    /**
     * If true, the output of cleanEnv will only contain the env vars that were specified in the validators argument.
     * @default false
     */
    strict?: boolean;

    /**
     * Pass in a function to override the default error handling and console output.
     * See lib/reporter.js for the default implementation.
     */
    reporter?: (errors: { [key: string]: Error }, env: any) => void;

    /**
     * A function used to transform the cleaned environment object before it is returned from cleanEnv.
     */
    transformer?: (env: any) => any;

    /**
     * Path to the file that is parsed by dotenv to optionally load more env vars at runtime.
     * Pass null if you want to skip dotenv processing entirely and only load from process.env.
     * @default ".env"
     */
    dotEnvPath?: string;
  }

  declare type StrictCleanOptions = CleanOptions & {
    strict: true;
  }

  declare type ExtractValidatorSpec = <V>(V) => ValidatorSpec<V>

  /**
   * Returns a sanitized, immutable environment object. _Only_ the env vars
   * specified in the `validators` parameter will be accessible on the returned
   * object.
   * @param environment An object containing your env vars (eg. process.env).
   * @param validators An object that specifies the format of required vars.
   * @param options An object that specifies options for cleanEnv.
   */
  declare function cleanEnv<T>(
    environment: any,
    validators: $ObjMap<T, ExtractValidatorSpec>,
    options: StrictCleanOptions
  ): T & CleanEnv
  /**
   * Returns a sanitized, immutable environment object.
   * @param environment An object containing your env vars (eg. process.env).
   * @param validators An object that specifies the format of required vars.
   * @param options An object that specifies options for cleanEnv.
   */
  declare function cleanEnv<T>(
    environment: any,
    validators?: $ObjMap<T, ExtractValidatorSpec>,
    options?: CleanOptions
  ): T & CleanEnv

  /**
   * Create your own validator functions.
   */
  declare function makeValidator<T>(
    parser: (input: string) => any,
    type?: string
  ): (spec?: Spec<T>) => ValidatorSpec<T>

  /**
   * Parses env var string "0", "1", "true", "false", "t", "f" into Boolean.
   */
  declare function bool(spec?: Spec<boolean>): ValidatorSpec<boolean>
  /**
   * Parses an env var (eg. "42", "0.23", "1e5") into a Number.
   */
  declare function num(spec?: Spec<number>): ValidatorSpec<number>
  /**
   * Passes string values through, will ensure an value is present unless a default value is given.
   */
  declare function str(spec?: Spec<string>): ValidatorSpec<string>
  /**
   * Parses an env var with JSON.parse.
   */
  declare function json(spec?: Spec<any>): ValidatorSpec<any>
  /**
   * Ensures an env var is a url with a protocol and hostname
   */
  declare function url(spec?: Spec<string>): ValidatorSpec<string>
  /**
   * Ensures an env var is an email address
   */
  declare function email(spec?: Spec<string>): ValidatorSpec<string>
  /**
   * Ensures an env var is either a domain name or an ip address (v4 or v6)
   */
  declare function host(spec?: Spec<string>): ValidatorSpec<string>
  /**
   * Ensures an env var is a TCP port (1-65535)
   */
  declare function port(spec?: Spec<number>): ValidatorSpec<number>
}
