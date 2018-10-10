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
  { value: 'foo', label: 'third item', clearableValue: true },
];
let ValueComponent = (props: {}) => <span />;
let ValueRenderer = (option: { label: string }) => option.label;

describe('The `Select` component', () => {
  it('should validate on proper props usage', () => {
    <Select
      addLabelText="Add label, plz"
      aria-describedby="aria-describedby"
      aria-label="aria-label"
      aria-labelledby="aria-labelledby"
      arrowRenderer={ArrowRenderer}
      autoBlur={false}
      autofocus={false}
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
});
