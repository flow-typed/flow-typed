import React from 'react';

declare module 'react-dnd' {
  declare function DropTarget(type: string|string[], spec?: Object, collect?: Object, options?: any): (component: React.Component) => React.Component;
  declare function DragSource(type: string|string[], spec?: Object, collect?: Object, options?: any): (component: React.Component) => React.Component;
  declare function DragLayer(type: string|string[], spec?: Object, collect?: Object, options?: any): (component: React.Component) => React.Component;
  declare function DragDropContext(backend: any): React.Component;
}


declare module 'react-dnd-html5-backend' {
  declare class HTML5Backend {
    getEmptyImage(): any;
  }
  declare var exports: HTML5Backend;
}

declare module 'react-dnd-touch-backend' {
  declare var exports: any;
}
