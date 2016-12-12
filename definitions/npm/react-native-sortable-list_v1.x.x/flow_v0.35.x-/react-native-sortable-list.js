

declare module 'react-native-sortable-list' {
		declare export interface RowProps {
		
	}

			


}

declare module 'npm$namespace$___SortableList' {
	declare type DataKey = string | number;

	declare export type DataValue = any;

	declare type DataByNumber = {
		[key: number]: DataValue
	};

	declare type DataByString = {
		[key: string]: DataValue
	};

	declare export type Data = DataByNumber | DataByString;

	declare export type SortableList = SortableListStatic;

	declare export interface RowProps {
		active: boolean,
		data: DataValue,
		key?: DataKey,
		index?: number,
		disabled?: boolean
	}

	declare interface SortableListProps {
		data: Data,
		order?: DataKey[],
		style?: React.ViewStyle,
		contentContainerStyle?: React.ViewStyle,
		sortingEnabled?: boolean,
		scrollEnabled?: boolean,
		renderRow: (props: RowProps) => JSX.Element,
		onChangeOrder?: (nextOrder: DataKey[]) => void,
		onActivateRow?: (key: DataKey) => void,
		onReleaseRow?: (key: DataKey) => void
	}

	declare export interface SortableListStatic {
		
	}

			
}