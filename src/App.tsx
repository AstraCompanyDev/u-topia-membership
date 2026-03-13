import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { DemoProvider } from "./contexts/DemoContext";
import Layout from "./components/layout";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import Members from "./pages/Members";
import Files from "./pages/Files";
import Settings from "./pages/Settings";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Onboarding from "./pages/Onboarding";
import NotFound from "./pages/NotFound";
import Upgrade from "./pages/Upgrade";
import About from "./pages/About";
import SearchPage from "./pages/Search";
import Academy from "./pages/Academy";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="app-theme">
      <DemoProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
            <Route path="/" element={<Layout><Dashboard /></Layout>} />
            <Route path="/messages" element={<ProtectedRoute><Layout><Messages /></Layout></ProtectedRoute>} />
            <Route path="/messages/channel/:channelName" element={<ProtectedRoute><Layout><Messages /></Layout></ProtectedRoute>} />
            <Route path="/members" element={<ProtectedRoute><Layout><Members /></Layout></ProtectedRoute>} />
            <Route path="/files" element={<ProtectedRoute><Layout><Files /></Layout></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><Layout><About /></Layout></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><Layout><Settings /></Layout></ProtectedRoute>} />
            <Route path="/contact" element={<ProtectedRoute><Layout><Contact /></Layout></ProtectedRoute>} />
            <Route path="/upgrade" element={<ProtectedRoute><Layout><Upgrade /></Layout></ProtectedRoute>} />
            <Route path="/search" element={<ProtectedRoute><Layout><SearchPage /></Layout></ProtectedRoute>} />
            <Route path="/academy" element={<ProtectedRoute><Layout><Academy /></Layout></ProtectedRoute>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </TooltipProvider>
      </DemoProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
