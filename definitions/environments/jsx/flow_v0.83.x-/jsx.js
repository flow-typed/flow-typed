/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#list_of_global_attributes
 */
 declare type jsx$HTMLElement = {
  /**
   * Specifies a shortcut key to activate/focus an element
   */
   accessKey?: string,
   /**
    * Specifies one or more classnames for an element (refers to a class in a style sheet)
    */
   className?: string,
   /**
    * Specifies whether the content of an element is editable or not
    */
   contentEditable?: string,
   /**
    * Specifies meta tag for application testing or querying
    */
   'data-testid'?: string,
   /**
    * Specifies the text direction for the content in an element
    */
   dir?: string,
   /**
    * Specifies whether an element is draggable or not
    */
   draggable?: string,
   /**
    * Specifies that an element is not yet, or is no longer, relevant
    */
   hidden?: boolean | '' | 'hidden' | 'until-found',
   /**
    * Specifies a unique id for an element
    */
   id?: string,
   /**
    * Specify that a standard HTML element should behave like a defined custom
    * built-in element
    * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
    */
   is?: string,
   /**
    * Specifies the language of the element's content
    */
   lang?: string,
   /*
    * Roles define the semantic meaning of content, allowing screen readers and
    * other tools to present and support interaction with an object in a way that
    * is consistent with user expectations of that type of object.
    */
   role?: string,
   /*
    * Assigns a slot in a shadow DOM shadow tree to an element: An element with a
    * slot attribute is assigned to the slot created by the <slot> element whose
    * name attribute's value matches that slot attribute's value.
    */
   slot?: string,
   /**
    * Specifies whether the element is to have its spelling and grammar checked or not
    */
   spellCheck?: string,
   /*
    * Contains CSS styling declarations to be applied to the element.
    */
   style?: { +[string]: string | number, ... },
   /**
    * Specifies the tabbing order of an element
    */
   tabIndex?: string,
   /**
    * Specifies extra information about an element
    */
   title?: string,
   /**
    * Specifies whether the content of an element should be translated or not
    */
   translate?: string,
   ...
};

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
 */
declare type jsx$HTMLInputElement$Type =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes
 */
declare type jsx$HTMLInputElement = {
  ...jsx$HTMLElement,
  value?: string,
  type?: jsx$HTMLInputElement$Type,
  ...
};

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes
 */
 declare type jsx$HTMLTextAreaElement = {
  ...jsx$HTMLElement,
  /**
   * This attribute indicates whether the value of the control can be automatically completed by the browser. Possible values are:
   *
   * off: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry.
   * on: The browser can automatically complete the value based on values that the user has entered during previous uses.
   */
  autoComplete?: 'on' | 'off',
  /**
   * A string which indicates whether or not to activate automatic spelling correction and processing of text substitutions (if any are configured) while the user is editing this textarea. Permitted values are:
   *
   * off: Disable automatic spelling correction and text substitutions.
   * on: Enable automatic spelling correction and text substitutions.
   */
  autoCorrect?: 'on' | 'off',
  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified.
   */
  autoFocus?: boolean,
  /**
   * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20.
   */
  cols?: number,
  /**
   * This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element when the disabled attribute is set, the control is enabled.
   */
  disabled?: boolean,
  /**
   * The form element that the <textarea> element is associated with (its "form owner"). The value of the attribute must be the id of a form element in the same document. If this attribute is not specified, the <textarea> element must be a descendant of a form element. This attribute enables you to place <textarea> elements anywhere within a document, not just as descendants of form elements.
   */
  form?: string,
  /**
   * The maximum number of characters (UTF-16 code units) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters.
   */
  maxLength?: number,
  /**
   * The minimum number of characters (UTF-16 code units) required that the user should enter.
   */
  minLength?: number,
  /**
   * The name of the control.
   */
  name?: string,
  /**
   * A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint.
   */
  placeholder?: string,
  /**
   * This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the disabled attribute, the readonly attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form.
   */
  readOnly?: boolean,
  /**
   * This attribute specifies that the user must fill in a value before submitting a form.
   */
  required?: boolean,
  /**
   * The number of visible text lines for the control. If it is specified, it must be a positive integer. If it is not specified, the default value is 2.
   */
  rows?: number,
  /**
   * Specifies whether the <textarea> is subject to spell checking by the underlying browser/OS. The value can be:
   *
   * true: Indicates that the element needs to have its spelling and grammar checked.
   * default : Indicates that the element is to act according to a default behavior, possibly based on the parent element's own spellcheck value.
   * false : Indicates that the element should not be spell checked.
   */
  spellCheck?: 'true' | 'default' | 'false',
  /**
   * Indicates how the control wraps text. Possible values are:
   *
   * hard: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the cols attribute must also be specified for this to take effect.
   * soft: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks.
   * off Non-Standard: Like soft but changes appearance to white-space: pre so line segments exceeding cols are not wrapped and the <textarea> becomes horizontally scrollable.
   *
   * If this attribute is not specified, soft is its default value.
   */
  wrap?: 'hard' | 'soft' | 'off',
  ...
};
