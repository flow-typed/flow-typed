declare module 'react-intl-redux' {

  declare type messages = {
    [id: string]: string,
  };

  declare type localeObject = {
    locale: string,
    messages: messages,
  };

  declare type updateIntlAction = {
    type: UPDATE,
    payload: localeObject,
  };

  declare var UPDATE: string;
  declare var initialState: localeObject;

  declare function updateIntl(localeObject: localeObject): updateIntlAction;

  declare function intlReducer<S>(state?: S, action?: updateIntlAction): S;
  
  declare class Provider<S, A> extends React$Component<void, { store: Store<S, A>, children?: any }, void> { }

};
