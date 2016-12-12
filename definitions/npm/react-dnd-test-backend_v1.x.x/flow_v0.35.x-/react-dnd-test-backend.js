

declare module 'react-dnd-test-backend' {
				declare class TestBackend  {
		setup(): void;
		teardown(): void;
		connectDragSource(): void;
		connectDropTarget(): void;
		simulateBeginDrag(sourceIds: ___ReactDnd.Identifier[], options?: {
		
	}): void;
		simulatePublishDragSource(): void;
		simulateHover(targetIds: ___ReactDnd.Identifier[], options?: {
		
	}): void;
		simulateDrop(): void;
		simulateEndDrag(): void
	}

	
}