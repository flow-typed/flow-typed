

declare module 'knockstrap' {
		declare interface KnockoutUtils {
		uniqueId(prefix: string): string,
		unwrapProperties(wrappedProperies: any): any
	}

	declare interface KnockoutTemplateSources {
		stringTemplate: {
		prototype: KnockstrapStringTemplate,
		new (template: string): KnockstrapStringTemplate
	}
	}

	declare interface KnockstrapStringTemplate {
		templateName: string
	}

	declare interface KnockoutStatic {
		stringTemplateEngine: {
		prototype: KnockstrapStringTemplateEngine,
		new (): KnockstrapStringTemplateEngine,
		instance: KnockstrapStringTemplateEngine
	}
	}

	declare interface KnockstrapStringTemplateEngine {
		allowTemplateRewriting: boolean,
		makeTemplateSource(template: string): KnockstrapStringTemplate,
		addTemplate(name: string, template: any): void,
		removeTemplate(name: string): void,
		isTemplateExist(name: string): boolean,
		getTemplate(name: string): any
	}

	declare interface KnockoutBindingHandlers {
		alert: AlertKnockoutBindingHandler,
		carousel: CarouselKnockoutBindingHandler,
		checkbox: KnockoutBindingHandler,
		modal: ModalKnockoutBindingHandler,
		popover: PopoverKnockoutBindingHandler,
		progress: ProgressKnockoutBindingHandler,
		radio: KnockoutBindingHandler,
		toggle: KnockoutBindingHandler,
		tooltip: KnockoutBindingHandler
	}

	declare interface KnockoutControlsDescendantBindings {
		controlsDescendantBindings: boolean
	}

	declare interface AlertKnockoutBindingHandler {
		init(
		element: any, valueAccessor: () => any, allBindingsAccessor: KnockoutAllBindingsAccessor, viewModel: any, bindingContext: KnockoutBindingContext
	): KnockoutControlsDescendantBindings
	}

	declare interface CarouselKnockoutBindingHandler {
		init(
		element: any, valueAccessor: () => any, allBindingsAccessor: KnockoutAllBindingsAccessor, viewModel: any, bindingContext: KnockoutBindingContext
	): KnockoutControlsDescendantBindings,
		defaults: KnockstrapCarouselDefaults
	}

	declare interface KnockstrapCarouselDefaults {
		css: string,
		controlsTemplate: KnockstrapCarouselDefaultsControlsTemplate,
		indicatorsTemplate: KnockstrapCarouselDefaultsIndicatorsTemplate,
		itemTemplate: KnockstrapCarouselDefaultsItemTemplate
	}

	declare interface KnockstrapDefaultsTemplateBase {
		name: string,
		templateEngine: KnockstrapStringTemplateEngine
	}

	declare interface KnockstrapCarouselDefaultsControlsTemplate {
		dataConverter(value: any): KnockstrapCarouselDefaultsIdDataConverted
	}

	declare interface KnockstrapCarouselDefaultsIdDataConverted {
		id: KnockoutComputed<string>
	}

	declare interface KnockstrapCarouselDefaultsIndicatorsTemplate {
		dataConverter(value: any): KnockstrapCarouselDefaultsIdItemsDataConverted
	}

	declare interface KnockstrapCarouselDefaultsIdItemsDataConverted {
		items: any
	}

	declare interface KnockstrapCarouselDefaultsItemTemplate {
		converter(value: any): any
	}

	declare interface ModalKnockoutBindingHandler {
		init(
		element: any, valueAccessor: () => any, allBindingsAccessor: KnockoutAllBindingsAccessor, viewModel: any, bindingContext: KnockoutBindingContext
	): KnockoutControlsDescendantBindings,
		defaults: KnockstrapModalDefaults
	}

	declare interface KnockstrapModalDefaults {
		css: string,
		attributes: KnockstrapModalDefaultsAttributes,
		headerTemplate: KnockstrapDefaultsTemplateBase,
		bodyTemplate: KnockstrapDefaultsTemplateBase,
		footerTemplate: KnockstrapModalDefaultsFooterTemplate
	}

	declare interface KnockstrapModalDefaultsAttributes {
		role: string
	}

	declare interface KnockstrapModalDefaultsFooterTemplate {
		data: KnockstrapModalDefaultsFooterData
	}

	declare interface KnockstrapModalDefaultsFooterData {
		closeLabel: string,
		primaryLabel: string
	}

	declare interface PopoverKnockoutBindingHandler {
		init(
		element: any, valueAccessor: () => any, allBindingsAccessor: KnockoutAllBindingsAccessor, viewModel: any, bindingContext: KnockoutBindingContext
	): KnockoutControlsDescendantBindings
	}

	declare interface ProgressKnockoutBindingHandler {
		init(
		element: any, valueAccessor: () => any, allBindingsAccessor: KnockoutAllBindingsAccessor, viewModel: any, bindingContext: KnockoutBindingContext
	): KnockoutControlsDescendantBindings,
		defaults: KnockstrapProgressDefaults
	}

	declare interface KnockstrapProgressDefaults {
		css: string,
		text: string,
		textHidden: boolean,
		striped: boolean,
		type: string,
		animated: boolean
	}

			
}