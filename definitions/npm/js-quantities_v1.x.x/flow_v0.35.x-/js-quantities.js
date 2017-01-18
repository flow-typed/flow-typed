/**
 * Flowtype definitions for js-quantities
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare var Qty: QtyModule$QtyStatic;
declare interface QtyModule$QtyStatic {
    (value: string): QtyModule$Qty,
    (value: number): QtyModule$Qty,
    (value: number, unit: string): QtyModule$Qty,
    (value: QtyModule$Qty): QtyModule$Qty
}

declare interface QtyModule$Qty {
    version: string,
        scalar: number,
        baseScalar: number,
        parse(value: string): QtyModule$Qty,
        swiftConverter(srcUnits: string, dstUnits: string): (value: number) => number,
        getkinds(): string[],
        getUnits(kind: string): string[],
        getAliases(unitName: string): string[],
        formatter(scalar: number, units: string): string,
        toFloat(): number,
        isUnitless(): boolean,
        isCompatible(other: string | QtyModule$Qty): boolean,
        isInverse(other: string | QtyModule$Qty): boolean,
        kind(): string,
        isBase(): boolean,
        toBase(): QtyModule$Qty,
        units(): string,
        eq(other: QtyModule$Qty): boolean,
        lt(other: QtyModule$Qty): boolean,
        lte(other: QtyModule$Qty): boolean,
        gt(other: QtyModule$Qty): boolean,
        gte(other: QtyModule$Qty): boolean,
        toPrec(precQuantity: QtyModule$Qty | string | number): QtyModule$Qty,
        toString(
            targetUnitsOrMaxDecimalsOrPrec?: number | string | QtyModule$Qty,
            maxDecimals?: number): string,
        format(
            targetUnits?: string,
            formatter?: (scalar: number, units: string) => string): string,
        compareTo(other: QtyModule$Qty | string): number,
        same(other: QtyModule$Qty): boolean,
        inverse(): QtyModule$Qty,
        isDegrees(): boolean,
        isTemperature(): boolean,
        to(other: string | QtyModule$Qty): QtyModule$Qty,
        add(other: string | QtyModule$Qty): QtyModule$Qty,
        sub(other: string | QtyModule$Qty): QtyModule$Qty,
        mul(other: number | string | QtyModule$Qty): QtyModule$Qty,
        div(other: number | string | QtyModule$Qty): QtyModule$Qty
}