import React from 'react';
import { Select as SelectComponent } from 'react-select';
import type { Select } from 'react-select';

const ArrowRenderer = (props: { onMouseDown: Event }): React$Element<*> => <span>Arrow</span>;
const ClearRenderer = (): React$Element<*> => <span />;
const filterOption = (option: Object, filterString: string) => {
  return true;
};
const InputRenderer = (props: Object) => <span />;
const MenuRenderer = (props: Object) => [<span />];
const OptionComponent = (props: Object) => <span />;
const OptionRenderer = (props: Object) => <span />;
const options = [
  { value: 123, label: 'first item' },
  { value: 345, label: 'second item' },
  { value: 'foo', label: 'third item', clearableValue: true },
];
const ValueComponent = (props: Object) => <span />;
const ValueRenderer = (props: Object) => <span />;

<SelectComponent
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
  onBlur={(event: Event): void => {}}
  onBlurResetsInput={false}
  onChange={(value: any): void => {}}
  onClose={(): void => {}}
  onCloseResetsInput={false}
  onFocus={(event: Event) => {}}
  onInputChange={(value: any) => {
    return 'foo';
  }}
  onInputKeyDown={(event: Event) => {}}
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

// $ExpectError addLabelText cannot be number
<SelectComponent addLabelText={123} />;
