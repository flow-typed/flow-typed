import React from "react";
import Toggle from "react-toggle";

class BadToggle1 extends React.Component<*> {
  render() {
    return (
      // $ExpectError
      <Toggle checked="true" />
    );
  }
}

class BadToggle2 extends React.Component<*> {
  render() {
    return (
      // $ExpectError
      <Toggle checked icons={[]} />
    );
  }
}

class BadToggle3 extends React.Component<*> {
  render() {
    return (
      // $ExpectError
      <Toggle onBlur={(e: number) => {}} />
    );
  }
}

class GoodToggle extends React.Component<*> {
  handleEvent = (e: SyntheticInputEvent<*>) => {};

  render() {
    const icons = {
      checked: <div />,
      unchecked: <div />
    };

    return (
      <div>
        <Toggle
          checked
          defaultChecked
          onChange={this.handleEvent}
          onFocus={this.handleEvent}
          onBlur={this.handleEvent}
          name="toggle"
          value="value"
          id="toggle"
          icons={icons}
          aria-labelby="test"
          aria-label="test"
          disabled
        />

        <Toggle icons={false} />
      </div>
    );
  }
}
