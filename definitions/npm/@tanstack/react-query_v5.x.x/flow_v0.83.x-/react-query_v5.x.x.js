declare module "react-query" {
  declare export type UseQueryOptions = {
    queryKey:  string | Array<string>,
    queryFn: () => Promise<any>,
  }

  declare export type UseMutationOptions = {
    mutationKey: string | Array<string>,
    mutationFn: () => Promise<any>,
    onSuccess?: () => Promise<any>,
    onError?: () => Promise<any>,
    onSettled?: () => Promise<any>,,
    onMutate?: () => Promise<any>,
  }

  declare export type QueryClientProvider = {
    client: QueryClient,
    children?: React.Node
  }
}
