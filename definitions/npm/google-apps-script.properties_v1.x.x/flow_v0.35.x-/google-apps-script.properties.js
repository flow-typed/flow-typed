

declare module 'google-apps-script.properties' {
					
}

declare module 'Properties' {
		declare export interface Properties {
		deleteAllProperties(): Properties,
		deleteProperty(key: string): Properties,
		getKeys(): String[],
		getProperties(): Object,
		getProperty(key: string): string,
		setProperties(properties: Object): Properties,
		setProperties(properties: Object, deleteAllOthers: boolean): Properties,
		setProperty(key: string, value: string): Properties
	}

	declare export interface PropertiesService {
		getDocumentProperties(): Properties,
		getScriptProperties(): Properties,
		getUserProperties(): Properties
	}

	declare export interface ScriptProperties {
		deleteAllProperties(): ScriptProperties,
		deleteProperty(key: string): ScriptProperties,
		getKeys(): String[],
		getProperties(): Object,
		getProperty(key: string): string,
		setProperties(properties: Object): ScriptProperties,
		setProperties(properties: Object, deleteAllOthers: boolean): ScriptProperties,
		setProperty(key: string, value: string): ScriptProperties
	}

	declare export interface UserProperties {
		deleteAllProperties(): UserProperties,
		deleteProperty(key: string): UserProperties,
		getKeys(): String[],
		getProperties(): Object,
		getProperty(key: string): string,
		setProperties(properties: Object): UserProperties,
		setProperties(properties: Object, deleteAllOthers: boolean): UserProperties,
		setProperty(key: string, value: string): UserProperties
	}

			
}