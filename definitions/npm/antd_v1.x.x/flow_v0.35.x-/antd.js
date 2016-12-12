

declare module 'antd' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Antd' {
	declare type CreateFormOptions = {
		getFieldsValue(): (fieldNames?: Array<string>) => any,
		getFieldValue(): (fieldName: string) => any,
		setFieldsValue(): (obj: Object) => void,
		setFields(): (obj: Object) => void,
		validateFields(
		
	): (
		fieldNames?: Array<string>, options?: Object, callback?: (erros: any, values: any) => void
	) => any,
		validateFieldsAndScroll(
		
	): (
		fieldNames?: Array<string>, options?: Object, callback?: (erros: any, values: any) => void
	) => any,
		getFieldError(): (name: string) => Object,
		isFieldValidating(): (name: string) => Object,
		resetFields(): (names?: Array<string>) => void,
		getFieldsValue(
		
	): (
		id: string, options: {
		valuePropName?: string,
		initialValue?: any,
		trigger?: string,
		validateTrigger?: string,
		rules?: Array<any>,
		id?: string
	}
	) => Array<any>
	};

	declare type MessageFunc = (content: string, duration?: number) => void;

	declare type ModalFunc = (
		options: {
		visible?: boolean,
		title?: React.ReactNode | string,
		onOk?: Function,
		onCancel?: Function,
		width?: string | number,
		iconClassName?: string,
		okText?: string,
		cancelText?: string
	}
	) => void;

	declare type NotificationFunc = (
		config: {
		message: React.ReactNode | string,
		description: React.ReactNode | string,
		btn?: React.ReactNode | string,
		key?: string,
		onClose?: Function,
		duration?: number
	}
	) => void;

	declare type SelectedRowKeys = Array<any>;

	declare type TreeData = Array<{
		value: any,
		label: string,
		children: TreeData
	}>;

	declare interface AffixProps {
		offset?: number
	}

	declare interface AlertProps {
		type: string,
		closable?: boolean,
		closeText?: React.ReactNode,
		message: React.ReactNode,
		description?: React.ReactNode,
		onClose?: Function,
		showIcon?: boolean
	}

	declare interface BadgeProps {
		count: number,
		overflowCount?: number,
		dot?: boolean
	}

	declare interface ButtonProps {
		type?: ButtonType | string,
		shape?: string,
		size?: string,
		htmlType?: string,
		onClick?: Function,
		loading?: boolean,
		className?: string
	}

	declare interface ButtonGroupProps {
		size?: string
	}

	declare interface BreadcrumbItemProps {
		href?: string
	}

	declare interface BreadcrumbProps {
		routes?: Array<React.ReactNode>,
		params?: Object,
		separator?: string | React.ReactNode
	}

	declare interface CalendarProps {
		monthCellRender?: Function,
		dateCellRender?: Function,
		fullscreen?: boolean,
		locale?: Object,
		prefixCls?: string,
		className?: string,
		style?: Object,
		onPanelChange?: Function,
		value?: Date,
		defaultValue?: Date,
		mode?: string
	}

	declare interface CarouselProps {
		effect?: string,
		dots?: boolean,
		vertical?: boolean,
		autoplay?: boolean,
		easing?: string,
		beforeChange?: Function,
		afterChange?: Function
	}

	declare interface CascaderProps {
		options: Object,
		defaultValue?: Array<any>,
		value?: Array<any>,
		onChange?: Function,
		displayRender?: Function,
		style?: Object,
		className?: string,
		popupClassName?: string,
		popupPlacement?: string,
		placeholder?: string,
		size?: string,
		disabled?: boolean,
		allowClear?: boolean
	}

	declare interface CheckboxProps {
		checked?: boolean,
		defaultChecked?: boolean,
		onChange?: Function
	}

	declare interface CheckboxGroupProps {
		defaultValue?: Array<any>,
		value?: Array<any>,
		options?: Array<any>,
		onChange?: Function
	}

	declare interface CollapseProps {
		activeKey?: Array<any> | string,
		defaultActiveKey?: Array<string>,
		onChange?: Function
	}

	declare interface DatePickerProps<T> {
		value?: string | Date,
		defaultValue?: string | Date,
		format?: string,
		disabledDate?: Function,
		onChange?: Function,
		disabled?: boolean,
		style?: Object,
		popupStyle?: Object,
		size?: string,
		locale?: Object,
		showTime?: boolean,
		onOk?: Function,
		getCalendarContainer?: Function
	}

	declare interface RangePickProps {
		
	}

	declare interface DropdownProps {
		trigger?: Array<string>,
		overlay: React.ReactNode
	}

	declare interface FormItemProps {
		prefixCls?: string,
		label?: React.ReactNode,
		labelCol?: Object,
		help?: React.ReactNode | boolean,
		extra?: string,
		validateStatus?: string,
		hasFeedback?: boolean,
		wrapperCol?: Object,
		className?: string,
		required?: boolean,
		id?: string
	}

	declare interface FormComponentProps {
		form: CreateFormOptions
	}

	declare interface ComponentDecorator {
		(component: T): T
	}

	declare interface FormProps {
		prefixCls?: string,
		horizontal?: boolean,
		inline?: boolean,
		form?: Object,
		onSubmit?: (e: React.FormEvent) => void
	}

	declare interface IconProps {
		type: string
	}

	declare interface InputProps {
		type?: string,
		id: string | number,
		size?: string,
		disabled?: boolean,
		value?: any,
		defaultValue?: any,
		className?: string,
		addonBefore?: React.ReactNode,
		addonAfter?: React.ReactNode,
		prefixCls?: string,
		placeholder?: string
	}

	declare interface InputNumberProps {
		min: number,
		max: number,
		value?: number,
		step?: number,
		defaultValue?: number,
		onChange?: Function,
		disabled?: boolean,
		size?: string
	}

	declare interface RowProps {
		type?: string,
		align?: string,
		justify?: string,
		className?: string
	}

	declare interface ColProps {
		span?: string,
		order?: string,
		offset?: string,
		push?: string,
		pull?: string,
		className?: string
	}

	declare interface MenuItemProps {
		disabled?: boolean,
		key: string
	}

	declare interface MenuSubMenuProps {
		title: string | React.ReactNode,
		children?: JSX.Element[]
	}

	declare interface MenuItemGroupProps {
		title: string | React.ReactNode,
		children?: JSX.Element[]
	}

	declare interface MenuProps {
		theme?: MenuTheme | string,
		mode?: MenuMode | string,
		selectedKeys?: Array<string>,
		defaultSelectedKeys?: Array<string>,
		openKeys?: Array<string>,
		defaultOpenKeys?: Array<string>,
		onSelect?: (item: any, key: string, selectedKeys: Array<string>) => void,
		onDeselect?: (item: any, key: string, selectedKeys: Array<string>) => void,
		onClick?: (item: any, key: string) => void,
		style?: Object
	}

	declare interface ModalProps {
		visible?: boolean,
		confirmLoading?: boolean,
		title?: React.ReactNode | string,
		closable?: boolean,
		onOk?: Function,
		onCancel?: Function,
		width?: string | number,
		footer?: React.ReactNode | string,
		okText?: string,
		cancelText?: string,
		maskClosable?: boolean
	}

	declare interface PaginationProps {
		current?: number,
		defaultCurrent?: number,
		total: number,
		defaultPageSize?: number,
		pageSize?: number,
		onChange?: Function,
		showSizeChanger?: boolean,
		pageSizeOptions?: Array<number>,
		onShowSizeChange?: Function,
		showQuickJumper?: boolean,
		size?: string,
		simple?: Object,
		showTotal?: Function
	}

	declare interface PopconfirmProps {
		placement?: Placement | string,
		title?: string,
		onConfirm?: Function,
		onCancel?: Function,
		onVisibleChange?: (visible: boolean) => void,
		okText?: string,
		cancelText?: string
	}

	declare interface PopoverProps {
		trigger?: Trigger | string,
		placement?: PopoverPlacement | string,
		title?: React.ReactNode | string,
		overlay?: React.ReactNode | string,
		prefixCls?: string,
		visible?: boolean,
		onVisibleChange?: Function
	}

	declare interface LineProps {
		percent: number,
		format?: (percent: any) => void,
		status?: ProgressStatus | string,
		strokeWidth?: number,
		showInfo?: boolean
	}

	declare interface CircleProps {
		percent: number,
		format?: (percent: any) => void,
		status?: ProgressStatus | string,
		strokeWidth?: number,
		width?: number
	}

	declare interface QueueAnimProps {
		type?: string | Array<string>,
		animConfig?: Object | Array<any>,
		delay?: number | Array<any>,
		duration?: number | Array<any>,
		interval?: number | Array<any>,
		leaveReverse?: boolean,
		ease?: string | Array<any>,
		animatingClassName?: Array<string>,
		component?: string
	}

	declare interface RadioGroupProps {
		onChange?: (e: Event) => void,
		value?: string,
		defaultValue?: string,
		size?: RadioGroupSize | string
	}

	declare interface RadioProps {
		checked?: boolean,
		defaultChecked?: boolean,
		value?: any
	}

	declare interface SelectOptionProps {
		disabled?: boolean,
		key?: string,
		value: string
	}

	declare interface SelectOptGroupProps {
		label: string | React.ReactNode,
		key?: string
	}

	declare interface SelectProps {
		value?: string | Array<any>,
		defaultValue?: string | Array<any>,
		multiple?: boolean,
		allowClear?: boolean,
		filterOption?: boolean | Function,
		tags?: boolean,
		onSelect?: (value: any, option: any) => void,
		onDeselect?: (value: any, option: any) => void,
		onChange?: (value: any, label: any) => void,
		onSearch?: (value: string) => void,
		placeholder?: string,
		searchPlaceholder?: string,
		notFoundContent?: string,
		dropdownMatchSelectWidth?: boolean,
		optionFilterProp?: string,
		combobox?: SVGSymbolElement,
		size?: string,
		showSearch?: boolean,
		disabled?: boolean,
		style?: Object
	}

	declare interface SliderProps {
		min?: number,
		max?: number,
		step?: number,
		marks?: {
		key: number,
		value: any
	},
		value?: number | Array<number>,
		defaultValue?: number | Array<number>,
		included?: boolean,
		disabled?: boolean,
		allowCross?: boolean,
		onChange?: Function,
		onAfterChange?: Function,
		tipFormatter?: Function | any,
		range?: boolean
	}

	declare interface SpinProps {
		size?: string,
		spining?: boolean
	}

	declare interface StepProps {
		status?: StepStatus | string,
		title: string | React.ReactNode,
		description?: string | React.ReactNode,
		icon?: string | React.ReactNode
	}

	declare interface StepsProps {
		current?: number,
		size?: string,
		direction?: string,
		maxDescriptionWidth?: number
	}

	declare interface SwitchProps {
		checked?: boolean,
		defaultChecked?: boolean,
		onChange?: (checked: boolean) => void,
		checkedChildren?: React.ReactNode,
		unCheckedChildren?: React.ReactNode,
		size?: string
	}

	declare interface RowSelection {
		type?: RowSelectionType | string,
		selectedRowKeys?: SelectedRowKeys,
		onChange?: (selectedRowKeys: SelectedRowKeys, selectedRows: any) => void,
		getCheckboxProps?: (record: any) => void,
		onSelect?: (record: any, selected: any, selectedRows: any) => void,
		onSelectAll?: (rselectedecord: any, selectedRows: any, changeRows: any) => void
	}

	declare interface Columns {
		key?: string,
		title?: string | React.ReactNode,
		dataIndex?: string,
		render?: (text?: any, record?: any, index?: number) => React.ReactNode,
		filters?: Array<any>,
		onFilter?: Function,
		filterMultiple?: boolean,
		sorter?: boolean | Function,
		colSpan?: number,
		width?: string | number,
		className?: string
	}

	declare interface TableProps {
		rowSelection?: RowSelection,
		pagination?: Object,
		size?: string,
		dataSource: Array<any>,
		columns: Columns,
		rowKey?: (record: any, index: number) => string,
		expandedRowRender?: Function,
		defaultExpandedRowKeys?: Array<string>,
		onChange?: (pagination: Object, filters: any, sorter: any) => void,
		loading?: boolean,
		locale?: Object,
		indentSize?: number,
		onRowClick?: (record: any, index: number) => void,
		useFixedHeader?: boolean,
		bordered?: boolean,
		showHeader?: boolean,
		footer?: (currentPageData: Object) => void
	}

	declare interface TabPaneProps {
		tab: React.ReactNode | string
	}

	declare interface TabsProps {
		activeKey?: string,
		defaultActiveKey?: string,
		onChange?: Function,
		onTabClick?: Function,
		tabBarExtraContent?: React.ReactNode,
		type?: TabsType | string,
		tabPosition?: TabsPosition | string,
		onEdit?: (targetKey: string, action: any) => void
	}

	declare interface TagProps {
		closable?: boolean,
		onClose?: Function,
		afterClose?: Function,
		color?: string
	}

	declare interface TimePickerProps {
		value?: string | Date,
		defaultValue?: string | Date,
		format?: string,
		onChange?: (Date: Date) => void,
		disabled?: boolean,
		placeholder?: string,
		locale?: Object,
		hideDisabledOptions?: boolean,
		disabledHours?: Function,
		disabledMinutes?: Function,
		disabledSeconds?: Function
	}

	declare interface TimeLineItemProps {
		color?: string
	}

	declare interface TimelineProps {
		pending?: boolean | React.ReactNode
	}

	declare interface TooltipProps {
		placement?: PopoverPlacement | string,
		title?: string | React.ReactNode
	}

	declare interface TransferProps {
		dataSource: Array<any>,
		render?: (record: Object) => any,
		targetKeys: Array<string>,
		onChange?: (targetKeys: any, direction: string, moveKeys: any) => void,
		listStyle?: Object,
		className?: string,
		titles?: Array<string>,
		operations?: Array<string>,
		showSearch?: boolean,
		searchPlaceholder?: string,
		notFoundContent?: React.ReactNode | string,
		footer?: (props: any) => any
	}

	declare interface TreeNodeProps {
		disabled?: boolean,
		disableCheckbox?: boolean,
		title?: string | React.ReactNode,
		key?: string,
		isLeaf?: boolean
	}

	declare interface TreeProps {
		showLine?: boolean,
		className?: string,
		multiple?: boolean,
		checkable?: boolean,
		defaultExpandAll?: boolean,
		defaultExpandedKeys?: Array<string>,
		expandedKeys?: Array<string>,
		checkedKeys?: Array<string>,
		defaultCheckedKeys?: Array<string>,
		selectedKeys?: Array<string>,
		defaultSelectedKeys?: Array<string>,
		onExpand?: (node: any, expanded: any, expandedKeys: any) => void,
		onCheck?: (
		checkedKeys: any, e: {
		checked: boolean,
		checkedNodes: any,
		node: any,
		event: Event
	}
	) => void,
		onSelect?: (
		selectedKeys: any, e: {
		selected: boolean,
		selectedNodes: any,
		node: any,
		event: Event
	}
	) => void,
		filterTreeNode?: (node: any) => boolean,
		loadData?: (node: any) => void,
		onRightClick?: (options: {
		event: Event,
		node: any
	}) => void,
		draggable?: boolean,
		onDragStart?: (options: {
		event: Event,
		node: any
	}) => void,
		onDragEnter?: (options: {
		event: Event,
		node: any,
		expandedKeys: any
	}) => void,
		onDragOver?: (options: {
		event: Event,
		node: any
	}) => void,
		onDragLeave?: (options: {
		event: Event,
		node: any
	}) => void,
		onDrop?: (
		options: {
		event: Event,
		node: any,
		dragNode: any,
		dragNodesKeys: any
	}
	) => void
	}

	declare interface TreeSelectTreeNodeProps {
		disabled?: boolean,
		key: string,
		value?: string,
		title?: React.ReactNode | string,
		isLeaf?: boolean
	}

	declare interface TreeSelectProps {
		style?: Object,
		value?: string | Array<any>,
		defaultValue?: string | Array<any>,
		multiple?: boolean,
		tags?: boolean,
		onSelect?: (value: any) => void,
		onChange?: (value: any, label: any) => void,
		allowClear?: boolean,
		onSearch?: (value: any) => void,
		placeholder?: string,
		searchPlaceholder?: string,
		dropdownStyle?: Object,
		dropdownMatchSelectWidth?: boolean,
		combobox?: boolean,
		size?: string,
		showSearch?: boolean,
		disabled?: boolean,
		treeDefaultExpandAll?: boolean,
		treeCheckable?: boolean,
		filterTreeNode?: (treeNode: any) => boolean,
		treeNodeFilterProp?: string,
		treeNodeLabelProp?: string,
		treeData?: TreeData,
		loadData?: (node: any) => void
	}

	declare interface UploadProps {
		name?: string,
		action: string,
		data?: Object,
		headers?: Object,
		showUploadList?: boolean,
		multiple?: boolean,
		accept?: string,
		beforeUpload?: Function,
		onChange?: (info: Object) => void,
		listType?: string,
		className?: string
	}

		declare export class Affix extends React$Component<AffixProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Alert extends React$Component<AlertProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Badge extends React$Component<BadgeProps, {
		
	}> {
		render(): JSX.Element
	}

	declare class ButtonGroup extends React$Component<ButtonGroupProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Button extends React$Component<ButtonProps, {
		
	}> {
		Group: typeof ButtonGroup;
		render(): JSX.Element
	}

	declare export class BreadcrumbItem extends React$Component<BreadcrumbItemProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Breadcrumb extends React$Component<BreadcrumbProps, {
		
	}> {
		Item: typeof BreadcrumbItem;
		render(): JSX.Element
	}

	declare export class Calendar extends React$Component<CalendarProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Carousel extends React$Component<CarouselProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Cascader extends React$Component<CascaderProps, {
		
	}> {
		render(): JSX.Element
	}

	declare class CheckboxGroup extends React$Component<CheckboxGroupProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Checkbox extends React$Component<CheckboxProps, {
		
	}> {
		Group: typeof CheckboxGroup;
		render(): JSX.Element
	}

	declare class CollapsePanel extends React$Component<{
		key: string,
		header: React.ReactNode | string
	}, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Collapse extends React$Component<CollapseProps, {
		
	}> {
		Panel: typeof CollapsePanel;
		render(): JSX.Element
	}

	declare class RangePicker extends React$Component<RangePickProps, {
		
	}> {
		render(): JSX.Element
	}

	declare class MonthPicker extends React$Component<RangePickProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class DatePicker extends React$Component<DatePickerProps<any>, {
		
	}> {
		RangePicker: typeof RangePicker;
		MonthPicker: typeof MonthPicker;
		render(): JSX.Element
	}

	declare class DropdownButton extends React$Component<{
		type?: string,
		onClick?: Function,
		trigger?: string,
		overlay: React.ReactNode
	}, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Dropdown extends React$Component<DropdownProps, {
		
	}> {
		Button: typeof DropdownButton;
		render(): JSX.Element
	}

	declare export class FormItem extends React$Component<FormItemProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class FormComponent extends React$Component<FormComponentProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Form extends React$Component<FormProps, {
		
	}> {
		Item: typeof FormItem;
		create(
		options?: {
		onFieldsChange?: (props: Object, fields: Array<any>) => void,
		mapPropsToFields?: (props: Object) => void
	}
	): ComponentDecorator;
		render(): JSX.Element
	}

	declare export class Icon extends React$Component<IconProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Input extends React$Component<InputProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class InputNumber extends React$Component<InputNumberProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Row extends React$Component<RowProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Col extends React$Component<ColProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class MenuItem extends React$Component<MenuItemProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class MenuSubMenu extends React$Component<MenuSubMenuProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class MenuItemGroup extends React$Component<MenuItemGroupProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Menu extends React$Component<MenuProps, {
		
	}> {
		Item: typeof MenuItem;
		SubMenu: typeof MenuSubMenu;
		ItemGroup: typeof MenuItemGroup;
		Divider: typeof undefined;
		render(): JSX.Element
	}

	declare export class Modal extends React$Component<ModalProps, {
		
	}> {
		info: ModalFunc;
		success: ModalFunc;
		error: ModalFunc;
		confirm: ModalFunc;
		render(): JSX.Element
	}

	declare export class Pagination extends React$Component<PaginationProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Popconfirm extends React$Component<PopconfirmProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Popover extends React$Component<PopoverProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Line extends React$Component<LineProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Circle extends React$Component<CircleProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class QueueAnim extends React$Component<QueueAnimProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class RadioGroup extends React$Component<RadioGroupProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Radio extends React$Component<RadioProps, {
		
	}> {
		Group: typeof RadioGroup;
		Button: typeof Button;
		render(): JSX.Element
	}

	declare export class SelectOption extends React$Component<SelectOptionProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class SelectOptGroup extends React$Component<SelectOptGroupProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Select extends React$Component<SelectProps, {
		
	}> {
		Option: typeof SelectOption;
		OptGroup: typeof SelectOptGroup;
		render(): JSX.Element
	}

	declare export class Slider extends React$Component<SliderProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Spin extends React$Component<SpinProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Step extends React$Component<StepProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Steps extends React$Component<StepsProps, {
		
	}> {
		Step: typeof Step;
		render(): JSX.Element
	}

	declare export class Switch extends React$Component<SwitchProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Table extends React$Component<TableProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class TabPane extends React$Component<TabPaneProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Tabs extends React$Component<TabsProps, {
		
	}> {
		TabPane: typeof TabPane;
		render(): JSX.Element
	}

	declare export class Tag extends React$Component<TagProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class TimePicker extends React$Component<TimePickerProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class TimeLineItem extends React$Component<TimeLineItemProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Timeline extends React$Component<TimelineProps, {
		
	}> {
		Item: typeof TimeLineItem;
		render(): JSX.Element
	}

	declare export class Tooltip extends React$Component<TooltipProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Transfer extends React$Component<TransferProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class TreeNode extends React$Component<TreeNodeProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class Tree extends React$Component<TreeProps, {
		
	}> {
		TreeNode: typeof TreeNode;
		render(): JSX.Element
	}

	declare export class TreeSelectTreeNode extends React$Component<TreeSelectTreeNodeProps, {
		
	}> {
		render(): JSX.Element
	}

	declare export class TreeSelect extends React$Component<TreeSelectProps, {
		
	}> {
		TreeNode: typeof TreeSelectTreeNode;
		render(): JSX.Element
	}

	declare export class Upload extends React$Component<UploadProps, {
		
	}> {
		render(): JSX.Element
	}

	
}

declare module 'antd/lib/Affix' {
					


}

declare module 'antd/lib/Button' {
					


}

declare module 'antd/lib/Alert' {
					


}

declare module 'antd/lib/Badge' {
					


}

declare module 'antd/lib/Breadcrumb' {
					


}

declare module 'antd/lib/Calendar' {
					


}

declare module 'antd/lib/Carousel' {
					


}

declare module 'antd/lib/Cascader' {
					


}

declare module 'antd/lib/Checkbox' {
					


}

declare module 'antd/lib/Collapse' {
					


}

declare module 'antd/lib/DatePicker' {
					


}

declare module 'antd/lib/Dropdown' {
					


}

declare module 'antd/lib/Icon' {
					


}

declare module 'antd/lib/Form' {
					


}

declare module 'antd/lib/Input' {
					


}

declare module 'antd/lib/InputNumber' {
					


}

declare module 'antd/lib/Row' {
					


}

declare module 'antd/lib/Col' {
					


}

declare module 'antd/lib/Menu' {
					


}

declare module 'antd/lib/message' {
					


}

declare module 'antd/lib/Modal' {
					


}

declare module 'antd/lib/notification' {
					


}

declare module 'antd/lib/Pagination' {
					


}

declare module 'antd/lib/Popconfirm' {
					


}

declare module 'antd/lib/Popover' {
					


}

declare module 'antd/lib/Progress' {
					


}

declare module 'antd/lib/QueueAnim' {
					


}

declare module 'antd/lib/Radio' {
					


}

declare module 'antd/lib/Select' {
					


}

declare module 'antd/lib/Slider' {
					


}

declare module 'antd/lib/Spin' {
					


}

declare module 'antd/lib/Steps' {
					


}

declare module 'antd/lib/Switch' {
					


}

declare module 'antd/lib/Table' {
					


}

declare module 'antd/lib/Tabs' {
					


}

declare module 'antd/lib/Tag' {
					


}

declare module 'antd/lib/TimePicker' {
					


}

declare module 'antd/lib/Timeline' {
					


}

declare module 'antd/lib/Tooltip' {
					


}

declare module 'antd/lib/Transfer' {
					


}

declare module 'antd/lib/Tree' {
					


}

declare module 'antd/lib/TreeSelect' {
					


}

declare module 'antd/lib/Upload' {
					


}