// @flow
import { describe, it } from 'flow-typed-test';
import tinykeys, { createKeybindingsHandler, parseKeybinding } from 'tinykeys';

describe('tinykeys', () => {
  it('basic usage', () => {
    const unsub = tinykeys(window, {
      "Shift+D": () => {
        alert("The 'Shift' and 'd' keys were pressed at the same time")
      },
      "y e e t": () => {
        alert("The keys 'y', 'e', 'e', and 't' were pressed in order")
      },
      "$mod+KeyD": event => {
        event.preventDefault()
        alert("Either 'Control+d' or 'Meta+d' were pressed")
      },
    });

    tinykeys(
      window,
      {
        "Shift+D": () => {
          alert("The 'Shift' and 'd' keys were pressed at the same time")
        },
      },
      {
        event: "keyup",
      },
    );

    unsub();
    // $FlowExpectedError[extra-arg]
    unsub('');
    tinykeys(
      window,
      {
        "Shift+D": () => {
          alert("The 'Shift' and 'd' keys were pressed at the same time")
        },
      },
      // $FlowExpectedError[prop-missing]
      {
        random: "keyup",
      },
    );
  });

  it('createKeybindingsHandler', () => {
    let handler = createKeybindingsHandler({
      "Shift+D": () => {
        alert("The 'Shift' and 'd' keys were pressed at the same time")
      },
      "y e e t": () => {
        alert("The keys 'y', 'e', 'e', and 't' were pressed in order")
      },
      "$mod+KeyD": event => {
        event.preventDefault()
        alert("Either 'Control+d' or 'Meta+d' were pressed")
      },
    })

    window.addEventListener("keydown", handler)
  });

  it('parseKeybinding', () => {
    let parsedShortcut = parseKeybinding('$mod+Shift+K $mod+1')
  });
});
