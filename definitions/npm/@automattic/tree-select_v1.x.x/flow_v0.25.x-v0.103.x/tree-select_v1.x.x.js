declare module '@automattic/tree-select' {
	/**
	 * Generics
	 *
	 * S: State - the application state
	 * D: Dependents - the dependent values returned by the DependentsSelector
	 * R: Result of Computation
	 * O: Other parameters that the computation and resulting CachedSelector are provided
	 */

	/**
	 * DependentsSelector is a function that accepts a State (S) object and
	 * returns an array of values to be used in the Computation as well
	 * as the values used by the caching/memoization layer.
	 */
	declare type DependentsSelector<S, O, D> = (S, ...O) => D;

	/**
	 * Function that computes a value based on the dependent values provided
	 * by the DependentsSelector. It receives the values returned by
	 * DependentsSelector as its first argument, the rest of the arguments
	 * given to the computation are the same as the CachedSelector retured
	 * by treeSelect.
	 */
	declare type Computation<D, R, O> = (D, ...O) => R;

	/**
	 * The cached selector is the returned function from treeSelect. It should
	 * have the same signatrue as Computation except it accepts the State as its
	 * first argument instead of the result of DependentsSelector. The rest of
	 * the other (O) arguments are the same provided to the Computation.
	 */
	declare type CachedSelector<S, R, O> = (S, ...O) => R;

	/**
	 * Configuration options for treeSelect. Currently a single key
	 * of getCacheKey that allows the implementor to calculate the cache
	 * key for this use of treeSelect.
	 */
	declare type Options<O> = {
		/**
		 * getCachKey is given the dependent arguments and expects a string to
		 * use to identify the memoized return value
		 */
		getCacheKey: (...O) => string,
	};

	/**
	 * Accepts two functions:
	 * 1. (S) => D - Accepts state (S) and returns dependents (D) which is a list
	 *      of values that 1) are used to memoize calling the Computation and 2)
	 *      are provided as the first argument to the Computation
	 * 2. (D, ...O) => R - Accepts the dependents (D) which is the result of the
	 *      DependentsSelector<S, D> as well as any number of other (O) parameters.
	 *      These same parameters will be used in the returned CachedSelector<S, R, O>
	 *
	 * Returns function of type:
	 *
	 * (S, ...O) => R
   *
   * The Computation<> is only executed if the dependencies form the first function change
   * otherwise the memoized results are returned.
	 *
	 * A function that can be used as a selector accepting application state (S) as its
	 * first argument. It is an identical function signature to the Computation<D, R, O>
	 * except instead of accepting the state (S) and other (O) arguments it accepts the
	 * dependents (D) from DependentsSelector<S, D> as its first argument and the other (O)
	 * as the rest.
   *
   * Example:
   *
   *   const mySelector: (State, SecondArgType) => number = treeSelect(
   *     (state) => [state.firstDependency, state.secondDependecy],
   *     ([firstDepedency, secondDependency], secondArg) => {
   *        // Do my CPU intensive calculation
   *        return result;
   *     }
   *   );
	 */
	declare export default function treeSelect<S, D: Array<*>, R, O: Array<*>>(
		DependentsSelector<S, O, D>,
		Computation<D, R, O>,
		Options<O> | void
	): CachedSelector<S, R, O>;
}

