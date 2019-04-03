declare module 'pell' {
  declare type pell$defaultActions =
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

  declare type pell$customAction = {|
    /**
     * Only required if overwriting
     */
    name?: pell$defaultActions,
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

  declare type pell$action = pell$defaultActions | pell$customAction;

  declare type pell$classes = $Shape<{|
    actionbar: string,
    button: string,
    content: string,
    selected: string,
  |}>;

  declare type pell$options = {|
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
    actions?: Array<pell$action>,
    /**
     * Choose your custom class names
     */
    classes?: pell$classes,
  |};

  declare type pell$element = HTMLElement & {
    content: HTMLElement,
  };

  /**
   * Execute a document command, see reference:
   * https://developer.mozilla.org/en/docs/Web/API/Document/execCommand
   * this is just `document.execCommand(command, false, value)`
   */
  declare type pell$exec = (command: string, value?: string) => void;

  declare type pell$init = pell$options => pell$element;

  declare type pell$module = {|
    exec: pell$exec,
    init: pell$init,
  |};

  declare export var exec: pell$exec;
  declare export var init: pell$init;
  declare export default pell$module;
}

declare module 'pell/dist/pell' {
  declare module.exports: $Exports<'pell'>;
}

declare module 'pell/dist/pell.js' {
  declare module.exports: $Exports<'pell'>;
}
