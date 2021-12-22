import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { createTheme } from "~/styles";

// if we want to support SSR, these should be created inside
// component using useMemo
const queryClient = new QueryClient();
const theme = createTheme();

export const Providers: React.FC = ({ children }) => (
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
