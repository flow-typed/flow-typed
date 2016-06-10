// @flow

import ReactDND from 'react-dnd';

const A = ReactDND.DropTarget('test');
class AComponent extends React$Component<*, *, *> {};
(A(AComponent): Class<AComponent>);
// $ExpectError
(A(AComponent): number);

const B = ReactDND.DragSource('test');
class BComponent extends React$Component<*, *, *> {};
(B(BComponent): Class<BComponent>);
// $ExpectError
(B(BComponent): number);

const C = ReactDND.DragLayer('test');
class CComponent extends React$Component<*, *, *> {};
(C(CComponent): Class<CComponent>);
// $ExpectError
(C(CComponent): number);
