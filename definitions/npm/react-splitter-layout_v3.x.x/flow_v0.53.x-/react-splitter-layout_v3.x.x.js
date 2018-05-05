declare type $$reactsplitterlayout$$Props = {|
  +customClassName?: string,
  +vertical?: boolean,
  +percentage?: boolean,
  +primaryIndex?: 0 | 1,
  +primaryMinSize?: number,
  +secondaryMinSize?: number,
  +secondaryInitialSize?: number,
  +onDragStart?: () => mixed,
  +onDragEnd?: () => mixed,
  +onSecondaryPaneSizeChange?: number => mixed,
  +children: React$Node,
|};

declare module 'react-splitter-layout' {
  declare export default React$ComponentType<$$reactsplitterlayout$$Props>
}
