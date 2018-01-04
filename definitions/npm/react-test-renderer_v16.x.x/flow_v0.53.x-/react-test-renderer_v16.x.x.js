// Type definitions for react-test-renderer 16.x.x
// Ported from: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-test-renderer

type ReactTestRendererJSON = {
  type: string,
  props: { [propName: string]: any },
  children: null | ReactTestRendererJSON[]
};

type ReactTestRendererTree = ReactTestRendererJSON & {
  nodeType: "component" | "host",
  instance: any,
  rendered: null | ReactTestRendererTree
};

type ReactTestInstance = {
  instance: any,
  type: string,
  props: { [propName: string]: any },
  parent: null | ReactTestInstance,
  children: Array<ReactTestInstance | string>,

  find(predicate: (node: ReactTestInstance) => boolean): ReactTestInstance,
  findByType(type: React$ElementType): ReactTestInstance,
  findByProps(props: { [propName: string]: any }): ReactTestInstance,

  findAll(
    predicate: (node: ReactTestInstance) => boolean,
    options?: { deep: boolean }
  ): ReactTestInstance[],
  findAllByType(
    type: React$ElementType,
    options?: { deep: boolean }
  ): ReactTestInstance[],
  findAllByProps(
    props: { [propName: string]: any },
    options?: { deep: boolean }
  ): ReactTestInstance[]
};

type ReactTestRenderer = {
  toJSON(): null | ReactTestRendererJSON,
  toTree(): null | ReactTestRendererTree,
  unmount(nextElement?: React$ElementType): void,
  update(nextElement: React$ElementType): void,
  getInstance(): null | ReactTestInstance,
  root: ReactTestInstance
};

type TestRendererOptions = {
  createNodeMock(element: React$ElementType): any
};

declare module "react-test-renderer" {
  declare function create(
    nextElement: React$ElementType,
    options?: TestRendererOptions
  ): ReactTestRenderer;
}
