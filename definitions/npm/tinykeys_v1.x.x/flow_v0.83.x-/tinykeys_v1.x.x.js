declare module 'tinykeys' {
  declare type KeyBindingPress = [Array<string>, string];

  declare type KeyBindingMap = {
    [keybinding: string]: (event: KeyboardEvent) => void,
  };

  declare type KeyBindingHandlerOptions = {|
    /**
     * Keybinding sequences will wait this long between key presses before
     * cancelling (default: 1000).
     *
     * **Note:** Setting this value too low (i.e. `300`) will be too fast for many
     * of your users.
     */
    timeout?: number,
  |};

  declare type KeyBindingOptions = {|
    ...KeyBindingHandlerOptions,
    /**
     * Key presses will listen to this event (default: "keydown").
     */
    event?: "keydown" | "keyup"
  |};

  /**
   * Parses a "Key Binding String" into its parts
   *
   * grammar    = `<sequence>`
   * <sequence> = `<press> <press> <press> ...`
   * <press>    = `<key>` or `<mods>+<key>`
   * <mods>     = `<mod>+<mod>+...`
   */
  declare export function parseKeybinding(str: string): Array<KeyBindingPress>;

  /**
   * Creates an event listener for handling keybindings.
   *
   * @example
   * ```js
   * import { createKeybindingsHandler } from "../src/keybindings"
   *
   * let handler = createKeybindingsHandler({
   * 	"Shift+d": () => {
   * 		alert("The 'Shift' and 'd' keys were pressed at the same time")
   * 	},
   * 	"y e e t": () => {
   * 		alert("The keys 'y', 'e', 'e', and 't' were pressed in order")
   * 	},
   * 	"$mod+d": () => {
   * 		alert("Either 'Control+d' or 'Meta+d' were pressed")
   * 	},
   * })
   *
   * window.addEvenListener("keydown", handler)
   * ```
   */
  declare export function createKeybindingsHandler(
    keyBindingMap: KeyBindingMap,
	  options?: KeyBindingHandlerOptions,
  ): EventListener;

  /**
   * Subscribes to keybindings.
   *
   * Returns an unsubscribe method.
   *
   * @example
   * ```js
   * import keybindings from "../src/keybindings"
   *
   * keybindings(window, {
   * 	"Shift+d": () => {
   * 		alert("The 'Shift' and 'd' keys were pressed at the same time")
   * 	},
   * 	"y e e t": () => {
   * 		alert("The keys 'y', 'e', 'e', and 't' were pressed in order")
   * 	},
   * 	"$mod+d": () => {
   * 		alert("Either 'Control+d' or 'Meta+d' were pressed")
   * 	},
   * })
   * ```
   */
  declare export default function keybindings(
    target: typeof window | HTMLElement,
    keyBindingMap: KeyBindingMap,
    options?: KeyBindingOptions,
  ): () => void;
}
