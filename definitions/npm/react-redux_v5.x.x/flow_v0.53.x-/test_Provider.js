// @flow
import React from "react";
import { Provider, createProvider } from "react-redux";

// $ExpectError
<Provider />; // missing store

const CustomProvider: Provider<*, *> = createProvider("ikea");

// $ExpectError
<CustomProvider />; // missing store
