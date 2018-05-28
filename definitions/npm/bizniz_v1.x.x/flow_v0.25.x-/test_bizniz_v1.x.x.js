// @flow
import { describe, it } from 'flow-typed-test';
import bizniz from "bizniz";

describe('bizniz', () => {
  it('#addWeekDays', () => {
    const date: Date = bizniz.addWeekDays(new Date(0), 1)
  });
  it('#subtractWeekDays', () => {
    const date: Date = bizniz.addWeekDays(new Date(0), 1)
  });
  it('#isWeekDay', () => {
    const bool: boolean = bizniz.isWeekDay(new Date(0))
  });
  it('#isWeekendDay', () => {
    const bool: boolean = bizniz.isWeekendDay(new Date(0))
  });
  it('#weekDaysBetween', () => {
    const num: number = bizniz.weekDaysBetween(new Date(0), new Date(0))
  });
  it('#weekendDaysBetween', () => {
    const num: number = bizniz.weekendDaysBetween(new Date(0), new Date(0))
  });
  it('#dateIsBefore', () => {
    const bool: boolean = bizniz.dateIsBefore(new Date(0), new Date(0))
  });
  it('#daysBetween', () => {
    const num: number = bizniz.daysBetween(new Date(0), new Date(0))
  });
  it('throw errors', () => {
    // $ExpectError
    const str: string = bizniz.weekDaysBetween('', 1);
    const nr: number = bizniz.addWeekDays(new Date(0), 1);
  });
})
