

declare module 'rx.joinpatterns' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Rx' {
		declare interface Pattern1<T1> {
		and<T2>(other: Observable<T2>): Pattern2<T1, T2>,
		thenDo<TR>(selector: (item1: T1) => TR): Plan<TR>
	}

	declare interface Pattern2<T1, T2> {
		and<T3>(other: Observable<T3>): Pattern3<T1, T2, T3>,
		thenDo<TR>(selector: (item1: T1, item2: T2) => TR): Plan<TR>
	}

	declare interface Pattern3<T1, T2, T3> {
		and<T4>(other: Observable<T4>): Pattern4<T1, T2, T3, T4>,
		thenDo<TR>(selector: (item1: T1, item2: T2, item3: T3) => TR): Plan<TR>
	}

	declare interface Pattern4<T1, T2, T3, T4> {
		and<T5>(other: Observable<T5>): Pattern5<T1, T2, T3, T4, T5>,
		thenDo<TR>(selector: (item1: T1, item2: T2, item3: T3, item4: T4) => TR): Plan<TR>
	}

	declare interface Pattern5<T1, T2, T3, T4, T5> {
		and<T6>(other: Observable<T6>): Pattern6<T1, T2, T3, T4, T5, T6>,
		thenDo<TR>(
		selector: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5) => TR
	): Plan<TR>
	}

	declare interface Pattern6<T1, T2, T3, T4, T5, T6> {
		and<T7>(other: Observable<T7>): Pattern7<T1, T2, T3, T4, T5, T6, T7>,
		thenDo<TR>(
		selector: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6) => TR
	): Plan<TR>
	}

	declare interface Pattern7<T1, T2, T3, T4, T5, T6, T7> {
		and<T8>(other: Observable<T8>): Pattern8<T1, T2, T3, T4, T5, T6, T7, T8>,
		thenDo<TR>(
		selector: (
		item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6, item7: T7
	) => TR
	): Plan<TR>
	}

	declare interface Pattern8<T1, T2, T3, T4, T5, T6, T7, T8> {
		and<T9>(other: Observable<T9>): Pattern9<T1, T2, T3, T4, T5, T6, T7, T8, T9>,
		thenDo<TR>(
		selector: (
		item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6, item7: T7, item8: T8
	) => TR
	): Plan<TR>
	}

	declare interface Pattern9<T1, T2, T3, T4, T5, T6, T7, T8, T9> {
		thenDo<TR>(
		selector: (
		item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6, item7: T7, item8: T8, item9: T9
	) => TR
	): Plan<TR>
	}

	declare interface Plan<T> {
		
	}

	declare interface Observable<T> {
		and<T2>(other: Observable<T2>): Pattern2<T, T2>,
		thenDo<TR>(selector: (item1: T) => TR): Plan<TR>
	}

	declare interface ObservableStatic {
		when<TR>(plan: Plan<TR>): Observable<TR>
	}

			
}