import { BrowserRouter, Routes, Route } from "react-router";
import { SignIn }  from "./pages/SignIn";
import PagesLayout from "./layout/PagesLayout";
import Fullscreen from "./pages/Fullscreen";
import LoginLayout from "./layout/LoginLayout";
import AllIntegrations from "./pages/Integrations/All";
import IntegrationsDashboard from "./pages/Integrations/Dashboard";
import IntegrationsDetail from "./pages/Integrations/Detail";
import IdentityDashboard from "./pages/Identity/Dashboard";
import IdentityNewUser from "./pages/Identity/New";
import DataDashboard from "./pages/Data/Dashboard";
// import { Container } from './styles';

const AppRoutes = () => {
  return(
   <BrowserRouter>
    <Routes>
      <Route element={<LoginLayout/>}>
        <Route path="/" index element={<SignIn />} />
      </Route>

      <Route element={<PagesLayout />}>
        <Route path="/fullscreen" element={<Fullscreen />} />
      </Route>
    
      <Route path="/integrations" element={<PagesLayout />}>
        <Route path="/integrations" index element={<IntegrationsDashboard />} />
        <Route path="/integrations/all" element={<AllIntegrations />} />
        <Route path="/integrations/detail/:id" element={<IntegrationsDetail />} />
      </Route>

      <Route path="/identity" element={<PagesLayout />}>
        <Route path="/identity" index element={<IdentityDashboard />} />
        <Route path="/identity/user/new" index element={<IdentityNewUser />} />
      </Route>

      <Route path="/data" element={<PagesLayout />}>
        <Route path="/data" index element={<DataDashboard />} />
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default AppRoutes;