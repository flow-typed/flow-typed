declare module 'use-clipboard-copy' {
  declare export type UseClipboardOptions = {|
    copiedTimeout?: number,
    onSuccess?: () => void,
    onError?: () => void,
    selectOnCopy?: boolean,
    selectOnError?: boolean,
  |};

  declare export type ClipboardAPI<T> = {|
    copied: boolean,
    copy: (text?: string) => void,
    isSupported: () => boolean,
    target: { current: T | null, ... },
  |};

  declare export function useClipboard<
    T: HTMLElement | HTMLInputElement | HTMLTextAreaElement = HTMLElement
  >(
    options?: UseClipboardOptions
  ): ClipboardAPI<T>;
}
