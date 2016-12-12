

declare module 'chosen.jquery' {
		declare interface JQuery {
		chosen(): JQuery,
		chosen(options: Chosen.Options | "destroy"): JQuery,
		on(
		events: "change", handler: (eventObject: JQueryEventObject, args: Chosen.SelectedData) => any
	): JQuery,
		on(
		events: Chosen.OnEvent, handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		trigger(eventType: Chosen.TriggerEvent): JQuery
	}

			
}

declare module 'npm$namespace$Chosen' {
	declare type OnEvent = "chosen:ready" | "chosen:maxselected" | "chosen:showing_dropdown" | "chosen:hiding_dropdown" | "chosen:no_results";

	declare type TriggerEvent = "chosen:updated" | "chosen:activate" | "chosen:open" | "chosen:close";

	declare interface Options {
		allow_single_deselect?: boolean,
		case_sensitive_search?: boolean,
		disable_search?: boolean,
		disable_search_threshold?: number,
		enable_split_word_search?: boolean,
		inherit_select_classes?: boolean,
		max_selected_options?: number,
		no_results_text?: string,
		placeholder_text_multiple?: string,
		placeholder_text_single?: string,
		search_contains?: boolean,
		single_backstroke_delete?: boolean,
		width?: string,
		display_disabled_options?: boolean,
		display_selected_options?: boolean,
		include_group_label_in_selected?: boolean,
		max_shown_results?: number
	}

	declare interface SelectedData {
		selected: string,
		deselected: string
	}

			
}