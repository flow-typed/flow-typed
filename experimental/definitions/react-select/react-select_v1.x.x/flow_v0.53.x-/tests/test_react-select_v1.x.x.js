// @flow

import { describe, it } from 'flow-typed-test';
import React from 'react';
import Select from 'react-select';

let ArrowRenderer = () => <span />;
let ClearRenderer = () => <span />;
let filterOption = (option: {}, filterString: string) => true;
let InputRenderer = (props: {}) => <span />;
let MenuRenderer = (props: {}) => [<span />];
let OptionComponent = (props: {}) => <span />;
let OptionRenderer = () => <span />;
let options = [
  { value: 123, label: 'first item' },
  { value: 345, label: 'second item' },
  { value: 'foo', label: 'third item', clearableValue: true }
];
let ValueComponent = (props: {}) => <span />;
let ValueRenderer = (option: { label: string }) => option.label;

type OptionType = { [string]: any };

let customOptions: OptionType[] = [
  {
    type: 'parent',
    disabled: true,
    commonData: 'data'
  },
  {
    type: 'child',
    disabled: false,
    commonData: 'data',
    childData: 'child data 1'
  },
  {
    type: 'child',
    disabled: false,
    commonData: 'data',
    childData: 'child data 2'
  }
];

describe('The `Select` component', () => {
  it('should validate on proper props usage', () => {
    <Select
      addLabelText="Add label, plz"
      aria-describedby="aria-describedby"
      aria-label="aria-label"
      aria-labelledby="aria-labelledby"
      arrowRenderer={ArrowRenderer}
      autoBlur={false}
      autoFocus={false}
      autosize={false}
      backspaceRemoves={false}
      backspaceToRemoveMessage="Click backspace to remove"
      className="my-class-name"
      clearAllText="Clear all"
      clearRenderer={ClearRenderer}
      clearValueText="Clear value"
      clearable={true}
      deleteRemoves={false}
      delimiter=","
      disabled={false}
      escapeClearsValue={false}
      filterOption={filterOption}
      filterOptions={false}
      ignoreAccents={false}
      ignoreCase={false}
      inputProps={{ someCustomProp: false }}
      inputRenderer={InputRenderer}
      instanceId="UNIQUE_ID_HERE"
      isLoading={false}
      joinValues={false}
      labelKey="labelKey"
      matchPos="start"
      matchProp="label"
      menuBuffer={10}
      menuContainerStyle={{ color: 'green' }}
      menuRenderer={MenuRenderer}
      menuStyle={{ color: 'green' }}
      multi={false}
      name="fance name"
      noResultsText="No results found. I'm so terribly sorry. I'll just go now. :´("
      onBlur={(event): void => {}}
      onBlurResetsInput={false}
      onChange={(value: any): void => {}}
      onClose={(): void => {}}
      onCloseResetsInput={false}
      onFocus={event => {}}
      onInputChange={(value: any) => {
        return 'foo';
      }}
      onInputKeyDown={event => {}}
      onMenuScrollToBottom={(): void => {}}
      onOpen={() => {}}
      onValueClick={(value: string, event: Event) => {}}
      openAfterFocus={false}
      openOnFocus={false}
      optionClassName="fancy-class-for-option"
      optionComponent={OptionComponent}
      optionRenderer={OptionRenderer}
      options={options}
      pageSize={10}
      placeholder="Placeholder text"
      required={false}
      resetValue={0}
      scrollMenuIntoView={false}
      searchable={true}
      simpleValue={false}
      style={{ color: 'gray' }}
      tabIndex={-1}
      tabSelectsValue={false}
      value={0}
      valueComponent={ValueComponent}
      valueKey="valueKey"
      valueRenderer={ValueRenderer}
      wrapperStyle={{ backgroundColor: 'white' }}
    />;
  });

  it('should error on invalid props usage', () => {
    // $ExpectError addLabelText cannot be number
    <Select addLabelText={123} />;
  });

  it('should handle custom options', () => {
    let customOptionRenderer = (o: OptionType) => <span />;
    let customFilterOption = (options: OptionType[], filterValue: string) =>
      options;
    <Select
      name="name"
      autoFocus
      placeholder="Enter data"
      valueKey="id"
      labelKey="data"
      options={customOptions}
      value=""
      optionRenderer={customOptionRenderer}
      filterOptions={customFilterOption}
    />;
  });

  it('should error when optionRenderer option param type is not the same as options element type', () => {
    let invalidRenderer = (o: string) => <span />;
    // $ExpectError
    <Select
      name="name"
      autoFocus
      placeholder="Enter data"
      valueKey="id"
      labelKey="data"
      options={customOptions}
      value=""
      optionRenderer={invalidRenderer}
    />;
  });

  it('should error when filterOptions options param type is not an array of options element type', () => {
    let invalidFilterOptions = (o: string) => <span />;
    // $ExpectError
    <Select
      name="name"
      autoFocus
      placeholder="Enter data"
      valueKey="id"
      labelKey="data"
      options={customOptions}
      value=""
      filterOptions={invalidFilterOptions}
    />;
  });

  it('should error when given non-existent prop', () => {
    // Deprecated autofocus
    // $ExpectError
    <Select
      name="name"
      autofocus
      placeholder="Enter data"
      valueKey="id"
      labelKey="data"
      options={customOptions}
      value=""
    />;
  });
});
