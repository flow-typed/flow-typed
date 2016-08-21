/* @flow */

import React from 'react';
import { DragSource, DropTarget, DragLayer, DragDropContext } from 'react-dnd';

// Test Drag Source
// ----------------------------------------------------------------------
type KnightProps = {
  connectDragSource: (e: React$Element<*>) => React$Element<*>,
  connectDragPreview: (e: Image) => Image,
  isDragging: boolean
}

const knightSource = {
  beginDrag() {
    return {};
  }
};

function knightCollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

class Knight extends React.Component<void, KnightProps, void> {
  componentDidMount() {
    const img = new Image();
    img.onload = () => { this.props.connectDragPreview(img) };
  }

  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
        fontSize: 40,
        fontWeight: 'bold',
        cursor: 'move',
        opacity: isDragging ? 0.5 : 1
      }}>
        ♘
      </div>
    );
  }
}

const DndKnight = DragSource('knight', knightSource, knightCollect)(Knight);
(DndKnight: Class<DndComponent<KnightProps>>);
// $ExpectError
(DndKnight: number);

// Test Drop Target
// ----------------------------------------------------------------------
function moveKnight(toX: number, toY: number) {
}

function canMoveKnight(toX: number, toY: number) {
  return true;
}

type BoardSquareProps = {
  x: number,
  y: number,
  isOver: boolean,
  canDrop: boolean,
  connectDropTarget: (e: React$Element<*>) => React$Element<*>
};

const boardSquareTarget = {
  canDrop(props) {
    return canMoveKnight(props.x, props.y);
  },

  drop(props) {
    moveKnight(props.x, props.y);
  }
};

function boardSquareCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class Square extends React.Component<void, { black: boolean }, void> {
  render() {
    const { black } = this.props;
    const fill = black ? 'black' : 'white';

    return <div style={{ backgroundColor: fill }} />;
  }
}

class BoardSquare extends React.Component<void, BoardSquareProps, void> {
  renderOverlay(color: string) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }} />
    );
  }

  render() {
    const { x, y, connectDropTarget, isOver, canDrop } = this.props;
    const black = (x + y) % 2 === 1;

    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        <Square black={black} />
        {isOver && !canDrop && this.renderOverlay('red')}
        {!isOver && canDrop && this.renderOverlay('yellow')}
        {isOver && canDrop && this.renderOverlay('green')}
      </div>
    );
  }
}

const DndBoardSquare = DropTarget('boardsquare', boardSquareTarget, boardSquareCollect)(BoardSquare);
(DndBoardSquare: Class<DndComponent<BoardSquareProps>>);
// $ExpectError
(DndBoardSquare: string);

// Test Custom Drag Layer
// ----------------------------------------------------------------------
type CustomDragLayerProps = {
  isDragging: boolean;
  title: string;
}

function dragLayerCollect(monitor) {
  return {
    isDragging: monitor.isDragging(),
    item: monitor.getItem(),
  };
}

function CustomDragLayer(props: CustomDragLayerProps) {
  const { title, isDragging } = props;
  if (!isDragging) {
    return null;
  }

  return (
    <div>this.props.title</div>
  );
}

const DndCustomDragLayer = DragLayer(dragLayerCollect)(CustomDragLayer);
(DndCustomDragLayer: Class<DndComponent<CustomDragLayer>>);
// $ExpectError
(DndCustomDragLayer: number);

// Test Drag Drop Context
// ----------------------------------------------------------------------
type BoardProps = {
  width: number,
  height: number
};

function Board(props: BoardProps) {
  const styles = {
    width: props.width,
    height: props.height
  }
  return <div style={ styles } />;
}

const DndBoard = DragDropContext({})(Board);
(DndBoard: Class<ContextComponent<Board>>);
// $ExpectError
(DndBoard: string);

// Test Functional React Components
// ----------------------------------------------------------------------
type TestProps = {
  connectDragSource: (e: React$Element<*>) => React$Element<*>,
  isDragging: boolean
}

const testSource = {
  beginDrag() {
    return {};
  }
};

function testCollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const TestFuncComp = (props: TestProps) => {
  const { connectDragSource, isDragging } = props;
  return connectDragSource(
    <div style={{
      opacity: isDragging ? 0.5 : 1
    }} />
  );
}

const DndTestFuncComp = DragSource('test', testSource, testCollect)(TestFuncComp);
(DndTestFuncComp: Class<DndComponent<TestFuncComp>>);

// Test Decorated Components
// ----------------------------------------------------------------------
(DndKnight.DecoratedComponent: Class<DndKnight>);
const dk = <DndKnight />;

// TODO: is it possible to type check the following? type of dk is React$Element<{}>
// (dk.getDecoratedComponentInstance(): DndKnight);
// (dk.getHandlerId(): string);
