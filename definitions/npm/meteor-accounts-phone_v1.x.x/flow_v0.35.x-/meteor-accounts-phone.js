

declare module 'meteor-accounts-phone' {
					
}

declare module 'npm$namespace$SMS' {
			declare function send(options: Object, callback?: Function): void

		
}

declare module 'npm$namespace$Meteor' {
			declare function loginWithPhoneAndPassword(selector: Object | String, password: String, callback?: Function): void

		
}

declare module 'Meteor' {
			declare function loginWithPhoneAndPassword(selector: Object | String, password: String, callback?: Function): void

		
}

declare module 'npm$namespace$Accounts' {
			declare function createUserWithPhone(options: Object, callback?: Function): void

	declare function requestPhoneVerification(phone: string, callback?: Function): void

	declare function verifyPhone(
		phone: string, code: string, newPassword?: string | Function, callback?: Function
	): void

	declare function isPhoneVerified(): boolean

	declare function onPhoneVerification(func: Function): void

		
}

declare module 'Accounts' {
			declare function createUserWithPhone(options: Object, callback?: Function): void

	declare function requestPhoneVerification(phone: string, callback?: Function): void

	declare function verifyPhone(
		phone: string, code: string, newPassword?: string | Function, callback?: Function
	): void

	declare function isPhoneVerified(): boolean

	declare function onPhoneVerification(func: Function): void

		
}