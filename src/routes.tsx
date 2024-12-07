import { BrowserRouter, Routes, Route } from "react-router";
import { SignIn }  from "./pages/SignIn";
import PagesLayout from "./layout/PagesLayout";
import Fullscreen from "./pages/Fullscreen";
import LoginLayout from "./layout/LoginLayout";
import AllIntegrations from "./pages/Integrations/All";
import IntegrationsDashboard from "./pages/Integrations/Dashboard";

const AppRoutes = () => {
  return(
   <BrowserRouter>
    <Routes>
      <Route element={<LoginLayout/>}>
        <Route path="/" index element={<SignIn />} />
      </Route>

      <Route element={<PagesLayout />}>
      </Route>

      <Route path="/integrations" element={<PagesLayout />}>
        <Route path="/integrations" index element={<IntegrationsDashboard />} />
        <Route path="/integrations/fullscreen" element={<Fullscreen />} />
        <Route path="/integrations/all" element={<AllIntegrations />} />
      </Route>

    </Routes>
   </BrowserRouter>
  );
}

export default AppRoutes;