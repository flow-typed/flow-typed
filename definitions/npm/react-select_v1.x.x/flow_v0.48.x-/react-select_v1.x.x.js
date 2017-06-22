declare type SelectOption = {
  value: string | number,
  label: string,
  clearableValue?: boolean,
};
declare type stringOrNode = string | React$Element<*>;
declare module 'react-select' {
  declare export class Select extends React$Component {
    props: {
      addLabelText?: string, // placeholder displayed when you want to add a label on a multi-value input
      /*
      aria-describedby?: string, // HTML ID(s) of element(s) that should be used to describe this input (for assistive tech)
      aria-label?: string, // Aria label (for assistive tech)
      aria-labelledby?: string, // HTML ID of an element that should be used as the label (for assistive tech)
      */
      arrowRenderer?: (props: { onMouseDown: Event }) => React$Element<*>, // Create drop-down caret element
      autoBlur?: boolean, // automatically blur the component when an option is selected
      autofocus?: boolean, // autofocus the component on mount
      autosize?: boolean, // whether to enable autosizing or not
      backspaceRemoves?: boolean, // whether backspace removes an item if there is no text input
      backspaceToRemoveMessage?: string, // Message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
      className?: string, // className for the outer element
      clearAllText?: stringOrNode, // title for the "clear" control when multi: true
      clearRenderer?: () => React$Element<*>, // create clearable x element
      clearValueText?: stringOrNode, // title for the "clear" control
      clearable?: boolean, // should it be possible to reset value
      deleteRemoves?: boolean, // whether backspace removes an item if there is no text input
      delimiter?: string, // delimiter to use to join multiple values for the hidden field value
      disabled?: boolean, // whether the Select is disabled or not
      escapeClearsValue?: boolean, // whether escape clears the value when the menu is closed
      filterOption: (option: any, filterString: string) => boolean, // method to filter a single option (option, filterString)
      filterOptions?:
        | boolean // eslint-disable-line
        | ((options: Array<any>, filterValue: string, excludeOptions: Array<any>, props: Object) => Array<any>), // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
      ignoreAccents?: boolean, // whether to strip diacritics when filtering
      ignoreCase?: boolean, // whether to perform case-insensitive filtering
      inputProps?: any, // custom attributes for the Input
      inputRenderer?: (props: Object) => React$Element<*>, // returns a custom input component
      instanceId?: string, // set the components instanceId
      isLoading?: boolean, // whether the Select is loading externally or not (such as options being loaded)
      joinValues?: boolean, // joins multiple values into a single form field with the delimiter (legacy mode)
      labelKey?: string, // path of the label value in option objects
      matchPos?: 'any' | 'start', // (any|start) match the start or entire string when filtering
      matchProp?: 'any' | 'label' | 'value', // (any|label|value) which option property to filter on
      menuBuffer?: number, // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
      menuContainerStyle?: any, // optional style to apply to the menu container
      menuRenderer?: (props: Object) => Array<React$Element<*>>, // renders a custom menu with options
      menuStyle?: any, // optional style to apply to the menu
      multi?: boolean, // multi-value input
      name?: string, // generates a hidden <input /> tag with this field name for html forms
      noResultsText?: stringOrNode, // placeholder displayed when there are no matching search results
      onBlur?: (event: Event) => void, // onBlur handler: function (event) {}
      onBlurResetsInput?: boolean, // whether input is cleared on blur
      onChange?: (value: any) => void, // onChange handler: function (newValue) {}
      onClose?: () => void, // fires when the menu is closed
      onCloseResetsInput?: boolean, // whether input is cleared when menu is closed through the arrow
      onFocus?: (event: Event) => void, // onFocus handler: function (event) {}
      onInputChange?: (value: any) => any, // onInputChange handler: function (inputValue) {}
      onInputKeyDown?: (event: Event) => void, // input keyDown handler: function (event) {}
      onMenuScrollToBottom?: () => void, // fires when the menu is scrolled to the bottom; can be used to paginate options
      onOpen?: () => void, // fires when the menu is opened
      onValueClick?: (value: string, event: Event) => void, // onClick handler for value labels: function (value, event) {}
      openAfterFocus?: boolean, // boolean to enable opening dropdown when focused
      openOnFocus?: boolean, // always open options menu on focus
      optionClassName?: string, // additional class(es) to apply to the <Option /> elements
      optionComponent?: (props: Object) => React$Element<*>, // option component to render in dropdown
      optionRenderer?: (props: Object) => React$Element<*>, // optionRenderer: function (option) {}
      options?: Array<SelectOption>, // array of options
      pageSize?: number, // number of entries to page when using page up/down keys
      placeholder?: stringOrNode, // field placeholder, displayed when there's no value
      required?: boolean, // applies HTML5 required attribute when needed
      resetValue?: any, // value to use when you clear the control
      scrollMenuIntoView?: boolean, // boolean to enable the viewport to shift so that the full menu fully visible when engaged
      searchable?: boolean, // whether to enable searching feature or not
      simpleValue?: boolean, // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
      style?: any, // optional style to apply to the control
      tabIndex?: number, // optional tab index of the control
      tabSelectsValue?: boolean, // whether to treat tabbing out while focused to be value selection
      value?: any, // initial field value
      valueComponent?: (props: Object) => React$Element<*>, // value component to render
      valueKey?: string, // path of the label value in option objects
      valueRenderer?: (props: Object) => React$Element<*>, // valueRenderer: function (option) {}
      wrapperStyle: any, // optional style to apply to the component wrapper
    },
  }
}
