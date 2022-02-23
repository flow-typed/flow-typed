// From `cli-spinners`, TODO move to base def in future
// https://github.com/sindresorhus/cli-spinners/blob/main/index.d.ts#L2
type SpinnerName =
  | 'dots'
  | 'dots2'
  | 'dots3'
  | 'dots4'
  | 'dots5'
  | 'dots6'
  | 'dots7'
  | 'dots8'
  | 'dots9'
  | 'dots10'
  | 'dots11'
  | 'dots12'
  | 'dots8Bit'
  | 'line'
  | 'line2'
  | 'pipe'
  | 'simpleDots'
  | 'simpleDotsScrolling'
  | 'star'
  | 'star2'
  | 'flip'
  | 'hamburger'
  | 'growVertical'
  | 'growHorizontal'
  | 'balloon'
  | 'balloon2'
  | 'noise'
  | 'bounce'
  | 'boxBounce'
  | 'boxBounce2'
  | 'triangle'
  | 'arc'
  | 'circle'
  | 'squareCorners'
  | 'circleQuarters'
  | 'circleHalves'
  | 'squish'
  | 'toggle'
  | 'toggle2'
  | 'toggle3'
  | 'toggle4'
  | 'toggle5'
  | 'toggle6'
  | 'toggle7'
  | 'toggle8'
  | 'toggle9'
  | 'toggle10'
  | 'toggle11'
  | 'toggle12'
  | 'toggle13'
  | 'arrow'
  | 'arrow2'
  | 'arrow3'
  | 'bouncingBar'
  | 'bouncingBall'
  | 'smiley'
  | 'monkey'
  | 'hearts'
  | 'clock'
  | 'earth'
  | 'material'
  | 'moon'
  | 'runner'
  | 'pong'
  | 'shark'
  | 'dqpb'
  | 'weather'
  | 'christmas'
  | 'grenade'
  | 'point'
  | 'layer'
  | 'betaWave'
  | 'fingerDance'
  | 'fistBump'
  | 'soccerHeader'
  | 'mindblown'
  | 'speaker'
  | 'orangePulse'
  | 'bluePulse'
  | 'orangeBluePulse'
  | 'timeTravel'
  | 'aesthetic';

declare module 'ora' {
  declare type Spinner = {|
    +interval?: number,
    +frames: Array<string>,
  |};

  declare type Color =
    | 'black'
    | 'red'
    | 'green'
    | 'yellow'
    | 'blue'
    | 'magenta'
    | 'cyan'
    | 'white'
    | 'gray';

  declare type PrefixTextGenerator = () => string;

  declare type Options = {|
    /**
    Text to display after the spinner.
    */
    +text?: string,

    /**
    Text or a function that returns text to display before the spinner. No prefix text will be displayed if set to an empty string.
    */
    +prefixText?: string | PrefixTextGenerator,

    /**
    Name of one of the provided spinners. See [`example.js`](https://github.com/BendingBender/ora/blob/main/example.js) in this repo if you want to test out different spinners. On Windows, it will always use the line spinner as the Windows command-line doesn't have proper Unicode support.
    @default 'dots'
    Or an object like:
    @example
    ```
    {
      interval: 80, // Optional
      frames: ['-', '+', '-']
    }
    ```
    */
    +spinner?: SpinnerName | Spinner,

    /**
    Color of the spinner.
    @default 'cyan'
    */
    +color?: Color;

    /**
    Set to `false` to stop Ora from hiding the cursor.
    @default true
    */
    +hideCursor?: boolean;

    /**
    Indent the spinner with the given number of spaces.
    @default 0
    */
    +indent?: number;

    /**
    Interval between each frame.
    Spinners provide their own recommended interval, so you don't really need to specify this.
    Default: Provided by the spinner or `100`.
    */
    +interval?: number;

    /**
    Stream to write the output.
    You could for example set this to `process.stdout` instead.
    @default process.stderr
    */
    +stream?: stream$Writable;

    /**
    Force enable/disable the spinner. If not specified, the spinner will be enabled if the `stream` is being run inside a TTY context (not spawned or piped) and/or not in a CI environment.
    Note that `{isEnabled: false}` doesn't mean it won't output anything. It just means it won't output the spinner, colors, and other ansi escape codes. It will still log text.
    */
    +isEnabled?: boolean;

    /**
    Disable the spinner and all log text. All output is suppressed and `isEnabled` will be considered `false`.
    @default false
    */
    +isSilent?: boolean;

    /**
    Discard stdin input (except Ctrl+C) while running if it's TTY. This prevents the spinner from twitching on input, outputting broken lines on `Enter` key presses, and prevents buffering of input while the spinner is running.
    This has no effect on Windows as there's no good way to implement discarding stdin properly there.
    @default true
    */
    +discardStdin?: boolean;
  |};

  declare type PersistOptions = {|
    /**
    Symbol to replace the spinner with.
    @default ' '
    */
    +symbol?: string;

    /**
    Text to be persisted after the symbol.
    Default: Current `text`.
    */
    +text?: string;

    /**
    Text or a function that returns text to be persisted before the symbol. No prefix text will be displayed if set to an empty string.
    Default: Current `prefixText`.
    */
    +prefixText?: string | PrefixTextGenerator;
  |};

  declare type Ora = {|
    /**
    A boolean of whether the instance is currently spinning.
    */
    +isSpinning: boolean;

    /**
    Change the text after the spinner.
    */
    text: string;

    /**
    Change the text or function that returns text before the spinner. No prefix text will be displayed if set to an empty string.
    */
    prefixText: string | PrefixTextGenerator;

    /**
    Change the spinner color.
    */
    color: Color;

    /**
    Change the spinner.
    */
    spinner: SpinnerName | Spinner;

    /**
    Change the spinner indent.
    */
    indent: number;

    /**
    Start the spinner.
    @param text - Set the current text.
    @returns The spinner instance.
    */
    start(text?: string): Ora;

    /**
    Stop and clear the spinner.
    @returns The spinner instance.
    */
    stop(): Ora;

    /**
    Stop the spinner, change it to a green `✔` and persist the current text, or `text` if provided.
    @param text - Will persist text if provided.
    @returns The spinner instance.
    */
    succeed(text?: string): Ora;

    /**
    Stop the spinner, change it to a red `✖` and persist the current text, or `text` if provided.
    @param text - Will persist text if provided.
    @returns The spinner instance.
    */
    fail(text?: string): Ora;

    /**
    Stop the spinner, change it to a yellow `⚠` and persist the current text, or `text` if provided.
    @param text - Will persist text if provided.
    @returns The spinner instance.
    */
    warn(text?: string): Ora;

    /**
    Stop the spinner, change it to a blue `ℹ` and persist the current text, or `text` if provided.
    @param text - Will persist text if provided.
    @returns The spinner instance.
    */
    info(text?: string): Ora;

    /**
    Stop the spinner and change the symbol or text.
    @returns The spinner instance.
    */
    stopAndPersist(options?: PersistOptions): Ora;

    /**
    Clear the spinner.
    @returns The spinner instance.
    */
    clear(): Ora;

    /**
    Manually render a new frame.
    @returns The spinner instance.
    */
    render(): Ora;

    /**
    Get a new frame.
    @returns The spinner instance text.
    */
    frame(): string;
  |};

  declare export default (options: string | Options) => Ora;

  declare type PromiseOptions<T> = {|
    ...Options,
    /**
    The new text of the spinner when the promise is resolved.
    Keeps the existing text if `undefined`.
    */
    successText?: string | ((result: T) => string);

    /**
    The new text of the spinner when the promise is rejected.
    Keeps the existing text if `undefined`.
    */
    failText?: string | ((error: Error) => string);
  |};

  declare export function oraPromise<T>(
    action: Promise<T> | ((spinner: Ora) => Promise<T>),
    options?: string | PromiseOptions<T>
  ): Promise<T>;
}
