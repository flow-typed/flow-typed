// @flow

import clamp from "clamp-js";

clamp(new HTMLInputElement());
clamp(new HTMLInputElement(), {});
clamp(new HTMLInputElement(), {useNativeClamp: true});

// $FlowExpectedError
clamp(new HTMLInputElement(), {useNativeClamp: "nope!"});
