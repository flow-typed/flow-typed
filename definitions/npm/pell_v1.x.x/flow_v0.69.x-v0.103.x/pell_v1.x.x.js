declare module 'pell' {
  declare type DefaultAction =
    | 'bold'
    | 'italic'
    | 'underline'
    | 'strikethrough'
    | 'heading1'
    | 'heading2'
    | 'paragraph'
    | 'quote'
    | 'olist'
    | 'ulist'
    | 'code'
    | 'line'
    | 'link'
    | 'image';

  declare type CustomAction = {|
    /**
     * Only required if overwriting
     */
    name?: DefaultAction,
    /**
     * Optional if overwriting, required if custom action
     */
    icon?: string,
    title?: string,
    /**
     * Only required if custom action.
     * Returns a Boolean that is false if the command is unsupported or disabled.
     */
    result?: () => boolean,
    state?: () => boolean,
  |};

  declare type Action = DefaultAction | CustomAction;

  declare type ClassNames = $Shape<{|
    actionbar: string,
    button: string,
    content: string,
    selected: string,
  |}>;

  declare type Options = {|
    /**
     * <HTMLElement>, required
     */
    element: HTMLElement,
    /**
     * Use the output html, triggered by element's `oninput` event
     */
    onChange: (html: string) => void,
    /**
     * default = 'div'
     * Instructs the editor which element to inject via the return key
     */
    defaultParagraphSeparator?: string,
    /**
     * default = false
     * Outputs <span style="font-weight: bold;"></span> instead of <b></b>
     */
    styleWithCSS?: boolean,
    /**
     * Specify the actions you specifically want (in order)
     */
    actions?: Array<Action>,
    /**
     * Choose your custom class names
     */
    classes?: ClassNames,
  |};

  declare type Element = HTMLElement & {
    content: HTMLElement,
  };

  /**
   * Execute a document command, see reference:
   * https://developer.mozilla.org/en/docs/Web/API/Document/execCommand
   * this is just `document.execCommand(command, false, value)`
   */
  declare type Exec = (command: string, value?: string) => void;

  declare type Init = (Options) => Element;

  declare export var exec: Exec;
  declare export var init: Init;
  declare export default {|
    exec: Exec,
    init: Init,
  |};
}

declare module 'pell/dist/pell' {
  declare module.exports: $Exports<'pell'>;
}

declare module 'pell/dist/pell.js' {
  declare module.exports: $Exports<'pell'>;
}
