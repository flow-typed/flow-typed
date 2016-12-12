import type { LocaleData } from 'npm$namespace$ReactIntl'

declare module 'react-intl' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ReactIntl' {
		declare interface Locale {
		locale: string,
		fields?: {
		[key: string]: string
	},
		pluralRuleFunction?: (n: number, ord: boolean) => string
	}

	declare interface Messages {
		[key: string]: FormattedMessage.MessageDescriptor
	}

	declare interface IntlShape {
		
	}

	declare interface FormatConfig {
		locale?: string,
		formats?: any
	}

	declare interface InjectedIntlProps {
		formatDate?: (date: Date, options?: FormattedDate.PropsBase) => string,
		formatTime?: (date: Date, options?: FormattedTime.PropsBase) => string,
		formatRelative?: (value: number, options?: FormattedRelative.PropsBase) => string,
		formatNumber?: (value: number, options?: FormattedNumber.PropsBase) => string,
		formatPlural?: (value: number, options?: FormattedPlural.PropsBase) => string,
		formatMessage?: (
		messageDescriptor: FormattedMessage.MessageDescriptor, values?: Object
	) => string,
		formatHTMLMessage?: (
		messageDescriptor: FormattedMessage.MessageDescriptor, values?: Object
	) => string
	}

	declare function injectIntl<T>(clazz: T): T

	declare function addLocaleData(data: Locale[] | Locale): void

	declare function hasLocaleData(localeName: string): boolean

	declare function defineMessages<T>(messages: T): T

	declare class FormattedDate extends React$Component<FormattedDate.Props, any> {
		
	}

	declare class FormattedTime extends React$Component<FormattedTime.Props, any> {
		
	}

	declare class FormattedRelative extends React$Component<FormattedRelative.Props, any> {
		
	}

	declare class FormattedMessage extends React$Component<FormattedMessage.Props, any> {
		
	}

	declare class FormattedHTMLMessage extends React$Component<FormattedMessage.Props, any> {
		
	}

	declare class FormattedNumber extends React$Component<FormattedNumber.Props, any> {
		
	}

	declare class FormattedPlural extends React$Component<FormattedPlural.Props, any> {
		
	}

	declare class IntlProvider extends React$Component<IntlProvider.Props, any> {
		
	}

	declare class LocaleData extends Array<Locale> {
		
	}

	
}

declare module 'IntlComponent' {
		declare interface DateTimeFormatProps {
		localeMatcher?: string,
		formatMatcher?: string,
		timeZone?: string,
		hour12?: boolean,
		weekday?: string,
		era?: string,
		year?: string,
		month?: string,
		day?: string,
		hour?: string,
		minute?: string,
		second?: string,
		timeZoneName?: string
	}

			
}

declare module 'FormattedDate' {
		declare export interface PropsBase {
		format?: string
	}

	declare export interface Props {
		value: Date
	}

			
}

declare module 'FormattedTime' {
		declare export interface PropsBase {
		format?: string
	}

	declare export interface Props {
		value: Date
	}

			
}

declare module 'FormattedRelative' {
		declare export interface PropsBase {
		units?: string,
		style?: string,
		format?: string,
		updateInterval?: number,
		initialNow?: any
	}

	declare export interface Props {
		value: number
	}

			
}

declare module 'FormattedMessage' {
		declare export interface MessageDescriptor {
		id: string,
		description?: string,
		defaultMessage?: string
	}

	declare export interface Props {
		values?: Object,
		tagName?: string
	}

			
}

declare module 'FormattedNumber' {
		declare export interface PropsBase {
		format?: string,
		localeMatcher?: string,
		style?: string,
		currency?: string,
		currencyDisplay?: string,
		useGrouping?: boolean,
		minimumIntegerDigits?: number,
		minimumFractionDigits?: number,
		maximumFractionDigits?: number,
		minimumSignificantDigits?: number,
		maximumSignificantDigits?: number
	}

	declare export interface Props {
		value: number
	}

			
}

declare module 'FormattedPlural' {
		declare export interface PropsBase {
		style?: string,
		other?: any,
		zero?: any,
		one?: any,
		two?: any,
		few?: any,
		many?: any
	}

	declare export interface Props {
		value: number
	}

			
}

declare module 'IntlProvider' {
		declare export interface Props {
		locale?: string,
		formats?: Object,
		messages?: Object,
		defaultLocale?: string,
		defaultFormats?: Object
	}

			
}

declare module 'react-intl/locale-data/af' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/agq' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ak' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/am' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ar' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/as' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/asa' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ast' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/az' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/bas' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/be' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/bem' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/bez' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/bg' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/bh' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/bm' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/bn' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/bo' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/br' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/brx' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/bs' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ca' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ce' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/cgg' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/chr' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ckb' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/cs' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/cu' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/cy' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/da' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/dav' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/de' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/dje' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/dsb' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/dua' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/dv' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/dyo' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/dz' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ebu' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ee' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/el' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/en' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/eo' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/es' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/et' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/eu' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ewo' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/fa' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ff' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/fi' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/fil' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/fo' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/fr' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/fur' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/fy' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ga' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/gd' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/gl' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/gsw' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/gu' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/guw' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/guz' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/gv' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ha' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/haw' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/he' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/hi' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/hr' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/hsb' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/hu' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/hy' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/id' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ig' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ii' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/in' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/is' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/it' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/iu' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/iw' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ja' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/jbo' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/jgo' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ji' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/jmc' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/jv' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/jw' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ka' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/kab' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/kaj' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/kam' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/kcg' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/kde' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/kea' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/khq' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ki' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/kk' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/kkj' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/kl' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/kln' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/km' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/kn' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ko' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/kok' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ks' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ksb' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ksf' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ksh' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ku' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/kw' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ky' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/lag' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/lb' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/lg' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/lkt' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ln' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/lo' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/lrc' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/lt' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/lu' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/luo' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/luy' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/lv' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/mas' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/mer' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/mfe' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/mg' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/mgh' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/mgo' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/mk' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ml' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/mn' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/mo' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/mr' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ms' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/mt' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/mua' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/my' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/mzn' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/nah' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/naq' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/nb' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/nd' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ne' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/nl' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/nmg' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/nn' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/nnh' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/no' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/nqo' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/nr' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/nso' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/nus' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ny' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/nyn' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/om' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/or' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/os' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/pa' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/pap' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/pl' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/prg' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ps' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/pt' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/qu' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/rm' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/rn' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ro' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/rof' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ru' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/rw' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/rwk' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/sah' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/saq' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/sbp' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/sdh' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/se' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/seh' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ses' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/sg' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/sh' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/shi' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/si' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/sk' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/sl' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/sma' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/smi' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/smj' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/smn' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/sms' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/sn' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/so' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/sq' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/sr' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ss' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ssy' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/st' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/sv' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/sw' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/syr' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ta' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/te' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/teo' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/th' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ti' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/tig' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/tk' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/tl' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/tn' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/to' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/tr' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ts' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/twq' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/tzm' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ug' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/uk' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ur' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/uz' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/vai' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/ve' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/vi' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/vo' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/vun' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/wa' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/wae' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/wo' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/xh' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/xog' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/yav' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/yi' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/yo' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/zgh' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/zh' {
					declare module.exports: LocaleData


}

declare module 'react-intl/locale-data/zu' {
					declare module.exports: LocaleData


}