declare module 'react-testing-library' {
  declare type RenderResult = {
    container: HTMLDivElement,
    unmount: () => void,
    queryByTestId: (id: string) => ?HTMLElement,
    getByTestId: (id: string) => HTMLElement,
    queryByText: (id: string) => ?HTMLElement,
    getByText: (id: string) => HTMLElement,
    queryByPlaceholderText: (id: string) => ?HTMLElement,
    getByPlaceholderText: (id: string) => HTMLElement,
    queryByLabelText: (id: string) => ?HTMLElement,
    getByLabelText: (id: string) => HTMLElement,
    queryByAltText: (text: string) => ?HTMLElement,
    getByAltText: (text: string) => HTMLElement
  }

  declare export function render(
    ui: React$Element<*>,
    options?: { container: HTMLElement }
  ): RenderResult

  declare export function wait(
    callback?: () => void,
    options?: {
      timeout?: number,
      interval?: number
    },
  ): Promise<void>;

  // copy from react-dom/test-utils
  declare export var Simulate: {
    [eventName: string]: (element: Element, eventData?: Object) => void,
  };
}
