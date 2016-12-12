

declare module 'accounting' {
		declare interface IAccountingCurrencyFormat {
		pos: string,
		neg?: string,
		zero?: string
	}

	declare interface IAccountingCurrencySettings<TFormat> {
		symbol?: string,
		format?: TFormat,
		decimal?: string,
		thousand?: string,
		precision?: number
	}

	declare interface IAccountingNumberSettings {
		precision?: number,
		thousand?: string,
		decimal?: string
	}

	declare interface IAccountingSettings {
		currency: IAccountingCurrencySettings<any>,
		number: IAccountingNumberSettings
	}

	declare interface IAccountingStatic {
		formatMoney(
		number: number, symbol?: string, precision?: number, thousand?: string, decimal?: string, format?: string
	): string,
		formatMoney(number: number, options: IAccountingCurrencySettings<string>): string,
		formatMoney(
		number: number, options: IAccountingCurrencySettings<IAccountingCurrencyFormat>
	): string,
		formatMoney(
		numbers: number[], symbol?: string, precision?: number, thousand?: string, decimal?: string, format?: string
	): string[],
		formatMoney(numbers: number[], options: IAccountingCurrencySettings<string>): string[],
		formatMoney(
		numbers: number[], options: IAccountingCurrencySettings<IAccountingCurrencyFormat>
	): string[],
		formatMoney(
		numbers: any[], symbol?: string, precision?: number, thousand?: string, decimal?: string, format?: string
	): any[],
		formatMoney(numbers: any[], options: IAccountingCurrencySettings<string>): any[],
		formatMoney(
		numbers: any[], options: IAccountingCurrencySettings<IAccountingCurrencyFormat>
	): any[],
		formatColumn(
		numbers: number[], symbol?: string, precision?: number, thousand?: string, decimal?: string, format?: string
	): string[],
		formatColumn(numbers: number[], options: IAccountingCurrencySettings<string>): string[],
		formatColumn(
		numbers: number[], options: IAccountingCurrencySettings<IAccountingCurrencyFormat>
	): string[],
		formatColumn(
		numbers: number[][], symbol?: string, precision?: number, thousand?: string, decimal?: string, format?: string
	): string[][],
		formatColumn(numbers: number[][], options: IAccountingCurrencySettings<string>): string[][],
		formatColumn(
		numbers: number[][], options: IAccountingCurrencySettings<IAccountingCurrencyFormat>
	): string[][],
		formatNumber(
		number: number, precision?: number, thousand?: string, decimal?: string
	): string,
		formatNumber(number: number, options: IAccountingNumberSettings): string,
		formatNumber(
		number: number[], precision?: number, thousand?: string, decimal?: string
	): string[],
		formatNumber(number: number[], options: IAccountingNumberSettings): string[],
		formatNumber(number: any[], precision?: number, thousand?: string, decimal?: string): any[],
		formatNumber(number: any[], options: IAccountingNumberSettings): any[],
		toFixed(number: number, precision?: number): string,
		unformat(string: string, decimal?: string): number,
		settings: IAccountingSettings
	}

			declare module.exports: IAccountingStatic


}