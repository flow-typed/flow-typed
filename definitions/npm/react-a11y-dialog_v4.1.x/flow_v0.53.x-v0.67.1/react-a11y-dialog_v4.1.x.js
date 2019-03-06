declare module "react-a11y-dialog" {
  declare class HTMLDialogElement extends HTMLElement {
    open: boolean;
    returnValue: string;
    show(): void;
    showModal(): void;
    close(returnValue: ?string): void;
  }

  declare type Props = {
    // The `role` attribute of the dialog element, either `dialog` (default) or
    // `alertdialog` to make it a modal (preventing closing on click outside of
    // ESC key).
    role?: "dialog" | "alertdialog",

    // The HTML `id` attribute of the dialog element, internally used by
    // a11y-dialog to manipulate the dialog.
    id: string,

    // The title of the dialog, mandatory in the document to provide context to
    // assistive technology. Could be hidden (while remaining accessible) with
    // CSS though.
    title: string | React$Element<*>,

    // A function called when the component has mounted, receiving the instance
    // of A11yDialog so that it can be programmatically accessed later on.
    // E.g.: dialogRef={(dialog) => (this.dialog = dialog)}
    dialogRef?: (node: HTMLDialogElement | HTMLElement) => void,

    // The HTML `id` attribute of the dialog’s title element, used by assistive
    // technologies to provide context and meaning to the dialog window. Falls
    // back to the `${this.props.id}-title` if not provided.
    titleId?: string,

    // The HTML `aria-label` attribute of the close button, used by assistive
    // technologies to provide extra meaning to the usual cross-mark. Defaults
    // to a generic English explanation.
    closeButtonLabel?: string,

    // The string that is the innerHTML of the close button.
    closeButtonContent?: string | React$Element<*>,

    // a11y-dialog needs one or more “targets” to disable when the dialog is open.
    // This prop can be one or more selector which will be passed to a11y-dialog
    // constructor.
    appRoot: string | Array<string>,

    // React 16 requires a container for the portal’s content to be rendered
    // into; this is required and needs to be an existing valid DOM node,
    // adjacent to the React root container of the application.
    dialogRoot: string,

    // Object of classes for each HTML element of the dialog element. Keys are:
    // - base
    // - overlay
    // - element
    // - document
    // - title
    // - closeButton
    // See for reference: http://edenspiekermann.github.io/a11y-dialog/#expected-dom-structure
    classNames?: {
      [key:
        | "base"
        | "overlay"
        | "element"
        | "document"
        | "title"
        | "closeButton"]: string
    },

    // Whether to render a `<dialog>` element or a `<div>` element.
    useDialog?: boolean,

    children?: React$Node
  };

  declare class Dialog extends React$Component<Props> {}

  declare module.exports: typeof Dialog;
}
