

declare module 'Contacts' {
	declare type ContactFieldType = "addresses" | "birthday" | "categories" | "country" | "department" | "displayName" | "emails" | "familyName" | "formatted" | "givenName" | "honorificPrefix" | "honorificSuffix" | "id" | "ims" | "locality" | "middleName" | "name" | "nickname" | "note" | "organizations" | "phoneNumbers" | "photos" | "postalCode" | "region" | "streetAddress" | "title" | "urls";

	declare interface Navigator {
		contacts: Contacts
	}

	declare interface Contacts {
		create(properties?: ContactProperties): Contact,
		find(
		fields: string[], onSuccess: (contacts: Contact[]) => void, onError?: (error: ContactError) => void, options?: ContactFindOptions
	): void,
		pickContact(
		onSuccess: (contact: Contact) => void, onError: (error: ContactError) => void
	): void,
		fieldType: {
		addresses: "addresses",
		birthday: "birthday",
		categories: "categories",
		country: "country",
		department: "department",
		displayName: "displayName",
		emails: "emails",
		familyName: "familyName",
		formatted: "formatted",
		givenName: "givenName",
		honorificPrefix: "honorificPrefix",
		honorificSuffix: "honorificSuffix",
		id: "id",
		ims: "ims",
		locality: "locality",
		middleName: "middleName",
		name: "name",
		nickname: "nickname",
		note: "note",
		organizations: "organizations",
		phoneNumbers: "phoneNumbers",
		photos: "photos",
		postalCode: "postalCode",
		region: "region",
		streetAddress: "streetAddress",
		title: "title",
		urls: "urls"
	}
	}

	declare interface ContactProperties {
		id?: string,
		displayName?: string,
		name?: ContactName,
		nickname?: string,
		phoneNumbers?: ContactField[],
		emails?: ContactField[],
		addresses?: ContactAddress[],
		ims?: ContactField[],
		organizations?: ContactOrganization[],
		birthday?: Date,
		note?: string,
		photos?: ContactField[],
		categories?: ContactField[],
		urls?: ContactField[]
	}

	declare interface Contact {
		clone(): Contact,
		remove(onSuccess: () => void, onError: (error: Error) => void): void,
		save(onSuccess: (contact: Contact) => void, onError: (error: Error) => void): void
	}

	declare interface ContactError {
		code: number,
		message: string
	}

	declare interface ContactName {
		formatted?: string,
		familyName?: string,
		givenName?: string,
		middleName?: string,
		honorificPrefix?: string,
		honorificSuffix?: string
	}

	declare interface ContactField {
		type: string,
		value: string,
		pref: boolean
	}

	declare interface ContactAddress {
		pref?: boolean,
		type?: string,
		formatted?: string,
		streetAddress?: string,
		locality?: string,
		region?: string,
		postalCode?: string,
		country?: string
	}

	declare interface ContactOrganization {
		pref?: boolean,
		type?: string,
		name?: string,
		department?: string,
		title?: string
	}

	declare interface ContactFindOptions {
		filter?: string,
		multiple?: boolean,
		desiredFields?: ContactFieldType[]
	}

			
}