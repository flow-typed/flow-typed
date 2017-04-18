import ReactDND from 'react-dnd';

const A = ReactDND.DropTarget('test');
(A(<div/>): React$Component);

const B = ReactDND.DragSource('test');
(B(<div/>): React$Component);

const C = ReactDND.DragLayer('test');
(C(<div/>): React$Component);
