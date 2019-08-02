declare module 'mixpanel' {
  declare type People = {
    set(username: string, callback?: (err: Error) => void): void;
    set_once(username: string, callback?: (err: Error) => void): void;
    increment(username: string, callback?: (err: Error) => void): void;
    append(username: string, callback?: (err: Error) => void): void;
    union(username: string, callback?: (err: Error) => void): void;
    track_charge(username: string, callback?: (err: Error) => void): void;
    clear_charges(username: string, callback?: (err: Error) => void): void;
    delete_user(username: string, callback?: (err: Error) => void): void;
  }

  declare class MixpanelNode {
    static init(id: string, properties?: Object): this;
    track(event: string, properties?: Object, callback?: (err: Error) => void): void;
    people: People;
    alias(id: string, new_id: string, callback?: (err: Error) => void): void;
  }

  declare module.exports: typeof MixpanelNode;
}
