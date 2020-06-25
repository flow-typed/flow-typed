// @flow
import React from "react";
import { Provider, createProvider } from "react-redux";

// $FlowExpectedError
<Provider />; // missing store

const CustomProvider: Provider<*, *> = createProvider("ikea");

// $FlowExpectedError
<CustomProvider />; // missing store
