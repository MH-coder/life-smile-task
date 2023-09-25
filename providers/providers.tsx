"use client";
// React Imports
import { PropsWithChildren, useState } from "react";

// Third-Party Imports
import { QueryClient, QueryClientProvider } from "react-query";

export default function Providers({ children }: PropsWithChildren) {
  // Ensuring data is not shared between different users and requests,
  // while still only creating the QueryClient once per component lifecycle.
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
