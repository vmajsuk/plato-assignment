import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const Providers: React.FC = ({ children }) => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </React.StrictMode>
);
