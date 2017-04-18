import React from 'react';

type ReactGeminiScrollbar$DefaultProps = {
  autoshow: false,
  forceGemini: false,
}
type ReactGeminiScrollbar$Props = {
  autoshow: bool,
  forceGemini: bool,
}
type ReactGeminiScrollbar$State = void;

declare module 'react-gemini-scrollbar' {
  declare var exports: React.Component<ReactGeminiScrollbar$DefaultProps, ReactGeminiScrollbar$Props, ReactGeminiScrollbar$State>;
}
