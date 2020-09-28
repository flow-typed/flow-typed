import preposisjon from 'preposisjon'

preposisjon('Voss')

// $FlowExpectedError
preposisjon()
// $FlowExpectedError
preposisjon(2)
// $FlowExpectedError
preposisjon('voss', 'bergen')
