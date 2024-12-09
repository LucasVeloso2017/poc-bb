import { BrowserRouter, Routes, Route } from "react-router";
import { SignIn }  from "./pages/SignIn";
import PagesLayout from "./layout/PagesLayout";
import Fullscreen from "./pages/Fullscreen";
import LoginLayout from "./layout/LoginLayout";
import AllIntegrations from "./pages/Integrations/All";
import IntegrationsDashboard from "./pages/Integrations/Dashboard";
import IntegrationsDetail from "./pages/Integrations/Detail";
// import { Container } from './styles';

const AppRoutes = () => {
  return(
   <BrowserRouter>
    <Routes>
      <Route element={<LoginLayout/>}>
        <Route path="/" index element={<SignIn />} />
      </Route>
    
      <Route path="/integrations" element={<PagesLayout />}>
        <Route path="/integrations" index element={<IntegrationsDashboard />} />
        <Route path="/integrations/fullscreen" element={<Fullscreen />} />
        <Route path="/integrations/all" element={<AllIntegrations />} />
        <Route path="/integrations/detail/:id" element={<IntegrationsDetail />} />
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default AppRoutes;