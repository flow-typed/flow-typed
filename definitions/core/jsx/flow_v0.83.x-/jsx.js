declare type jsx$HTMLElementProps = {|
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
   hidden?: string,
   /**
    * Specifies a unique id for an element
    */
   id?: string,
   /**
    * Specifies the language of the element's content
    */
   lang?: string,
   /**
    * Specifies whether the element is to have its spelling and grammar checked or not
    */
   spellCheck?: string,
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
|};

declare type jsx$HTMLInputElementProps$Type =
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

declare type jsx$HTMLInputElementProps = {|
  ...jsx$HTMLElementProps,
  value?: string,
  type?: jsx$HTMLInputElementProps$Type,
|};
