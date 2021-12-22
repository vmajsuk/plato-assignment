interface QueryResult<Response> {
  isLoading: boolean;
  error: unknown;
  data: Response | undefined;
}
