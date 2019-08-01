import preposisjon from 'preposisjon'

preposisjon('Voss')

// $ExpectError
preposisjon()
// $ExpectError
preposisjon(2)
// $ExpectError
preposisjon('voss', 'bergen')
