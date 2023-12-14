import * as React from 'react';
import { describe, test } from 'flow-typed-test';
import { useQuery, QueryClientProvider, useMutation } from '@tanstack/react-query';

describe('react-query', ()=> {
  test('UseQueryOptions', () => {
    // Correct usage
    const { isLoading, isSuccess, data } = useQuery({
      queryKey: ['example'],
      queryFn: async () => {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
      },
    });

    (isLoading: boolean);
    (isSuccess: boolean);

    // Incorrect usage
    useQuery({
      // $FlowExpectedError[incompatible-call]
      queryKey: 123, // Error: Array<string>
      queryFn: () => {
        // $FlowExpectedError[incompatible-call]
        return 'not a promise'; // Error: Promise is required
      },
    });
  });

  test('UseMutationOptions', () => {
    // Correct usage
    const {isLoading, isSuccess } = useMutation({
      mutationKey: ['example'],
      mutationFn: async () => {
        const response = await fetch('https://api.example.com/mutate');
        const data = await response.json();
        return data;
      },
      onSuccess: async (data, variables) => await console.log(data, variables),
      onError: async (error) => await console.error(error),
      onSettled: async (data, error, variables) => await console.log(data, error, variables),
      onMutate: async () => await console.log('onMutate callback'),
    });

    (isLoading: boolean);
    (isSuccess: boolean);

    // Incorrect usage
    useMutation({
      mutationKey: 123, // Error: Expected Array<string>
      mutationFn: () => {
        // $FlowExpectedError[incompatible-call]
        return 'not a promise'; // Error: Promise is required
      },
      onSuccess: () => {
        // $FlowExpectedError[incompatible-call]
        return 'not a promise'; // Error: Promise is required
      },
      onError: () => {
        // $FlowExpectedError[incompatible-call]
        return 'not a promise'; // Error: Promise is required
      },
      onSettled: () => {
        // $FlowExpectedError[incompatible-call]
        return 'not a promise'; // Error: Promise is required
      },
      onMutate: () => {
        // $FlowExpectedError[incompatible-call]
        return 'not a promise'; // Error: Promise is required
      },
    });
  });

  test('QueryClientProvider', () => {
    // Correct usage, but not as string. Need to import QueryClient from @tanstack/react-query
    const queryClient = 'new QueryClient()';
    <QueryClientProvider client={queryClient}>{/* Your component */}</QueryClientProvider>;
  });

})
