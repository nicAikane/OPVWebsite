import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PrideModeProvider } from "@/contexts/PrideModeContext";
import OPVHome from "@/pages/OPVHome";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={OPVHome} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PrideModeProvider>
          <Toaster />
          <Router />
        </PrideModeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
