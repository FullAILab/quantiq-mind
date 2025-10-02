import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Team from "./pages/Team";
import SolutionB2B from "./pages/SolutionB2B";
import ESG from "./pages/ESG";
import Dashboard from "./pages/Dashboard";
import Roadmap from "./pages/Roadmap";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produit" element={<Product />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/solution-b2b" element={<SolutionB2B />} />
            <Route path="/esg" element={<ESG />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
