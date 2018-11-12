// @flow
import { describe, it } from 'flow-typed-test'
import lozad from 'lozad'

let el = document.querySelector('.class')
let els = document.querySelectorAll('.class')
let observer

describe('lozad', () => {
	it('should create an instance without arguments', () => {
		observer = lozad()
		observer.observe()
	})

	it('should create an instance with string selector', () => {
		observer = lozad('.class')
		observer.observe()
	})

	it('should create an instance with NodeList', () => {
		observer = lozad(els)
		observer.observe()
	})

	it('should not create an instance with invalid selector', () => {
		// $ExpectError
		observer = lozad(null)
		// $ExpectError
		observer = lozad(3)
		// $ExpectError
		observer = lozad(false)
		// $ExpectError
		observer = lozad({})

		if (el) {
			observer = lozad(el)
		}
		else {
			// $ExpectError
			observer = lozad(el)
		}
	})

	it('should create an instance with custom selector and options', () => {
		observer = lozad('.class', {
			rootMargin: '10px 10px 10px 10px',
		})

		observer = lozad('.class', {
			treshold: 0.1,
		})

		observer = lozad('.class', {
			rootMargin: '10px 10px 10px 10px',
			treshold: 0.1,
		})
	})

	it('should create an instance with custom selector and callbacks', () => {
		observer = lozad('.class', {
			load: (el) => {},
		})
		
		observer = lozad('.class', {
			loaded: (el) => {},
		})
	})
})

describe('lozad.triggerLoad', () => {
	it('should work only with valid element', () => {

		if (el) {
			observer.triggerLoad(el)
		} else {
			// $ExpectError
			observer.triggerLoad(el)
		}
	})
})

describe('lozad.observer', () => {
	it('should be an instance of IntersectionObserver', () => {
		let instance = lozad()

		;(instance.observer: IntersectionObserver)
	})

	it('should have working unobserve with valid element', () => {

		if (el) {
			observer.observer.unobserve(el)
		}
		else {
			// $ExpectError
			observer.observer.unobserve(el)
		}
	})
})