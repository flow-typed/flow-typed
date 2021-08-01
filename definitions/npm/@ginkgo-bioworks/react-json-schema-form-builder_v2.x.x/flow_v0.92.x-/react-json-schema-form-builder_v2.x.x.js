declare module '@ginkgo-bioworks/react-json-schema-form-builder' {
  declare type Parameters = {|
    [string]: any,
    name: string,
    path: string,
    definitionData: { [string]: any, ... },
    definitionUi: { [string]: any, ... },
    category: string,
    'ui:option': { [string]: any, ... },
  |};

  declare export type CardBodyProps = {|
    parameters: Parameters,
    onChange: (newParams: Parameters) => void,
  |};

  declare type DataType =
    | 'string'
    | 'number'
    | 'boolean'
    | 'integer'
    | 'array'
    | 'object'
    | 'null';

  declare type MatchType = {|
    types: Array<DataType>,
    widget?: string,
    field?: string,
    format?: string,
    $ref?: boolean,
    enum?: boolean,
  |};

  declare type FormInput = {|
    displayName: string,
    // given a data and ui schema, determine if the object is of this input type
    matchIf: Array<MatchType>,
    // allowed keys for ui:options
    possibleOptions?: Array<string>,
    defaultDataSchema: {
      [string]: any,
      ...
    },
    defaultUiSchema: {
      [string]: any,
      ...
    },
    // the data schema type
    type: DataType,
    // inputs on the preview card
    cardBody: React$ComponentType<CardBodyProps>,
    // inputs for the modal
    modalBody?: React$ComponentType<CardBodyProps>,
  |};

  declare type DataOptions = {|
    title: string,
    type?: string,
    description?: string,
    $ref?: string,
    default?: string,
  |};

  // optional properties that can add custom features to the form builder
  declare type Mods = {|
    customFormInputs?: {
      [string]: FormInput,
      ...
    },
    tooltipDescriptions?: {|
      add?: string,
      cardObjectName?: string,
      cardDisplayName?: string,
      cardDescription?: string,
      cardInputType?: string,
      cardSectionObjectName?: string,
      cardSectionDisplayName?: string,
      cardSectionDescription?: string,
    |},
    labels?: {|
      formNameLabel?: string,
      formDescriptionLabel?: string,
      objectNameLabel?: string,
      displayNameLabel?: string,
      descriptionLabel?: string,
      inputTypeLabel?: string,
    |},
    showFormHead?: boolean,
    deactivatedFormInputs?: Array<string>,
    newElementDefaultDataOptions?: DataOptions,
    newElementDefaultUiSchema?: { [string]: any, ... },
  |};

  declare type FormBuilderProps = {|
    schema: string,
    uischema: string,
    onChange: (schema: string, uiSchema: string) => any,
    mods?: Mods,
    className?: string,
  |};

  declare export class FormBuilder extends React$Component<FormBuilderProps> {
    static defaultProps: FormBuilderProps;
  }

  declare export class PredefinedGallery
    extends React$Component<FormBuilderProps> {
    static defaultProps: FormBuilderProps;
  }
}
