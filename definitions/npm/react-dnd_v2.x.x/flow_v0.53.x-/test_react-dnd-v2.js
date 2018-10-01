/* @flow */

import * as React from "react";
import ReactDOM from "react-dom";
import { DragSource, DropTarget, DragLayer, DragDropContext } from "react-dnd";

// Test Drag Source Component with default props
// ----------------------------------------------------------------------

type KnightDefaultProps = {
  color: string
};

type KnightOrigProps = KnightDefaultProps & {
  title: string,
  count?: number
};

type KnightCollectProps = {
  connectDragSource: (e: React.Element<any>) => ?React.Element<any>,
  connectDragPreview: (e: Image) => ?Image,
  isDragging: boolean
};

type KnightProps = KnightOrigProps & KnightCollectProps;

type KnightState = {
  num: number
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

class Knight extends React.Component<KnightProps, KnightState> {
  state: KnightState = {
    num: 3
  };

  static defaultProps: KnightDefaultProps = {
    color: "blue"
  };

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

const DndKnight = DragSource("knight", knightSource, knightCollect)(Knight);

(DndKnight.DecoratedComponent: typeof Knight);

const dndKnight: DndKnight = (null: any);

(dndKnight.getHandlerId(): string);

// $ExpectError: Type mismatch
(dndKnight.getHandlerId(): number);

(dndKnight.getDecoratedComponentInstance(): Knight);

(dndKnight.getDecoratedComponentInstance().foo(): string);

// $ExpectError: Type mismatch
(dndKnight.getDecoratedComponentInstance().foo(): number);

(dndKnight.getDecoratedComponentInstance().state.num: number);

// $ExpectError: Type mismatch
(dndKnight.getDecoratedComponentInstance().state.num: string);

// $ExpectError: Missing required prop
(<DndKnight />: React.Element<typeof DndKnight>);

(<DndKnight title="foo" />: React.Element<typeof DndKnight>);

(<DndKnight title="foo" color="red" />: React.Element<typeof DndKnight>);

(<DndKnight title="foo" color={3} />: React.Element<typeof DndKnight>);

(<DndKnight title="foo" color="red" extra="x" />: React.Element<
  typeof DndKnight
>);

(<DndKnight title="foo" color="red" count={3} />: React.Element<
  typeof DndKnight
>);

// $ExpectError: Invalid optional prop
(<DndKnight title="foo" color="red" count="x" />: React.Element<
  typeof DndKnight
>);

(<DndKnight title="foo" color="red" isDragging={false} />: React.Element<
  typeof DndKnight
>);

(<DndKnight title="foo" color="red" isDragging="false" />: React.Element<
  typeof DndKnight
>);

// Test Drag Source Component without default props
// ----------------------------------------------------------------------

class Knight2 extends React.Component<KnightProps, KnightState> {
  state: KnightState = {
    num: 3
  };

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

const DndKnight2 = DragSource("knight", knightSource, knightCollect)(Knight2);

(DndKnight2.DecoratedComponent: typeof Knight2);

const dndKnight2: DndKnight2 = (null: any);

(dndKnight2.getHandlerId(): string);

// $ExpectError: Type mismatch
(dndKnight2.getHandlerId(): number);

(dndKnight2.getDecoratedComponentInstance(): Knight2);

(dndKnight2.getDecoratedComponentInstance().foo(): string);

// $ExpectError: Type mismatch
(dndKnight2.getDecoratedComponentInstance().foo(): number);

(dndKnight2.getDecoratedComponentInstance().state.num: number);

// $ExpectError: Type mismatch
(dndKnight2.getDecoratedComponentInstance().state.num: string);

// $ExpectError: Missing required prop
(<DndKnight2 />: React.Element<typeof DndKnight2>);

// $ExpectError: Missing (non-)default prop
(<DndKnight2 title="foo" />: React.Element<typeof DndKnight2>);

(<DndKnight2 title="foo" color="red" />: React.Element<typeof DndKnight2>);

// $ExpectError: Invalid (non-)default prop
(<DndKnight2 title="foo" color={3} />: React.Element<typeof DndKnight2>);

(<DndKnight2 title="foo" color="red" extra="x" />: React.Element<
  typeof DndKnight2
>);

(<DndKnight2 title="foo" color="red" count={3} />: React.Element<
  typeof DndKnight2
>);

// $ExpectError: Invalid optional prop
(<DndKnight2 title="foo" color="red" count="x" />: React.Element<
  typeof DndKnight2
>);

(<DndKnight2 title="foo" color="red" isDragging={false} />: React.Element<
  typeof DndKnight2
>);

(<DndKnight2 title="foo" color="red" isDragging="false" />: React.Element<
  typeof DndKnight2
>);

// Test Drag Source Functional Component
// ----------------------------------------------------------------------

const Knight3 = ({ color, title, isDragging }: KnightProps) =>
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
  </div>;

const DndKnight3 = DragSource("knight", knightSource, knightCollect)(Knight3);

(DndKnight3.DecoratedComponent: Knight3);

const dndKnight3: DndKnight3 = (null: any);

(dndKnight3.getHandlerId(): string);

// $ExpectError: Type mismatch
(dndKnight3.getHandlerId(): number);

(dndKnight3.getDecoratedComponentInstance(): void);

// $ExpectError: Missing required prop
(<DndKnight3 />: React.Element<typeof DndKnight3>);

// $ExpectError: Missing (non-)default prop
(<DndKnight3 title="foo" />: React.Element<typeof DndKnight3>);

(<DndKnight3 title="foo" color="red" />: React.Element<typeof DndKnight3>);

// $ExpectError: Invalid (non-)default prop
(<DndKnight3 title="foo" color={3} />: React.Element<typeof DndKnight3>);

(<DndKnight3 title="foo" color="red" extra="x" />: React.Element<
  typeof DndKnight3
>);

(<DndKnight3 title="foo" color="red" count={3} />: React.Element<
  typeof DndKnight3
>);

// $ExpectError: Invalid optional prop
(<DndKnight3 title="foo" color="red" count="x" />: React.Element<
  typeof DndKnight3
>);

(<DndKnight3 title="foo" color="red" isDragging={false} />: React.Element<
  typeof DndKnight3
>);

(<DndKnight3 title="foo" color="red" isDragging="false" />: React.Element<
  typeof DndKnight3
>);

// Test Drop Target
// ----------------------------------------------------------------------

function moveKnight(toX: number, toY: number) {}

function canMoveKnight(toX: number, toY: number) {
  return true;
}

type SquareProps = {
  black: boolean
};

class Square extends React.Component<SquareProps> {
  static defaultProps: SquareProps = {
    black: true
  };

  render() {
    const { black } = this.props;
    const fill = black ? "black" : "white";

    return <div style={{ backgroundColor: fill }} />;
  }
}

type BoardSquareDefaultProps = {
  x: number
};

type BoardSquareProps = BoardSquareDefaultProps & {
  y: number,
  count?: number,
  connectDropTarget: (e: React.Element<any>) => ?React.Element<any>,
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

class BoardSquare extends React.Component<BoardSquareProps> {
  static defaultProps: BoardSquareDefaultProps = {
    x: 0
  };

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

const DndBoardSquare = DropTarget(
  "boardsquare",
  boardSquareTarget,
  boardSquareCollect
)(BoardSquare);

(DndBoardSquare.DecoratedComponent: typeof BoardSquare);

// $ExpectError: Missing required prop
(<DndBoardSquare />: React.Element<typeof DndBoardSquare>);

(<DndBoardSquare y={5} />: React.Element<typeof DndBoardSquare>);

// $ExpectError: Invalid required prop
(<DndBoardSquare y="5" />: React.Element<typeof DndBoardSquare>);

(<DndBoardSquare y={5} x={5} />: React.Element<typeof DndBoardSquare>);

(<DndBoardSquare y={5} x="5" />: React.Element<typeof DndBoardSquare>);

(<DndBoardSquare y={5} count={5} />: React.Element<typeof DndBoardSquare>);

// $ExpectError: Invalid optional prop
(<DndBoardSquare y={5} count="5" />: React.Element<typeof DndBoardSquare>);

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

class CustomDragLayer extends React.Component<CustomDragLayerProps> {
  static defaultProps: CustomDragLayerProps = {
    isDragging: false,
    title: ""
  };

  render() {
    const { title, isDragging } = this.props;
    if (!isDragging) {
      return null;
    }

    return <div>this.props.title</div>;
  }
}

const DndCustomDragLayer = DragLayer(dragLayerCollect)(CustomDragLayer);

(DndCustomDragLayer.DecoratedComponent: typeof CustomDragLayer);

// Test Drag Drop Context
// ----------------------------------------------------------------------

type BoardProps = {
  width: number,
  height: number
};

class Board extends React.Component<BoardProps> {
  static defaultProps: BoardProps = {
    width: 400,
    height: 400
  };

  render() {
    const styles = {
      width: this.props.width,
      height: this.props.height
    };
    return <div style={styles} />;
  }
}

const DndBoard = DragDropContext({})(Board);

(DndBoard.DecoratedComponent: typeof Board);
