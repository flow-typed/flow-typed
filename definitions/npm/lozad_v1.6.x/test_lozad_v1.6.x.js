// @flow
import lozad from 'lozad'

let el = document.querySelector('.class')
let els = document.querySelectorAll('.class')

let observer = lozad()
observer.observe()

observer = lozad('.class')

// $ExpectError
observer = lozad(null)
// $ExpectError
observer = lozad(3)
// $ExpectError
observer = lozad(false)

if(el) {
	observer = lozad(el)
}
else {
	// $ExpectError
	observer = lozad(el)
}

observer = lozad(els)

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

observer = lozad('.class', {
	load: (el) => {
		
	},
})

observer = lozad('.class', {
	loaded: (el) => {

	},
})

if(el) {
	observer.triggerLoad(el)
	observer.observer.unobserve(el)
}
else {
	// $ExpectError
	observer.triggerLoad(el)
	// $ExpectError
	observer.observer.unobserve(el)
}