import React from "react";
import {
  NativeRouter,
  Link,
  DeepLinking,
  AndroidBackButton
} from "react-router-native";

// NativeRouter
<NativeRouter>
  <div />
</NativeRouter>;
<NativeRouter getUserConfirmation={(message, callback) => {}} keyLength={3}>
  <div />
</NativeRouter>;

// $FlowExpectedError
<NativeRouter keyLength="five" />;

// Link
<Link to="/about">About</Link>;
<Link replace to="/about">
  About
</Link>;
<Link
  to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
>
  About
</Link>;

// $FlowExpectedError
<Link to={3} />;

// DeepLinking
<DeepLinking />;

// AndroidBackButton
<AndroidBackButton />;
