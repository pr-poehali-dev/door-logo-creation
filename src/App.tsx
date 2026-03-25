
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import LandingLight from "./pages/LandingLight";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function LandingWithTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  return theme === "dark"
    ? <Landing onSwitchTheme={() => setTheme("light")} />
    : <LandingLight onSwitchTheme={() => setTheme("dark")} />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingWithTheme />} />
          <Route path="/brandbook" element={<Index />} />
          <Route path="/light" element={<LandingLight />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;