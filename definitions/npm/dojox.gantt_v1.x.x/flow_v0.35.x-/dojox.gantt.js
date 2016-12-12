

declare module 'dojox.gantt' {
					
}

declare module 'gantt' {
				declare class contextMenuTab  {
		constructor(id: any, description: any, type: any, showOInfo: any, tabMenu: any, withDefaultValue: any): this;
		addAction(handler: any): void;
		addChildTaskAction(): void;
		addItem(id: any, name: any, key: any, required: any): void;
		addProjectAction(): void;
		addSuccessorTaskAction(): void;
		addTaskAction(): void;
		cpProjectAction(): void;
		cpUpdateAction(): void;
		decodeDate(dateStr: any): any;
		deleteAction(): void;
		deleteProjectAction(): void;
		durationUpdateAction(): void;
		encodeDate(date: any): String;
		hide(): void;
		insertData(content: any, name: any, value: any): void;
		ownerUpdateAction(): void;
		preValueValidation(items: any): boolean;
		ptUpdateAction(): void;
		renameProjectAction(): void;
		renameTaskAction(): void;
		show(): void
	}

	declare class GanttProjectItem extends undefined$GanttTaskItem {
		constructor(configuration: any): this;
		addChildTask(task: any): void;
		addTask(task: any): void;
		deleteTask(id: any): void;
		getTaskById(id: any): any;
		getTaskByIdInTree(parentTask: any, id: any): any;
		setProject(project: any): void
	}

	declare class GanttResourceItem  {
		constructor(ganttchart: any): this;
		buildOwnerTimeConsume(): Object;
		buildResource(): Object;
		checkWidthTaskNameItem(taskNameItem: any): void;
		clearAll(): void;
		clearData(): void;
		clearItems(): void;
		create(): void;
		createConnectingLinesPN(parentNode: any, currentNode: any): any[];
		createDetailedTaskEntry(owner: any, parentNode: any, task: any): any[];
		createOwnerEntry(owner: any): Function;
		createOwnerItem(owner: any, posY: any): any;
		createOwnerNameItem(owner: any, posY: any): any;
		createPanelNamesOwners(): any;
		createPanelOwners(): any;
		createTaskItem(task: any, posY: any): any;
		createTaskNameItem(owner: any, posY: any): any;
		createTreeImg(ownerNameItem: any): any;
		postAdjustment(): void;
		reConstruct(): void;
		refresh(): void;
		refreshDetailedTaskEntry(owner: any, item: any, task: any): void;
		refreshOwnerEntry(owner: any): void;
		refreshOwnerItem(owner: any): void;
		refreshTaskItem(item: any, task: any): void;
		styleOwnerItem(tItem: any, owner: any, displayType: any, topOffset: any): void
	}

	declare class GanttProjectControl  {
		constructor(ganttChart: any, projectItem: any): this;
		adjustPanelTime(): void;
		checkWidthProjectNameItem(): void;
		create(): void;
		createDescrProject(): any;
		createProjectItem(): any;
		createProjectNameItem(): any;
		deleteChildTask(task: any): void;
		deleteTask(id: any): void;
		getDescStr(): String;
		getDuration(): number;
		getPercentCompleted(): any;
		getTaskById(id: any): any;
		hideDescrProject(): void;
		insertTask(
		id: any, name: any, startTime: any, duration: any, percentage: any, previousTaskId: any, taskOwner: any, parentTaskId: any
	): any;
		postLoadData(): void;
		refresh(): Function;
		refreshDescrProject(divDesc: any): any;
		refreshProjectItem(projectItem: any): any;
		resizeProjectItem(width: any): void;
		searchTaskInTree(task: any, id: any): any;
		setName(name: any): void;
		setPercentCompleted(percentage: any): boolean;
		shiftChildTasks(task: any, height: any): void;
		shiftDescrProject(): void;
		shiftNextParentTask(task: any, height: any): void;
		shiftNextProject(project: any, height: any): void;
		shiftProject(height: any): void;
		shiftProjectItem(): void;
		shiftTask(task: any, height: any): void;
		showDescrProject(): void
	}

	declare class TabMenu  {
		constructor(chart: any): this;
		addItemMenuPanel(tab: any): void;
		buildContent(): void;
		clear(): void;
		createMenuPanel(): void;
		createTab(
		id: any, desc: any, type: any, showOInfo: any, menu: any, withDefaultValue: any
	): any;
		createTabPanel(): void;
		hide(): void;
		show(elem: any, object: any): void
	}

	declare class GanttTaskItem  {
		constructor(configuration: any): this;
		addChildTask(task: any): void;
		setProject(project: any): void
	}

	declare class GanttTaskControl  {
		constructor(taskInfo: any, project: any, chart: any): this;
		adjustPanelTime(): void;
		buildResourceInfo(resourceInfo: any): void;
		checkPos(startTime: any): any;
		checkPosition(): void;
		checkWidthTaskNameItem(): void;
		clearPredTask(): void;
		create(): Function;
		createConnectingLinesDS(): any[];
		createConnectingLinesPN(): any[];
		createTaskDescItem(): any;
		createTaskItem(): any;
		createTaskNameItem(): any;
		createTreeImg(): any;
		endMove(): void;
		endResizeItem(): void;
		getDateOnPosition(position: String[]): any;
		getMaxPosPredChildTaskItem(): any;
		getMaxPosPredChildTaskItemInTree(task: any): number;
		getMoveInfo(): void;
		getResizeInfo(): void;
		getTaskOwner(): Object;
		hideChildTasks(task: any): void;
		hideDescTask(): void;
		moveChildTaskItems(task: any, width: any, moveChild: any): void;
		moveCurrentTaskItem(width: any, moveChild: any): void;
		moveDescTask(): void;
		moveItem(event: any): void;
		moveTaskItem(posX: any): void;
		objKeyToStr(obj: any, delm: any): String;
		postLoadData(): void;
		refresh(): Function;
		refreshConnectingLinesDS(arrLines: any): any;
		refreshTaskDesc(divDesc: any): any;
		refreshTaskItem(itemControl: any): any;
		resizeItem(event: any): void;
		resizeTaskItem(width: any): void;
		setDuration(duration: any): boolean;
		setName(name: any): void;
		setPercentCompleted(percentage: any): boolean;
		setPreviousTask(previousTaskId: any): boolean;
		setStartTime(startTime: any, shiftChild: any): boolean;
		setTaskOwner(owner: any): boolean;
		shiftChildTask(task: any, height: any): void;
		shiftCurrentTasks(task: any, height: any): void;
		shiftNextTask(task: any, height: any): void;
		shiftTask(task: any, height: any): void;
		showChildTasks(task: any, isOpen: any): void;
		showDescTask(): void;
		startMove(event: any): void;
		startResize(event: any): void
	}

	declare class GanttChart  {
		constructor(configuration: any, node: any): this;
		addDayInPanelTime(row: any): void;
		addHourInPanelTime(row: any): void;
		addMonthInPanelTime(row: any, count: any, month: any, year: any): void;
		addProject(projectItem: any): void;
		addWeekInPanelTime(row: any, count: any, week: any): void;
		addYearInPanelTime(row: any, count: any, year: any): void;
		adjustPanelTime(): void;
		buildChildTasksData(parentTask: any, childTaskItems: any): void;
		buildUIContent(): void;
		checkHeighPanelTasks(): void;
		checkPosition(): void;
		checkPosParentTask(parentTask: any, task: any): boolean;
		checkPosParentTaskInTree(parentTask: any): any;
		checkPosPreviousTask(predTask: any, task: any): boolean;
		clearAll(): void;
		clearData(): void;
		clearEvents(): void;
		clearItems(): void;
		correctPosParentTask(parentTask: any, ctask: any): void;
		correctPosPreviousTask(predTask: any, ctask: any, ctaskObj: any): void;
		createChildItemControls(arrChildTasks: any, project: any): void;
		createPanelNamesTasks(): any;
		createPanelNamesTasksHeader(): any;
		createPanelTasks(): any;
		createPanelTime(): any;
		createTasks(project: any): void;
		deleteProject(id: any): void;
		getChildTasksData(childTasks: any): any[];
		getCountDays(): any;
		getJSONData(): Object;
		getLastChildTask(task: any): any;
		getLastCloseParent(task: any): any;
		getPosOnDate(startTime: any): number;
		getProject(id: any): any;
		getProjectItemById(id: any): any;
		getStartDate(): any;
		getWidthOnDuration(duration: any): any;
		incHeightPanelNames(height: any): void;
		incHeightPanelTasks(height: any): void;
		init(): Function;
		insertProject(id: any, name: any, startDate: any): any;
		loadJSONData(filename: any): void;
		loadJSONString(content: any): void;
		openNode(parentTask: any): void;
		openTree(parentTask: any): void;
		postBindEvents(): void;
		postLoadData(): void;
		refresh(count: any, current: any, multi: any): void;
		refreshController(): void;
		refreshParams(pixelsPerDay: any): void;
		removeCell(row: any): void;
		saveJSONData(fileName: any): void;
		setPreviousTask(project: any): any;
		setPreviousTaskInTree(parentTask: any): any;
		setStartTimeChild(parentTask: any): void;
		sortChildTasks(parenttask: any): any;
		sortProjStartDate(a: any, b: any): number;
		sortTasksByStartTime(project: any): void;
		sortTaskStartTime(a: any, b: any): number;
		switchTeleMicroView(dip: any): void
	}

	
}

declare module 'dojox/gantt/contextMenuTab' {
					declare module.exports: contextMenuTab


}

declare module 'dojox/gantt/GanttProjectControl' {
					declare module.exports: GanttProjectControl


}

declare module 'dojox/gantt/GanttProjectItem' {
					declare module.exports: GanttProjectItem


}

declare module 'dojox/gantt/GanttResourceItem' {
					declare module.exports: GanttResourceItem


}

declare module 'dojox/gantt/GanttChart' {
					declare module.exports: GanttChart


}

declare module 'dojox/gantt/GanttTaskControl' {
					declare module.exports: GanttTaskControl


}

declare module 'dojox/gantt/TabMenu' {
					declare module.exports: TabMenu


}

declare module 'dojox/gantt/GanttTaskItem' {
					declare module.exports: GanttTaskItem


}