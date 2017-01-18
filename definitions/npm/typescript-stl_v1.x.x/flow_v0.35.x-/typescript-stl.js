/**
 * Flowtype definitions for typescript-stl
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'typescript-stl' {
    declare module.exports: typeof std
}

/**
 * Type definition of {@link Stack} and it's the original name used in C++.
 */
declare type std$stack<T>= std$Stack<T>;


/**
 * Type definition of {@link Queue} and it's the original name used in C++.
 */
declare type std$queue<T>= std$Queue<T>;


/**
 * Type definition of {@link PriorityQueue} and it's the original name used in C++.
 */
declare type std$priority_queue<T>= std$PriorityQueue<T>;

declare var stack: typeof Stack;

declare var queue: typeof Queue;

declare var priority_queue: typeof PriorityQueue;

declare type std$exception = std$Exception;

declare type std$logic_error = std$LogicError;

declare type std$domain_error = std$DomainError;

declare type std$invalid_argument = std$InvalidArgument;

declare type std$length_error = std$LengthError;

declare type std$out_of_range = std$OutOfRange;

declare type std$runtime_error = std$RuntimeError;

declare type std$overflow_error = std$OverflowError;

declare type std$underflow_error = std$UnderflowError;

declare type std$range_error = std$RangeError;

declare type std$system_error = std$SystemError;

declare type std$error_category = std$ErrorCategory;

declare type std$error_condition = std$ErrorCondition;

declare type std$error_code = std$ErrorCode;

declare var exception: typeof Exception;

declare var logic_error: typeof LogicError;

declare var domain_error: typeof DomainError;

declare var invalid_argument: typeof InvalidArgument;

declare var length_error: typeof LengthError;

declare var out_of_range: typeof OutOfRange;

declare var runtime_error: typeof RuntimeError;

declare var overflow_error: typeof OverflowError;

declare var underflow_error: typeof UnderflowError;

declare var range_error: typeof RangeError;

declare var system_error: typeof SystemError;

declare var error_category: typeof ErrorCategory;

declare var error_condition: typeof ErrorCondition;

declare var error_code: typeof ErrorCode;