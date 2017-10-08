declare module 'mixpanel-browser' {
  declare type People = {
    set(prop: Object|String, to?: any, callback?: Function): void;
    set_once(prop: Object|String, to?: any, callback?: Function): void;
    increment(prop: Object|string, by?: number, callback?: Function): void;
    append(prop: Object|string, value?: any, callback?: Function): void;
    union(prop: Object|string, value?: any, callback?: Function): void;
    track_charge(amount: number, properties?: Object, callback?: Function): void;
    clear_charges(callback?: Function): void;
    delete_user(): void;
  }

  declare type MixpanelBrowser = {
    init(token: string, config?: Object, name?: string): void;
    push(item: [string, Object]): void;
    disable(events?: string[]): void;
    track(event_name: string, properties?: Object, callback?: Function): void;
    track_links(query: Object|string, event_name: string, properties?: Object|Function): void;
    track_forms(query: Object|string, event_name: string, properties?: Object|Function): void;
    time_event(event_name: string): void;
    register(properties: Object, days?: number): void;
    register_once(properties: Object, default_value?: any, days?: number): void;
    unregister(property: string): void;
    identify(unique_id: string): void;
    reset(): void;
    get_distinct_id(): string;
    alias(alias: string, original?: string): void;
    set_config(config: Object): void;
    get_config(): Object;
    people: People;
  }

  declare module.exports: MixpanelBrowser;
}
