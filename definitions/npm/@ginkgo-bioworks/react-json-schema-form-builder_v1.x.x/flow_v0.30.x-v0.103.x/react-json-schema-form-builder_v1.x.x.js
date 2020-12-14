declare module '@ginkgo-bioworks/react-json-schema-form-builder' {
  declare type CardProps = {
    name: string,
    required: boolean,
    dataOptions: { [string]: any },
    uiOptions: { [string]: any },
    $ref?: string,
    dependents?: Array<{
      children: Array<string>,
      value?: any,
    }>,
    dependent?: boolean,
    parent?: string,
    propType: string,
    neighborNames: Array<string>,
  };

  declare type SectionProps = {
    name: string,
    required: boolean,
    schema: { [string]: any },
    uischema: { [string]: any },
    $ref?: string,
    dependents?: Array<{
      children: Array<string>,
      value?: any,
    }>,
    dependent?: boolean,
    propType: string,
    neighborNames: Array<string>,
  };

  declare type ElementProps = CardProps & SectionProps;

  declare type Parameters = {
    [string]: string | number | boolean | Array<string | number>,
    name: string,
    path: string,
    definitionData: { [string]: any },
    definitionUi: { [string]: any },
    category: string,
    'ui:option': { [string]: any },
  };

  declare type DataType =
    | 'string'
    | 'number'
    | 'boolean'
    | 'integer'
    | 'array'
    | '*'
    | null;

  declare type MatchType = {
    types: Array<DataType>,
    widget?: string,
    field?: string,
    format?: string,
    $ref?: boolean,
    enum?: boolean,
  };

  declare type FormInput = {
    displayName: string,
    // given a data and ui schema, determine if the object is of this input type
    matchIf: Array<MatchType>,
    // allowed keys for ui:options
    possibleOptions?: Array<string>,
    defaultDataSchema: {
      [string]: any,
    },
    defaultUiSchema: {
      [string]: any,
    },
    // the data schema type
    type: DataType,
    // inputs on the preview card
    cardBody: React.AbstractComponent<{
      parameters: Parameters,
      onChange: (newParams: Parameters) => void,
      mods: { [string]: any },
    }>,
    // inputs for the modal
    modalBody?: React.AbstractComponent<{
      parameters: Parameters,
      onChange: (newParams: Parameters) => void,
    }>,
  };

  // optional properties that can add custom features to the form builder
  declare type Mods = {
    customFormInputs?: {
      [string]: FormInput,
    },
    tooltipDescriptions?: {
      add?: string,
      cardObjectName?: string,
      cardDisplayName?: string,
      cardDescription?: string,
      cardInputType?: string,
    },
  };

  declare type FormBuilderProps = {
    schema: string,
    uischema: string,
    onChange: (string, string) => any,
    mods?: Mods,
    className?: string,
  };

  declare export class FormBuilder extends React$Component<FormBuilderProps> {
    static defaultProps: FormBuilderProps;
  }

  declare export class PredefinedGallery
    extends React$Component<FormBuilderProps> {
    static defaultProps: FormBuilderProps;
  }
}
