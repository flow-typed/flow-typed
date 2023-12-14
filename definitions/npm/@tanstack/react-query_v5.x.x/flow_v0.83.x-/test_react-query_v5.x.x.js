import { describe, test } from 'flow-typed-test';
import { useQuery } from '@tanstack/react-query';

describe('react-query', ()=> {
  test('UseQueryOptions', () => {
    // Correct usage
    useQuery({
      queryKey: ['example'],
      queryFn: async () => {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
      },
    });

    // Incorrect usage (expect Flow to catch the error)
    useQuery({
      // $FlowExpectedError[incompatible-call]
      queryKey: 123, // Error: Expected string | Array<string>
      queryFn: async () => {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
      },
    });
  });
})
