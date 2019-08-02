declare module 'use-onclickoutside' {
  declare export default function useOnClickOutside<T: HTMLElement>(
    ref: { current: T | null },
    handler: MouseEventHandler | TouchEventHandler | null
  ): void;
}
