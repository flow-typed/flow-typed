/* @flow */

import React from "react";
import ReactDOM from "react-dom";
import { DragSource, DropTarget, DragLayer, DragDropContext } from "react-dnd";

// Test Drag Source
// ----------------------------------------------------------------------
type KnightDefaultProps = {
  color: string
};
type KnightProps = KnightDefaultProps & {
  title: string,

  connectDragSource: (e: React$Element<*>) => ?React$Element<*>,
  connectDragPreview: (e: Image) => ?Image,
  isDragging: boolean
};

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

class Knight extends React.Component {
  props: KnightProps;

  static defaultProps: KnightDefaultProps;

  componentDidMount() {
    const img = new Image();
    img.onload = () => {
      this.props.connectDragPreview(img);
    };
  }

  foo(): string {
    return "foo";
  }

  render() {
    const { color, title, connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div
        title={title}
        style={{
          color,
          fontSize: 40,
          fontWeight: "bold",
          cursor: "move",
          opacity: isDragging ? 0.5 : 1
        }}
      >
        ♘
      </div>
    );
  }
}
Knight.defaultProps = {
  color: "blue"
};

const DndKnight = DragSource("knight", knightSource, knightCollect)(Knight);
(DndKnight: Class<DndComponent<Knight, *, *, void>>);
// $ExpectError
(DndKnight: number);

const x: DndKnight = ({}: any);
// $ExpectError
x.foo();

(x.getDecoratedComponentInstance().foo(): string);
// $ExpectError
(x.getDecoratedComponentInstance().foo(): number);

ReactDOM.render(<DndKnight title="foo" />, document.body);

// Test Drop Target
// ----------------------------------------------------------------------
function moveKnight(toX: number, toY: number) {}

function canMoveKnight(toX: number, toY: number) {
  return true;
}

type SquareProps = {
  black: boolean
};

class Square extends React.Component {
  props: SquareProps;

  static defaultProps: SquareProps;

  render() {
    const { black } = this.props;
    const fill = black ? "black" : "white";

    return <div style={{ backgroundColor: fill }} />;
  }
}
Square.defaultProps = {
  black: true
};

type BoardSquareDefaultProps = {
  x: number
};
type BoardSquareProps = BoardSquareDefaultProps & {
  y: number,
  connectDropTarget: (e: React$Element<*>) => ?React$Element<*>,
  isOver: boolean,
  canDrop: boolean
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
class BoardSquare extends React.Component {
  props: BoardSquareProps;

  static defaultProps: BoardSquareDefaultProps;

  renderOverlay(color: string) {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 1,
          opacity: 0.5,
          backgroundColor: color
        }}
      />
    );
  }

  render() {
    const { x, y, connectDropTarget, isOver, canDrop } = this.props;
    const black = (x + y) % 2 === 1;

    return connectDropTarget(
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%"
        }}
      >
        <Square black={black} />
        {isOver && !canDrop && this.renderOverlay("red")}
        {!isOver && canDrop && this.renderOverlay("yellow")}
        {isOver && canDrop && this.renderOverlay("green")}
      </div>
    );
  }
}
BoardSquare.defaultProps = {
  x: 0
};

const DndBoardSquare = DropTarget(
  "boardsquare",
  boardSquareTarget,
  boardSquareCollect
)(BoardSquare);
(DndBoardSquare: Class<DndComponent<BoardSquare, *, *, void>>);
// $ExpectError
(DndBoardSquare: string);

ReactDOM.render(<DndBoardSquare y={5} />, document.body);

// Test Custom Drag Layer
// ----------------------------------------------------------------------
type CustomDragLayerProps = {
  isDragging: boolean,
  title: string
};

function dragLayerCollect(monitor) {
  return {
    isDragging: monitor.isDragging(),
    item: monitor.getItem()
  };
}

class CustomDragLayer extends React.Component {
  props: CustomDragLayerProps;

  static defaultProps: CustomDragLayerProps;

  render() {
    const { title, isDragging } = this.props;
    if (!isDragging) {
      return null;
    }

    return <div>this.props.title</div>;
  }
}
CustomDragLayer.defaultProps = {
  isDragging: false,
  title: ""
};

const DndCustomDragLayer = DragLayer(dragLayerCollect)(CustomDragLayer);
(DndCustomDragLayer: Class<DndComponent<CustomDragLayer, *, *, void>>);
// $ExpectError
(DndCustomDragLayer: number);

// Test Drag Drop Context
// ----------------------------------------------------------------------
type BoardProps = {
  width: number,
  height: number
};

class Board extends React.Component {
  props: BoardProps;

  static defaultProps: BoardProps;

  render() {
    const styles = {
      width: this.props.width,
      height: this.props.height
    };
    return <div style={styles} />;
  }
}
Board.defaultProps = {
  width: 400,
  height: 400
};

const DndBoard = DragDropContext({})(Board);
(DndBoard: Class<ContextComponent<Board, BoardProps, BoardProps, void>>);
// $ExpectError
(DndBoard: string);

// Test Functional React Components
// ----------------------------------------------------------------------
type TestProps = {
  connectDragSource: (e: React$Element<*>) => React$Element<*>,
  isDragging: boolean
};

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
    <div
      style={{
        opacity: isDragging ? 0.5 : 1
      }}
    />
  );
};

const DndTestFuncComp = DragSource("test", testSource, testCollect)(
  TestFuncComp
);
(DndTestFuncComp: Class<DndComponent<*, *, *, *>>);
