import { Router } from "lucide-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  return (
    <QueryClientProvider client={QueryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
