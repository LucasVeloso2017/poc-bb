import { BrowserRouter, Routes, Route } from "react-router";
import { SignIn }  from "./pages/SignIn";
import { IntegrationPage } from "./pages/IntegrationPage";
import PagesLayout from "./layout/PagesLayout";
import Main from "./pages/Main";
import Fullscreen from "./pages/Fullscreen";
import LoginLayout from "./layout/LoginLayout";
// import { Container } from './styles';

const AppRoutes = () => {
  return(
   <BrowserRouter>
    <Routes>
      <Route element={<LoginLayout/>}>
        <Route path="/" element={<SignIn />} />
        <Route path="/integrationpage" element={<IntegrationPage />} />
      </Route>

      <Route element={<PagesLayout />}>
        <Route path="/main" element={<Main />} />
        <Route path="/fullscreen" element={<Fullscreen />} />
      </Route>
    </Routes>


   </BrowserRouter>
  );
}

export default AppRoutes;