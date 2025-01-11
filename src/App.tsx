import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PreschoolNewsletter from "./pages/PreschoolNewsletter";
import YearbookCatalog from "./pages/YearbookCatalog";
import SportsHighlights from "./pages/SportsHighlights";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/preschool-newsletter" element={<PreschoolNewsletter />} />
          <Route path="/yearbook-catalog" element={<YearbookCatalog />} />
          <Route path="/sports-highlights" element={<SportsHighlights />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;