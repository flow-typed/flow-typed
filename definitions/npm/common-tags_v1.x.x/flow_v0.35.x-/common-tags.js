

declare module 'common-tags' {
	declare type TemplateTag = (literals: string[], ...placeholders: any[]) => string;

	declare type TemplateTransformer = {
		onSubstitution?: (substitution: string, resultSoFar: string) => string,
		onEndResult?: (endResult: string) => string
	};

				
}